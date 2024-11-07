import { FadeIn } from '@/components/FadeIn'
import { urlForImage } from '@/sanity/lib/image'
import type { CopyPageSectionSchema } from '@/sanity/schemas/objects/pageSections/copyPageSection'
import { PortableText, PortableTextReactComponents } from 'next-sanity'
import Image from 'next/image'
import { Container } from '../Container'

const components: Partial<PortableTextReactComponents> = {
  types: {
    imageWithMetadata: ({ value }) => {
      return (
        <Image
          className='aspect-[16/10] w-full rounded-4xl object-cover'
          src={urlForImage(value)}
          alt={value?.alt}
          width={1000}
          height={1000}
          priority
        />
      )
    }
  }
}

export const CopyPageSection = ({
  body,
  _key
}: Omit<CopyPageSectionSchema, 'isEnabled'>) => {
  return (
    <Container as='div' className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn className='prose mx-auto' key={_key}>
        <div className='mt-24 sm:mt-32 lg:mt-40'>
          <PortableText value={body} components={components} />
        </div>
      </FadeIn>
    </Container>
  )
}
