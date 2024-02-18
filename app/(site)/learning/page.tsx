import { PageIntro } from '@/components/PageIntro'
import { client } from '@/sanity/lib/client'
import { LEARNINGPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

const learningPage =
  await client.fetch<SanityDocument<BasePage>>(LEARNINGPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${learningPage?.title}`,
  description: learningPage?.description
}
export default async function Learning() {
  // const learningPage =
  //   await client.fetch<SanityDocument<BasePage>>(LEARNINGPAGE_QUERY)

  return (
    <>
      <PageIntro eyebrow='Learn with us' title='Learning'>
        <p>This is where you can learn loads!</p>
      </PageIntro>
    </>
  )
}
