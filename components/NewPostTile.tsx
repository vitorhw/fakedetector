import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import { Check } from '@phosphor-icons/react'
import { format, parseISO } from 'date-fns'

export default function NewPostTile({
  title,
  coverImage,
  date,
  slug,
}: Omit<Post, '_id'>) {
  const dateVar = parseISO(date)

  return (
    <>
      <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
        <Image
          className="h-[240px] w-full rounded object-cover md:h-[164px] md:w-[270px]"
          width={2000}
          height={1000}
          alt={`Capa de ${title}`}
          src={urlForImage(coverImage).height(1000).width(2000).url()}
          sizes="100vw"
          priority={false}
        />
        <div className="flex max-w-[35rem] flex-col items-start gap-6">
          <Link
            href={`/posts/${slug}`}
            className="text-2xl font-medium leading-8"
          >
            {title}
          </Link>
          <div className="flex items-center gap-2 rounded bg-brand p-2">
            <Check size={24} color="white" />
            <p className="text-base font-medium text-white">FATO</p>
          </div>
          <small className="text-sm opacity-60">
            <time dateTime={date}>{format(dateVar, 'LLLL	d, yyyy')}</time>
          </small>
        </div>
      </div>
    </>
  )
}
