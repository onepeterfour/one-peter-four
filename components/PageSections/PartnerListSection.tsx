import { urlForImage } from '@/sanity/lib/image'
import { PartnerListSectionSchema } from '@/sanity/schemas/objects/pageSections/partnerListSection'
import Image from 'next/image'
import Link from 'next/link'
import { Border } from '../Border'
import { Button } from '../Button'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { PortableText } from '../PortableText'

export const PartnerListSection = ({
  eyebrow,
  partnerList,
  _type
}: Omit<PartnerListSectionSchema, 'isEnabled'>) => {
  return (
    <Container id={_type} className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn>
        {eyebrow && (
          <h2 className='font-display text-2xl font-semibold text-neutral-950'>
            {eyebrow}
          </h2>
        )}
      </FadeIn>
      <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
        {partnerList.map((partner) => (
          <FadeIn key={partner?._id}>
            <article id={partner?.slug.current}>
              <Border className='grid grid-cols-3 gap-x-8 gap-y-8 pt-16'>
                <div className='col-span-full justify-center sm:flex sm:items-center sm:gap-x-8 lg:col-span-1 lg:block lg:justify-between'>
                  <div className='flex justify-center sm:items-center sm:gap-x-6 lg:block'>
                    <Image
                      src={urlForImage(partner?.logo)}
                      alt={partner?.logo?.alt}
                      className='w-1/2 flex-none lg:w-full'
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                </div>
                <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                  <p className='text-center font-display text-4xl font-medium text-neutral-950 lg:text-left'>
                    <Link href={partner.url}>{partner.name}</Link>
                  </p>
                  <div className='prose mt-6 space-y-6 text-neutral-600'>
                    <PortableText value={partner.body} />
                  </div>
                  <div className='mt-16 flex justify-center lg:justify-start'>
                    <Button
                      href={partner.url}
                      aria-label={`visit website for ${partner.name}`}
                    >
                      Visit site
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
