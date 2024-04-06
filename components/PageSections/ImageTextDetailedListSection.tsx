import { TagList, TagListItem } from '@/components/TagList'
import { urlForImage } from '@/sanity/lib/image'
import { ImageTextDetailedListSectionSchema } from '@/sanity/schemas/objects/pageSections/imageTextDetailedListSection'
import { Blockquote } from '../Blockquote'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { List, ListItem } from '../List'
import { PortableText } from '../PortableText'
import { StylizedImage } from '../StylizedImage'

type SectionProps = Pick<
  ImageTextDetailedListSectionSchema['itemList'][0],
  'title' | 'image' | 'content' | 'tagList' | 'titleWithTextList' | 'quote'
>
const Section = ({
  title,
  image,
  content,
  tagList,
  titleWithTextList,
  quote
}: SectionProps) => {
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
              {tagList && <TagListSection tagList={tagList} />}
              {titleWithTextList && (
                <TitleWithTextListSection
                  titleWithTextList={titleWithTextList}
                />
              )}
              {quote && (
                <Blockquote
                  author={{
                    name: quote.name,
                    role: `${quote.role} of ${quote.company}`
                  }}
                  className='mt-12'
                >
                  Studio were so regular with their progress updates we almost
                  began to think they were automated!
                </Blockquote>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

const TagListSection = ({
  tagList
}: Required<
  Pick<ImageTextDetailedListSectionSchema['itemList'][0], 'tagList'>
>) => {
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
}: Required<
  Pick<ImageTextDetailedListSectionSchema['itemList'][0], 'titleWithTextList'>
>) => {
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
              tagList={item?.tagList}
              titleWithTextList={item?.titleWithTextList}
              quote={item?.quote}
            />
          )
        })}
    </div>
  )
}
