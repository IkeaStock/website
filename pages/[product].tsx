import { useRouter } from 'next/router'
import { Layout } from '../components/layout'
import useSWR from 'swr'
import Table from '../components/table'
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())
export default function product() {
  try {
  const router = useRouter()
  var debug: any = router.query.debug
  var { product, country } = router.query
  if (debug == undefined) {
    debug = false
  }
  const { data, error } = useSWR(`/api/stores/${product}?country=${country}&debug=${debug}`, fetcher)
  if (error) return (
  <div>
   <h1>Error:</h1>
    <p>{error.message}</p>
  </div>
  )
  if (!data) return (
    <Layout title="Loading">
      <p>Loading...</p>
    </Layout>
  )
  return (
    <Layout title="Product Lookup" headerContent={(
      <>
      <h1>Product ID: {product}</h1>
      <Table data={data} />
      </>
    )}>
    </Layout>
  )
  } catch (error) {
    return (
      <Layout title="Error">
        <p>
          Technical Difficulties
          <br />
          Probably something to do with the api, please try again later.
        </p>
      </Layout>
    )
  }
}