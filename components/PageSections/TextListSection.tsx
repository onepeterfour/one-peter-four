import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import { TextListSectionSchema } from '@/sanity/schemas/objects/pageSections/textListSection'
import { GridPattern } from '../GridPattern'

const InnerContent = ({
  eyebrow,
  title,
  textList,
  variant,
  subtitle
}: Pick<
  TextListSectionSchema,
  'eyebrow' | 'title' | 'subtitle' | 'textList' | 'variant'
>) => {
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow || 'Add eyebrow in Sanity'}
        title={title || 'Add title in Sanity'}
        invert={variant === 'dark'}
      >
        <p>{subtitle || 'Add subtitle in Sanity'}</p>
      </SectionIntro>
      <Container as='div' className='mt-24'>
        <GridList>
          {textList.map((item) => {
            return (
              <GridListItem
                key={item?._key}
                title={item?.title || 'add title'}
                invert={variant === 'dark'}
              >
                {item?.text || 'add text'}
              </GridListItem>
            )
          })}
        </GridList>
      </Container>
    </>
  )
}

export const TextListSection = ({
  eyebrow,
  subtitle,
  title,
  textList,
  variant
}: Omit<TextListSectionSchema, 'isEnabled'>) => {
  return variant === 'light' ? (
    <div className='relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40'>
      <div className='absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50'>
        <GridPattern
          className='absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
          yOffset={-270}
        />
      </div>
      <InnerContent
        eyebrow={eyebrow}
        textList={textList}
        variant={variant}
        subtitle={subtitle}
        title={title}
      />
    </div>
  ) : (
    <section className='mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32'>
      <InnerContent
        eyebrow={eyebrow}
        textList={textList}
        variant={variant}
        subtitle={subtitle}
        title={title}
      />
    </section>
  )
}
