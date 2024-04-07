import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { urlForImage } from '@/sanity/lib/image'
import { CaseStudyListSectionSchema } from '@/sanity/schemas/objects/pageSections/caseStudyListSection'
import Image from 'next/image'
import Link from 'next/link'

export const CaseStudyListSection = ({
  eyebrow,
  caseStudyList
}: Omit<CaseStudyListSectionSchema, 'isEnabled'>) => {
  return (
    <Container className='mt-40'>
      <FadeIn>
        {eyebrow && (
          <h2 className='font-display text-2xl font-semibold text-neutral-950'>
            {eyebrow}
          </h2>
        )}
      </FadeIn>
      <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
        {caseStudyList.map((caseStudy) => (
          <FadeIn key={caseStudy?._id}>
            <article>
              <Border className='grid grid-cols-3 gap-x-8 gap-y-8 pt-16'>
                <div className='col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block'>
                  <div className='sm:flex sm:items-center sm:gap-x-6 lg:block'>
                    <Image
                      src={urlForImage(caseStudy?.client?.logo)}
                      alt={caseStudy?.client?.logo?.alt}
                      className='h-16 w-16 flex-none'
                      width={50}
                      height={50}
                      unoptimized
                    />
                    <h3 className='mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8'>
                      {caseStudy?.client?.name}
                    </h3>
                  </div>
                  <div className='mt-1 flex gap-x-4 sm:mt-0 lg:block'>
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy?.service}
                    </p>
                    <p className='text-sm text-neutral-950 lg:mt-2'>
                      <time dateTime={caseStudy?.date}>
                        {formatDate(caseStudy?.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                  <p className='font-display text-4xl font-medium text-neutral-950'>
                    <Link href={`/case-studies/${caseStudy?.slug?.current}`}>
                      {caseStudy?.title}
                    </Link>
                  </p>
                  <div className='mt-6 space-y-6 text-base text-neutral-600'>
                    <p>{caseStudy?.description}</p>
                  </div>
                  <div className='mt-8 flex'>
                    <Button
                      href={`/case-studies/${caseStudy?.slug?.current}`}
                      aria-label={`Read case study: ${caseStudy?.client?.name}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy?.testimonial && (
                    <Blockquote
                      author={{
                        name: caseStudy?.testimonial.author,
                        role: caseStudy?.testimonial.role
                      }}
                      className='mt-12'
                    >
                      {caseStudy?.testimonial?.quote}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
