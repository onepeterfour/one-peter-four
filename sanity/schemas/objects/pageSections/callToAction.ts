import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const callToAction = defineType({
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'link',
      type: 'url'
    })
  ],
  icon: LinkIcon,
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: 'Call to Action',
        subtitle: title || 'untitled',
        media: LinkIcon
      }
    }
  }
})

export default callToAction
