import { fetchPageSectionPage } from '@/app/api/fetchPageSectionPage'
import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'

// this page can reuse the same layout as the partners page, just with some slight modifications.

const articlesPage = await fetchPageSectionPage('articlesPage')

export const metadata: Metadata = {
  title: `${articlesPage?.metaData?.title} - 1P4`,
  description: articlesPage?.metaData?.description
}

export default async function Articles() {
  const articlesPage = await fetchPageSectionPage('articlesPage')

  return (
    <>
      <PageSections pageSections={articlesPage?.pageSections} />
    </>
  )
}
