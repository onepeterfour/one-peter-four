import { SanityCallToActionQueryResult } from '@/types/sanity/queries'

type CallToActionProps = SanityCallToActionQueryResult & {}
export const CallToAction = ({ title }: CallToActionProps) => {
  return <div>{title}</div>
}
