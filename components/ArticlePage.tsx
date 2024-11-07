import { formatDateString } from '@/lib/formatDate'
import { urlForImage } from '@/sanity/lib/image'
import { ArticleDocument } from '@/sanity/schemas/documents/data/article'
import { ArchiveIcon } from '@sanity/icons'
import {
  PortableText,
  PortableTextReactComponents,
  QueryParams
} from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { ContactSection } from './PageSections/ContactSection'
import { PageIntroSection } from './PageSections/PageIntroSection'
import { ReadMore } from './ReadMore'

const components: Partial<PortableTextReactComponents> = {
  types: {
    imageWithMetadata: ({ value }) => {
      return (
        <Image
          className='aspect-[16/10] w-full rounded-4xl object-cover'
          src={urlForImage(value)}
          alt={value?.alt}
          width={1000}
          height={1000}
          priority
        />
      )
    }
  }
}

export default function ArticlePage({
  article,
  articles,
  params
}: {
  article: ArticleDocument
  articles: ArticleDocument[]
  params: QueryParams
}) {
  const readMoreArticles = articles
    ?.filter((article) => article?.slug?.current !== params?.slug)
    .slice(0, 2)
  return (
    <>
      <Container as='div' className='mt-24 sm:mt-32 lg:mt-40'>
        <article>
          <PageIntroSection
            title={article?.title}
            _type={article?._type}
            isCentered
            eyebrow={formatDateString(article?._createdAt)}
            subtitle={`By ${article?.author?.name}, ${article?.author?.role}`}
            _key={article?._id}
          />
          <FadeIn className='prose mx-auto'>
            {article?.fileList && (
              <div className='mt-24 flex flex-wrap items-center justify-center gap-4'>
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
            <div className='mt-24 sm:mt-32 lg:mt-40'>
              <PortableText value={article?.body} components={components} />
            </div>
          </FadeIn>
          <FadeIn className='my-24 text-center sm:my-32 lg:my-40'>
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
