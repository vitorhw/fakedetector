import type { Post } from 'lib/sanity.queries'
import NewPostTile from './NewPostTile'

export default function NewPostList({ posts }: { posts: Post[] }) {
  return (
    <section className="flex flex-col items-start gap-12 px-6 md:px-0">
      {posts.map((post) => (
        <NewPostTile
          key={post._id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </section>
  )
}
