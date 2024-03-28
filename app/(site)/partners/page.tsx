import { PageSections } from '@/components/PageSections'
import { fetchPartnersPage } from '@/sanity/schemas/documents/pages/partnersPage'
import { Metadata } from 'next'

const partnersPage = await fetchPartnersPage()

export const metadata: Metadata = {
  title: `${partnersPage?.metaData?.title} - 1P4`,
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
