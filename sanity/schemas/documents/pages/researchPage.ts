import { defineArrayMember, defineField, defineType } from 'sanity'

const researchPage = defineType({
  name: 'researchPage',
  title: 'Research Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
      of: [
        defineArrayMember({
          name: 'sanityPageSectionPageIntro',
          type: 'sanityPageSectionPageIntro'
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

export default researchPage
