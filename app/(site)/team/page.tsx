import { client } from '@/sanity/lib/client'
import { TEAMPAGE_QUERY } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// const teamPage = await fetchTeamPage()
const teamPage = await client.fetch<SanityDocument<BasePage>>(TEAMPAGE_QUERY)

export const metadata: Metadata = {
  title: `1P4: ${teamPage?.title}`,
  description: teamPage?.description
}

export default async function Team() {
  const teamPage = await client.fetch<SanityDocument<BasePage>>(TEAMPAGE_QUERY)

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {teamPage?.heading}
        </h1>
      </div>
    </main>
  )
}
