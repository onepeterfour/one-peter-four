import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { TypedObject, defineArrayMember, defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'
import { QuoteObject } from '../quoteObject'
import { TagListObject } from '../tagListObject'
import { TitleWithTextListObject } from '../titleWithTextListObject'

interface DetailedListItem {
  _type: 'item'
  _key: string
  title: string
  image: ImageWithMetaDataObject
  content: TypedObject[]
  optionalField?: Array<TagListObject | TitleWithTextListObject | QuoteObject>
}

export interface ImageTextDetailedListSectionSchema
  extends BasePageSectionSchema {
  _type: 'imageTextDetailedListSection'
  isEnabled: boolean
  itemList: DetailedListItem[]
}

export default defineType({
  type: 'object',
  name: 'imageTextDetailedListSection',
  title: 'Image Text Detailed List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Image Text Detailed List Section',
        media: BlockElementIcon,
        isEnabled
      }
    }
  },
  components: {
    preview: CustomListPreview
  },
  fields: [
    defineField({
      name: 'isEnabled',
      type: 'boolean',
      description: 'If checked, this section will be shown on the page',
      initialValue: false
    }),
    defineField({
      name: 'itemList',
      title: 'Detailed Item List',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          name: 'item',
          title: 'Detailed Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required()
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'imageWithMetadata',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              validation: (rule) => rule.required(),
              of: [{ type: 'block' }]
            }),
            defineField({
              name: 'optionalField',
              title: 'Optional Field',
              description:
                'Optional field to add additional content to the item',
              type: 'array',
              validation: (rule) => rule.max(1),
              of: [
                { type: 'tagListObject' },
                { type: 'titleWithTextListObject' },
                { type: 'quoteObject' }
              ]
            })
          ]
        })
      ]
    })
  ]
})
