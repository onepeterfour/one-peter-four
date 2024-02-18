import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ContactDetails } from '@/components/pageSpecific/contact/ContactDetails'
import { ContactForm } from '@/components/pageSpecific/contact/ContactForm'
import { client } from '@/sanity/lib/client'
import { CONTACTPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// sanity page query
const contactPage =
  await client.fetch<SanityDocument<BasePage>>(CONTACTPAGE_QUERY)

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${contactPage?.title}`,
  description: contactPage?.description
}

export default async function Contact() {
  // const contactPage =
  //   await client.fetch<SanityDocument<BasePage>>(CONTACTPAGE_QUERY)

  return (
    <>
      <PageIntro eyebrow='Contact us' title='Let’s work together'>
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
