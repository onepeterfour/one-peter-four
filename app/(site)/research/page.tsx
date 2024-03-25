import { PageSections } from '@/components/PageSections'
import { fetchResearchPage } from '@/sanity/lib/queries'
import { Metadata } from 'next'

// this page can reuse the same layout as the partners page, just with some slight modifications.

const researchPage = await fetchResearchPage()

export const metadata: Metadata = {
  title: `1P4: ${researchPage?.metaData?.title}`,
  description: researchPage?.metaData?.description
}

export default async function Research() {
  const researchPage = await fetchResearchPage()
  // console.log({ researchPage })

  return (
    <>
      <PageSections pageSections={researchPage?.pageSections} />
    </>
  )
}
