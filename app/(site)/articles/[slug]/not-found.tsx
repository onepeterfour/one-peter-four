import { NotFound as NotFoundComponent } from '@/components/NotFound'

export default function NotFound() {
  return (
    <NotFoundComponent
      slug='/articles'
      buttonLabel='Return to Articles'
      title={`Oops! We couldn't find that article.`}
    />
  )
}
