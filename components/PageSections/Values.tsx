import { urlForImage } from '@/sanity/lib/image'
import { SanityPageSectionValues } from '@/sanity/schemas/objects/pageSectionsArrayObject'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { List, ListItem } from '../List'
import { SectionIntro } from '../SectionIntro'
import { StylizedImage } from '../StylizedImage'

type ValuesProps = SanityPageSectionValues & {}
export const Values = ({
  eyebrow,
  image,
  subtitle,
  title,
  valuesList
}: ValuesProps) => {
  return (
    <>
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        className='mt-24 sm:mt-32 lg:mt-40'
      >
        <p>{subtitle}</p>
      </SectionIntro>
      <Container className='mt-16'>
        <div className='lg:flex lg:items-center lg:justify-end'>
          <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
            <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
              <StylizedImage
                src={urlForImage(image)}
                sizes='(min-width: 1024px) 41rem, 31rem'
                className='justify-center lg:justify-end'
                width={50}
                height={50}
                alt={image?.alt}
              />
            </FadeIn>
          </div>
          {valuesList.length > 0 && (
            <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
              {valuesList.map((value) => {
                return (
                  <ListItem key={value?._key} title={value?.title}>
                    {value?.description}
                  </ListItem>
                )
              })}
            </List>
          )}
        </div>
      </Container>
    </>
  )
}
