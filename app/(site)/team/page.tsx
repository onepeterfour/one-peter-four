import { PageSections } from '@/components/PageSections'
import { fetchTeamPage } from '@/sanity/lib/queries'
import { Metadata } from 'next'

// sanity page query
const teamPage = await fetchTeamPage()

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${teamPage?.metaData?.title}`,
  description: teamPage?.metaData?.description
}

export default async function TeamPage() {
  const teamPage = await fetchTeamPage()
  // console.log({ pageSections: teamPage?.pageSections })

  return (
    <>
      <PageSections pageSections={teamPage?.pageSections} />
    </>
  )
}
