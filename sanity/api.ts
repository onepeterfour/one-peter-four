export const baseUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

export const createSanityQueryUrl = (query: string): string =>
  `${baseUrl}?query=${encodeURIComponent(query)}`
