'use server'

export async function createContactRequest(
  state: { message: string },
  payload: FormData
) {
  console.log({ state, payload })

  console.log(Array.from(payload.values()))
  return { message: 'Submitted' }
}
