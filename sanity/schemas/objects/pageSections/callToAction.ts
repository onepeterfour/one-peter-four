import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const callToAction = defineType({
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'isShown',
      title: 'isShown',
      type: 'isShown',
      initialValue: false
    }),
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'link',
      type: 'url'
    })
  ],
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: 'Call to Action',
        subtitle: title || 'untitled',
        media: BlockElementIcon
      }
    }
  }
})

export default callToAction
