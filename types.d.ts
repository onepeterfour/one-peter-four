type SiteLink = { href: string; label: string }

type NavData = SiteLink[]

type FooterData = Array<SiteLink[]>

// Sanity Object Types

type QueryResult<T> = {
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

type BasePage = {
  title: string
  heading: string
  description: string
}
