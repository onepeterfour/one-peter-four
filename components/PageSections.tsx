import { Sections } from '@/components/pageSections/index'
import { BasePage } from '@/types'

type PageSectionsProps = {
  pageSections?: BasePage['pageSections']
}
export const PageSections = ({ pageSections }: PageSectionsProps) => {
  return (
    <>
      {pageSections?.map((section) => {
        const SectionComponent = Sections[section?._type] || null
        return <SectionComponent key={section._key} {...section} />
      })}
    </>
  )
}
