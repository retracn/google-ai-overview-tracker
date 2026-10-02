# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/aeo-auditor").call(run_input={
  "queries": [
    "best running shoes for flat feet"
  ],
  "targetDomain": "runrepeat.com"
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("query"), item.get("aiOverviewPresent"), item.get("targetDomainInAI"), item.get("targetCitationPosition"))
