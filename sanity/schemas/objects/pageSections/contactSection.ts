import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface ContactSectionSchema extends BasePageSectionSchema {
  _type: 'contactSection'
  title: string
  buttonLabel: string
}

export default defineType({
  type: 'object',
  name: 'contactSection',
  title: 'Contact Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare: ({ isEnabled }) => ({
      title: 'Contact Section',
      media: BlockElementIcon,
      isEnabled
    })
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
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ]
})
