import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionContact',
  type: 'object',
  title: 'Contact',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare: ({ isEnabled }) => ({
      title: 'Contact',
      media: <span style={{ fontSize: '1rem' }}>{isEnabled ? '🟢' : '🔴'}</span>
    })
  },
  fields: [
    defineField({
      name: 'isEnabled',
      type: 'enabled',
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
