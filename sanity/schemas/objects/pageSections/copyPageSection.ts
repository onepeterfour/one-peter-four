import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { TypedObject, defineField, defineType } from 'sanity'

export interface CopyPageSectionSchema extends BasePageSectionSchema {
  _type: 'copyPageSection'
  body: TypedObject[]
}

export default defineType({
  type: 'object',
  name: 'copyPageSection',
  title: 'Copy Page Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare: ({ isEnabled }) => ({
      title: 'Copy Page Section',
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
      name: 'body',
      title: 'Body',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'block' }, { type: 'imageWithMetadata' }]
    })
  ]
})
