type SiteLink = { href: string; label: string }

export type FooterData = Array<SiteLink[]>

/**
 * SANITY SPECIFIC TYPES
 */

export interface BasePageSectionSchema {
  _key: string
  isEnabled: boolean
}
