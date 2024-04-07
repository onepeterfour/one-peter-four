import { NotFound as NotFoundComponent } from '@/components/NotFound'

export default function NotFound() {
  return (
    <NotFoundComponent
      slug='/team'
      buttonLabel='Return to Team'
      title={`Oops! We couldn't find that team member.`}
    />
  )
}
