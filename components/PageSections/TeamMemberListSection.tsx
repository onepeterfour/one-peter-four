import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { urlForImage } from '@/sanity/lib/image'
import { TeamMemberDocument } from '@/sanity/schemas/documents/data/teamMember'
import { TeamMemberListSectionSchema } from '@/sanity/schemas/objects/pageSections/teamMemberListSections'
import Image from 'next/image'
import { ExternalLink } from '../ExternalLink'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { TwitterIcon } from '../icons/TwitterIcon'

const TeamMemberListItem = (teamMember: TeamMemberDocument) => {
  return (
    <li>
      <FadeIn>
        <Image
          className='aspect-[3/2] w-full rounded-2xl object-cover grayscale'
          alt={teamMember.image.alt}
          width={200}
          height={200}
          src={urlForImage(teamMember?.image)}
        />
        <div className='flex items-center gap-4'>
          <h3 className='mt-6 text-lg font-semibold leading-8 text-gray-900'>
            {teamMember.name}
          </h3>
          <ul role='list' className='mt-6 flex gap-x-2'>
            {teamMember.linkedIn && (
              <li>
                <ExternalLink
                  href={teamMember.linkedIn}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <LinkedInIcon />
                </ExternalLink>
              </li>
            )}
            {teamMember?.twitter && (
              <li>
                <ExternalLink
                  href={teamMember.twitter}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>X</span>
                  <TwitterIcon />
                </ExternalLink>
              </li>
            )}
          </ul>
        </div>
        <p className='text-base leading-7 text-gray-600'>{teamMember.role}</p>
        <p className='mt-4 text-base leading-7 text-gray-600'>
          {teamMember.bio}
        </p>
      </FadeIn>
    </li>
  )
}

export const TeamMemberListSection = ({
  title,
  _key,
  teamMemberList
}: Omit<TeamMemberListSectionSchema, 'isEnabled'>) => {
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
                className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2'
              >
                {teamMemberList.length > 0 &&
                  teamMemberList.map((teamMember) => {
                    return (
                      <TeamMemberListItem
                        key={teamMember._id}
                        {...teamMember}
                      />
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
