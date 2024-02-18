import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Culture } from '@/components/pageSpecific/team/Culture'
import { Team } from '@/components/pageSpecific/team/Team'
import { client } from '@/sanity/lib/client'
import { TEAMPAGE_QUERY } from '@/sanity/lib/queries'
import { BasePage } from '@/types'
import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

// sanity page query
// const teamPage = await fetchTeamPage()
const teamPage = await client.fetch<SanityDocument<BasePage>>(TEAMPAGE_QUERY)

// nextJS api
export const metadata: Metadata = {
  title: `1P4: ${teamPage?.title}`,
  description: teamPage?.description
}

export default async function TeamPage() {
  // const teamPage = await client.fetch<SanityDocument<BasePage>>(TEAMPAGE_QUERY)

  return (
    <>
      <PageIntro eyebrow='About us' title='Our strength is collaboration'>
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className='mt-16'>
        <StatList>
          <StatListItem value='35' label='Underpaid employees' />
          <StatListItem value='52' label='Placated clients' />
          <StatListItem value='$25M' label='Invoices billed' />
        </StatList>
      </Container>
      <Culture />
      <Team />
      <ContactSection />
    </>
  )
}
