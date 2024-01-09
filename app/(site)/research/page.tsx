import { fetchResearchPage } from '@/sanity/queries'
import { Metadata } from 'next'

const researchPage = await fetchResearchPage()

export const metadata: Metadata = {
  title: `1P4: ${researchPage?.result?.[0]?.title}`,
  description: researchPage?.result?.[0]?.description
}

export default async function Research() {
  const researchPage = await fetchResearchPage()
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {researchPage?.result?.[0]?.heading}
        </h1>
      </div>
    </main>
  )
}
