import {
  ArrowLeft,
  CalendarBlank,
  Check,
  Dot,
  Eye,
  MagnifyingGlass,
  SealCheck,
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

  return (
    <main className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 px-6 md:gap-[4.5rem] md:px-0">
      <div className="flex items-center justify-between ">
        <div className="flex items-center text-[2rem] font-bold md:text-[3rem]">
          {/* <spanirTrafficControl size={54} /> */}
          <span>fake</span>
          <span className="text-brand">detector</span>
        </div>
        <form className="relative hidden items-center md:flex">
          <MagnifyingGlass
            size={16}
            color="black"
            className="absolute left-0 ml-6 opacity-30"
          />

          <input
            type="search"
            className="block w-full rounded-2xl bg-brand-10 py-4 px-6 pl-16 text-sm text-gray-600 focus:border-brand focus:ring-brand"
            placeholder="Pesquisar notícias"
            required
          />
        </form>
        <button className="md:hidden">
          <MagnifyingGlass size={32} color="black" className="opacity-60" />
        </button>
      </div>
      <div>
        <Link href="/" className="flex gap-6 text-xl font-medium">
          <ArrowLeft size={24} color="black" />
          <p>Voltar</p>
        </Link>
      </div>
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="banner"
        className="h-[20rem] w-full object-cover shadow-lg"
      />
      <main className="mx-auto flex max-w-2xl flex-col items-start gap-8">
        <h1 className="text-4xl font-medium">
          Governo dos EUA pede mais documentos ao Brasil para decidir sobre
          extradição de Allan do Santos
        </h1>
        <div className="flex items-center gap-2 rounded bg-brand p-2">
          <Check size={24} color="white" />
          <p className="text-base font-medium text-white">FATO</p>
        </div>
        <div className="flex flex-col items-start gap-2 opacity-60 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <CalendarBlank size={16} color="black" />
            <small className="font-regular text-sm">Há 13 horas atrás</small>
          </div>
          <Dot className="hidden md:block" />
          <div className="flex items-center gap-2">
            <SealCheck size={16} color="black" />
            <small className="font-regular text-sm">
              Verificado por Anonimo
            </small>
          </div>
          <Dot className="hidden md:block" />
          <div className="flex items-center gap-2">
            <Eye size={16} color="black" />
            <small className="font-regular text-sm">13k+ leituras</small>
          </div>
        </div>
        <div className={`${styles.portableText}`}>
          <PortableText value={post.content} />
        </div>
      </main>
    </main>
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
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}
