import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionValues',
  type: 'object',
  title: 'Values',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare: ({ isEnabled }) => ({
      title: 'Values',
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
      name: 'eyebrow',
      title: 'Eyebrow',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithMetadata'
    }),
    defineField({
      name: 'valuesList',
      title: 'Values List',
      type: 'array',
      validation: (Rule) => Rule.required().max(4),
      of: [
        {
          type: 'object',
          name: 'value',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    })
  ]
})
