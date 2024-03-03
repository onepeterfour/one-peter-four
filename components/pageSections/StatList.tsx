import { Container } from '@/components/Container'
import {
  StatList as StatListComponent,
  StatListItem
} from '@/components/StatList'
import { StatListType } from '@/types'

type StatListProps = StatListType & {}

export const StatList = ({ stat_1, stat_2, stat_3 }: StatListProps) => {
  return (
    <Container className='mt-16'>
      <StatListComponent>
        {stat_1 && <StatListItem value={stat_1?.value} label={stat_1?.title} />}
        {stat_2 && <StatListItem value={stat_2?.value} label={stat_2?.title} />}
        {stat_3 && <StatListItem value={stat_3?.value} label={stat_3?.title} />}
      </StatListComponent>
    </Container>
  )
}
