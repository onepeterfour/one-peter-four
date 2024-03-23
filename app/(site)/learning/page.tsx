import { PageSections } from '@/components/PageSections'
import { fetchLearningPage } from '@/sanity/lib/queries'
import { Metadata } from 'next'

const learningPage = await fetchLearningPage()

export const metadata: Metadata = {
  title: `1P4: ${learningPage?.metaData?.title}`,
  description: learningPage?.metaData?.description
}
export default async function Learning() {
  const learningPage = await fetchLearningPage()
  console.log({ learningPage })

  return (
    <>
      <PageSections pageSections={learningPage?.pageSections} />
    </>
  )
}
