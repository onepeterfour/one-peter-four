import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { urlForImage } from '@/sanity/lib/image'
import {
  fetchTeamMemberBySlug,
  fetchTeamMembers
} from '@/sanity/schemas/documents/data/teamMember'
import { Metadata } from 'next'
import { QueryParams } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const teamMembers = await fetchTeamMembers()
  return teamMembers.map((teamMember) => ({
    slug: teamMember?.slug?.current
  }))
}

export async function generateMetadata({
  params
}: {
  params: QueryParams
}): Promise<Metadata> {
  const teamMember = await fetchTeamMemberBySlug(params?.slug)
  return {
    title: `${teamMember?.name} - 1P4`,
    description: teamMember?.bio
  }
}

export default async function Page({ params }: { params: QueryParams }) {
  const teamMember = await fetchTeamMemberBySlug(params.slug)

  if (!teamMember) {
    notFound()
  }
  return (
    <Container className='mt-24 sm:mt-32 lg:mt-40'>
      <div className='flex flex-col gap-8 md:flex-row '>
        <div id='image-container' className='mx-auto'>
          {teamMember?.image && (
            <Image
              className='h-96 w-full object-cover grayscale'
              src={urlForImage(teamMember?.image)}
              alt={`profile picture for ${teamMember?.name}`}
              width={100}
              height={100}
            />
          )}
        </div>
        <div id='text-container' className=''>
          <div className='prose mx-auto'>
            <h1 className='text-center md:text-left'>{teamMember?.name}</h1>
            <p className='text-center font-bold md:text-left'>
              {`${teamMember?.role} | ${teamMember?.email}`}
            </p>

            <p>{teamMember?.bio}</p>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <Button href='/team'>Back</Button>
      </div>
    </Container>
  )
}
