import { defineField, defineType } from 'sanity'

// SANITY SCHEMA
export default defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Page',
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
