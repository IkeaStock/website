import { Layout } from "../components/layout";
function HomePage() {
  const arrayOfCountries = ["at", "au", "be", "ca", "ch", "cn", "cz", "de", "dk", "es", "fi", "fr", "gb", "hk", "hr", "hu", "ie", "it", "jo", "jp", "kr", "kw", "lt", "my", "nl", "no", "pl", "pt", "qa", "ro", "ru", "sa", "se", "sg", "sk", "th", "tw", "us"]
  return (
    <Layout title="Home" headerContent={(
      <>
      <h1>Ikea Stock</h1>
      <form>
      <label htmlFor="product">What is the product id? (found on ikea's website): </label>
      <input id="product" type="text" placeholder="here pls!" width="auto"/>
      <br />
      <label htmlFor="country">What is the country you are looking at? (see list below):</label>
      <input id="country" type="text" placeholder="here pls!" width="auto"/>
    </form>
    </>
    )}>
      <ul>
        {arrayOfCountries.map(country => <li key={country}>{country}</li>)}
      </ul>
    </Layout>
  )
}
  
  export default HomePage