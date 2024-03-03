import { BlockElementIcon, LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

/**
 * HERO BLOCK
 */
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
      name: 'heading',
      type: 'string'
    }),
    defineField({
      name: 'tagline',
      type: 'string'
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        })
      ]
    })
  ]
})

/**
 * HERO_WITHOUT_IMAGE BLOCK
 */
const heroWithoutImageType = defineType({
  type: 'object',
  name: 'heroWithoutImageType',
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

/**
 * PAGE_INTRO BLOCK
 */
const pageIntroType = defineType({
  name: 'pageIntroType',
  type: 'object',
  title: 'Page Intro',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'eyebrow'
    },
    prepare({ subtitle }) {
      return {
        title: 'Page Intro',
        subtitle,
        media: BlockElementIcon
      }
    }
  },
  fields: [
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

/**
 * CALL_TO_ACTION BLOCK
 */
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

export const pageSections = [
  heroType,
  pageIntroType,
  heroWithoutImageType,
  callToAction
]
