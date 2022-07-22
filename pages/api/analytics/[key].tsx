import analytics from "../../../lib/analytics";
import { apiDocsENV } from "../../../lib/apiDocsENV";
export default async function handler(req, res) {
  if (apiDocsENV("API_ENABLED") == "true") {
    const { key } = req.query;
    const data = await analytics.get(key);
    analytics.update("ApiUses");
    res.status(200).send(data);
  } else {
    await analytics.update("APIDisabled")
    res.status(403).send({
      message: "API is disabled",
    })
  }
}