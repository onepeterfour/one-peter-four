import { Container } from '@/components/Container'
import { PageSections } from '@/components/PageSections'
import { ContactDetails } from '@/components/pageSpecific/contact/ContactDetails'
import { ContactForm } from '@/components/pageSpecific/contact/ContactForm'
import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { PageSectionPage } from '@/types'

export async function generateMetadata() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('contactPage')
  )
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Contact() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('contactPage')
  )

  return (
    <>
      <PageSections pageSections={initial?.data?.pageSections} />

      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
