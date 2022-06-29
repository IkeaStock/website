import ikea from "ikea-availability-checker";
export default async function handler(req, res) {
  const { product, country } = req.query;
    var dataArr = [];
    const stores = ikea.stores.findByCountryCode(country);
    for (const val of stores) {
      const buCode = val.buCode
      const data = await ikea.availability(buCode, product);
      dataArr.push(data)
      console.log(data)
    }
    res.status(200).send(dataArr)
}