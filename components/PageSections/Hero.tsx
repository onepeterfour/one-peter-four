import { urlForImage } from '@/sanity/lib/image'
import type { SanityPageSectionHero } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'
import Image from 'next/image'

type HeroProps = SanityPageSectionHero & {}

export const Hero = ({ heading, image, tagline }: HeroProps) => {
  return (
    <div className='mt-24 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <div className='container'>
        <div className='flex items-center gap-8'>
          <div className='flex-auto'>
            <h1>{heading}</h1>
            <p>{tagline}</p>
          </div>
          <div className='w-1/2 overflow-hidden rounded-lg bg-white'>
            <Image
              className='rounded-lg bg-white'
              src={urlForImage(image)}
              alt={image?.alt}
              unoptimized
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
