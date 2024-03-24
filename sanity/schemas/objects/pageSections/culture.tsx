import {
  BlockElementIcon,
  CheckmarkCircleIcon,
  CloseCircleIcon
} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const culture = defineType({
  name: 'sanityPageSectionCulture',
  type: 'object',
  title: 'Culture',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'eyebrow',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Culture',
        subtitle,
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
      name: 'eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'cultureList',
      title: 'Culture List',
      type: 'array',
      validation: (rule) => rule.length(3),
      of: [
        {
          type: 'object',
          name: 'cultureListItem',
          title: 'Culture List Item',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'text', type: 'text', rows: 3 })
          ]
        }
      ]
    })
  ]
})

export default culture
