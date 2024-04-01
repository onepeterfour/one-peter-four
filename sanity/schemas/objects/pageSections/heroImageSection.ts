import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'

export interface HeroImageSectionSchema extends BasePageSectionSchema {
  _type: 'heroImageSection'
  heading: string
  tagline: string
  image: ImageWithMetaDataObject
}

export default defineType({
  type: 'object',
  name: 'heroImageSection',
  title: 'Hero With Image',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'heading',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Hero With Image',
        subtitle,
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
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'imageWithMetadata'
    })
  ]
})
