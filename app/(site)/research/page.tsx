import { PageIntro } from '@/components/PageIntro'
import { client } from '@/sanity/lib/client'
import { RESEARCHPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// this page can reuse the same layout as the partners page, just with some slight modifications.

const researchPage =
  await client.fetch<SanityDocument<BasePage>>(RESEARCHPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${researchPage?.title}`,
  description: researchPage?.description
}

export default async function Research() {
  // const researchPage =
  //   await client.fetch<SanityDocument<BasePage>>(RESEARCHPAGE_QUERY)

  return (
    <>
      <PageIntro
        eyebrow='Our research'
        title='Learn from the brightets minds in the industry'
      >
        <p>
          We believe in the transformative power of organization design and
          development. Our latest research papers and projects are catalysts for
          change, sparking innovation and driving progress in the field.
        </p>
      </PageIntro>
    </>
  )
}
