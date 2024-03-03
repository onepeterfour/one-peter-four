import { PageSections } from '@/components/PageSections'
import { client } from '@/sanity/lib/client'
import { RESEARCHPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// this page can reuse the same layout as the partners page, just with some slight modifications.

const researchPage =
  await client.fetch<SanityDocument<BasePage>>(RESEARCHPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${researchPage?.metaData?.title}`,
  description: researchPage?.metaData?.description
}

export default async function Research() {
  const researchPage =
    await client.fetch<SanityDocument<BasePage>>(RESEARCHPAGE_QUERY)
  console.log({ researchPage })

  return (
    <>
      <PageSections pageSections={researchPage?.pageSections} />
    </>
  )
}
