# LookAtMyProfile.org — Developer Handover

Last updated: 2025‑10‑19

This document is the single source of truth for a new engineer taking over the web project at https://www.lookatmyprofile.org.

## 1) High‑level Overview

- Repository: lookatmyprofile-web (Next.js 15, App Router, TypeScript)
- Hosting: Heroku (Node 22.20.0)
- Purpose: SEO site + paid “Full Roast” generator for Instagram profiles
- Payments: Stripe Checkout — pay‑per‑roast ($1.99)
- Data: Apify actor for public Instagram metadata (username, followers, posts, bio, profile pic URL)
- AI: OpenAI chat completions (multimodal when profile pic available)

Key outcomes
- Free/demo: short, limited output
- Paid: long, structured roast (Overview, Profile Picture, Summary)

## 2) Tech Stack

- Framework: Next.js 15.4.5 (App Router)
- Language: TypeScript (tsconfig configured for bundler resolution)
- Styling: Tailwind v4 (globals.css)
- Icons: lucide-react
- Runtime: Node 22.x
- Package manager: npm

Dependencies of note
- stripe: Checkout + sessions
- openai: Chat Completions API
- apify-client: Run the Instagram actor and read dataset items
- axios: profile picture fetch to base64 (matches analyzer backend behavior)

## 3) Environments & Secrets

The app runs primarily on Heroku. Configure these config vars (no secrets in repo):

Required
- OPENAI_API_KEY: OpenAI key for Chat Completions
- STRIPE_SECRET_KEY: Stripe live secret key
- NEXT_PUBLIC_URL: Public origin (e.g., https://www.lookatmyprofile.org)
- APIFY_API_TOKEN: Apify API token

Optional / feature flags
- OPENAI_PAID_MODEL: Defaults to `gpt-5-mini-2025-08-07`; if unavailable, the API falls back to `gpt-4o`, then `gpt-4o-mini` automatically
- APIFY_ACTOR_ID: Defaults to `apify/instagram-profile-scraper`. Set to `dSCLg0C3YEZ83HzYX` to mirror the analyzer actor
- ALLOW_FREE_TRIALS: `1` to bypass payment gating locally (default `0`)

Nice to have
- STRIPE_WEBHOOK_SECRET: Only needed if we choose to depend on webhooks (current pay‑per‑use MVP does not require it)

## 4) Application Architecture

### 4.1 Directory map (important parts)

- app/
  - page.tsx: Homepage
  - roast-generator/: Client page for generating roasts
  - billing/success/: Stores the Stripe `session_id` cookie and links to generator
  - pricing/: Stripe Checkout entry point (pay‑as‑you‑go)
  - api/
    - checkout/session/route.ts: Creates Stripe Checkout session (mode=payment)
    - analyze/route.ts: Main backend — Apify + OpenAI — returns roast
    - webhooks/stripe/route.ts: Placeholder webhook (not required by MVP)
    - index-now, og, revalidate: existing utilities

- lib/
  - apify.ts: Fetches Instagram data via Apify and downloads profile pic to base64
  - openai.ts: Builds prompts + parses sections
  - payments.ts: Validates one‑time sessions and guards against reuse
  - stripe.ts: Stripe client init

- components/
  - StripeCheckoutButton.tsx: POSTs to `/api/checkout/session` and redirects user to Stripe

- docs/
  - DEVELOPER-HANDOVER.md (this file)
  - PAID-ROASTS.md: flow notes for payments

### 4.2 Request/Response Flow (paid full roast)

1) `/pricing` → user clicks “Pay $1.99 & Roast”
2) `/api/checkout/session` creates Stripe Checkout session and redirects user to `checkout.stripe.com`
3) Stripe redirects back to `/billing/success?session_id=cs_live_...`
   - Page stores `stripe_session=...` cookie
   - CTA leads to `/roast-generator`
4) `/roast-generator`
   - Shows “Paid Full Roast” header chip and an unlocked banner while cookie exists
   - On submit, the client sends `x-stripe-session` header with the cookie value
5) `/api/analyze` (server)
   - Validates paid session (one‑time); if valid, proceeds
   - Calls Apify actor (configurable); loads dataset item; downloads `profilePicUrl` to base64
   - Builds prompts and calls OpenAI
   - If the model refuses due to identification policy, retries once without the image
   - Returns structured roast + `consumed: true` on success
   - Marks session as used (prevents reuse) and clears cookie in response
6) Client displays the long roast, removes unlocked banner, and shows a toast “Full roast consumed” (4 seconds)

## 5) Prompts (live)

We use the same structure for every roast style; only the tone changes in the system message.

System (all styles)
```
You are a social media expert that makes comments about people's Instagram profiles. You're an expert on social media and people's Instagram profiles. Respond in {language}.
Tone: {tone_for_style}
```

Tone by style
- savage: Brutally honest, sarcastic, savage, funny but never hateful. Avoid slurs; target behaviors, not identity.
- friendly: Supportive, upbeat, playful jabs, constructive tips. Keep it light roast.
- poetic: Witty rhyming stanzas; tight rhythm; clever wordplay; keep headers plain text.
- genZ: Extremely online, meme-savvy, short punches, PG‑13, emoji ok but not excessive.

User (all styles)
```
You are a social media expert that makes comments about people's Instagram profiles. You're an expert on social media and people's Instagram profiles. Respond in {language}.

IMPORTANT: Do NOT identify or guess who the person is in any image. Do not name celebrities or real people. Only describe and critique non-identifying aspects like composition, lighting, background,cropping, pose, outfit, and the overall impression. Refer to the person as "the subject."

Analyze this Instagram profile:
Username: @{username}
Followers: {followersCount}
Following: {followsCount}
Posts: {postsCount}
Bio: {biography}

The profile picture is attached. Make sure to roast it specifically based on what you see.

Structure your roast in the following format:

1. Overview: A general roast about their profile stats and bio.
2. Profile Picture: Specific roast about what you see in their profile picture.
3. Summary: A concluding burn that ties it all together.

Ensure each section is a complete paragraph with no cut-off sentences. Remember to write the entire roast in {language}.
```

