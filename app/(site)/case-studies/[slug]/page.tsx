import { Blockquote } from '@/components/Blockquote'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { ContactSection } from '@/components/PageSections/ContactSection'
import { PageIntroSection } from '@/components/PageSections/PageIntroSection'
import { PortableText } from '@/components/PortableText'
import { ReadMore } from '@/components/ReadMore'
import { urlForImage } from '@/sanity/lib/image'
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
      <div className='mt-24 sm:mt-32 lg:mt-40'>
        <article>
          <PageIntroSection
            eyebrow='Case Study'
            title={caseStudy?.title}
            _type={caseStudy?._type}
            centered
            subtitle={caseStudy?.description}
            _key={caseStudy?._id}
          />
          <FadeIn>
            <div className='mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40'>
              <Container>
                <div className='mx-auto max-w-5xl'>
                  <dl className='-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3'>
                    <div className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'>
                      <dt className='font-semibold'>Client</dt>
                      <dd>{caseStudy.client.name}</dd>
                    </div>
                    <div className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'>
                      <dt className='font-semibold'>Year</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'>
                      <dt className='font-semibold'>Service</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>
            <div className='border-y border-neutral-200 bg-neutral-100'>
              <div className='-my-px mx-auto max-w-[76rem] bg-neutral-200'>
                <GrayscaleTransitionImage
                  src={urlForImage(caseStudy?.image)}
                  quality={90}
                  width={100}
                  height={100}
                  className='w-full'
                  sizes='(min-width: 1216px) 76rem, 100vw'
                  priority
                />
              </div>
            </div>

            <Container className='mt-24 sm:mt-32 lg:mt-40'>
              <FadeIn>
                <div className='prose mx-auto'>
                  <PortableText value={caseStudy?.body} />
                </div>
              </FadeIn>
            </Container>
            {caseStudy?.testimonial && (
              <Container>
                <Blockquote
                  className='mx-auto mt-24 max-w-[80ch] sm:mt-32 lg:mt-40'
                  author={{
                    name: caseStudy.testimonial.author,
                    role: caseStudy.testimonial.role
                  }}
                >
                  {caseStudy.testimonial.quote}
                </Blockquote>
              </Container>
            )}
          </FadeIn>
          <FadeIn className='my-24 text-center sm:my-32 lg:my-40'>
            <Button href='/articles'>Back</Button>
          </FadeIn>
        </article>
      </div>
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
