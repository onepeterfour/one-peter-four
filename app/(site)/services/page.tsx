import { ContactSection } from '@/components/ContactSection'
import { PageSections } from '@/components/PageSections'
import { Build } from '@/components/pageSpecific/services/Build'
import { Deliver } from '@/components/pageSpecific/services/Deliver'
import { Discover } from '@/components/pageSpecific/services/Discover'
import { Values } from '@/components/pageSpecific/services/Values'
import { client } from '@/sanity/lib/client'
import { SERVICESPAGE_QUERY } from '@/sanity/lib/queries'
import type { ServicesPageQueryResult } from '@/types/sanity/queries'
import { Metadata } from 'next'

// this would be the our process page in the template
const servicesPage =
  await client.fetch<ServicesPageQueryResult>(SERVICESPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${servicesPage?.metaData?.title}`,
  description: servicesPage?.metaData?.description
}

export default async function Services() {
  const servicesPage =
    await client.fetch<ServicesPageQueryResult>(SERVICESPAGE_QUERY)
  console.log({ servicesPage })

  return (
    <>
      <PageSections pageSections={servicesPage?.pageSections} />
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
