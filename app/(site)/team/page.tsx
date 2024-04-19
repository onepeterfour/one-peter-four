import { PageSections } from '@/components/PageSections'
import PreviewPageSectionPage from '@/components/PreviewPageSectionPage'
import { fetchPageSectionPage } from '@/sanity/lib/store'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await fetchPageSectionPage('teamPage')
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Team() {
  const initial = await fetchPageSectionPage('teamPage')

  return draftMode().isEnabled ? (
    <PreviewPageSectionPage pageName='teamPage' initial={initial} />
  ) : (
    <PageSections pageSections={initial.data.pageSections} />
  )
}
