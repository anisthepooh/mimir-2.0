import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '4nmmiy5b',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

export default client

const data = await client.fetch(`count(*)`)
console.log(`Number of documents: ${data}`)