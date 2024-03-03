import { ContactSection } from '@/components/ContactSection'
import { PageSections } from '@/components/PageSections'
import { Culture } from '@/components/pageSpecific/team/Culture'
import { Team } from '@/components/pageSpecific/team/Team'
import { client } from '@/sanity/lib/client'
import { TEAMPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// sanity page query
const teamPage = await client.fetch<SanityDocument<BasePage>>(TEAMPAGE_QUERY)

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${teamPage?.metaData?.title}`,
  description: teamPage?.metaData?.description
}

export default async function TeamPage() {
  const teamPage = await client.fetch<SanityDocument<BasePage>>(TEAMPAGE_QUERY)
  console.log({ pageIntro: teamPage?.pageSections })

  return (
    <>
      <PageSections pageSections={teamPage?.pageSections} />
      <Culture />
      <Team />
      <ContactSection />
    </>
  )
}
