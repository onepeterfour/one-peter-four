import { Clients } from '@/components/Clients'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { Partners } from '@/components/pageSpecific/partners/Partners'
import { Testimonial } from '@/components/pageSpecific/partners/Testimonial'
import { partners } from '@/mockedCMSData'
import logoMailSmirk from '@/public/images/clients/mail-smirk/logo-dark.svg'
import { client } from '@/sanity/lib/client'
import { PARTNERSPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// this would be the "our work page in the studio template"

// sanity query
const partnersPage =
  await client.fetch<SanityDocument<BasePage>>(PARTNERSPAGE_QUERY)

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${partnersPage?.title}`,
  description: partnersPage?.description
}

export default async function PartnersPage() {
  // const partnersPage =
  //   await client.fetch<SanityDocument<BasePage>>(PARTNERSPAGE_QUERY)

  return (
    <>
      <PageIntro
        eyebrow='Our work'
        title='Proven solutions for real-world problems.'
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <Partners partners={partners} />
      <Testimonial
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
      >
        We approached <em>Studio</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial>
      <Clients />
      <ContactSection />
    </>
  )
}
