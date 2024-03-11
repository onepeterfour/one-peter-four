import { defineArrayMember, defineField, defineType } from 'sanity'

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // fieldsets: [
  //   {
  //     name: 'metaData',
  //     title: 'Metadata',
  //     description: `This content is not visible on the page but is used by search engines and social media.`,
  //     options: { collapsible: true, collapsed: true }
  //   }
  // ],
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
      of: [
        defineArrayMember({
          name: 'heroType',
          type: 'heroType'
        }),
        defineArrayMember({
          name: 'heroWithoutImageType',
          type: 'heroWithoutImageType'
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'callToAction'
        }),
        defineArrayMember({
          name: 'clients',
          type: 'clients'
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

export default homePage
