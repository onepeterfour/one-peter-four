import { type SchemaTypeDefinition } from 'sanity'
import { contentBlocks } from './schemas/contentBlocks'
import { objects } from './schemas/objects'
import { pages } from './schemas/pages'

import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objects, ...contentBlocks, ...pages, siteSettings]
}
