import { Layout } from "../components/layout";
function HomePage() {
  const handleSubmit = event => {
    event.preventDefault();
    const productId = event.target.product.value;
    const country = event.target.country.value;
    console.log({productId: productId, country: country});
    window.location.href = `/${productId}?country=${country}`;
  }
  const arrayOfCountries = ["at", "au", "be", "ca", "ch", "cn", "cz", "de", "dk", "es", "fi", "fr", "gb", "hk", "hr", "hu", "ie", "it", "jo", "jp", "kr", "kw", "lt", "my", "nl", "no", "pl", "pt", "qa", "ro", "ru", "sa", "se", "sg", "sk", "th", "tw", "us"]
  return (
    <Layout title="Home" headerContent={(
      <>
      <h1>Ikea Stock</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="product">What is the product id? (found on ikea's website): </label>
      <input id="product" type="text" placeholder="here pls!" width="auto"/>
      <br />
      <label htmlFor="country">What is the country you are looking at? (see list below):</label>
      <input id="country" type="text" placeholder="here pls!" width="auto"/>
      <br />
      <button type="submit">Search</button>
    </form>
    <b>Any issues? open an issue <a href="https://github.com/IkeaStock/IkeaStock/issues">Here!</a></b>
    </>
    )}>
      <ul>
        {arrayOfCountries.map(country => <li key={country}>{country}</li>)}
      </ul>
    </Layout>
  )
}
  
  export default HomePage