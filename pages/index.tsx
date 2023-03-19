import { getAllPosts } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { NewHeader } from 'components/NewHeader'
import { NewPostList } from 'components/NewPostList'
import { NewNavigation } from 'components/NewNavigation'

export default function Page({ posts }: { posts: Post[] }) {
  return (
    // <main className="flex max-w-6xl flex-col gap-8 md:gap-[4.5rem]">
    <>
      <NewHeader />
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 text-xl md:mt-[4.5rem] md:flex-row md:gap-16">
        <NewNavigation />
        <NewPostList posts={posts} />

        {/* <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="something"
              className="h-[240px] w-full rounded object-cover md:h-[164px] md:w-[270px]"
            />
            <div className="flex max-w-[35rem] flex-col items-start gap-6">
              <h1 className="text-2xl font-medium leading-8">
                Governo dos EUA pede mais documentos ao Brasil para decidir
                sobre extradição de Allan do Santos
              </h1>
              <div className="flex items-center gap-2 rounded bg-brand p-2">
                <Check size={24} color="white" />
                <p className="text-base font-medium text-white">FATO</p>
              </div>
              <small className="text-sm opacity-60">Há 13 horas atrás</small>
            </div>
          </div> */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
