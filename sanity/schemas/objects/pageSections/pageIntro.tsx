import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionPageIntro',
  type: 'object',
  title: 'Page Intro',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'eyebrow',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Page Intro',
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
      rows: 4
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})
