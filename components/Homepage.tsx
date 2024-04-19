import { PageSectionPage } from '@/types'
import { PageSections } from './PageSections'

export default function Homepage({ data }: { data: PageSectionPage }) {
  return (
    <>
      <PageSections pageSections={data?.pageSections} />
    </>
  )
}
