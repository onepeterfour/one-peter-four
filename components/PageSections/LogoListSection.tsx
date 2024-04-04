import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { urlForImage } from '@/sanity/lib/image'
import { LogoListSectionSchema } from '@/sanity/schemas/objects/pageSections/logoListSection'

import Image from 'next/image'

export const LogoListSection = ({
  clientList,
  title
}: Omit<LogoListSectionSchema, 'isEnabled'>) => {
  return (
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
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'
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
                        width={50}
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
  )
}