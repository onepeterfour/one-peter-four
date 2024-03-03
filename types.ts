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
export type PageSectionName = 'heroWithoutImageType' | 'pageIntroType'

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

type PageSection = HeroWithoutImageType | PageIntroType

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
