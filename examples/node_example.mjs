// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/aeo-auditor').call({
  "queries": [
    "best running shoes for flat feet"
  ],
  "targetDomain": "runrepeat.com"
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.query, item.aiOverviewPresent, item.targetDomainInAI, item.targetCitationPosition);
