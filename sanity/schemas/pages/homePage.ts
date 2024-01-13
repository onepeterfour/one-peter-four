import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
