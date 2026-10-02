#!/bin/bash
# export APIFY_TOKEN=your_token
curl -X POST "https://api.apify.com/v2/acts/automationnation~aeo-auditor/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["best running shoes for flat feet"], "targetDomain": "runrepeat.com"}'
