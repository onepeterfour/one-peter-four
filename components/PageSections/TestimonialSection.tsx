import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { urlForImage } from '@/sanity/lib/image'
import { TestimonialSectionSchema } from '@/sanity/schemas/objects/pageSections/testimonialSection'

import Image from 'next/image'

export function TestimonialSection({
  quote,
  client
}: Omit<TestimonialSectionSchema, 'isEnabled'>) {
  return (
    <div className='relative isolate mt-24 bg-neutral-50 py-16 sm:mt-32 sm:py-28 md:py-32 lg:mt-40'>
      <GridPattern
        className='absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]'
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className='mx-auto max-w-4xl'>
            <blockquote className='relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {quote}
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <Image
                src={urlForImage(client.logo)}
                alt={client.logo?.alt}
                unoptimized
                width={150}
                height={100}
              />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
