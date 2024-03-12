import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Clients',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'title'
    },
    prepare({ subtitle }) {
      return {
        title: 'Clients',
        subtitle,
        media: BlockElementIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'isShown',
      title: 'isShown',
      type: 'isShown'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'clientsList',
      title: 'Clients List',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          type: 'client',
          name: 'client',
          title: 'Client'
        }
      ]
    })
  ]
})
