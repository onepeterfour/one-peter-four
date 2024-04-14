import { BlockElementIcon } from '@sanity/icons'
import { type SanityDocument } from 'next-sanity'
import { defineArrayMember, defineField, defineType } from 'sanity'

interface NavigationLink {
  _type: 'navigationLink'
  path: string
  _key: string
  label: string
}

interface HeaderNavigationRow {
  _type: 'row'
  _key: string
  columns: NavigationLink[]
}

export interface HeaderNavigationDocument extends SanityDocument {
  _type: 'headerNavigation'
  _id: 'headerNavigation'
  title: string
  rows: HeaderNavigationRow[]
}

export default defineType({
  name: 'headerNavigation',
  title: 'Header Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          name: 'row',
          title: 'Row',
          type: 'object',
          preview: {
            select: {
              row0: 'columns.0.label',
              row1: 'columns.1.label'
            },
            prepare({ row0, row1 }) {
              return {
                title: 'Navigation Row',
                subtitle: `${row0} | ${row1}`,
                media: BlockElementIcon
              }
            }
          },
          fields: [
            defineField({
              name: 'columns',
              title: 'Columns',
              type: 'array',
              validation: (Rule) => Rule.required().max(2),
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
