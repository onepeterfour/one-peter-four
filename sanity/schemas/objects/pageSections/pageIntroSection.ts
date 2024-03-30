import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { TypedObject, defineField, defineType } from 'sanity'

export interface SanityPageSectionPageIntro extends BasePageSectionSchema {
  _type: 'sanityPageSectionPageIntro'
  eyebrow?: string
  subtitle?: string
  title?: string
  body?: TypedObject[]
}

export default defineType({
  type: 'object',
  name: 'sanityPageSectionPageIntro',
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
        media: BlockElementIcon,
        isEnabled
      }
    }
  },
  components: {
    preview: CustomListPreview
  },
  fields: [
    defineField({
      name: 'isEnabled',
      type: 'boolean',
      description: 'If checked, this section will be shown on the page',
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
