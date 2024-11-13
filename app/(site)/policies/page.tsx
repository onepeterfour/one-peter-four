import { Container } from '@/components/Container'
import { PortableText } from '@/components/PortableText'
import { fetchPoliciesPage } from '@/sanity/schemas/documents/pages/policiesPage'
import { Metadata } from 'next'
import Link from 'next/link'

const policiesPage = await fetchPoliciesPage()

export const revalidate = 3600

export const metadata: Metadata = {
  title: `${policiesPage?.metaData?.title} - 1P4`,
  description: policiesPage?.metaData?.description
}

export default async function Policies() {
  const policiesPage = await fetchPoliciesPage()

  return (
    <>
      <Container className='mt-24 sm:mt-32 lg:mt-40'>
        <div className='prose'>
          {policiesPage?.content.length > 0 && (
            <PortableText value={policiesPage.content} />
          )}
          {policiesPage?.policiesList.length > 0 && (
            <ul className='padding'>
              {policiesPage?.policiesList.map((policy) => {
                return (
                  <li key={policy?._id}>
                    <Link href={`/policies/${policy?.slug.current}`}>
                      {policy?.title + ' Policy'}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </Container>
    </>
  )
}
