import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageSections } from '@/components/PageSections'
import { StatList, StatListItem } from '@/components/StatList'
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
      <Container className='mt-16'>
        <StatList>
          <StatListItem value='35' label='Underpaid employees' />
          <StatListItem value='52' label='Placated clients' />
          <StatListItem value='$25M' label='Invoices billed' />
        </StatList>
      </Container>
      <Culture />
      <Team />
      <ContactSection />
    </>
  )
}
