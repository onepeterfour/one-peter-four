import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { FooterNavigationDocument } from '@/sanity/schemas/documents/settings/footerNavigation'
import { ExternalLink, FooterInternalLink } from '@/types'
import { ExternalLink as External } from './ExternalLink'

const NavigationItem = ({
  data
}: {
  data: FooterInternalLink | ExternalLink
}) => {
  return (
    <li className='mt-4'>
      {data._type === 'internalLink' ? (
        <Link
          href={data.path.current}
          className='transition hover:text-neutral-950'
        >
          {data.label}
          {data.hasArrow && (
            <>
              <span aria-hidden='true'> </span>
              <span aria-hidden='true'>&rarr;</span>
            </>
          )}
        </Link>
      ) : (
        <External href={data.url} className='transition hover:text-neutral-950'>
          {data.label}
        </External>
      )}
    </li>
  )
}

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
                  <NavigationItem
                    key={navigationLink._key}
                    data={navigationLink}
                  />
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
