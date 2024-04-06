import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { TypedObject, defineArrayMember, defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'

interface Tag {
  _type: 'tag'
  _key: string
  title: string
}

interface TitleWithTextListItem {
  _type: 'titleWithTextListItem'
  _key: string
  title: string
  text: string
}

interface Quote {
  _type: 'quote'
  text: string
  name: string
  role: string
  company: string
}

interface DetailedListItem {
  _type: 'item'
  _key: string
  title: string
  image: ImageWithMetaDataObject
  content: TypedObject[]
  tagList?: Tag[]
  titleWithTextList?: TitleWithTextListItem[]
  quote?: Quote
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
              name: 'tagList',
              title: 'Tag List',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'tag',
                  title: 'Tag',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required()
                    })
                  ]
                })
              ]
            }),
            defineField({
              name: 'titleWithTextList',
              title: 'Title and Text List',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'titleWithTextListItem',
                  title: 'Item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required()
                    }),
                    defineField({
                      name: 'text',
                      title: 'Text',
                      type: 'text',
                      rows: 3,
                      validation: (rule) => rule.required()
                    })
                  ]
                })
              ]
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                  rows: 3,
                  validation: (rule) => rule.required()
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (rule) => rule.required()
                }),
                defineField({
                  name: 'role',
                  title: 'Role',
                  type: 'string',
                  validation: (rule) => rule.required()
                }),
                defineField({
                  name: 'company',
                  title: 'Company',
                  type: 'string',
                  validation: (rule) => rule.required()
                })
              ]
            })
          ]
        })
      ]
    })
  ]
})
