// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_SANITY_PROJECT_ID?: string
    NEXT_PUBLIC_SANITY_DATASET?: string
    NEXT_PUBLIC_SANITY_API_VERSION?: string
    NEXT_PUBLIC_TURNSTILE_SITE_KEY?: string
    SANITY_API_READ_TOKEN?: string
    RESEND_API_KEY?: string
    RESEND_SEND_FROM_EMAIL?: string
    RESEND_SEND_TO_EMAIL?: string
    RESEND_AUDIENCE_ID?: string
    TURNSTILE_SECRET_KEY?: string
  }
}
