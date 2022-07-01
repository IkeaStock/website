import ikea from "ikea-availability-checker";
import { apiDocsENV } from "../../../lib/apiDocsENV";
export default async function handler(req, res) {
  if (apiDocsENV("API_ENABLED") == "true") {
  const { product, country, debug } = req.query;
    var dataArr = [];
    const stores = ikea.stores.findByCountryCode(country);
    if (debug == "true") {
      console.log(ikea.stores.findByCountryCode(country));
    }
    for (const val of stores) {
      const buCode = val.buCode
      const data = await ikea.availability(buCode, product);
      dataArr.push(data)
    }
    if (debug == "true") {
      console.log(dataArr)
    }
    res.status(200).send(dataArr)
  } else {
    res.status(403).send({
      message: "API is disabled",
    })
  }
}