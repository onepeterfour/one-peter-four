import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface CallToActionSectionSchema extends BasePageSectionSchema {
  _type: 'callToActionSection'
  title: string
  link: string
}

export default defineType({
  type: 'object',
  name: 'callToActionSection',
  title: 'Call to Action Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title',
      isEnabled: 'isEnabled'
    },
    prepare({ title, isEnabled }) {
      return {
        title: 'Call to Action Section',
        subtitle: title || 'untitled',
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
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'link',
      type: 'string'
    })
  ]
})
