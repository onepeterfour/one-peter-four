import { fetchServicesPage } from '@/sanity/queries'
import { Metadata } from 'next'

const servicesPage = await fetchServicesPage()

export const metadata: Metadata = {
  title: `1P4: ${servicesPage?.result?.[0]?.title}`,
  description: servicesPage?.result?.[0]?.description
}

export default async function Services() {
  const servicesPage = await fetchServicesPage()

  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <div className='text-center'>
        <h1 className='py-8 font-serif text-3xl font-bold sm:text-5xl'>
          {servicesPage?.result?.[0]?.heading}
        </h1>
      </div>
    </main>
  )
}
