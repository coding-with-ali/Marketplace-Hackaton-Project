import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token} from '../env'



export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
 })

 


// import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN_EDIT || process.env.SANITY_API_TOKEN, // Use the available token
// });
