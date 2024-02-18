import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import logoBrightPath from '@/public/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/public/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/public/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/public/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/public/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/public/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/public/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/public/images/clients/unseal/logo-dark.svg'
import Image from 'next/image'

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures]
]

export const Clients = () => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeIn>
        <h2 className='font-display text-2xl font-semibold text-neutral-950'>
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className='mt-10' faster>
        <Border as={FadeIn} />
        <ul
          role='list'
          className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4'
        >
          {clients.map(([client, logo]) => (
            <li key={client} className='group'>
              <FadeIn className='overflow-hidden'>
                <Border className='pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px'>
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}
