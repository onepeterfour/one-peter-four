import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionClients',
  title: 'Clients',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'title',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Clients',
        subtitle,
        media: (
          <span style={{ fontSize: '1rem' }}>{isEnabled ? '🟢' : '🔴'}</span>
        )
      }
    }
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