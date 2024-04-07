import { NotFound as NotFoundComponent } from '@/components/NotFound'

export default function NotFound() {
  return (
    <NotFoundComponent
      slug='/case-studies'
      buttonLabel='Return to Case Studies'
      title={`Oops! We couldn't find that case study.`}
    />
  )
}
