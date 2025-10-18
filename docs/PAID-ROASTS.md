Paid Roasts Integration
Last updated: 2025-10-18

Overview
- Pay-per-roast flow using Stripe (one-time $1.99), Apify, and OpenAI.
- New/updated endpoints:
  - POST /api/analyze – gated by paid Checkout session; generates roast via OpenAI using Apify profile data.
  - POST /api/checkout/session – creates Stripe Checkout session (mode=payment by default).
  - POST /api/webhooks/stripe – webhook receiver (no DB mutations; entitlement verified live via session ID).

Environment Variables
- OPENAI_API_KEY
- APIFY_API_TOKEN
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- SINGLE_ROAST_PRICE_ID (Stripe one-time price for $1.99)
  - NEXT_PUBLIC_URL (origin, e.g., https://www.lookatmyprofile.org)
  - ALLOW_FREE_TRIALS=0 (set 1 to bypass gating during local dev)

Usage
1) Set env vars above (do not commit secrets).
2) Create a one-time $1.99 Price in Stripe and set SINGLE_ROAST_PRICE_ID.
3) Deploy. Users pay at /pricing → Checkout (mode=payment) → redirected to /billing/success which stores `stripe_session`.
4) The Roast Generator calls /api/analyze with header `x-stripe-session` (auto from cookie). Endpoint verifies the paid session and atomically marks it used.

Notes
- Current MVP marks a checkout session as used in `data/used-payments.json` to prevent reuse. For production-grade durability, move this to a DB (Firestore/Postgres) or a KV store.
- CSP allows Stripe domains.
- Legacy /download redirects to /pricing.
