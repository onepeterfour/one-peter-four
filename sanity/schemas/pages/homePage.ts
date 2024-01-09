import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [...sharedPageFields]
})
