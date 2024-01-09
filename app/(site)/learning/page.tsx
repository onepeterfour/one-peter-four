import { fetchLearningPage } from '@/sanity/queries'
import { Metadata } from 'next'

const learningPage = await fetchLearningPage()

export const metadata: Metadata = {
  title: `1P4: ${learningPage?.result?.[0]?.title}`,
  description: learningPage?.result?.[0]?.description
}
export default async function Learning() {
  const learningPage = await fetchLearningPage()

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {learningPage?.result?.[0]?.heading}
        </h1>
      </div>
    </main>
  )
}
