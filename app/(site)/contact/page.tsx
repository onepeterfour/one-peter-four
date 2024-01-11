import { client } from '@/sanity/lib/client'
import { CONTACTPAGE_QUERY } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

const contactPage =
  await client.fetch<SanityDocument<BasePage>>(CONTACTPAGE_QUERY)
export const metadata: Metadata = {
  title: `1P4: ${contactPage?.title}`,
  description: contactPage?.description
}

export default async function Contact() {
  const contactPage =
    await client.fetch<SanityDocument<BasePage>>(CONTACTPAGE_QUERY)

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {contactPage?.heading}
        </h1>
      </div>
    </main>
  )
}
