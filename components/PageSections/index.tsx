import { BasePage, PageSectionName } from '@/types'
import { ComponentType } from 'react'
import { Clients } from './Clients'
import { Culture } from './Culture'
import { HeroWithoutImage } from './HeroWithoutImage'
import { PageIntro } from './PageIntro'
import { StatsList } from './StatsList'

const Sections: Record<PageSectionName, ComponentType<any>> = {
  heroWithoutImageType: HeroWithoutImage,
  pageIntroType: PageIntro,
  statlistType: StatsList,
  cultureType: Culture,
  clients: Clients
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
