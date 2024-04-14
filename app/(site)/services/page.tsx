import { fetchPageSectionPage } from '@/app/api/fetchPageSectionPage'
import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'

const servicesPage = await fetchPageSectionPage('servicesPage')

export const metadata: Metadata = {
  title: `${servicesPage?.metaData?.title} - 1P4`,
  description: servicesPage?.metaData?.description
}

export default async function Services() {
  const servicesPage = await fetchPageSectionPage('servicesPage')

  return (
    <>
      <PageSections pageSections={servicesPage?.pageSections} />
    </>
  )
}
