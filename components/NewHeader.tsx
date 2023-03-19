import { MagnifyingGlass } from '@phosphor-icons/react'
import Link from 'next/link'

export function NewHeader() {
  return (
    <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between px-6 md:px-0">
      <Link
        href="/"
        className="flex items-center text-[2rem] font-bold md:text-[3rem]"
      >
        fake
        <span className="text-brand">detector</span>
      </Link>
      {/* <form className="relative hidden items-center md:flex">
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
        </button> */}
    </div>
  )
}
