'use client'

import { PAGE_SECTION_PAGE_QUERY } from '@/sanity/lib/queries'
import { PageSectionPage } from '@/types'
import { QueryResponseInitial, useQuery } from '@sanity/react-loader'

import Homepage from './Homepage'

export default function PreviewHomepage({
  initial
}: {
  initial: QueryResponseInitial<PageSectionPage>
}) {
  const { data } = useQuery<PageSectionPage | null>(
    PAGE_SECTION_PAGE_QUERY('homePage'),
    {},
    { initial }
  )

  return data ? (
    <Homepage data={data} />
  ) : (
    <div className='bg-red-100'>No homepage found</div>
  )
}
