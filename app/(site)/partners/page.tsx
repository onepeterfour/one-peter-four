import { fetchPartnersPage } from '@/sanity/queries'
import { Metadata } from 'next'

const partnersPage = await fetchPartnersPage()

export const metadata: Metadata = {
  title: `1P4: ${partnersPage?.result?.[0]?.title}`,
  description: partnersPage?.result?.[0]?.description
}
export default async function Partners() {
  const partnersPage = await fetchPartnersPage()

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {partnersPage?.result?.[0]?.heading}
        </h1>
      </div>
    </main>
  )
}
