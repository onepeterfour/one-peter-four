import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <h1 className='mb-8'>
        <span className='block font-display text-base font-semibold text-neutral-950'>
          Not Found
        </span>
        <span className='sr-only'> - </span>
        <span className='mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl'>
          No case study exists by that title
        </span>
      </h1>
      <Button href='/'>Return Home</Button>
    </Container>
  )
}
