import { Footer, Navigation } from '@/components/organisms'
import { footerData, navData } from '@/mockedCMSData'
import { PropsWithChildren } from 'react'
import { noto_serif, open_sans } from './fonts'
import './globals.css'

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
