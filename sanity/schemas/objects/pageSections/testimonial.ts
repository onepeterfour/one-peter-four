import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionTestimonial',
  type: 'object',
  title: 'Testimonial',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'client'
    },
    prepare({ subtitle }) {
      return {
        title: 'Testimonial',
        subtitle,
        media: BlockElementIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'isShown',
      title: 'isShown',
      type: 'isShown',
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
      type: 'image',
      validation: (Rule) => Rule.required()
    })
  ]
})
