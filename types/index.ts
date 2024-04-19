import { MetaDataObject } from '@/sanity/schemas/objects/metaDataObject'
import { PageSection } from '@/sanity/schemas/objects/pageSections'

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

export interface FooterInternalLink extends InternalLink {
  hasArrow?: boolean
}

export interface ExternalLink {
  _type: 'externalLink'
  _key: string
  label: string
  url: string
}

export type PageName =
  | 'homePage'
  | 'servicesPage'
  | 'caseStudiesPage'
  | 'articlesPage'
  | 'contactPage'
  | 'learningPage'
  | 'partnersPage'
  | 'teamPage'

export interface PageSectionPage {
  _type: PageName
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  _originalId?: string | undefined
  metaData: MetaDataObject
  pageSections: PageSection[]
}
