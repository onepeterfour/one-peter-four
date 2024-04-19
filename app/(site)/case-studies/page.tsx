import { PageSections } from '@/components/PageSections'
import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { PageSectionPage } from '@/types'

export async function generateMetadata() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('caseStudiesPage')
  )
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function CaseStudiesPage() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('caseStudiesPage')
  )

  return (
    <>
      <PageSections pageSections={initial?.data?.pageSections} />
    </>
  )
}
