import { PageSections } from '@/components/PageSections'
import PreviewPageSectionPage from '@/components/PreviewPageSectionPage'
import { fetchPageSectionPage } from '@/sanity/lib/store'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await fetchPageSectionPage('learningPage')
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Learning() {
  const initial = await fetchPageSectionPage('learningPage')

  return draftMode().isEnabled ? (
    <PreviewPageSectionPage pageName='learningPage' initial={initial} />
  ) : (
    <PageSections pageSections={initial.data.pageSections} />
  )
}
