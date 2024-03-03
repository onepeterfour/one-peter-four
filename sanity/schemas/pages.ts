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
          name: 'heroWithoutImageType',
          type: 'heroWithoutImageType'
        }),
        defineArrayMember({
          name: 'pageIntroType',
          type: 'pageIntroType'
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'callToAction'
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

const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      ]
    }),
    defineField({
      name: 'metaData',
      title: 'Metadata',
      type: 'metaDataType'
    })
  ]
})

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

const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
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

export const pages = [
  homePage,
  contactPage,
  learningPage,
  partnersPage,
  researchPage,
  servicesPage,
  teamPage
]
