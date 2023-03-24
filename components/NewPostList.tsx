import type { Post } from 'lib/sanity.queries'
import NewPostTile from './NewPostTile'
import Script from 'next/script'

export function NewPostList({ posts }: { posts: Post[] }) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8928398017937871"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <></>
      <section className="flex w-full flex-col items-start gap-8 px-6 md:px-0">
        <ins
          className="adsbygoogle block"
          data-ad-format="fluid"
          data-ad-layout-key="-ck-8t+8j+3a+65"
          data-ad-client="ca-pub-8928398017937871"
          data-ad-slot="7310719008"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
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
    </>
  )
}
