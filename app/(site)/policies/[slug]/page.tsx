import { Container } from '@/components/Container'
import { PortableText } from '@/components/PortableText'
import {
  fetchWebsitePolicies,
  fetchWebsitePolicyBySlug
} from '@/sanity/schemas/documents/data/websitePolicy'
import { QueryParams } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const policies = await fetchWebsitePolicies()
  return policies.map((policy) => ({
    slug: policy?.slug?.current
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const policy = await fetchWebsitePolicyBySlug(params?.slug)

  if (!policy) {
    notFound()
  }

  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      {policy?.policy.length > 0 && (
        <div className='prose'>
          <PortableText value={policy.policy} />
        </div>
      )}
    </Container>
  )
}
