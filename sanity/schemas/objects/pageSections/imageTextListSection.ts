import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'

interface TextListItem {
  _type: 'textListItem'
  _key: string
  title: string
  description: string
}
export interface ImageTextListSectionSchema extends BasePageSectionSchema {
  _type: 'imageTextListSection'
  eyebrow: string
  title: string
  subtitle: string
  image: ImageWithMetaDataObject
  textList: TextListItem[]
}

export default defineType({
  type: 'object',
  name: 'imageTextListSection',
  title: 'Image Text List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled',
      subtitle: 'eyebrow'
    },
    prepare: ({ isEnabled, subtitle }) => ({
      title: 'Text List Section',
      subtitle,
      media: BlockElementIcon,
      isEnabled
    })
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
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithMetadata',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'textList',
      title: 'Text List',
      type: 'array',
      validation: (Rule) => Rule.required().max(4),
      of: [
        {
          type: 'object',
          name: 'textListItem',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    })
  ]
})
