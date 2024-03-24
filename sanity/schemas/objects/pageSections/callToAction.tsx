import {
  BlockElementIcon,
  CheckmarkCircleIcon,
  CloseCircleIcon
} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const callToAction = defineType({
  name: 'sanityPageSectionCallToAction',
  type: 'object',
  title: 'Call to Action',
  preview: {
    select: {
      title: 'title',
      isEnabled: 'isEnabled'
    },
    prepare({ title, isEnabled }) {
      return {
        title: 'Call to Action',
        subtitle: title || 'untitled',
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
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'link',
      type: 'url'
    })
  ],
  icon: BlockElementIcon
})

export default callToAction
