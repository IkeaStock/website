import { IkeaApi } from "@ikeastock/api";
import { apiDocsENV } from "../../../lib/apiDocsENV";
import logger from "../../../lib/logger";
const ikea = new IkeaApi();
export default async function handler(req, res) {
  if (apiDocsENV("API_ENABLED") == "true") {
  const { product, country, debug } = req.query;
    const initData = await ikea.get(country, product);
    logger.debug(initData , debug)
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
          }
        }
        logger.debug(data , debug)
        dataArr.push(data)
      }
    })
    res.status(200).send(dataArr)
  } else {
    res.status(403).send({
      message: "API is disabled",
    })
  }
}