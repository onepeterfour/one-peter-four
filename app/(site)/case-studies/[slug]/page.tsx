import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ContactSection } from '@/components/PageSections/ContactSection'
import { PageIntroSection } from '@/components/PageSections/PageIntroSection'
import { PortableText } from '@/components/PortableText'
import { ReadMore } from '@/components/ReadMore'
import {
  fetchCaseStudies,
  fetchCaseStudyBySlug
} from '@/sanity/schemas/documents/data/caseStudy'
import { Metadata } from 'next'
import { QueryParams } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const caseStudies = await fetchCaseStudies()
  return caseStudies?.map((caseStudies) => ({
    slug: caseStudies?.slug?.current
  }))
}

export async function generateMetadata({
  params
}: {
  params: QueryParams
}): Promise<Metadata> {
  const caseStudy = await fetchCaseStudyBySlug(params?.slug)
  return {
    title: `${caseStudy?.title} - 1P4`,
    description: caseStudy?.description
  }
}

export default async function Page({ params }: { params: QueryParams }) {
  const caseStudy = await fetchCaseStudyBySlug(params?.slug)
  const caseStudies = await fetchCaseStudies()
  const readMoreCaseStudies = caseStudies
    .filter((caseStudy) => caseStudy.slug.current !== params.slug)
    .slice(0, 2)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Container as='div' className='mt-24 sm:mt-32 lg:mt-40'>
        <article>
          <PageIntroSection
            title={caseStudy?.title}
            _type={caseStudy?._type}
            centered
            subtitle={caseStudy?.description}
            _key={caseStudy?._id}
          />
          <FadeIn className='prose mx-auto'>
            <PortableText value={caseStudy?.body} />
          </FadeIn>
          <FadeIn className='my-8 text-center'>
            <Button href='/articles'>Back</Button>
          </FadeIn>
        </article>
      </Container>
      <ReadMore title='More case studies' items={readMoreCaseStudies} />
      <ContactSection
        _key={caseStudy?._id}
        _type='contactSection'
        buttonLabel='Say hi'
        title='Tell us about your project'
      />
    </>
  )
}
