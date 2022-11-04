import { Layout } from "../components/layout";
import { apiDocsENV } from "../lib/apiDocsENV";
function HomePage() {
    const arr = [{
        name: "Stores",
        url: "/stores/:productID?country=:country",
        bookmark: "#Stores",
        type: "GET",
    }]
    return (
        <Layout title="API Documentation" headerContent={(
        <>
        <h1>API Documentation</h1>
        <p>
            This is a collection of API endpoints for the IKEA Availability Checker.
            <br />
            Anything with a <code>:</code> prefix is a parameter.
            <br />
            All endpoints are &lt;thisdomain.com&gt;/api/[endpoint].
        </p>
        <h2>List of endpoints</h2>
        <ul>
            {arr.map((item, index) => (
                <li key={index}>
                    <a href={item.bookmark}>{item.name}</a>
                </li>
            ))}
        </ul>
        </>
    )}>
        {arr.map((val, index) => {
                return (
                    <div key={index} id={val.name}>
                        <h2>{val.name}</h2>
                        <p>ENDPOINT_URL= {val.url}</p>
                        <p>TYPE: {val.type}</p>
                    </div>
                )
            })
        }
    </Layout>
  )
}
  export default HomePage
