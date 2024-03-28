import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import type { SanityPageSectionPageIntro } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'
import clsx from 'clsx'
import { PortableText } from '../PortableText'

type PageIntroProps = SanityPageSectionPageIntro & {
  centered?: boolean
}

export function PageIntro({
  eyebrow,
  title,
  centered = false,
  subtitle,
  body
}: PageIntroProps) {
  return (
    <Container
      className={clsx(centered && 'text-center', 'mt-24 sm:mt-32 lg:mt-40')}
    >
      <FadeIn>
        <h1>
          <span className='block font-display text-base font-semibold text-neutral-950'>
            {eyebrow}
          </span>
          <span className='sr-only'> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto'
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto'
          )}
        >
          <p>{subtitle || 'No subtitle provided'}</p>
          <div className='mt-10 max-w-2xl space-y-6 text-base'>
            {body && <PortableText value={body} />}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
