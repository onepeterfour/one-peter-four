import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

// SANITY SCHEMA
export default defineType({
  name: 'articlesPage',
  title: 'Articles Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Page Sections',
        media: BlockElementIcon
      }
    }
  },
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'pageSectionsArray'
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})
