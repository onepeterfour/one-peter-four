import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'

export interface SanityPageSectionValues extends BasePageSectionSchema {
  _type: 'sanityPageSectionValues'
  eyebrow: string
  title: string
  subtitle: string
  image: ImageWithMetaDataObject
  valuesList: Array<{
    _type: 'value'
    _key: string
    title: string
    description: string
  }>
}

export default defineType({
  type: 'object',
  name: 'sanityPageSectionValues',
  title: 'Values',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare: ({ isEnabled }) => ({
      title: 'Values',
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
      type: 'imageWithMetadata'
    }),
    defineField({
      name: 'valuesList',
      title: 'Values List',
      type: 'array',
      validation: (Rule) => Rule.required().max(4),
      of: [
        {
          type: 'object',
          name: 'value',
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
