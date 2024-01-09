import { defineType } from 'sanity'

export default defineType({
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
})
