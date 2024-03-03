import { Container } from '@/components/Container'
import { StatList, StatListItem } from '@/components/StatList'
import { StatListType } from '@/types'

type StatListSectionProps = StatListType & {}

export const StatListSection = ({
  stat_1,
  stat_2,
  stat_3
}: StatListSectionProps) => {
  return (
    <Container className='mt-16'>
      <StatList>
        {stat_1 && <StatListItem value={stat_1?.value} label={stat_1?.title} />}
        {stat_2 && <StatListItem value={stat_2?.value} label={stat_2?.title} />}
        {stat_3 && <StatListItem value={stat_3?.value} label={stat_3?.title} />}
      </StatList>
    </Container>
  )
}
