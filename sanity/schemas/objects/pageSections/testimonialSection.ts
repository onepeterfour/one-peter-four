import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ClientOrganisationDocument } from '../../documents/data/clientOrganisation'

export interface TestimonialSectionSchema extends BasePageSectionSchema {
  _type: 'testimonialSection'
  client: ClientOrganisationDocument
  quote: string
}

export default defineType({
  type: 'object',
  name: 'testimonialSection',
  title: 'Testimonial Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Testimonial Section',
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
      type: 'reference',
      to: [{ type: 'clientOrganisationDocument' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required()
    })
  ]
})
