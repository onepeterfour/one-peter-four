import { PageSections } from '@/components/PageSections'
import { fetchCaseStudiesPage } from '@/sanity/schemas/documents/pages/caseStudiesPage'
import { Metadata } from 'next'

const caseStudiesPage = await fetchCaseStudiesPage()

export const metadata: Metadata = {
  title: `${caseStudiesPage?.metaData?.title} - 1P4`,
  description: caseStudiesPage?.metaData?.description
}

export default async function CaseStudiesPage() {
  const caseStudiesPage = await fetchCaseStudiesPage()

  return (
    <>
      <PageSections pageSections={caseStudiesPage?.pageSections} />
    </>
  )
}
