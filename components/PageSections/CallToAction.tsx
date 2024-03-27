import { SanityPageSectionCTA } from '@/sanity/schemas/objects/pageSectionsArrayObject'

type CallToActionProps = SanityPageSectionCTA & {}
export const CallToAction = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
