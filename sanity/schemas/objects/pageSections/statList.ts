import { BlockElementIcon, LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const statlist = defineType({
  name: 'statlistType',
  type: 'object',
  title: 'Stat List',
  icon: BlockElementIcon,
  preview: {
    prepare() {
      return {
        title: 'Stat List',
        media: LinkIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'stat_1',
      title: 'Stat 1',
      type: 'statlistObject'
    }),
    defineField({
      name: 'stat_2',
      title: 'Stat 2',
      type: 'statlistObject'
    }),
    defineField({
      name: 'stat_3',
      title: 'Stat 3',
      type: 'statlistObject'
    })
  ]
})

export default statlist
