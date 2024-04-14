import { SanityDocument } from 'next-sanity'
import { defineArrayMember, defineField, defineType } from 'sanity'

interface NavigationLink {
  _type: 'navigationLink'
  _key: string
  path: string
  label: string
}

interface NavigationColumn {
  _type: 'navigationColumn'
  _key: string
  columnTitle: string
  navigationLinks: NavigationLink[]
}

export interface FooterNavigationDocument extends SanityDocument {
  _type: 'footerNavigation'
  _id: 'footerNavigation'
  title: string
  navigationColumns: NavigationColumn[]
}

export default defineType({
  name: 'footerNavigation',
  title: 'Footer Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'navigationColumns',
      title: 'Navigation Columns',
      type: 'array',
      validation: (Rule) => Rule.required().max(4),
      of: [
        defineArrayMember({
          name: 'navigationColumn',
          title: 'Navigation Column',
          type: 'object',
          fields: [
            defineField({
              name: 'columnTitle',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'navigationLinks',
              title: 'Navigation Links',
              type: 'array',
              validation: (Rule) => Rule.required().max(4),
              of: [
                defineArrayMember({
                  name: 'navigationLink',
                  title: 'Navigation Link',
                  type: 'object',
                  validation: (Rule) => Rule.required(),
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required()
                    }),
                    defineField({
                      name: 'path',
                      title: 'Path',
                      type: 'string',
                      validation: (Rule) => Rule.required()
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  ]
})
