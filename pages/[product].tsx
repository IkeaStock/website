import { useRouter } from 'next/router'
import { Layout } from '../components/layout'
import useSWR from 'swr'
import Table from '../components/table'
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())
export default function product() {
  const router = useRouter()
  const { product, country } = router.query
  const { data, error } = useSWR(`/api/stores/${product}?country=${country}`, fetcher)
  if (error) return <div>Failed to load</div>
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
}