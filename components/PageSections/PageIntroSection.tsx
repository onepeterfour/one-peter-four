import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntroSectionSchema } from '@/sanity/schemas/objects/pageSections/pageIntroSection'
import clsx from 'clsx'
import { PortableText } from '../PortableText'

type PageIntroProps = Omit<PageIntroSectionSchema, 'isEnabled' | '_type'> & {
  _type: string
}

export function PageIntroSection({
  eyebrow,
  title,
  isCentered = false,
  subtitle,
  body,
  _type
}: PageIntroProps) {
  return (
    <Container
      id={_type}
      className={clsx(isCentered && 'text-center', 'mt-24 sm:mt-32 lg:mt-40')}
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
              isCentered && 'mx-auto'
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            isCentered && 'mx-auto'
          )}
        >
          {subtitle && <p>{subtitle}</p>}
          <div className='mt-10 max-w-2xl space-y-6 text-base'>
            {body && <PortableText value={body} />}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
