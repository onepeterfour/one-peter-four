import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [
        {
          name: 'navigationRow',
          title: 'Navigation Row',
          type: 'object',
          preview: {
            select: {
              items: 'items'
            },
            prepare({ items }) {
              const itemTitles = items
                .map((item: { path: string; label: string }) => item.label)
                .join(', ')
              return {
                title: `Navigation Row`,
                subtitle: itemTitles
              }
            }
          },
          fields: [
            defineField({
              name: 'order',
              title: 'Order',
              type: 'number',
              validation: (Rule) => Rule.required().integer().min(1)
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  name: 'navigationItem',
                  title: 'Navigation Item',
                  type: 'object',
                  preview: {
                    select: {
                      title: 'path'
                    },
                    prepare({ title }) {
                      return {
                        title
                      }
                    }
                  },
                  fields: [
                    defineField({
                      name: 'path',
                      title: 'Path',
                      type: 'string'
                    }),
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string'
                    })
                  ]
                }
              ],
              validation: (Rule) => Rule.max(2)
            })
          ]
        }
      ]
    })
  ]
})
