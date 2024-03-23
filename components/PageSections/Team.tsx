import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { urlForImage } from '@/sanity/lib/image'
import { SanityTeamQueryResult } from '@/types/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'

type TeamProps = SanityTeamQueryResult & {}
export const Team = ({ title, _key, teamMembersList }: TeamProps) => {
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='space-y-24'>
        <FadeInStagger key={_key}>
          <Border as={FadeIn} />
          <div className='grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8'>
            <FadeIn>
              <h2 className='font-display text-2xl font-semibold text-neutral-950'>
                {title}
              </h2>
            </FadeIn>
            <div className='lg:col-span-3'>
              <ul
                role='list'
                className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'
              >
                {teamMembersList.length > 0 &&
                  teamMembersList.map((teamMember) => {
                    return (
                      <li key={teamMember?._id}>
                        <Link href={`/team/${teamMember?.slug?.current}`}>
                          <FadeIn>
                            <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                              <Image
                                alt={`${teamMember.name} image`}
                                width={200}
                                height={200}
                                src={urlForImage(teamMember?.image)}
                                className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'
                              />
                              <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                                <p className='font-display text-base/6 font-semibold tracking-wide text-white'>
                                  {teamMember.name}
                                </p>
                                <p className='mt-2 text-sm text-white'>
                                  {teamMember.role}
                                </p>
                              </div>
                            </div>
                          </FadeIn>
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}
