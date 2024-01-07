import type { Metadata } from 'next'
import { noto_serif, open_sans } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'One Peter Four: Coming Soon',
  description: 'Organisation design from people who care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${noto_serif.variable} ${open_sans.variable}`}>
        {children}
      </body>
    </html>
  )
}
