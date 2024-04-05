import { urlForImage } from '@/sanity/lib/image'

import { ImageTextListSectionSchema } from '@/sanity/schemas/objects/pageSections/imageTextListSection'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { List, ListItem } from '../List'
import { SectionIntro } from '../SectionIntro'
import { StylizedImage } from '../StylizedImage'

export const ImageTextListSection = ({
  eyebrow,
  image,
  subtitle,
  title,
  textList
}: Omit<ImageTextListSectionSchema, 'isEnabled'>) => {
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
          {textList.length > 0 && (
            <List className='mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4'>
              {textList.map((textListItem) => {
                return (
                  <ListItem
                    key={textListItem?._key}
                    title={textListItem?.title}
                  >
                    {textListItem?.description}
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
