import { SanityDocument } from 'next-sanity'
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
export type PageSectionName =
  | 'heroWithoutImageType'
  | 'pageIntroType'
  | 'statlistType'

export type HeroWithoutImageType = {
  _type: PageSectionName
  _key: string
  heading?: string
  subheading?: string
}

export type PageIntroType = {
  _type: PageSectionName
  _key: string
  eyebrow?: string
  subtitle?: string
  title?: string
  body?: TypedObject[]
}

type Stat = { _type: string; title: string; value: string }

export type StatListType = {
  _type: PageSectionName
  _key: string
  stat_1: Stat
  stat_2: Stat
  stat_3: Stat
}

type PageSection = HeroWithoutImageType | PageIntroType | StatListType

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
