# Google AI Overview citation tracker for AEO & GEO

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/aeo-auditor)

AEO & GEO Tracker is an Apify Actor that checks which searches show a Google AI Overview, whether your website is cited (and at what position), which competitors and brands are cited instead, and how that changes over time.

**Price:** $0.04 per keyword ($0.032 on Gold), plus $2 per run from 17 Nov 2026; $0.01 per keyword until 16 Oct 2026 · **Run it:** [https://apify.com/automationnation/aeo-auditor](https://apify.com/automationnation/aeo-auditor) · **Guide:** [https://retracn.github.io/automationnation-actors/aeo-auditor/](https://retracn.github.io/automationnation-actors/aeo-auditor/)

## Quick facts

- One row per keyword: whether an AI Overview appears, every cited URL (redirects resolved), your citation position, competitor domains and brand mentions, organic rank, and gained / lost since your last run.
- Any Google country and language.
- About 30 seconds per keyword; keywords Google blocks are retried and never charged.
- Price: $0.04 per keyword ($0.032 on Gold) from 17 Oct 2026 ($0.01 before), plus $2 per run from 17 Nov 2026. Apify's free $5 credit covers a run of up to 75 keywords.

## Example input

```json
{
  "queries": [
    "best running shoes for flat feet"
  ],
  "targetDomain": "runrepeat.com"
}
```

## Run it from code

**REST API**

```bash
curl -X POST "https://api.apify.com/v2/acts/automationnation~aeo-auditor/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["best running shoes for flat feet"], "targetDomain": "runrepeat.com"}'
```

**Python** — see [`examples/python_example.py`](examples/python_example.py)

```python
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
```

**JavaScript** — see [`examples/node_example.mjs`](examples/node_example.mjs)

```js
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
```

## Use it with AI agents (MCP)

Hosted MCP server URL (Claude, ChatGPT, Cursor and other clients with remote MCP support):

```
https://mcp.apify.com?tools=automationnation/aeo-auditor
```

Local config for Claude Desktop / Cursor — [`mcp/claude_desktop_config.json`](mcp/claude_desktop_config.json):

```json
{
  "mcpServers": {
    "aeo-auditor": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--tools",
        "automationnation/aeo-auditor"
      ],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

## FAQ

**How do I check if my website is cited in Google AI Overviews?**
Run AEO & GEO Tracker on Apify with your keywords and your domain. For each keyword it reports whether an AI Overview appears, whether your site is cited and at what position, which other domains are cited, and what changed since your last run.

**Is there a Google AI Overview API?**
No. Google doesn't offer an API for AI Overviews. AEO & GEO Tracker returns them as structured data through Apify's REST API, Python and JavaScript clients, integrations and MCP.

**What does AEO mean?**
AEO (answer engine optimization) and GEO (generative engine optimization) mean optimizing content so AI answers — such as Google's AI Overviews — cite your website. Tracking citations per keyword over time is how you measure it.

## More from AutomationNation

- [AI Visibility Tracker](https://apify.com/automationnation/ai-visibility-tracker) — $0.05 per answer checked ($0.04 on Gold) + $0.50 per optional report · [GitHub examples](https://github.com/retracn/ai-visibility-tracker)
- [Google Jobs Scraper](https://apify.com/automationnation/google-jobs-scraper) — $2 per 1,000 jobs ($1.50 on paid plans) + $0.03 per search · [GitHub examples](https://github.com/retracn/google-jobs-scraper)
- [Google Trends Scraper](https://apify.com/automationnation/google-trends-scraper) — $1 per 1,000 keyword reports ($0.27–$0.90 on paid plans) · $0.50 per 1,000 trending searches · [GitHub examples](https://github.com/retracn/google-trends-scraper)
- [App Store Reviews Scraper](https://apify.com/automationnation/app-store-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/app-store-reviews-scraper)
- [Google Play Reviews Scraper](https://apify.com/automationnation/google-play-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/google-play-reviews-scraper)
- [Google Maps Leads Scraper](https://apify.com/automationnation/google-maps-leads) — $0.03 per lead ($0.024 on Gold) · [GitHub examples](https://github.com/retracn/google-maps-leads-scraper)
- [Google Maps Leads Scraper UK](https://apify.com/automationnation/uk-business-leads) — $0.05 per lead ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/uk-business-leads-google-maps)
- [App Store & Google Play Reviews Scraper + AI](https://apify.com/automationnation/app-store-review-miner) — $0.05 per app report ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/app-store-google-play-reviews-ai)
- [UK Companies House Leads — Filing Signals & AI Outreach](https://apify.com/automationnation/companies-house-leads) — $0.008 per lead
- [Contact Waterfall Enrichment — Emails & Directors](https://apify.com/automationnation/contact-waterfall-enrichment) — $0.015 per company
- [All Actors and guides](https://retracn.github.io/automationnation-actors/) · [AI visibility trackers compared](https://retracn.github.io/automationnation-actors/compare/ai-visibility-trackers/) · [Google Jobs scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-jobs-scrapers/) · [Google Trends scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-trends-scrapers/) · [App Store review scrapers compared](https://retracn.github.io/automationnation-actors/compare/app-store-review-scrapers/) · [Google Play review scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-play-review-scrapers/)

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/aeo-auditor); you need a free Apify account and API token. Examples are MIT licensed.
