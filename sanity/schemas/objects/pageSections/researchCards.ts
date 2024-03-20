import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionResearchCards',
  type: 'object',
  title: 'Research Cards',
  icon: BlockElementIcon,
  preview: {
    prepare() {
      return {
        title: 'Research Cards',
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
      name: 'researchCards',
      title: 'Research Cards',
      validation: (Rule) => Rule.required().max(3),
      type: 'array',
      of: [
        {
          name: 'researchCardObject',
          type: 'object',
          title: 'Research Card',
          fields: [
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'date',
              title: 'Date',
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
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'href',
              title: 'Href',
              type: 'string',
              validation: (Rule) => Rule.required()
            })
          ]
        }
      ]
    })
  ]
})
