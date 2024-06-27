import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:'2024-05-15',
  dataset:'production',
  projectId:'cimzou7g',
  token:'process.env.SANITY_ACESS_TOKEN',
  useCdn:true,
})

