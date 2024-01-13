import { map } from 'rxjs'
import {
  DocumentLocationResolver,
  DocumentLocationsState
} from 'sanity/presentation'

// Pass 'context' as the second argument
export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === 'siteSettings') {
    return {
      message: 'This document is used on all pages',
      tone: 'caution'
    } satisfies DocumentLocationsState
  }
  // Set up locations for post documents
  if (params.type === 'post') {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      { perspective: 'previewDrafts' } // returns a draft article if it exists
    )
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null
        }
        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/${doc.slug.current}`
            },
            {
              title: 'Posts',
              href: '/'
            }
          ]
        }
      })
    )
  }
  return null
}