import { fetchHomePage } from '@/sanity/queries'
import { Metadata } from 'next'

const homePage = await fetchHomePage()

export const metadata: Metadata = {
  title: `1P4: ${homePage?.result?.[0]?.title}`,
  description: homePage?.result?.[0]?.description
}

export default async function Home() {
  const homePage = await fetchHomePage()
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {homePage?.result?.[0]?.heading}
        </h1>
        <p className='font-sans'>Coming Soon...</p>
      </div>
    </main>
  )
}
