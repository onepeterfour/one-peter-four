import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { FooterNavigationDocument } from '@/sanity/schemas/documents/settings/footerNavigation'

function Navigation({ data }: { data: FooterNavigationDocument }) {
  return (
    <nav>
      <ul role='list' className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
        {data.navigationColumns.map((column) => (
          <li key={column._key}>
            <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
              {column.columnTitle}
            </div>
            <ul role='list' className='mt-4 text-sm text-neutral-600'>
              {column.navigationLinks.map((navigationLink) => {
                return (
                  <li key={navigationLink._key} className='mt-4'>
                    {navigationLink.path[0] === '/' ? (
                      <Link
                        href={navigationLink.path}
                        className='transition hover:text-neutral-950'
                      >
                        <>
                          {navigationLink.label}
                          {navigationLink.label === 'See all' && (
                            <>
                              <span aria-hidden='true'> </span>
                              <span aria-hidden='true'>&rarr;</span>
                            </>
                          )}
                        </>
                      </Link>
                    ) : (
                      <Link href={navigationLink.path} passHref legacyBehavior>
                        <a
                          aria-label={navigationLink.label}
                          className='transition hover:text-neutral-950'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {navigationLink.label}
                        </a>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer({ data }: { data: FooterNavigationDocument }) {
  return (
    <Container as='footer' className='mt-24 w-full sm:mt-32 lg:mt-40'>
      <FadeIn>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
          <Navigation data={data} />
          <div className='flex lg:justify-end'>
            <div>
              <h2 className='font-display text-base font-semibold'>
                Our office
              </h2>
              <Offices className='mt-4 grid grid-cols-1 gap-8 sm:grid-cols-1' />
            </div>
          </div>
        </div>
        <div className='mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12'>
          <Link href='/' aria-label='Home'>
            <Logo />
          </Link>
          <p className='text-sm text-neutral-700'>
            © One Peter Four {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
