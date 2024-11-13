import { Container } from '@/components/Container'
import { PortableText } from '@/components/PortableText'
import {
  fetchWebsitePolicies,
  fetchWebsitePolicyBySlug
} from '@/sanity/schemas/documents/data/websitePolicy'
import { ArchiveIcon } from '@sanity/icons'
import { QueryParams } from 'next-sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 3600

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
          {policy?.file && (
            <Link
              key={policy?._id}
              href={`${policy.file.url}?dl=${policy.file.originalFilename}`}
              className='justify-left flex items-center gap-2 text-lg'
            >
              <span>Download Policy</span>
              <span>
                <ArchiveIcon className='text-lg' />
              </span>
            </Link>
          )}
        </div>
      )}
    </Container>
  )
}
