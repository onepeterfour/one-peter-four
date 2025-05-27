'use server'

import ContactFormSubmission from '@/emails/ContactFormSubmission'
import EnquiryReply from '@/emails/EnquiryReply'
import assertValue from '@/lib/assertValue'
import { validateTurnstile } from '@/lib/turnstile'
import { Resend } from 'resend'

const RESEND_API_KEY = assertValue(
  process.env.RESEND_API_KEY,
  'Missing environment variable: RESEND_API_KEY'
)
const RESEND_SEND_FROM_EMAIL = assertValue(
  process.env.RESEND_SEND_FROM_EMAIL,
  'Missing environment variable: RESEND_SEND_FROM_EMAIL'
)
const RESEND_SEND_TO_EMAIL = assertValue(
  process.env.RESEND_SEND_TO_EMAIL,
  'Missing environment variable: RESEND_SEND_TO_EMAIL'
)

const RESEND_AUDIENCE_ID = assertValue(
  process.env.RESEND_AUDIENCE_ID,
  'Missing environment variable: RESEND_AUDIENCE_ID'
)

const resend = new Resend(RESEND_API_KEY)

export async function createContactRequest(
  state: { message: string },
  payload: FormData
) {
  const userFirstName = payload.get('firstName') as string
  const userLastName = payload.get('lastName') as string
  const userName = `${userFirstName} ${userLastName}`
  const userEmail = payload.get('email') as string
  const userMessage = payload.get('message') as string
  const userPhone =
    (payload.get('phone') as string) || 'no phone number provided'
  const userCompany =
    (payload.get('company') as string) || 'no company name provided'

  const newsletter = (payload.get('newsletter') as string) || null

  const turnstileToken = payload.get('cf-turnstile-response') as string | null

  const { message: turnstileMessage, success: turnstileSuccess } =
    await validateTurnstile({
      token: turnstileToken
    })

  if (!turnstileSuccess) {
    console.error(turnstileMessage)
    return { message: 'Turnstile validation failed.' }
  }

  const { error: sendError } = await resend.emails.send({
    from: RESEND_SEND_FROM_EMAIL,
    to: RESEND_SEND_TO_EMAIL,
    subject: `Website Enquiry from ${userName}`,
    react: (
      <ContactFormSubmission
        userEmail={userEmail}
        userName={userName}
        userMessage={userMessage}
        userPhone={userPhone}
        userCompany={userCompany}
      />
    )
  })

  if (sendError) {
    console.error(sendError)
    return { message: 'Try again' }
  }

  const { error: replyError } = await resend.emails.send({
    from: RESEND_SEND_FROM_EMAIL,
    to: userEmail,
    subject: `Thank you for your enquiry to One Peter Four`,
    react: <EnquiryReply userName={userName} />
  })

  if (replyError) {
    console.error(replyError)
  }

  if (newsletter) {
    const { error } = await resend.contacts.create({
      audienceId: RESEND_AUDIENCE_ID,
      email: userEmail,
      firstName: userFirstName,
      lastName: userLastName,
      unsubscribed: false
    })

    if (error) {
      console.error({ error })
    }
  }

  return { message: 'Email sent!' }
}
