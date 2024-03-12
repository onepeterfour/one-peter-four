import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { type SanityDocument } from 'next-sanity'
import { type ImageProps } from 'next/image'
import { TypedObject } from 'sanity'

type SiteLink = { href: string; label: string }

export type NavData = SiteLink[]

export type FooterData = Array<SiteLink[]>

// Sanity Object Types

type MetaData = {
  title: string
  description: string
}

// Sanity Page Sections

type BasePageSection = {
  _type: PageSectionName
  _key: string
  isShown: boolean
}
export type PageSectionName =
  | 'heroWithoutImageType'
  | 'pageIntroType'
  | 'statlistType'
  | 'cultureType'
  | 'clients'

export type HeroWithoutImageType = BasePageSection & {
  heading?: string
  subheading?: string
}

export type PageIntroType = BasePageSection & {
  eyebrow?: string
  subtitle?: string
  title?: string
  body?: TypedObject[]
}

type Stat = { _type: string; title: string; value: string }

export type StatsListType = BasePageSection & {
  stat_1: Stat
  stat_2: Stat
  stat_3: Stat
}

export type CultureType = BasePageSection & {
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

export type ClientsType = BasePageSection & {
  title: string
  clientsList?: Array<{
    name: string
    _type: string
    _key: string
    altText: string
    logo: SanityImageSource
  }>
}

type PageSection =
  | HeroWithoutImageType
  | PageIntroType
  | StatsListType
  | CultureType

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface Partner {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}
export type WithHrefMetadata<T> = T & { href: string; metadata: T }

export type BasePage = { metaData: MetaData; pageSections?: PageSection[] }

export type HomePage = SanityDocument<{}> & BasePage
export type TeamPage = SanityDocument<{}> & BasePage
export type ContactPage = SanityDocument<{}> & BasePage
