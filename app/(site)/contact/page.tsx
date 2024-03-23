import { Container } from '@/components/Container'
import { PageSections } from '@/components/PageSections'
import { ContactDetails } from '@/components/pageSpecific/contact/ContactDetails'
import { ContactForm } from '@/components/pageSpecific/contact/ContactForm'
import { fetchContactPage } from '@/sanity/lib/queries'
import { Metadata } from 'next'

// sanity page query
const contactPage = await fetchContactPage()

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${contactPage?.metaData?.title}`,
  description: contactPage?.metaData?.description
}

export default async function Contact() {
  const contactPage = await fetchContactPage()

  console.log({ contactPage })

  return (
    <>
      <PageSections pageSections={contactPage?.pageSections} />

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
