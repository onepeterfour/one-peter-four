import { client } from '@/sanity/lib/client'
import { RESEARCHPAGE_QUERY } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

const researchPage =
  await client.fetch<SanityDocument<BasePage>>(RESEARCHPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${researchPage?.title}`,
  description: researchPage?.description
}

export default async function Research() {
  const researchPage =
    await client.fetch<SanityDocument<BasePage>>(RESEARCHPAGE_QUERY)
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {researchPage?.heading}
        </h1>
      </div>
    </main>
  )
}
