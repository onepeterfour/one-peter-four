import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'sanityPageSectionStatsList',
  title: 'Stats List',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Stats List',
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
      name: 'statsList',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'stat',
          title: 'Stat',
          fields: [
            defineField({
              name: 'title',
              type: 'string'
            }),
            defineField({
              name: 'value',
              type: 'string'
            })
          ]
        })
      ]
    })
  ]
})
