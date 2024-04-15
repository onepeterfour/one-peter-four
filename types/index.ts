/**
 * SANITY SPECIFIC TYPES
 */

export interface BasePageSectionSchema {
  _key: string
  isEnabled: boolean
}

export interface InternalLink {
  _type: 'internalLink'
  path: {
    _type: 'slug'
    current: string
  }
  _key: string
  label: string
}

export interface ExternalLink {
  _type: 'externalLink'
  _key: string
  label: string
  url: string
}
