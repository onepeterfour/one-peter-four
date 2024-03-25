import { Container } from '@/components/Container'
import { PortableText } from '@/components/PortableText'
import { fetchPoliciesPage } from '@/sanity/lib/queries'
import { Metadata } from 'next'
import Link from 'next/link'

const policiesPage = await fetchPoliciesPage()

export const metadata: Metadata = {
  title: `1P4: ${policiesPage?.metaData?.title}`,
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
            <ul>
              {policiesPage?.policiesList.map((policy) => {
                return (
                  <Link
                    key={policy?._id}
                    href={`/policies/${policy?.slug.current}`}
                  >
                    {policy?.title}
                  </Link>
                )
              })}
            </ul>
          )}
        </div>
      </Container>
    </>
  )
}
