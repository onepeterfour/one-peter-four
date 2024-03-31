import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { partners } from '@/mockedCMSData'
import logoMarkFamilyFund from '@/public/images/clients/family-fund/logomark-dark.svg'
import logoMarkPhobia from '@/public/images/clients/phobia/logomark-dark.svg'
import logoMarkUnseal from '@/public/images/clients/unseal/logomark-dark.svg'
// import { Partner, WithHrefMetadata } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const caseStudyIconDictionary: Record<string, any> = {
  FamilyFund: logoMarkFamilyFund,
  Unseal: logoMarkUnseal,
  Phobia: logoMarkPhobia
}

export const CaseStudyListSection = () => {
  return (
    <Container className='mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>
          Case studies
        </h2>
      </FadeIn>
      <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
        {partners.map((partner) => (
          <FadeIn key={partner.client}>
            <article>
              <Border className='grid grid-cols-3 gap-x-8 gap-y-8 pt-16'>
                <div className='col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block'>
                  <div className='sm:flex sm:items-center sm:gap-x-6 lg:block'>
                    <Image
                      src={caseStudyIconDictionary[partner.client]}
                      alt=''
                      className='h-16 w-16 flex-none'
                      unoptimized
                    />
                    <h3 className='mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8'>
                      {partner.client}
                    </h3>
                  </div>
                  <div className='mt-1 flex gap-x-4 sm:mt-0 lg:block'>
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {partner.service}
                    </p>
                    <p className='text-sm text-neutral-950 lg:mt-2'>
                      <time dateTime={partner.date}>
                        {formatDate(partner.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                  <p className='font-display text-4xl font-medium text-neutral-950'>
                    <Link href={partner.href}>{partner.title}</Link>
                  </p>
                  <div className='mt-6 space-y-6 text-base text-neutral-600'>
                    {partner.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className='mt-8 flex'>
                    <Button
                      href={partner.href}
                      aria-label={`Read case study: ${partner.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {partner.testimonial && (
                    <Blockquote
                      author={partner.testimonial.author}
                      className='mt-12'
                    >
                      {partner.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
