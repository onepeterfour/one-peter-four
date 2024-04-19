import Homepage from '@/components/Homepage'
import PreviewHomepage from '@/components/PreviewHomePage'
import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { PageSectionPage } from '@/types'
import { draftMode } from 'next/headers'

export async function generateMetadata() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('homePage')
  )
  return {
    title: `${initial?.data?.metaData?.title} - 1P4`,
    description: initial?.data?.metaData?.description
  }
}

export default async function Home() {
  const initial = await loadQuery<PageSectionPage>(
    PAGE_SECTION_PAGE_QUERY('homePage')
  )

  return draftMode().isEnabled ? (
    <PreviewHomepage initial={initial} />
  ) : (
    <Homepage data={initial.data} />
  )
}
