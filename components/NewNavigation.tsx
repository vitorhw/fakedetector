import { IconContext, House, TrendUp, Receipt } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function NewNavigation() {
  const router = useRouter()

  const menuItems = [
    {
      name: 'Últimas',
      href: '/',
      icon: <House />,
    },
    {
      name: 'Bombando',
      href: '/bombando',
      icon: <TrendUp />,
    },
    {
      name: 'Denunciar',
      href: '/denunciar',
      icon: <Receipt />,
    },
  ]

  return (
    <nav className="flex snap-x items-start gap-4 overflow-scroll px-6 scrollbar-hide md:flex-col md:px-0">
      {menuItems.map((item) => (
        <IconContext.Provider
          value={{
            size: 32,
            color: router.pathname == item.href ? 'white' : 'black',
            weight: router.pathname == item.href ? 'fill' : 'regular',
          }}
          key={item.name}
        >
          <Link
            href={item.href}
            className={`flex snap-center flex-row items-center gap-8 rounded  p-4 ${
              router.pathname == item.href
                ? 'bg-brand font-bold text-white'
                : 'bg-brand-10 opacity-80 hover:bg-brand-10 md:bg-transparent'
            } `}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        </IconContext.Provider>
      ))}
    </nav>
  )
}
