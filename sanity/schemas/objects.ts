import { BlockElementIcon, LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const heroWithoutImage = defineType({
  type: 'object',
  name: 'heroWithoutImage',
  title: 'Hero Without Image',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string'
    })
  ],
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
  }
})

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

const meta = defineType({
  type: 'object',
  name: 'meta',
  description: `This content is not visible on the page but is used by search engines and social media.`,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    })
  ]
})

export const objects = [meta, heroWithoutImage, callToAction]
