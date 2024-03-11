import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { dataset, projectId } from '@/sanity/env'
import { ClientsType } from '@/types'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

const builder = imageUrlBuilder({ projectId, dataset })

type ClientsProps = ClientsType & {}
export const Clients = ({ clientsList, title }: ClientsProps) => {
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
            {clientsList &&
              clientsList.map((client) => {
                return client?.logo ? (
                  <li key={client?._key}>
                    <FadeIn>
                      <Image
                        className='rounded-lg bg-white'
                        src={builder.image(client?.logo).url()}
                        alt={client?.altText}
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
