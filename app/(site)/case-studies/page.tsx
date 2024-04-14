import { fetchPageSectionPage } from '@/app/api/fetchPageSectionPage'
import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'

const caseStudiesPage = await fetchPageSectionPage('caseStudiesPage')

export const metadata: Metadata = {
  title: `${caseStudiesPage?.metaData?.title} - 1P4`,
  description: caseStudiesPage?.metaData?.description
}

export default async function CaseStudiesPage() {
  const caseStudiesPage = await fetchPageSectionPage('caseStudiesPage')

  return (
    <>
      <PageSections pageSections={caseStudiesPage?.pageSections} />
    </>
  )
}
