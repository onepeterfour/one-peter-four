import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { Offices } from './Offices'

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'Our Team', href: '/team' },
      { title: 'Services', href: '/services' },
      { title: 'Learning', href: '/learning' },
      { title: 'Contact us', href: '/contact' }
    ]
  },
  {
    title: 'Partners',
    links: [
      { title: 'Partner 1', href: '/partners' },
      { title: 'Partner 2', href: '/partners' },
      { title: 'Partner 3', href: '/partners' },
      {
        title: (
          <>
            See all <span aria-hidden='true'>&rarr;</span>
          </>
        ),
        href: '/partners'
      }
    ]
  },
  {
    title: 'Connect',
    links: socialMediaProfiles
  }
]

function Navigation() {
  return (
    <nav>
      <ul role='list' className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
              {section.title}
            </div>
            <ul role='list' className='mt-4 text-sm text-neutral-600'>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className='mt-4'>
                  <Link
                    href={link.href}
                    className='transition hover:text-neutral-950'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as='footer' className='mt-24 w-full sm:mt-32 lg:mt-40'>
      <FadeIn>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
          <Navigation />
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
            <Logo className='h-8' fillOnHover />
          </Link>
          <p className='text-sm text-neutral-700'>
            © One Peter Four {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
