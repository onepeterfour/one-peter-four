import { PageSectionName } from '@/types'
import { ComponentType } from 'react'
import { HeroWithoutImage } from './HeroWithoutImage'
import { PageIntro } from './PageIntro'
import { StatList } from './StatList'

export const Sections: Record<PageSectionName, ComponentType<any>> = {
  heroWithoutImageType: HeroWithoutImage,
  pageIntroType: PageIntro,
  statlistType: StatList
}
