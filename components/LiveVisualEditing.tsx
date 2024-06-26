'use client'

import { client } from '@/sanity/lib/client'
import { useLiveMode } from '@sanity/react-loader'
import { VisualEditing } from 'next-sanity'
import { useEffect } from 'react'

// always enable stega in Live Mode
const stegaClient = client.withConfig({ stega: true })

export default function LiveVisualEditing() {
  useLiveMode({ client: stegaClient })

  useEffect(() => {
    // If not an iFrame or a Vercel Preview deployment, turn off Draft Mode

    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent) {
      location.href = 'api/disable-draft'
    }
  }, [])

  return <VisualEditing />
}
