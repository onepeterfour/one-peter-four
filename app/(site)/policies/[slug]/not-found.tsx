import { NotFound as NotFoundComponent } from '@/components/NotFound'

export default function NotFound() {
  return (
    <NotFoundComponent
      slug='/policies'
      buttonLabel='Return to Policies'
      title={`Oops! We couldn't find that policy.`}
    />
  )
}
