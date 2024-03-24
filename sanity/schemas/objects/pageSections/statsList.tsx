import {
  BlockElementIcon,
  CheckmarkCircleIcon,
  CloseCircleIcon
} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const statlist = defineType({
  name: 'sanityPageSectionStatsList',
  type: 'object',
  title: 'Stats List',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Stats List',
        media: isEnabled ? CheckmarkCircleIcon : CloseCircleIcon
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
      name: 'stats',
      title: 'Stats',
      type: 'array',
      description: 'Add up to 3 stats',
      validation: (Rule) => Rule.required().max(3),
      of: [
        {
          name: 'statlistObject',
          type: 'object',
          title: 'Stat',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'value',
              type: 'string',
              validation: (Rule) => Rule.required()
            })
          ]
        }
      ]
    })
  ]
})

export default statlist
