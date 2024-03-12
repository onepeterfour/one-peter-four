import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const heroType = defineType({
  name: 'heroType',
  type: 'object',
  title: 'Hero',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'heading'
    },
    prepare({ subtitle }) {
      return {
        title: 'Hero With Image',
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
      type: 'string'
    }),
    defineField({
      name: 'tagline',
      type: 'string'
    }),
    defineField({
      name: 'imageObject',
      title: 'Image',
      type: 'imageObject',
      icon: BlockElementIcon
    })
  ]
})

export default heroType
