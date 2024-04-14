import { RootLayout } from '@/components/RootLayout'
import VisualEditing from '@/components/VisualEditing'
import { draftMode } from 'next/headers'
import { PropsWithChildren } from 'react'
import { fetchNavigation } from '../api/fetchNavigation'
import { noto_serif, open_sans } from './fonts'
import './globals.css'

export default async function SiteLayout({ children }: PropsWithChildren) {
  const headerNavigation = await fetchNavigation('headerNavigation')

  return (
    <html lang='en' className='h-full bg-neutral-950 text-base antialiased'>
      <body
        className={`${noto_serif.variable} ${open_sans.variable} flex min-h-full flex-col`}
      >
        <RootLayout headerNavigation={headerNavigation}>{children}</RootLayout>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
