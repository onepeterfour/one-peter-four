import { fetchContactPage } from '@/sanity/queries'
import { Metadata } from 'next'

const contactPage = await fetchContactPage()

export const metadata: Metadata = {
  title: `1P4: ${contactPage?.result?.[0]?.title}`,
  description: contactPage?.result?.[0]?.description
}

export default async function Contact() {
  const contactPage = await fetchContactPage()

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {contactPage?.result?.[0]?.heading}
        </h1>
      </div>
    </main>
  )
}
