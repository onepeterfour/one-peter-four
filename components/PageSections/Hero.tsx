import { urlForImage } from '@/sanity/lib/image'
import { HeroImageSectionSchema } from '@/sanity/schemas/objects/pageSections/heroImageSection'
import Image from 'next/image'

export const HeroImageSection = ({
  heading,
  image,
  tagline
}: Omit<HeroImageSectionSchema, 'isEnabled'>) => {
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
