import { type ImageProps } from 'next/image'

type SiteLink = { href: string; label: string }

export type NavData = SiteLink[]

export type FooterData = Array<SiteLink[]>

// Sanity Object Types

export type QueryResult<T> = {
  query: string
  result: Array<
    {
      _id: string
      _updatedAt: string
      _createdAt: string
      _rev: string
      _type: string
    } & T
  >
  ms: number
}

export type BasePage = {
  title: string
  heading: string
  description: string
}

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

export interface CaseStudy {
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
