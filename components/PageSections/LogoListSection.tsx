import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { urlForImage } from '@/sanity/lib/image'
import { LogoListSectionSchema } from '@/sanity/schemas/objects/pageSections/logoListSection'

import Image from 'next/image'
import { Border } from '../Border'

export const LogoListSection = ({
  clientList,
  title,
  variant
}: Omit<LogoListSectionSchema, 'isEnabled'>) => {
  return variant === 'dark' ? (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <Container>
        <FadeIn className='flex items-center gap-x-8'>
          <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
            {title || 'Add title in Sanity'}
          </h2>
          <div className='h-px flex-auto bg-neutral-800' />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 place-items-center gap-x-8 gap-y-10 lg:grid-cols-4'
          >
            {clientList &&
              clientList.map((client) => {
                return client?.logo ? (
                  <li key={client?._id}>
                    <FadeIn>
                      <Image
                        className='rounded-lg bg-white'
                        src={urlForImage(client?.logo)}
                        alt={client?.logo?.alt}
                        unoptimized
                        width={100}
                        height={50}
                      />
                    </FadeIn>
                  </li>
                ) : null
              })}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  ) : (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>
          {title || 'Add title in Sanity'}
        </h2>
      </FadeIn>
      <FadeInStagger className='mt-10' faster>
        <Border as={FadeIn} />
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4'
        >
          {clientList?.map((client) => (
            <li key={client?._id} className='group'>
              <FadeIn className='overflow-hidden'>
                <Border className='pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px'>
                  <Image
                    src={urlForImage(client?.logo)}
                    alt={client?.logo?.alt}
                    unoptimized
                    width={50}
                    height={50}
                  />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}
