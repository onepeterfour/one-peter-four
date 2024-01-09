import { fetchTeamPage } from '@/sanity/queries'
import { Metadata } from 'next'

const teamPage = await fetchTeamPage()

export const metadata: Metadata = {
  title: `1P4: ${teamPage?.result?.[0]?.title}`,
  description: teamPage?.result?.[0]?.description
}

export default async function Team() {
  const teamPage = await fetchTeamPage()

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {teamPage?.result?.[0]?.heading}
        </h1>
      </div>
    </main>
  )
}
