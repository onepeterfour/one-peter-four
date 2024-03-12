import { ContactSection } from '@/components/ContactSection'
import { PageSections } from '@/components/PageSections'
import { Partners } from '@/components/pageSpecific/partners/Partners'
import { Testimonial } from '@/components/pageSpecific/partners/Testimonial'
import { partners } from '@/mockedCMSData'
import logoMailSmirk from '@/public/images/clients/mail-smirk/logo-dark.svg'
import { client } from '@/sanity/lib/client'
import { PARTNERSPAGE_QUERY } from '@/sanity/lib/queries'
import type { PartnersPageQueryResult } from '@/types/sanity/queries'
import { Metadata } from 'next'

// this would be the "our work page in the studio template"

// sanity query
const partnersPage =
  await client.fetch<PartnersPageQueryResult>(PARTNERSPAGE_QUERY)

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${partnersPage?.metaData?.title}`,
  description: partnersPage?.metaData?.description
}

export default async function PartnersPage() {
  const partnersPage =
    await client.fetch<PartnersPageQueryResult>(PARTNERSPAGE_QUERY)
  console.log({ partnersPage })

  return (
    <>
      <PageSections pageSections={partnersPage?.pageSections} />
      <Partners partners={partners} />
      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
      >
        We approached <em>Studio</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial>
      <ContactSection />
    </>
  )
}
