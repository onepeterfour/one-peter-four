import { PageSections } from '@/components/PageSections'
import { client } from '@/sanity/lib/client'
import { HOMEPAGE_QUERY } from '@/sanity/lib/queries'
import { HomePage } from '@/types'
import { Metadata } from 'next'

const homepage = await client.fetch<HomePage>(HOMEPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${homepage?.metaData?.title}`,
  description: homepage?.metaData?.description
}

export default async function Home() {
  // const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY)
  const homePage = await client.fetch<HomePage>(HOMEPAGE_QUERY)
  console.log({ homePage: homePage?.pageSections })
  return (
    <>
      {/* <Container className='mt-24 sm:mt-32 md:mt-56'> */}
      <PageSections pageSections={homePage?.pageSections} />
      {/* </Container> */}
    </>
  )
}
