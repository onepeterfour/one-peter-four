import { defineArrayMember, defineField, defineType } from 'sanity'

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      description: `Add sections to your page and rearrange them as you like.`,
      of: [
        defineArrayMember({
          name: 'heroWithoutImage',
          type: 'heroWithoutImage'
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'callToAction'
        })
      ]
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
    })
  ]
})

const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
    })
  ]
})

const learningPage = defineType({
  name: 'learningPage',
  title: 'Learning Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
    })
  ]
})

const partnersPage = defineType({
  name: 'partnersPage',
  title: 'Partners Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
    })
  ]
})

const researchPage = defineType({
  name: 'researchPage',
  title: 'Research Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
    })
  ]
})

const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
    })
  ]
})

const teamPage = defineType({
  name: 'teamPage',
  title: 'Team Page',
  type: 'document',
  fieldsets: [
    {
      name: 'metaData',
      title: 'Metadata',
      description: `This content is not visible on the page but is used by search engines and social media.`,
      options: { collapsible: true, collapsed: true }
    }
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'metaData'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'metaData'
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
