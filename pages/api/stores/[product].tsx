import { IkeaApi } from "@ikeastock/api";
import analytics from "../../../lib/analytics";
import { apiDocsENV } from "../../../lib/apiDocsENV";
const ikea = new IkeaApi();
export default async function handler(req, res) {
  if (apiDocsENV("API_ENABLED") == "true") {
  const { product, country, debug } = req.query;
    const initData = await ikea.get(country, product);
    const dataArr = []
    initData.map(async (val) => {
      if (val.availableStocks == undefined) {
        return "No Data"
      } else {
        if(val.store == undefined) {
          return "No Data"
        }
      const data = {
        stock: val.availableStocks.quantity,
          store: {
            name: val.store.name,
            buCode: val.store.buCode,
          }
        }
        dataArr.push(data)
      }
    })
    analytics.update("ApiUses");
    res.status(200).send(dataArr)
  } else {
    await analytics.update("APIDisabled")
    res.status(403).send({
      message: "API is disabled",
    })
  }
}