import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionContact',
  type: 'object',
  title: 'Contact',
  icon: BlockElementIcon,
  preview: {
    prepare: () => ({
      title: 'Contact',
      media: BlockElementIcon
    })
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
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ]
})
