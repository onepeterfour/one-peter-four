import { PageSections } from '@/components/PageSections'
import { fetchLearningPage } from '@/sanity/schemas/documents/pages/learningPage'
import { Metadata } from 'next'

const learningPage = await fetchLearningPage()

export const metadata: Metadata = {
  title: `${learningPage?.metaData?.title} - 1P4`,
  description: learningPage?.metaData?.description
}
export default async function Learning() {
  const learningPage = await fetchLearningPage()

  return (
    <>
      <PageSections pageSections={learningPage?.pageSections} />
    </>
  )
}
