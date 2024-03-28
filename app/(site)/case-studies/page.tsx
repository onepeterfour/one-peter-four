import { PageSections } from '@/components/PageSections'
import { fetchCaseStudiesPage } from '@/sanity/schemas/documents/pages/caseStudiesPage'

export default async function CaseStudiesPage() {
  const caseStudiesPage = await fetchCaseStudiesPage()

  return (
    <>
      <PageSections pageSections={caseStudiesPage?.pageSections} />
    </>
  )
}
