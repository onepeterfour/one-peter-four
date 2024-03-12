import { PageSections } from '@/components/PageSections'
import { client } from '@/sanity/lib/client'
import { LEARNINGPAGE_QUERY } from '@/sanity/lib/queries'
import type { LearningPageQueryResult } from '@/types/sanity/queries'
import { Metadata } from 'next'

const learningPage =
  await client.fetch<LearningPageQueryResult>(LEARNINGPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${learningPage?.metaData?.title}`,
  description: learningPage?.metaData?.description
}
export default async function Learning() {
  const learningPage =
    await client.fetch<LearningPageQueryResult>(LEARNINGPAGE_QUERY)
  console.log({ learningPage })

  return (
    <>
      <PageSections pageSections={learningPage?.pageSections} />
    </>
  )
}