Output parsing
- `lib/openai.ts` parses headings by `Overview:` / `Profile Picture:` / `Summary:` and returns sections to the client.

## 6) Modeling & Fallback

- Primary model for paid: `OPENAI_PAID_MODEL` (default `gpt-5-mini-2025-08-07` per owner request)
- Fallbacks: `gpt-4o` → `gpt-4o-mini` if primary is unavailable
- Refusal recovery: If the model replies with a refusal (e.g., “I can’t identify…”), the API retries once without the image; result still returns a full roast

Where to change
- `app/api/analyze/route.ts` — openai call, fallbacks, refusal detection
- `lib/openai.ts` — prompts and section parsing

## 7) Apify Integration

- Actor defaults to `apify/instagram-profile-scraper`. Production uses the same actor as the iOS analyzer by setting:
  - `APIFY_ACTOR_ID=dSCLg0C3YEZ83HzYX`
- Data path: `username`, `followersCount`, `followsCount`, `postsCount`, `biography`, `profilePicUrl`
- Profile pic fetch: axios({ responseType: 'arraybuffer' }) → Buffer → base64 (multimodal input)

Where to change
- `lib/apify.ts`

## 8) Payment Gating & One‑Time Sessions

- Cookie: `stripe_session` set on `/billing/success` and sent as `x-stripe-session` header from the client
- Validation: `/api/analyze` verifies the session with Stripe (mode=payment & payment_status=paid) and ensures single use
- Store: Minimal file‑based store `data/used-payments.json`; if you plan to scale horizontally, move this to a DB/KV (Firestore, Postgres, Upstash, etc.)
- After success: API returns `consumed: true` and clears the cookie; UI removes the chip/banner and shows a toast

Where to change
- `lib/payments.ts` and `app/api/analyze/route.ts`

## 9) Frontend UX — paid signals

- Always‑visible Stripe CTA under the form (hidden when unlocked)
- “Paid Full Roast” chip in header while the cookie exists
- “Full roast unlocked” banner above the form while the cookie exists
- Success toast after the roast is generated and credit consumed (4s)

Where
- `app/roast-generator/page.tsx`

## 10) Local Development

Prereqs
- Node 22.x, npm 10+

Setup
```
npm i
# Populate .env.local with:
# OPENAI_API_KEY=...
# APIFY_API_TOKEN=...
# NEXT_PUBLIC_URL=http://localhost:3000
# ALLOW_FREE_TRIALS=1  # bypass payment locally
npm run dev
```

Access: http://localhost:3000

Paid flow locally
- With `ALLOW_FREE_TRIALS=1`, `/api/analyze` skips payment validation, so you can test generation quickly.

## 11) Deployments

Heroku remotes
- `origin`: git.heroku.com/lookatmyprofile-web.git (deploy target)
- `github`: github.com/notsurewhoisthis/lookatmyprofile-web.git (backup)

Deploy
```
git push origin main
```

## 12) Security & Compliance

- CSP configured in `next.config.ts` to allow Stripe domains and analytics
- No secrets in repo — all environment variables via Heroku config vars
- Stripe webhook optional (MVP doesn’t depend on it); add if you want analytics/reconciliation
- Image analysis prompt strictly forbids identifying real persons — we only discuss non‑identifying attributes

## 13) Troubleshooting

Symptoms → Fix
- “internal_error” from generator
  - Likely an OpenAI model or network issue. The API now retries with fallbacks; check logs. If persistent, set `OPENAI_PAID_MODEL=gpt-4o` temporarily.
- Paid but still asked to pay
  - Ensure the URL after Stripe redirect includes `session_id` and `/billing/success` sets `stripe_session` cookie (browser must not block cookies). Hard refresh on `/roast-generator` to read the cookie.
- Image refusal (“I can’t identify…”) 
  - The API now retries without image. Confirm the prompt version and that the non‑identification rule exists in `lib/openai.ts`.
- Apify empty dataset
  - Private or invalid profile. Return helpful 404; the UI shows a message. Try a different username.

Logs
- Heroku app logs (`heroku logs -t -a lookatmyprofile-web`) show API branch (fallbacks/refusal handling) and errors.

## 14) Roadmap Ideas

- Durable credit store (Firestore/Postgres) to replace `used-payments.json`
- Add explicit “(Vision used)” note in the UI when image was analyzed
- Add Stripe webhook analytics (checkout.session.completed) and dashboard
- Caching layer for Apify results per username (15–60 minutes)
- Multi‑language UI toggle; pass through to prompts

## 15) Quick Reference — Key Files

- Payment & entitlement
  - app/api/checkout/session/route.ts
  - app/api/analyze/route.ts
  - lib/payments.ts
- AI & data
  - lib/apify.ts (actor + profile pic to base64)
  - lib/openai.ts (prompts, parsing)
- UX
  - app/roast-generator/page.tsx (banner/chip, CTA, toast)
  - components/StripeCheckoutButton.tsx
- SEO utilities & content
  - app/sitemap.xml/route.ts, app/robots.txt/route.ts, components in components/SEO/

## 16) Contact

- Production URL: https://www.lookatmyprofile.org
- Heroku app name: lookatmyprofile-web
- This handover: docs/DEVELOPER-HANDOVER.md

> You should be able to read this file and confidently ship changes the same day.
