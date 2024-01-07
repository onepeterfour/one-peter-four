import Link from 'next/link'

type NavigationProps = {
  navData: NavData
}

export const Navigation = ({ navData }: NavigationProps) => {
  return (
    <nav className='p-8 font-sans'>
      <div className='mx-auto flex max-w-prose justify-between'>
        {navData.map((navItem) => (
          <Link key={navItem.href} href={navItem.href}>
            {navItem.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
