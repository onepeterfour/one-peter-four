import { defineType } from 'sanity'
import { sharedPageFields } from './shared/fields'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [...sharedPageFields]
})
