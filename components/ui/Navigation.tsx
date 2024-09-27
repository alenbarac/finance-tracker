'use client'

import { useMedia } from 'react-use'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

import NavButton from './NavButton'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/compat/router'
import { Button } from './button'
import { Menu } from 'lucide-react'
const routes = [
  {
    href: '/',
    label: 'Overview',
  },
  {
    href: '/transactions',
    label: 'Transactions',
  },
  {
    href: '/accounts',
    label: 'Accounts',
  },
  {
    href: '/categories',
    label: 'Categories',
  },

  {
    href: '/settings',
    label: 'Settings',
  },
]

const Navigation = () => {
  const isMobile = useMedia('(max-width: 1024px)', false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const onClick = (href: string) => {
    router?.push(href)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? 'secondary' : 'ghost'}
                onClick={() => onClick(route.href)}
                className="w-full justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  )
}
export default Navigation
