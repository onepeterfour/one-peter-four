import { PageSections } from '@/components/PageSections'
import PreviewPageSectionPage from '@/components/PreviewPageSectionPage'
import { fetchPageSectionPage } from '@/sanity/lib/store'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await fetchPageSectionPage('developingChurchPage')
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Team() {
  const initial = await fetchPageSectionPage('developingChurchPage')

  return draftMode().isEnabled ? (
    <PreviewPageSectionPage pageName='developingChurchPage' initial={initial} />
  ) : (
    <PageSections pageSections={initial.data.pageSections} />
  )
}
