import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { Build } from '@/components/pageSpecific/services/Build'
import { Deliver } from '@/components/pageSpecific/services/Deliver'
import { Discover } from '@/components/pageSpecific/services/Discover'
import { Values } from '@/components/pageSpecific/services/Values'
import { client } from '@/sanity/lib/client'
import { SERVICESPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// this would be the our process page in the template
const servicesPage =
  await client.fetch<SanityDocument<BasePage>>(SERVICESPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${servicesPage?.title}`,
  description: servicesPage?.description
}

export default async function Services() {
  // const servicesPage =
  //   await client.fetch<SanityDocument<BasePage>>(SERVICESPAGE_QUERY)

  return (
    <>
      <PageIntro eyebrow='Our process' title='How we work'>
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
        <Discover />
        <Build />
        <Deliver />
      </div>
      <Values />
      <ContactSection />
    </>
  )

  // return (
  //   <main className='flex flex-col items-center justify-center p-24'>
  //     <div className='text-center'>
  //       <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
  //         {servicesPage?.heading}
  //       </h1>
  //     </div>
  //   </main>
  // )
}
