import type { SanityPageSectionCTA } from '@/sanity/schemas/objects/pageSections/callToActionsSection'

type CallToActionProps = SanityPageSectionCTA & {}
export const CallToAction = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
