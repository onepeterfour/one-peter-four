import { Metadata } from 'next'

import PostsPreview from '@/components/PostsPreview'
import Posts from '@/components/organisms/Posts'
import { client } from '@/sanity/lib/client'
import { HOMEPAGE_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { SanityDocument } from 'next-sanity'
import { draftMode } from 'next/headers'

const homepage = await client.fetch<SanityDocument<BasePage>>(HOMEPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${homepage?.title}`,
  description: homepage?.description
}

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY)
  const homePage = await client.fetch<SanityDocument<BasePage>>(HOMEPAGE_QUERY)
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {homePage?.heading}
        </h1>
        <p className='font-sans'>Coming Soon...</p>
      </div>
      {draftMode().isEnabled ? (
        <PostsPreview initial={initial} />
      ) : (
        <Posts posts={initial.data} />
      )}
    </main>
  )
}
