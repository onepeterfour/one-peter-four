import { PageSections } from '@/components/PageSections'
import { client } from '@/sanity/lib/client'
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries'
import type { HomePageQueryResult } from '@/types/sanity/queries'
import { Metadata } from 'next'

const homepage = await client.fetch<HomePageQueryResult>(HOMEPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${homepage?.metaData?.title}`,
  description: homepage?.metaData?.description
}

export default async function Home() {
  // const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY)
  const homePage = await client.fetch<HomePageQueryResult>(HOMEPAGE_QUERY)
  console.log({ homePage: homePage?.pageSections })
  return (
    <>
      <PageSections pageSections={homePage?.pageSections} />
    </>
  )
}
