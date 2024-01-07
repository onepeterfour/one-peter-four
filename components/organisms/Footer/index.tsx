import Link from 'next/link'

type FooterProps = {
  footerData: FooterData
}

export const Footer = ({ footerData }: FooterProps) => {
  return (
    <footer className='p-8 font-sans'>
      <div className='mx-auto flex max-w-prose justify-around gap-4'>
        {footerData.map((column, index) => {
          return (
            <div key={index} className='flex flex-col gap-4'>
              {column.map((footerItem) => (
                <Link key={footerItem.href} href={footerItem.href}>
                  {footerItem.label}
                </Link>
              ))}
            </div>
          )
        })}
      </div>
    </footer>
  )
}
