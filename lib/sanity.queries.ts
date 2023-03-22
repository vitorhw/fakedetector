import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "veracity": veracity->{veracity},
  myTags
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) [0...5] {
  ${postFields}
}`

export const indexQueryBombando = groq`
*[_type == "post" && "Bombando" in myTags[].label] | order(date desc, _updatedAt desc) [0...5] {
  ${postFields}
}`

export const indexQueryFromIndexBombando = groq`
*[_type == "post" && date < $lastDate && "Bombando" in myTags[].label] | order(date desc, _updatedAt desc) [0...5] {
  ${postFields}
}`

export const indexQueryFromIndex = groq`
*[_type == "post" && date < $lastDate] | order(date desc, _updatedAt desc) [0...5] {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Veracity {
    veracity?: string
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  veracity?: Veracity
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
