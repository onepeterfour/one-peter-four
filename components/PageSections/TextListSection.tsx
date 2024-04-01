import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import { TextListSectionSchema } from '@/sanity/schemas/objects/pageSections/textListSection'

export const TextListSection = ({
  eyebrow,
  subtitle,
  title,
  textList
}: Omit<TextListSectionSchema, 'isEnabled'>) => {
  return (
    <section className='mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32'>
      <SectionIntro
        eyebrow={eyebrow || 'Add eyebrow in Sanity'}
        title={title || 'Add title in Sanity'}
        invert
      >
        <p>{subtitle || 'Add subtitle in Sanity'}</p>
      </SectionIntro>
      {textList && (
        <Container as='div' className='mt-16'>
          <GridList>
            {textList.map((item) => {
              return (
                <GridListItem
                  key={item?._key}
                  title={item?.title || 'add title'}
                  invert
                >
                  {item?.text || 'add text'}
                </GridListItem>
              )
            })}
          </GridList>
        </Container>
      )}
    </section>
  )
}
