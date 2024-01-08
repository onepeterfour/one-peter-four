import { Footer, Navigation } from '@/components/organisms'
import { footerData, navData } from '@/mockedCMSData'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { noto_serif, open_sans } from '../fonts'
import '../globals.css'

export const metadata: Metadata = {
  title: 'One Peter Four: Coming Soon',
  description: 'Organisation design from people who care'
}

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${noto_serif.variable} ${open_sans.variable} grid min-h-dvh grid-rows-[auto_1fr_auto]`}
      >
        <Navigation navData={navData} />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  )
}
