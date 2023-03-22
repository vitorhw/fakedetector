import { Post } from 'lib/sanity.queries'
import { NewHeader } from 'components/NewHeader'
import { NewNavigation } from 'components/NewNavigation'

export default function Page({ posts }: { posts: Post[] }) {
  return (
    <>
      <NewHeader />
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 text-xl md:mt-[4.5rem] md:flex-row md:gap-16">
        <NewNavigation />

        <p className="flex flex-grow justify-around bg-brand-10 p-8 text-center">
          Esta funcionalidade ainda está sendo desenvolvida!
        </p>
      </div>
    </>
  )
}
