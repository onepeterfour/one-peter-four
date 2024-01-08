export const metadata = {
  title: 'One Peter Four: Studio',
  description: 'CMS interface for OnePeterFour'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
