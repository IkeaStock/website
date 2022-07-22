import analytics from "../../../lib/analytics";
import { apiDocsENV } from "../../../lib/apiDocsENV";
export default async function handler(req, res) {
  if (apiDocsENV("API_ENABLED") == "true") {
    const all = await analytics.db.keys("*");
    analytics.update("ApiUses");
    console.log(all)
    res.status(200).send(all);
  } else {
    await analytics.update("APIDisabled")
    res.status(403).send({
      message: "API is disabled",
    })
  }
}