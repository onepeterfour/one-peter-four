import { TagList, TagListItem } from '@/components/TagList'
import { urlForImage } from '@/sanity/lib/image'
import { ImageTextDetailedListSectionSchema } from '@/sanity/schemas/objects/pageSections/imageTextDetailedListSection'
import { TagListObject } from '@/sanity/schemas/objects/tagListObject'
import { TitleWithTextListObject } from '@/sanity/schemas/objects/titleWithTextListObject'
import { Blockquote } from '../Blockquote'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { List, ListItem } from '../List'
import { PortableText } from '../PortableText'
import { StylizedImage } from '../StylizedImage'

type SectionProps = Pick<
  ImageTextDetailedListSectionSchema['itemList'][0],
  'title' | 'image' | 'content' | 'optionalField'
>
const Section = ({ title, image, content, optionalField }: SectionProps) => {
  return (
    <Container className='group/section [counter-increment:section]'>
      <div className='lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20'>
        <div className='flex justify-center'>
          <FadeIn className='w-[33.75rem] flex-none lg:w-[45rem]'>
            <StylizedImage
              src={urlForImage(image)}
              sizes='(min-width: 1024px) 41rem, 31rem'
              className='justify-center lg:justify-end lg:group-even/section:justify-start'
              width={100}
              height={100}
              alt={image?.alt}
            />
          </FadeIn>
        </div>
        <div className='mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first'>
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden='true'
            />
            <h2 className='mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl'>
              {title}
            </h2>
            <div className='mt-6'>
              <div className='space-y-6 text-base text-neutral-600'>
                <PortableText value={content} />
              </div>

              {optionalField?.[0]?._type === 'tagListObject' && (
                <TagListSection tagList={optionalField[0].tagList} />
              )}
              {optionalField?.[0]?._type === 'titleWithTextListObject' && (
                <TitleWithTextListSection
                  titleWithTextList={optionalField[0].titleWithTextList}
                />
              )}
              {optionalField?.[0]?._type === 'quoteObject' && (
                <Blockquote
                  author={{
                    name: optionalField[0].quote.name,
                    role: `${optionalField[0].quote.role} of ${optionalField[0].quote.company}`
                  }}
                  className='mt-12'
                >
                  {optionalField[0].quote?.text}
                </Blockquote>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

const TagListSection = ({ tagList }: Pick<TagListObject, 'tagList'>) => {
  return (
    <>
      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <TagList className='mt-4'>
        {tagList?.map((tag) => {
          return <TagListItem key={tag?._key}>{tag.title}</TagListItem>
        })}
      </TagList>
    </>
  )
}

const TitleWithTextListSection = ({
  titleWithTextList
}: Required<Pick<TitleWithTextListObject, 'titleWithTextList'>>) => {
  return (
    <>
      <h3 className='mt-12 font-display text-base font-semibold text-neutral-950'>
        Included in this phase
      </h3>
      <List className='mt-8'>
        {titleWithTextList.map((item) => {
          return (
            <ListItem key={item._key} title={item.title}>
              {item.text}
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export const ImageTextDetailedListSection = ({
  itemList
}: Omit<ImageTextDetailedListSectionSchema, 'isEnabled'>) => {
  return (
    <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40'>
      {itemList &&
        itemList.map((item) => {
          return (
            <Section
              key={item?._key}
              title={item?.title}
              image={item?.image}
              content={item?.content}
              optionalField={item?.optionalField}
            />
          )
        })}
    </div>
  )
}
