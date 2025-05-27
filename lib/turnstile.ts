import { validateTurnstileToken } from 'next-turnstile'
import assertValue from './assertValue'

const turnstileSecretKey = assertValue(
  process.env.TURNSTILE_SECRET_KEY,
  'Missing environment variable: TURNSTILE_SECRET_KEY'
)

export const validateTurnstile = async ({
  token,
  sandbox
}: {
  token: string | null
  sandbox?: boolean
}) => {
  if (!token || typeof token !== 'string') {
    console.error('No turnstile token provided')
    return { success: false, message: 'Cloudflare Turnstile token missing' }
  }

  const turnstileResponse = await validateTurnstileToken({
    token,
    secretKey: turnstileSecretKey,
    sandbox
  })

  if (!turnstileResponse.success) {
    console.error('Turnstile submission error: ', turnstileResponse.error_codes)

    return {
      success: false,
      message: 'Turnstile validation failed.'
    }
  }

  return {
    message: 'Turnstile token validated successfully.',
    success: true
  }
}
