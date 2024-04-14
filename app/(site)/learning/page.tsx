import { fetchPageSectionPage } from '@/app/api/fetchPageSectionPage'
import { PageSections } from '@/components/PageSections'
import { Metadata } from 'next'

const learningPage = await fetchPageSectionPage('learningPage')

export const metadata: Metadata = {
  title: `${learningPage?.metaData?.title} - 1P4`,
  description: learningPage?.metaData?.description
}
export default async function Learning() {
  const learningPage = await fetchPageSectionPage('learningPage')

  return (
    <>
      <PageSections pageSections={learningPage?.pageSections} />
    </>
  )
}
