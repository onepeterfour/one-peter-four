import { PageSections } from '@/components/PageSections'
import { fetchHomePage } from '@/sanity/schemas/documents/pages/homePage'
import { Metadata } from 'next'

const homePage = await fetchHomePage()

export const metadata: Metadata = {
  title: `${homePage?.metaData?.title} - 1P4`,
  description: homePage?.metaData?.description
}

export default async function Home() {
  const homePage = await fetchHomePage()

  return (
    <>
      <PageSections pageSections={homePage?.pageSections} />
    </>
  )
}
