import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
      of: [
        defineArrayMember({
          name: 'sanityPageSectionCaseStudies',
          type: 'sanityPageSectionCaseStudies'
        }),
        defineArrayMember({
          name: 'sanityPageSectionContact',
          type: 'sanityPageSectionContact'
        }),
        defineArrayMember({
          name: 'sanityPageSectionPageIntro',
          type: 'sanityPageSectionPageIntro'
        }),
        defineArrayMember({
          name: 'sanityPageSectionTestimonial',
          type: 'sanityPageSectionTestimonial'
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
