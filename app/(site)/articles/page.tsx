import { PageSections } from '@/components/PageSections'
import { fetchArticlesPage } from '@/sanity/schemas/documents/pages/articlesPage'
import { Metadata } from 'next'

// this page can reuse the same layout as the partners page, just with some slight modifications.

const articlesPage = await fetchArticlesPage()

export const metadata: Metadata = {
  title: `${articlesPage?.metaData?.title} - 1P4`,
  description: articlesPage?.metaData?.description
}

export default async function Articles() {
  const articlesPage = await fetchArticlesPage()

  return (
    <>
      <PageSections pageSections={articlesPage?.pageSections} />
    </>
  )
}
