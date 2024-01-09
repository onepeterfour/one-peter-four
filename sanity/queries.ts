import { createSanityQueryUrl } from '@/sanity/api'

export async function fetchHomePage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "homePage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}

export async function fetchTeamPage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "teamPage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}

export async function fetchResearchPage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "researchPage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}

export async function fetchServicesPage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "servicesPage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}

export async function fetchLearningPage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "learningPage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}

export async function fetchPartnersPage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "partnersPage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}

export async function fetchContactPage(): Promise<QueryResult<BasePage>> {
  const res = await fetch(createSanityQueryUrl('*[_type == "contactPage"]'))
  if (!res.ok) {
    throw new Error(`status: ${res.status}, statusText: ${res.statusText}`)
  }
  return res.json()
}