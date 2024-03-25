import pageSections from './pageSections'

import { defineArrayMember, defineField, defineType } from 'sanity'

const enabled = defineType({
  name: 'enabled',
  type: 'boolean',
  description: 'If checked, this section will be shown on the page'
})

const imageWithMetadata = defineType({
  name: 'imageWithMetadata',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.required()
    })
  ],
  options: {
    hotspot: true
  },
  validation: (Rule) => Rule.required()
})

const metaDataType = defineType({
  name: 'metaDataType',
  type: 'object',
  title: 'Metadata',
  description: `This content is not visible on the page but is used by search engines and social media.`,
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3
    })
  ]
})

const pageSectionsArray = defineType({
  name: 'pageSectionsArray',
  title: 'Page Sections',
  type: 'array',
  description: `These are the sections of the page, organised in the order that they will appear, top to bottom.`,
  of: [
    defineArrayMember({
      name: 'sanityPageSectionCallToAction',
      type: 'sanityPageSectionCallToAction'
    }),
    defineArrayMember({
      name: 'sanityPageSectionCaseStudies',
      type: 'sanityPageSectionCaseStudies'
    }),
    defineArrayMember({
      name: 'sanityPageSectionClients',
      type: 'sanityPageSectionClients'
    }),
    defineArrayMember({
      name: 'sanityPageSectionContact',
      type: 'sanityPageSectionContact'
    }),
    defineArrayMember({
      name: 'sanityPageSectionCulture',
      type: 'sanityPageSectionCulture'
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
      name: 'sanityPageSectionPageIntro',
      type: 'sanityPageSectionPageIntro'
    }),
    defineArrayMember({
      name: 'sanityPageSectionResearchCards',
      type: 'sanityPageSectionResearchCards'
    }),
    defineArrayMember({
      name: 'sanityPageSectionTeam',
      type: 'sanityPageSectionTeam'
    }),
    defineArrayMember({
      name: 'sanityPageSectionTestimonial',
      type: 'sanityPageSectionTestimonial'
    }),
    defineArrayMember({
      name: 'sanityPageSectionValues',
      type: 'sanityPageSectionValues'
    })
  ]
})

const objects = [
  enabled,
  imageWithMetadata,
  metaDataType,
  ...pageSections,
  pageSectionsArray
]

export default objects
