import { PageSections } from '@/components/PageSections'
import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { PageSectionPage } from '@/types'
import { loadQuery } from '@sanity/react-loader'

export async function generateMetadata() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('teamPage')
  )
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function TeamPage() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('teamPage')
  )

  return (
    <>
      <PageSections pageSections={initial?.data?.pageSections} />
    </>
  )
}
