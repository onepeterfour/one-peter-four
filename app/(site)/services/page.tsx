import { PageSections } from '@/components/PageSections'
import PreviewPageSectionPage from '@/components/PreviewPageSectionPage'
import { fetchPageSectionPage } from '@/sanity/lib/store'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await fetchPageSectionPage('servicesPage')
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Services() {
  const initial = await fetchPageSectionPage('servicesPage')

  return draftMode().isEnabled ? (
    <PreviewPageSectionPage pageName='servicesPage' initial={initial} />
  ) : (
    <PageSections pageSections={initial.data.pageSections} />
  )
}
