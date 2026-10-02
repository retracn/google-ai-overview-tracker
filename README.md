# Google AI Overview citation tracker for AEO & GEO

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/aeo-auditor)

AEO & GEO Tracker is an Apify Actor that checks which searches show a Google AI Overview, whether your website is cited (and at what position), which competitors and brands are cited instead, and how that changes over time.

**Price:** $0.04 per keyword ($0.032 on Gold); $0.01 until 16 Oct 2026 · **Run it:** [https://apify.com/automationnation/aeo-auditor](https://apify.com/automationnation/aeo-auditor) · **Guide:** [https://retracn.github.io/automationnation-actors/aeo-auditor/](https://retracn.github.io/automationnation-actors/aeo-auditor/)

## Quick facts

- One row per keyword: whether an AI Overview appears, every cited URL (redirects resolved), your citation position, competitor domains and brand mentions, organic rank, and gained / lost since your last run.
- Any Google country and language.
- About 30 seconds per keyword; keywords Google blocks are retried and never charged.
- Price: $0.04 per keyword ($0.032 on Gold) from 17 Oct 2026, $0.01 before; Apify's free $5 credit covers 125+ checks.

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

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/aeo-auditor); you need a free Apify account and API token. Examples are MIT licensed.
