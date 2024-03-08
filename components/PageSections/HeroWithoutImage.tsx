import { FadeIn } from '@/components/FadeIn'
import { HeroWithoutImageType } from '@/types'
import { Container } from '../Container'

type HeroWithoutImageProps = HeroWithoutImageType & {}

export const HeroWithoutImage = ({
  heading,
  subheading: subHeading,
  _key
}: HeroWithoutImageProps) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn className='max-w-3xl' key={_key}>
        <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
          {heading || 'add a heading within Sanity CMS'}
        </h1>
        <p className='mt-6 text-xl text-neutral-600'>
          {subHeading || 'add a subheading within Sanity CMS'}
        </p>
      </FadeIn>
    </Container>
  )
}
