import { fetchPageSectionPage } from '@/app/api/fetchPageSectionPage'
import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'

const teamPage = await fetchPageSectionPage('teamPage')

// nextJS api
export const metadata: Metadata = {
  title: `${teamPage?.metaData?.title} - 1P4`,
  description: teamPage?.metaData?.description
}

export default async function TeamPage() {
  const teamPage = await fetchPageSectionPage('teamPage')

  return (
    <>
      <PageSections pageSections={teamPage?.pageSections} />
    </>
  )
}
