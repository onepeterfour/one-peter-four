import { PageSections } from '@/components/PageSections'
import PreviewPageSectionPage from '@/components/PreviewPageSectionPage'
import { fetchPageSectionPage } from '@/sanity/lib/store'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await fetchPageSectionPage('caseStudiesPage')
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function CaseStudies() {
  const initial = await fetchPageSectionPage('caseStudiesPage')

  return draftMode().isEnabled ? (
    <PreviewPageSectionPage pageName='caseStudiesPage' initial={initial} />
  ) : (
    <PageSections pageSections={initial.data.pageSections} />
  )
}
