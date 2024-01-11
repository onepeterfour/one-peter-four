import { client } from '@/sanity/lib/client'
import { SERVICESPAGE_QUERY } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

const servicesPage =
  await client.fetch<SanityDocument<BasePage>>(SERVICESPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${servicesPage?.title}`,
  description: servicesPage?.description
}

export default async function Services() {
  const servicesPage =
    await client.fetch<SanityDocument<BasePage>>(SERVICESPAGE_QUERY)

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {servicesPage?.heading}
        </h1>
      </div>
    </main>
  )
}
