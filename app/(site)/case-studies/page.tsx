import { PageSections } from '@/components/PageSections'
import { fetchCaseStudiesPage } from '@/sanity/lib/queries'

export default async function CaseStudiesPage() {
  const caseStudiesPage = await fetchCaseStudiesPage()

  return (
    <>
      <PageSections pageSections={caseStudiesPage?.pageSections} />
    </>
  )
}
