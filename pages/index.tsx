import {
  getAllPosts,
  getAllPostsFromIndex,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { NewHeader } from 'components/NewHeader'
import { NewPostList } from 'components/NewPostList'
import { NewNavigation } from 'components/NewNavigation'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Skeleton } from 'components/Skeleton'
import IndexPageHead from 'components/IndexPageHead'

interface PageProps {
  posts: Post[]
  settings: Settings
}

export default function Page(props: PageProps) {
  const { posts, settings } = props

  const [postList, setPostList] = useState(posts)
  const [lastDate, setlastDate] = useState(posts.slice(-1)[0].date)

  async function fetchNextPage() {
    const result = await getAllPostsFromIndex(lastDate)

    if (result.length === 0) {
      setlastDate(null)
    } else {
      setlastDate(result.slice(-1)[0].date)
      setPostList([...postList, ...result])
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <IndexPageHead settings={settings} />
      <NewHeader />
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 text-xl md:mt-[4.5rem] md:flex-row md:gap-16">
        <NewNavigation />
        <InfiniteScroll
          className="-translate-y-4 transform"
          dataLength={postList.length}
          next={fetchNextPage}
          hasMore={lastDate !== null}
          loader={<Skeleton />}
          endMessage={
            <div className="animation-pulse my-8 flex w-full items-center justify-around rounded bg-brand-10 p-8">
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
          }
        >
          <NewPostList posts={postList} />
        </InfiniteScroll>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    props: {
      posts,
      settings,
    },
    revalidate: 10,
  }
}
