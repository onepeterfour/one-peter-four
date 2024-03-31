import type { CallToActionSectionSchema } from '@/sanity/schemas/objects/pageSections/callToActionsSection'

type CallToActionProps = CallToActionSectionSchema & {}
export const CallToActionSection = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
