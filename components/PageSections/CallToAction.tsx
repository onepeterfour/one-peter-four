import { SanityPageSectionCallToAction } from '@/types/sanity/objects/pageSections'

type CallToActionProps = SanityPageSectionCallToAction & {}
export const CallToAction = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
