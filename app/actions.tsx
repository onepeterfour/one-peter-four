'use server'

import ContactFormSubmission from '@/emails/ContactFormSubmission'
import EnquiryReply from '@/emails/EnquiryReply'
import assertValue from '@/lib/assertValue'
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

const resend = new Resend(RESEND_API_KEY)

export async function createContactRequest(
  state: { message: string },
  payload: FormData
) {
  const userName = payload.get('name') as string
  const userEmail = payload.get('email') as string
  const userMessage = payload.get('message') as string
  const userPhone =
    (payload.get('phone') as string) || 'no phone number provided'
  const userCompany =
    (payload.get('company') as string) || 'no company name provided'

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

  return { message: 'Email sent!' }
}
