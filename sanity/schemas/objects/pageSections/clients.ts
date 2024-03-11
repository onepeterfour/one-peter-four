import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Clients',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
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
          type: 'object',
          name: 'client',
          title: 'Client',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              validation: (Rule) => Rule.required()
            })
          ]
        }
      ]
    })
  ]
})
