import { BasePage, PageSectionName } from '@/types'
import { ComponentType } from 'react'
import { CultureSection } from './CultureSection'
import { HeroNoImageSection } from './HeroNoImageSection'
import { PageIntroSection } from './PageIntroSection'
import { StatListSection } from './StatListSection'

const Sections: Record<PageSectionName, ComponentType<any>> = {
  heroWithoutImageType: HeroNoImageSection,
  pageIntroType: PageIntroSection,
  statlistType: StatListSection,
  cultureType: CultureSection
}

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
