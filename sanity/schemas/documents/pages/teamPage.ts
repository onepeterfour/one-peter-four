import { defineField, defineType } from 'sanity'

// SANITY SCHEMA
export default defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
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
