import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ImageWithMetaDataObject } from '../imageWithMetaDataObject'

export interface SanityPageSectionTestimonial extends BasePageSectionSchema {
  _type: 'sanityPageSectionTestimonial'
  client: string
  quote: string
  logo: ImageWithMetaDataObject
}

export default defineType({
  type: 'object',
  name: 'sanityPageSectionTestimonial',
  title: 'Testimonial',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'client',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Testimonial',
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
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageWithMetadata',
      validation: (Rule) => Rule.required()
    })
  ]
})
