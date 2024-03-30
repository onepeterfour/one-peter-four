import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'sanityPageSectionCallToAction',
  title: 'Call to Action',
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title',
      isEnabled: 'isEnabled'
    },
    prepare({ title, isEnabled }) {
      return {
        title: 'Call to Action',
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
      type: 'url'
    })
  ]
})
