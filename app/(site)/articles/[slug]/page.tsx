import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ContactSection } from '@/components/PageSections/ContactSection'
import { PageIntroSection } from '@/components/PageSections/PageIntroSection'
import { PortableText } from '@/components/PortableText'
import { ReadMore } from '@/components/ReadMore'
import { formatDateString } from '@/lib/formatDate'
import {
  fetchArticleBySlug,
  fetchArticles
} from '@/sanity/schemas/documents/data/article'
import { ArchiveIcon } from '@sanity/icons'
import { Metadata } from 'next'
import { QueryParams } from 'next-sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const articles = await fetchArticles()
  return articles?.map((article) => ({
    slug: article?.slug?.current
  }))
}

export async function generateMetadata({
  params
}: {
  params: QueryParams
}): Promise<Metadata> {
  const article = await fetchArticleBySlug(params?.slug)
  return {
    title: `${article?.title} - 1P4`,
    description: article?.description
  }
}

export default async function Page({ params }: { params: QueryParams }) {
  const article = await fetchArticleBySlug(params?.slug)
  const articles = await fetchArticles()
  const readMoreArticles = articles
    ?.filter((article) => article?.slug?.current !== params?.slug)
    .slice(0, 2)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Container as='div' className='mt-24 sm:mt-32 lg:mt-40'>
        <article>
          <PageIntroSection
            title={article?.title}
            _type={article?._type}
            centered
            eyebrow={formatDateString(article?._createdAt)}
            subtitle={`By ${article?.author?.name}, ${article?.author?.role}`}
            _key={article?._id}
          />
          <FadeIn className='prose mx-auto'>
            {article?.fileList && (
              <div className='flex flex-wrap items-center justify-center gap-4'>
                {article.fileList?.map((file) => {
                  return (
                    <Link
                      key={file?._id}
                      href={`${file.file.url}?dl=${file.file.originalFilename}`}
                      className='flex items-center justify-center gap-2 text-sm'
                    >
                      <span>{file?.name}</span>
                      <span>
                        <ArchiveIcon className='text-sm' />
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
            <PortableText value={article?.body} />
          </FadeIn>
          <FadeIn className='my-8 text-center'>
            <Button href='/articles'>Back</Button>
          </FadeIn>
        </article>
      </Container>
      <ReadMore title='More articles' items={readMoreArticles} />
      <ContactSection
        _key={article?._id}
        _type='contactSection'
        buttonLabel='Say hi'
        title='Get in touch'
      />
    </>
  )
}
