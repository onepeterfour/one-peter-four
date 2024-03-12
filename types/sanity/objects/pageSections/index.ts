import type { Image, TypedObject } from 'sanity'

export type SanityPageSectionTypeNames =
  | 'sanityPageSectionHeroWithoutImage'
  | 'sanityPageSectionHeroWithImage'
  | 'sanityPageSectionPageIntro'
  | 'sanityPageSectionStatsList'
  | 'sanityPageSectionCulture'
  | 'sanityPageSectionClients'

export type SanityPageSectionHeroWithImage = {
  _type: 'sanityPageSectionHeroWithImage'
  _key: string
  isShown: boolean
  heading: string
  tagline: string
  imageObject: {
    _type: 'imageObject'
    alt: string
    media: Image
  }
}

export type SanityPageSectionHeroWithoutImage = {
  _type: 'sanityPageSectionHeroWithoutImage'
  _key: string
  isShown: boolean
  heading?: string
  subheading?: string
}

export type SanityPageSectionPageIntro = {
  _type: 'sanityPageSectionPageIntro'
  _key: string
  isShown: boolean
  eyebrow?: string
  subtitle?: string
  title?: string
  body?: TypedObject[]
}

type Stat = {
  _type: string
  _key: string
  title: string
  value: string
}

export type SanityPageSectionStatsList = {
  _type: 'sanityPageSectionStatsList'
  _key: string
  isShown: boolean
  stats?: Stat[]
}

export type SanityPageSectionCulture = {
  _type: 'sanityPageSectionCulture'
  _key: string
  isShown: boolean
  eyebrow?: string
  title?: string
  subtitle?: string
  cultureList?: Array<{
    title?: string
    text?: string
    _key: string
    _type: string
  }>
}

export type SanityPageSectionClients = {
  _type: 'sanityPageSectionClients'
  _key: string
  isShown: boolean
  title: string
  clientsList?: Array<{
    name: string
    _type: string
    _key: string
    altText: string
    logo: Image
  }>
}
