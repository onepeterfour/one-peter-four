import { defineArrayMember, defineField, defineType } from 'sanity'

const partnersPage = defineType({
  name: 'partnersPage',
  title: 'Partners Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
      of: [
        defineArrayMember({
          name: 'pageIntroType',
          type: 'pageIntroType'
        })
      ]
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})

export default partnersPage
