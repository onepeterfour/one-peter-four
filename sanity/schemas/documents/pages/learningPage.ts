import { ArrayOfType, defineArrayMember, defineField, defineType } from 'sanity'

const learningPage = defineType({
  name: 'learningPage',
  title: 'Learning Page',
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
      ] as unknown as ArrayOfType<'object'>[]
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})
export default learningPage
