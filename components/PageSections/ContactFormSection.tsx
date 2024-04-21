import { ContactFormSectionSchema } from '@/sanity/schemas/objects/pageSections/contactFormSection'
import { Border } from '../Border'
import { ContactForm } from '../ContactForm'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { Offices } from '../Offices'
import { SocialMedia } from '../SocialMedia'

export const ContactFormSection = ({
  buttonLabel,
  text,
  _type
}: Omit<ContactFormSectionSchema, 'isEnabled'>) => {
  return (
    <Container id={_type} className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2'>
        <FadeIn className='lg:order-last'>
          <ContactForm buttonLabel={buttonLabel} />
        </FadeIn>
        <FadeIn>
          <h2 className='font-display text-base font-bold text-neutral-950'>
            Our office
          </h2>
          {text && <p className='mt-6 text-base text-neutral-600'>{text}</p>}
          <Offices className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />
          <Border className='mt-16 pt-16'>
            <h2 className='font-display text-base font-bold text-neutral-950'>
              Follow us
            </h2>
            <SocialMedia className='mt-6' />
          </Border>
        </FadeIn>
      </div>
    </Container>
  )
}
