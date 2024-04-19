import { PageSections } from '@/components/PageSections'
import PreviewPageSectionPage from '@/components/PreviewPageSectionPage'
import { fetchPageSectionPage } from '@/sanity/lib/store'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await fetchPageSectionPage('homePage')
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Home() {
  const initial = await fetchPageSectionPage('homePage')

  return draftMode().isEnabled ? (
    <PreviewPageSectionPage pageName='homePage' initial={initial} />
  ) : (
    <PageSections pageSections={initial.data.pageSections} />
  )
}
