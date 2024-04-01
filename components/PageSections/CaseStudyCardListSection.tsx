import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { urlForImage } from '@/sanity/lib/image'
import { CaseStudyCardListSectionSchema } from '@/sanity/schemas/objects/pageSections/caseStudyCardListSection'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, FadeInStagger } from '../FadeIn'

export const CaseStudyCardListSection = ({
  caseStudyList,
  title,
  subtitle
}: Omit<CaseStudyCardListSectionSchema, 'isEnabled'>) => {
  return (
    <>
      <SectionIntro title={title} className='mt-24 sm:mt-32 lg:mt-40'>
        <p>{subtitle}</p>
      </SectionIntro>
      <Container className='mt-16'>
        <FadeInStagger className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {caseStudyList.map((card) => (
            <FadeIn key={card._id} className='flex'>
              <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
                <h3>
                  <Link href={`/case-studies/${card?.slug?.current}`}>
                    <span className='absolute inset-0 rounded-3xl' />

                    <Image
                      src={urlForImage(card?.client?.logo)}
                      alt={card?.client?.logo?.alt}
                      className='h-16 w-16'
                      width={50}
                      height={50}
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
                  <time
                    dateTime={card.date.split('-')[0]}
                    className='font-semibold'
                  >
                    {card.date.split('-')[0]}
                  </time>
                  <span className='text-neutral-300' aria-hidden='true'>
                    /
                  </span>
                  <span>Research</span>
                </p>
                <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
                  {card.title}
                </p>
                <p className='mt-4 text-base text-neutral-600'>
                  {card.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
