import { defineArrayMember, defineField, defineType } from 'sanity'

const teamPage = defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
      of: [
        defineArrayMember({
          name: 'callToAction',
          type: 'callToAction'
        }),
        defineArrayMember({
          name: 'cultureType',
          type: 'cultureType'
        }),
        defineArrayMember({
          name: 'heroWithoutImageType',
          type: 'heroWithoutImageType'
        }),
        defineArrayMember({
          name: 'statlistType',
          type: 'statlistType'
        }),
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

export default teamPage
