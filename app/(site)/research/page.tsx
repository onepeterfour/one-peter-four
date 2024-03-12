import { PageSections } from '@/components/PageSections'
import { client } from '@/sanity/lib/client'
import { RESEARCHPAGE_QUERY } from '@/sanity/lib/queries'
import type { ResearchPageQueryResult } from '@/types/sanity/queries'
import { Metadata } from 'next'

// this page can reuse the same layout as the partners page, just with some slight modifications.

const researchPage =
  await client.fetch<ResearchPageQueryResult>(RESEARCHPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${researchPage?.metaData?.title}`,
  description: researchPage?.metaData?.description
}

export default async function Research() {
  const researchPage =
    await client.fetch<ResearchPageQueryResult>(RESEARCHPAGE_QUERY)
  console.log({ researchPage })

  return (
    <>
      <PageSections pageSections={researchPage?.pageSections} />
    </>
  )
}
