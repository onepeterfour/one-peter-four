import { PageSections } from '@/components/PageSections'
import { fetchHomePage } from '@/sanity/lib/queries'
import { Metadata } from 'next'

const homepage = await fetchHomePage()

export const metadata: Metadata = {
  title: `1P4: ${homepage?.metaData?.title}`,
  description: homepage?.metaData?.description
}

export default async function Home() {
  const homePage = await fetchHomePage()

  return (
    <>
      <PageSections pageSections={homePage?.pageSections} />
    </>
  )
}
