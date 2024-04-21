import { ContactFormSectionSchema } from '@/sanity/schemas/objects/pageSections/contactFormSection'
import Link from 'next/link'
import React, { useId } from 'react'
import { Border } from '../Border'
import { Button } from '../Button'
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
          <form>
            <h2 className='font-display text-base font-bold text-neutral-950'>
              Work inquiries
            </h2>
            <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
              <TextInput label='Name' name='name' autoComplete='name' />
              <TextInput
                label='Email'
                type='email'
                name='email'
                autoComplete='email'
              />
              <TextInput
                label='Company'
                name='company'
                autoComplete='organization'
              />
              <TextInput
                label='Phone'
                type='tel'
                name='phone'
                autoComplete='tel'
              />
              <TextInput label='Message' name='message' />
            </div>
            {buttonLabel && (
              <Button type='submit' className='mt-10'>
                {buttonLabel}
              </Button>
            )}
          </form>
        </FadeIn>
        <FadeIn>
          <h2 className='font-display text-base font-bold text-neutral-950'>
            Our office
          </h2>
          {text && <p className='mt-6 text-base text-neutral-600'>{text}</p>}

          <Offices className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2' />

          <Border className='mt-16 pt-16'>
            <h2 className='font-display text-base font-bold text-neutral-950'>
              Email us
            </h2>
            <dl className='mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2'>
              {[
                ['Careers', 'careers@studioagency.com'],
                ['Press', 'press@studioagency.com']
              ].map(([label, email]) => (
                <div key={email}>
                  <dt className='font-semibold text-neutral-950'>{label}</dt>
                  <dd>
                    <Link
                      href={`mailto:${email}`}
                      className='text-neutral-600 hover:text-neutral-950'
                    >
                      {email}
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </Border>

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

export function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className='group relative z-0 transition-all focus-within:z-10'>
      <input
        type='text'
        id={id}
        {...props}
        placeholder=' '
        className='peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl'
      />
      <label
        htmlFor={id}
        className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950'
      >
        {label}
      </label>
    </div>
  )
}
