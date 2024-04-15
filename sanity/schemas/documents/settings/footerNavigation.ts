import { ExternalLink, FooterInternalLink } from '@/types'
import { BlockElementIcon } from '@sanity/icons'
import { SanityDocument } from 'next-sanity'
import { defineArrayMember, defineField, defineType } from 'sanity'

interface NavigationColumn {
  _type: 'navigationColumn'
  _key: string
  columnTitle: string
  navigationLinks: Array<FooterInternalLink | ExternalLink>
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
          preview: {
            select: {
              title: 'title',
              link0: 'navigationLinks.0.label',
              link1: 'navigationLinks.1.label',
              link2: 'navigationLinks.2.label',
              link3: 'navigationLinks.3.label'
            },
            prepare({ title, link0, link1, link2, link3 }) {
              return {
                title,
                subtitle: `${link0 || 'not set'} | ${link1 || 'not set'} | ${link2 || 'not set'} | ${link3 || 'not set'} `,
                media: BlockElementIcon
              }
            }
          },
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
                  name: 'internalLink',
                  title: 'Internal Link',
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
                      type: 'slug',
                      validation: (Rule) => Rule.required()
                    }),
                    defineField({
                      name: 'hasArrow',
                      title: 'Add Arrow',
                      type: 'boolean',
                      initialValue: false,
                      description: 'Add an arrow to the right of the link'
                    })
                  ]
                }),
                defineArrayMember({
                  name: 'externalLink',
                  title: 'External Link',
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
                      name: 'url',
                      title: 'Url',
                      type: 'url',
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
