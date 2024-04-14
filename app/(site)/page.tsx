import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'
import { fetchPageSectionPage } from '../api/fetchPageSectionPage'

const homePage = await fetchPageSectionPage('homePage')

export const metadata: Metadata = {
  title: `${homePage?.metaData?.title} - 1P4`,
  description: homePage?.metaData?.description
}

export default async function Home() {
  const homePage = await fetchPageSectionPage('homePage')

  return (
    <>
      <PageSections pageSections={homePage?.pageSections} />
    </>
  )
}
