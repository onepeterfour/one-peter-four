import { type ImageProps } from 'next/image'

type SiteLink = { href: string; label: string }

export type FooterData = Array<SiteLink[]>

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
