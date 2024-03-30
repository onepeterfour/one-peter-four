import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface SanityPageSectionStatsList extends BasePageSectionSchema {
  _type: 'sanityPageSectionStatsList'
  statsList: Array<{
    _type: string
    _key: string
    title: string
    value: string
  }>
}

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