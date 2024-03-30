import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'sanityPageSectionContact',
  title: 'Contact',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare: ({ isEnabled }) => ({
      title: 'Contact',
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
