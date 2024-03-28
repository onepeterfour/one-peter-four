import { PageSections } from '@/components/PageSections'
import { fetchPartnersPage } from '@/sanity/schemas/documents/pages/partnersPage'
import { Metadata } from 'next'

// this would be the "our work page in the studio template"

// sanity query
const partnersPage = await fetchPartnersPage()

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${partnersPage?.metaData?.title}`,
  description: partnersPage?.metaData?.description
}

export default async function PartnersPage() {
  const partnersPage = await fetchPartnersPage()
  console.log({ partnersPage })

  return (
    <>
      <PageSections pageSections={partnersPage?.pageSections} />
    </>
  )
}
