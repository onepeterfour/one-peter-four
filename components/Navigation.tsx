import { Container } from '@/components/Container'
import { HeaderNavigationDocument } from '@/sanity/schemas/documents/settings/headerNavigation'
import Link from 'next/link'
import React from 'react'

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className='mt-px sm:bg-neutral-950'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2'>{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className='group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16'
    >
      {children}
      <span className='absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100' />
    </Link>
  )
}

export function Navigation({ data }: { data: HeaderNavigationDocument }) {
  return (
    <nav className='mt-px font-display text-5xl font-medium tracking-tight text-white'>
      {data &&
        data.rows.map((row) => {
          return (
            <NavigationRow key={row?._key}>
              {row?.columns.map((navigationLink) => (
                <NavigationItem
                  key={navigationLink?._key}
                  href={navigationLink?.path}
                >
                  {navigationLink?.label}
                </NavigationItem>
              ))}
            </NavigationRow>
          )
        })}
    </nav>
  )
}
