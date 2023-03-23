import {
  ArrowLeft,
  CalendarBlank,
  Check,
  Dot,
  Eye,
  MagnifyingGlass,
  SealCheck,
  Warning,
} from '@phosphor-icons/react'
import { PortableText } from '@portabletext/react'
import { PreviewSuspense } from '@sanity/preview-kit'
import PostPage from 'components/PostPage'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { lazy } from 'react'
import styles from '../../components/PostBody.module.css'
import { NewHeader } from 'components/NewHeader'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import { intlFormatDistance, parseISO } from 'date-fns'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'
import { NewPostList } from 'components/NewPostList'
import PostPageHead from 'components/PostPageHead'

const PreviewPostPage = lazy(() => import('components/PreviewPostPage'))

interface PageProps {
  post: Post
  morePosts: Post[]
  settings?: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, post, morePosts, preview, token } = props
  const dateVar = parseISO(post.date)
  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PostPage
            loading
            preview
            post={post}
            morePosts={morePosts}
            settings={settings}
          />
        }
      >
        <PreviewPostPage
          token={token}
          post={post}
          morePosts={morePosts}
          settings={settings}
        />
      </PreviewSuspense>
    )
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />
      <NewHeader />
      <main className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 px-6 md:mt-[4.5rem] md:gap-[4.5rem] md:px-0">
        <div>
          <Link href="/" className="flex gap-6 text-xl font-medium">
            <ArrowLeft size={24} color="black" />
            <p>Voltar</p>
          </Link>
        </div>
        <Image
          className="h-[20rem] w-full object-cover shadow-sm"
          width={2000}
          height={1000}
          alt={`Cover Image for ${post.title}`}
          src={urlForImage(post.coverImage).height(1000).width(2000).url()}
          sizes="100vw"
          priority
        />
        <main className="mx-auto flex max-w-2xl flex-col items-start gap-8">
          <h1 className="text-4xl font-medium">{post.title}</h1>
          <div className="flex w-full items-center gap-8">
            <div
              className={`flex items-center gap-2 rounded p-2 ${
                post.veracity?.veracity == 'FAKE'
                  ? 'bg-brand-orange'
                  : 'bg-brand'
              }`}
            >
              {post.veracity?.veracity == 'FAKE' ? (
                <Warning size={24} color="white" />
              ) : (
                <Check size={24} color="white" />
              )}
              <p className="text-base font-medium text-white">
                {post.veracity?.veracity}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <TwitterShareButton
                url={'https://fakedetector.vercel.app/posts/' + post.slug}
              >
                <TwitterIcon size={24} round />
              </TwitterShareButton>
              <WhatsappShareButton
                url={'https://fakedetector.vercel.app/posts/' + post.slug}
              >
                <WhatsappIcon size={24} round />
              </WhatsappShareButton>
              <FacebookShareButton
                url={'https://fakedetector.vercel.app/posts/' + post.slug}
              >
                <FacebookIcon size={24} round />
              </FacebookShareButton>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 opacity-60 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <CalendarBlank size={16} color="black" />
              <small className="font-regular text-sm">
                <time dateTime={post.date}>
                  {intlFormatDistance(new Date(dateVar), new Date(), {
                    locale: 'pt',
                  })}
                </time>
              </small>
            </div>
            <Dot className="hidden md:block" />
            <div className="flex items-center gap-2">
              <SealCheck size={16} color="black" />
              <small className="font-regular text-sm">
                verificado por {post.author?.name}
              </small>
            </div>
          </div>
          <div className={`${styles.portableText}`}>
            <PortableText value={post.content} />
          </div>
        </main>
        <div className="my-8 h-[1px] w-full bg-brand-10"></div>
        <div className="mx-auto mb-8 max-w-6xl">
          {morePosts?.length > 0 && <NewPostList posts={morePosts} />}
          <div className="animation-pulse my-8 mt-16 flex w-full items-center justify-around rounded bg-brand-10 p-8">
            <p>
              Ops... Você chegou ao fim!{' '}
              <span
                className="cursor-pointer text-brand no-underline hover:underline"
                onClick={scrollToTop}
              >
                Voltar ao topo.
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(),
    getPostAndMoreStories(params.slug, token),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}
