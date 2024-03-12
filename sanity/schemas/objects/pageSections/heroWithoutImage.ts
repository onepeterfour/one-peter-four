import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const heroWithoutImage = defineType({
  type: 'object',
  name: 'sanityPageSectionHeroWithoutImage',
  title: 'Hero Without Image',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'heading'
    },
    prepare({ subtitle }) {
      return {
        title: 'Hero Without Image',
        subtitle,
        media: BlockElementIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'isShown',
      title: 'isShown',
      type: 'isShown',
      initialValue: false
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required()
    })
  ]
})

export default heroWithoutImage
