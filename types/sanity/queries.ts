import type { MetaData } from '@/types/sanity/objects'
import type { SanityDocument } from 'next-sanity'
import type { Image, TypedObject } from 'sanity'

export type SanityHeroWithImageQueryResult = {
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

export type SanityHeroWithoutImageQueryResult = {
  _type: 'sanityPageSectionHeroWithoutImage'
  _key: string
  isShown: boolean
  heading?: string
  subheading?: string
}

export type SanityPageIntroQueryResult = {
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

export type SanityStatsListQueryResult = {
  _type: 'sanityPageSectionStatsList'
  _key: string
  isShown: boolean
  stats?: Stat[]
}

export type SanityCultureQueryResult = {
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

export type SanityClientsQueryResult = {
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

export type SanityCallToActionQueryResult = {
  _type: 'sanityPageSectionCallToAction'
  _key: string
  isShown: boolean
  title: string
  // link: string
}

type PageSectionQueryResult =
  | SanityHeroWithImageQueryResult
  | SanityHeroWithoutImageQueryResult
  | SanityPageIntroQueryResult
  | SanityStatsListQueryResult
  | SanityCultureQueryResult
  | SanityClientsQueryResult
  | SanityCallToActionQueryResult

export type BasePageQueryResult = {
  metaData: MetaData
  pageSections?: PageSectionQueryResult[]
}

export type HomePageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type TeamPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ContactPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type LearningPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type PartnersPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ResearchPageQueryResult = SanityDocument<{}> & BasePageQueryResult
export type ServicesPageQueryResult = SanityDocument<{}> & BasePageQueryResult
