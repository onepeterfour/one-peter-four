import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface TextListSectionSchema extends BasePageSectionSchema {
  _type: 'textListSection'
  eyebrow?: string
  title?: string
  subtitle?: string
  textList?: Array<{
    title?: string
    text?: string
    _key: string
    _type: string
  }>
}

export default defineType({
  type: 'object',
  name: 'textListSection',
  title: 'Text List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      subtitle: 'eyebrow',
      isEnabled: 'isEnabled'
    },
    prepare({ subtitle, isEnabled }) {
      return {
        title: 'Text List Section',
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
      rows: 2
    }),
    defineField({
      name: 'textList',
      title: 'Text List',
      type: 'array',
      validation: (rule) => rule.length(3),
      of: [
        {
          type: 'object',
          name: 'textItem',
          title: 'Text Item',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'text', type: 'text', rows: 3 })
          ]
        }
      ]
    })
  ]
})
