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
