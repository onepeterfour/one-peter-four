'use client'

import { createContactRequest } from '@/app/actions'
import React, { createRef, useEffect, useId, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { ToggleSwitch } from './ToggleSwitch'

const initialState = {
  message: ''
}

const formRef = createRef<HTMLFormElement>()

function SubmitButton({
  defaultLabel = 'Submit',
  successLabel
}: {
  defaultLabel?: string
  successLabel: string
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='mt-10 inline-flex rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800'
    >
      {pending ? 'Sending' : successLabel || defaultLabel}
    </button>
  )
}

export function ContactForm({ buttonLabel }: { buttonLabel: string }) {
  const [state, formAction] = useFormState(createContactRequest, initialState)
  const [newsletterEnabled, setNewsletterEnabled] = useState(false)

  useEffect(() => {
    if (state.message === 'Email sent!') {
      formRef?.current?.reset()
    }
  }, [state.message])

  return (
    <form action={formAction} ref={formRef}>
      <h2 className='font-display text-base font-bold text-neutral-950'>
        Work inquiries
      </h2>
      <div className='isolate mt-6 -space-y-px rounded-2xl bg-white/50'>
        <TextInput label='Name' name='name' autoComplete='name' required />
        <TextInput
          label='Email'
          type='email'
          name='email'
          autoComplete='email'
          required
        />
        <TextInput label='Company' name='company' autoComplete='organization' />
        <TextInput
          label='Phone'
          type='tel'
          name='phone'
          autoComplete='tel'
          pattern='(\\+44|0)[0-9]{10}'
        />
        <TextInput label='Message' name='message' required />
        <div className='group relative z-0 transition-all focus-within:z-10'>
          <div className='peer block w-full border border-neutral-300 bg-transparent px-6 pb-8 pt-8 text-base/6 text-neutral-500 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl'>
            <div className='flex items-center justify-between'>
              Subsribe to our newsletter
              <ToggleSwitch
                enabled={newsletterEnabled}
                setEnabled={setNewsletterEnabled}
              />
            </div>
          </div>
        </div>
        <input
          type='checkbox'
          name='newsletter'
          checked={newsletterEnabled}
          hidden
          readOnly
        />
      </div>
      {buttonLabel && <SubmitButton successLabel={state.message} />}
    </form>
  )
}

function TextInput({
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
