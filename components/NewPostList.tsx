import type { Post } from 'lib/sanity.queries'
import NewPostTile from './NewPostTile'
import Script from 'next/script'

export function NewPostList({ posts }: { posts: Post[] }) {
  return (
    <section className="flex w-full flex-col items-start gap-8 px-6 md:px-0">
      {posts.map((post) => (
        <NewPostTile
          key={post._id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          veracity={post.veracity}
        />
      ))}
    </section>
  )
}
