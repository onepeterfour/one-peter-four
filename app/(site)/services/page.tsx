import { PageSections } from '@/components/PageSections'
import { fetchServicesPage } from '@/sanity/schemas/documents/pages/servicesPage'
import { Metadata } from 'next'

const servicesPage = await fetchServicesPage()

export const metadata: Metadata = {
  title: `${servicesPage?.metaData?.title} - 1P4`,
  description: servicesPage?.metaData?.description
}

export default async function Services() {
  const servicesPage = await fetchServicesPage()
  console.log({ servicesPage })

  return (
    <>
      <PageSections pageSections={servicesPage?.pageSections} />
    </>
  )
}
