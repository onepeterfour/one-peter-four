import { CustomListPreview } from '@/sanity/components/CustomListPreview'
import { BasePageSectionSchema } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { ArticleDocument } from '../../documents/data/article'
import { TeamMemberDocument } from '../../documents/data/teamMember'

export interface ArticleListSectionSchema extends BasePageSectionSchema {
  _type: 'articleListSection'
  eyebrow?: string
  articleList: Array<
    Pick<
      ArticleDocument,
      '_id' | 'slug' | 'title' | 'description' | '_updatedAt' | '_createdAt'
    > & {
      author: Pick<TeamMemberDocument, '_id' | 'name' | 'role' | 'image'>
    }
  >
}

export default defineType({
  type: 'object',
  name: 'articleListSection',
  title: 'Article List Section',
  icon: BlockElementIcon,
  preview: {
    select: {
      isEnabled: 'isEnabled'
    },
    prepare({ isEnabled }) {
      return {
        title: 'Article List',
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
      name: 'articleList',
      title: 'Article List',
      type: 'array',
      validation: (Rule) => Rule.required().max(4),
      of: [
        defineField({
          name: 'article',
          title: 'Article',
          type: 'reference',
          to: [{ type: 'articleDocument' }]
        })
      ]
    })
  ]
})
