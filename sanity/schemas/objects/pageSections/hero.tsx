import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sanityPageSectionHeroWithImage',
  type: 'object',
  title: 'Hero With Image',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'heading',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Hero With Image',
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
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'imageWithMetadata'
    })
  ]
})
