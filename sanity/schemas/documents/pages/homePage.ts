import { defineArrayMember, defineField, defineType } from 'sanity'

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
        }),
        defineArrayMember({
          name: 'sanityPageSectionHeroWithImage',
          type: 'sanityPageSectionHeroWithImage'
        }),
        defineArrayMember({
          name: 'sanityPageSectionHeroWithoutImage',
          type: 'sanityPageSectionHeroWithoutImage'
        }),
        defineArrayMember({
          name: 'sanityPageSectionCallToAction',
          type: 'sanityPageSectionCallToAction'
        }),
        defineArrayMember({
          name: 'sanityPageSectionClients',
          type: 'sanityPageSectionClients'
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
