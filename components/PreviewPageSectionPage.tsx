'use client'

import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { PageName, PageSectionPage } from '@/types'
import { QueryResponseInitial, useQuery } from '@sanity/react-loader'
import { PageSections } from './PageSections'

export default function PreviewPageSectionPage({
  pageName,
  initial
}: {
  pageName: PageName
  initial: QueryResponseInitial<PageSectionPage>
}) {
  const { data } = useQuery<PageSectionPage | null>(
    PAGE_SECTION_PAGE_QUERY(pageName),
    {},
    { initial }
  )
  return data ? (
    <PageSections pageSections={data?.pageSections} />
  ) : (
    <div className='bg-red-100'>{`No ${pageName} found`}</div>
  )
}
