import { PageSections } from '@/components/PageSections'
import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { PageSectionPage } from '@/types'

export async function generateMetadata() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('learningPage')
  )
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}
export default async function Learning() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('learningPage')
  )

  return (
    <>
      <PageSections pageSections={initial?.data?.pageSections} />
    </>
  )
}
