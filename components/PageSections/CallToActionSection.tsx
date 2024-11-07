import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import type { CallToActionSectionSchema } from '@/sanity/schemas/objects/pageSections/callToActionsSection'

type CallToActionProps = Omit<CallToActionSectionSchema, 'isEnabled'> & {}
export const CallToActionSection = ({ title, link }: CallToActionProps) => {
  console.log('CALL TO ACTION BEING USED')
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn className='max-w-fit sm:mx-0 sm:py-32 md:px-12'>
        <Button href={link}>{title}</Button>
      </FadeIn>
    </Container>
  )
}
