import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import {
  House,
  TrendUp,
  Receipt,
  Check,
  Warning,
  MagnifyingGlass,
} from '@phosphor-icons/react'
import Link from 'next/link'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { posts, settings, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <main className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 md:gap-[4.5rem]">
      <div className="flex items-center justify-between px-6 md:px-0">
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
      <div className="flex flex-col gap-8 text-xl md:flex-row md:gap-16">
        <nav className="flex snap-x items-start gap-4 overflow-scroll px-6 scrollbar-hide md:sticky md:top-0 md:flex-col md:px-0">
          <Link
            href="/"
            className="flex snap-center flex-row items-center gap-8 rounded bg-brand p-4"
          >
            <House size={32} color="white" weight="fill" />
            <span className="font-bold text-white">Últimas</span>
          </Link>
          <Link
            href="/"
            className="flex snap-center flex-row items-center gap-8 rounded bg-brand-10 p-4 opacity-80 transition-all duration-150 hover:bg-brand-10 md:bg-transparent"
          >
            <TrendUp size={32} color="black" weight="regular" />
            <span className="font-medium text-black">Bombando</span>
          </Link>
          <Link
            href="/"
            className="flex snap-center flex-row items-center gap-8 rounded bg-brand-10 p-4 opacity-80 transition-all duration-150 hover:bg-brand-10 md:bg-transparent"
          >
            <Receipt size={32} color="black" weight="regular" />
            <span className="font-medium text-black">Denunciar</span>
          </Link>
        </nav>
        <div className="flex flex-col items-start gap-10 px-6 md:px-0">
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
          <div className="flex flex-col items-start gap-6 rounded md:flex-row md:gap-8">
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
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
