import type { SanityPageSectionCTA } from '@/sanity/schemas/objects/pageSectionsArrayObject/types'

type CallToActionProps = SanityPageSectionCTA & {}
export const CallToAction = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
