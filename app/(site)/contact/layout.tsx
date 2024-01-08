import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Peter Four: Contact',
  description: 'Would you like to get in touch?'
}

export default function ContactLayout({ children }: React.PropsWithChildren) {
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      {children}
    </main>
  )
}
