import { RootLayout } from '@/components/RootLayout'
import VisualEditing from '@/components/VisualEditing'
import { draftMode } from 'next/headers'
import { PropsWithChildren } from 'react'
import { noto_serif, open_sans } from './fonts'
import './globals.css'

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className='h-full bg-neutral-950 text-base antialiased'>
      <body
        className={`${noto_serif.variable} ${open_sans.variable} flex min-h-full flex-col`}
      >
        <RootLayout>{children}</RootLayout>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
