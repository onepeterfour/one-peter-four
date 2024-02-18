import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { client } from '@/sanity/lib/client'
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

const homepage = await client.fetch<SanityDocument<BasePage>>(HOMEPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${homepage?.title}`,
  description: homepage?.description
}

export default async function Home() {
  // const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY)
  // const homePage = await client.fetch<SanityDocument<BasePage>>(HOMEPAGE_QUERY)
  return (
    <>
      <Container className='mt-24 sm:mt-32 md:mt-56'>
        <FadeIn className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
            pharetra sem. Donec erat ipsum, rutrum et nisl a, vulputate aliquet
            mauris. Praesent lorem erat, euismod ac risus ut, dapibus elementum
            ipsum. Nunc nec sodales eros, id accumsan purus.
          </p>
        </FadeIn>
      </Container>
    </>
  )
}
