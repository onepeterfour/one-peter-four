import { type SchemaTypeDefinition } from 'sanity'
import { objects } from './schemas/objects'
import { pageSections } from './schemas/pageSections'
import { pages } from './schemas/pages'

import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objects, ...pageSections, ...pages, siteSettings]
}
