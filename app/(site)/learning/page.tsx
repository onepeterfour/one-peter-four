import { client } from '@/sanity/lib/client'
import { LEARNINGPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

const partnersPage =
  await client.fetch<SanityDocument<BasePage>>(LEARNINGPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${partnersPage?.title}`,
  description: partnersPage?.description
}
export default async function Learning() {
  const partnersPage =
    await client.fetch<SanityDocument<BasePage>>(LEARNINGPAGE_QUERY)

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {partnersPage?.heading}
        </h1>
      </div>
    </main>
  )
}
