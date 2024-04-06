import { defineField, defineType } from 'sanity'

interface Quote {
  _type: 'quote'
  text: string
  name: string
  role: string
  company: string
}

export interface QuoteObject {
  _type: 'quoteObject'
  _key: string
  quote: Quote
}

export default defineType({
  name: 'quoteObject',
  title: 'Quote Object',
  type: 'object',
  preview: {
    prepare: () => ({
      title: 'Quote'
    })
  },
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
          validation: (rule) => rule.required()
        }),
        defineField({
          name: 'company',
          title: 'Company',
          type: 'string',
          validation: (rule) => rule.required()
        })
      ]
    })
  ]
})
