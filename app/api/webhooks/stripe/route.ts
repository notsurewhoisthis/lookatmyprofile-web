import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const signature = req.headers.get('stripe-signature')
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!signature || !secret) {
    return NextResponse.json({ error: 'missing_signature_or_secret' }, { status: 400 })
  }
  const buf = Buffer.from(await req.arrayBuffer())
  let event: any
  try {
    event = stripe.webhooks.constructEvent(buf, signature, secret)
  } catch (err: any) {
    console.error('Webhook signature verification failed', err)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        // No-op: client passes session_id to prove entitlement; optional: email receipts etc.
        break
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        // No DB to update; rely on live Stripe status via session in analyze endpoint
        break
      default:
        break
    }
    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error('Webhook handler error', err)
    return NextResponse.json({ error: 'handler_error' }, { status: 500 })
  }
}

