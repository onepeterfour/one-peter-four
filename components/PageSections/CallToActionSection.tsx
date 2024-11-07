import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import type { CallToActionSectionSchema } from '@/sanity/schemas/objects/pageSections/callToActionsSection'

type CallToActionProps = Omit<CallToActionSectionSchema, 'isEnabled'> & {}
export const CallToActionSection = ({ title, link }: CallToActionProps) => {
  return (
    <Container className='mt-16'>
      <FadeIn className='text-center'>
        <Button href={link}>{title}</Button>
      </FadeIn>
    </Container>
  )
}
