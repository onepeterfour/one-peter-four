import { PageSections } from '@/components/PageSections'
import { client } from '@/sanity/lib/client'
import { TEAMPAGE_QUERY } from '@/sanity/lib/queries'
import { TeamPageQueryResult } from '@/types/sanity/queries'
import { Metadata } from 'next'

// sanity page query
const teamPage = await client.fetch<TeamPageQueryResult>(TEAMPAGE_QUERY)

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${teamPage?.metaData?.title}`,
  description: teamPage?.metaData?.description
}

export default async function TeamPage() {
  const teamPage = await client.fetch<TeamPageQueryResult>(TEAMPAGE_QUERY)
  console.log({ pageSections: teamPage?.pageSections })

  return (
    <>
      <PageSections pageSections={teamPage?.pageSections} />
    </>
  )
}
