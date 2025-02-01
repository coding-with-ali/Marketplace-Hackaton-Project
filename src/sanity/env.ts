export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skMG7ZZtiVaKDtJazEuTAKV6L5foZR66XkSFPt8PasIufbG79mgSRkPiWXH6lIp2fjiZS10LYcIqHMwgMTIMXYrxWRceqM8zh8Mj2gZC9ltew4PLhwnKEvbkKisQUW8q6JE4iiEFUxNPJCfPM4ERLSdVPqz3bXm2Phr6poq4qtnv4LvuicdH",
  'Missing environment variable: SANITY_API_TOKEN'
)



function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
