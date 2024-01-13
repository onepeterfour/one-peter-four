import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'researchPage',
  title: 'Research Page',
  type: 'document',
  groups: [
    {
      name: 'page',
      title: 'Page',
      default: true
    },
    {
      name: 'meta',
      title: 'Meta'
    }
  ],
  fields: [...sharedPageFields]
})
