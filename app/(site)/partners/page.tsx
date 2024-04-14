import { fetchPageSectionPage } from '@/app/api/fetchPageSectionPage'
import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'

const partnersPage = await fetchPageSectionPage('partnersPage')

export const metadata: Metadata = {
  title: `${partnersPage?.metaData?.title} - 1P4`,
  description: partnersPage?.metaData?.description
}

export default async function PartnersPage() {
  const partnersPage = await fetchPageSectionPage('partnersPage')

  return (
    <>
      <PageSections pageSections={partnersPage?.pageSections} />
    </>
  )
}
