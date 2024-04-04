import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export interface StatisticSchema {
  _type: 'statistic'
  _key: string
  title: string
  value: string
}
export interface StatisticListSectionSchema extends BasePageSectionSchema {
  _type: 'statisticListSection'
  statisticList: StatisticSchema[]
}

export default defineType({
  type: 'object',
  name: 'statisticListSection',
  title: 'Statistic List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Statistic List Section',
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
      name: 'statisticList',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'statistic',
          title: 'Statistic',
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
