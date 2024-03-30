import type { SanityPageSectionCTA } from '@/sanity/schemas/objects/pageSections/types'

type CallToActionProps = SanityPageSectionCTA & {}
export const CallToAction = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
