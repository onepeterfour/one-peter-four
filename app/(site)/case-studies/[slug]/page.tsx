import { Blockquote } from '@/components/Blockquote'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { ContactSection } from '@/components/PageSections/ContactSection'
import { PageIntroSection } from '@/components/PageSections/PageIntroSection'
import { PortableText } from '@/components/PortableText'
import { ReadMore } from '@/components/ReadMore'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  FETCH_CASESTUDIES_QUERY,
  FETCH_CASESTUDY_BY_SLUG_QUERY
} from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { CaseStudyDocument } from '@/sanity/schemas/documents/data/caseStudy'
import { Metadata } from 'next'
import { QueryParams } from 'next-sanity'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const caseStudies = await client.fetch<CaseStudyDocument[]>(
    FETCH_CASESTUDIES_QUERY
  )
  return caseStudies?.map((caseStudy) => ({
    slug: caseStudy?.slug?.current
  }))
}

export async function generateMetadata({
  params
}: {
  params: QueryParams
}): Promise<Metadata> {
  const initial = await loadQuery<CaseStudyDocument>(
    FETCH_CASESTUDY_BY_SLUG_QUERY(params?.slug),
    params,
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
    }
  )
  return {
    title: `${initial?.data?.title} - 1P4`,
    description: initial?.data?.description
  }
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<CaseStudyDocument>(
    FETCH_CASESTUDY_BY_SLUG_QUERY(params?.slug),
    params,
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published'
    }
  )

  const caseStudiesInitial = await loadQuery<CaseStudyDocument[]>(
    FETCH_CASESTUDIES_QUERY
  )

  const readMoreCaseStudies = caseStudiesInitial.data
    .filter((caseStudy) => caseStudy.slug.current !== params.slug)
    .slice(0, 2)

  if (!initial?.data) {
    notFound()
  }

  return (
    <>
      <div className='mt-24 sm:mt-32 lg:mt-40'>
        <article>
          <PageIntroSection
            eyebrow='Case Study'
            title={initial?.data?.title}
            _type={initial?.data?._type}
            isCentered
            subtitle={initial?.data?.description}
            _key={initial?.data?._id}
          />
          <FadeIn>
            <div className='mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40'>
              <Container>
                <div className='mx-auto max-w-5xl'>
                  <dl className='-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3'>
                    <div className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'>
                      <dt className='font-semibold'>Client</dt>
                      <dd>{initial?.data.client.name}</dd>
                    </div>
                    <div className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'>
                      <dt className='font-semibold'>Year</dt>
                      <dd>
                        <time dateTime={initial?.data.date.split('-')[0]}>
                          {initial?.data.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'>
                      <dt className='font-semibold'>Service</dt>
                      <dd>{initial?.data.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>
            <div className='border-y border-neutral-200 bg-neutral-100'>
              <div className='-my-px mx-auto max-w-[76rem] bg-neutral-200'>
                <GrayscaleTransitionImage
                  src={urlForImage(initial?.data?.image)}
                  quality={90}
                  width={1000}
                  height={1000}
                  className='w-full'
                  sizes='(min-width: 1216px) 76rem, 100vw'
                  priority
                />
              </div>
            </div>

            <Container className='mt-24 sm:mt-32 lg:mt-40'>
              <FadeIn>
                <div className='prose mx-auto'>
                  <PortableText value={initial?.data?.body} />
                </div>
              </FadeIn>
            </Container>
            {initial?.data?.testimonial && (
              <Container>
                <Blockquote
                  className='mx-auto mt-24 max-w-[80ch] sm:mt-32 lg:mt-40'
                  author={{
                    name: initial?.data.testimonial.author,
                    role: initial?.data.testimonial.role
                  }}
                >
                  {initial?.data.testimonial.quote}
                </Blockquote>
              </Container>
            )}
          </FadeIn>
          <FadeIn className='my-24 text-center sm:my-32 lg:my-40'>
            <Button href='/case-studies'>Back</Button>
          </FadeIn>
        </article>
      </div>
      <ReadMore title='More case studies' items={readMoreCaseStudies} />
      <ContactSection
        _key={initial?.data?._id}
        _type='contactSection'
        buttonLabel='Say hi'
        title='Tell us about your project'
      />
    </>
  )
}
