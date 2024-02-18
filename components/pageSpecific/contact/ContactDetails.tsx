import { Border } from '@/components/Border'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import Link from 'next/link'

export function ContactDetails() {
  return (
    <FadeIn>
      <h2 className='font-display text-base font-bold text-neutral-950'>
        Our office
      </h2>
      <p className='mt-6 text-base text-neutral-600'>
        Prefer doing things in person? We would love to meet you. Our doors are
        always open.
      </p>

      <Offices className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-bold text-neutral-950'>
          Email us
        </h2>
        <dl className='mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2'>
          {[
            ['Careers', 'careers@studioagency.com'],
            ['Press', 'press@studioagency.com']
          ].map(([label, email]) => (
            <div key={email}>
              <dt className='font-semibold text-neutral-950'>{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className='text-neutral-600 hover:text-neutral-950'
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className='mt-16 pt-16'>
        <h2 className='font-display text-base font-bold text-neutral-950'>
          Follow us
        </h2>
        <SocialMedia className='mt-6' />
      </Border>
    </FadeIn>
  )
}
