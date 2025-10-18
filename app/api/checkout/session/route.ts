import { NextRequest, NextResponse } from 'next/server'
import { ensureStripe } from '@/lib/stripe'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const stripe = ensureStripe()
    const { priceId, mode = 'payment', quantity = 1, metadata } = await req.json()
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_URL || 'https://www.lookatmyprofile.org'
    const lineItems = priceId
      ? [{ price: priceId, quantity }]
      : [{
          price_data: {
            currency: 'usd',
            product_data: { name: 'Single Roast' },
            unit_amount: 199,
          },
          quantity,
        }]
    const session = await stripe.checkout.sessions.create({
      mode: mode as any,
      line_items: lineItems as any,
      success_url: `${origin}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing?canceled=1`,
      allow_promotion_codes: true,
      metadata: { usage: mode === 'payment' ? 'single_roast' : 'subscription', ...(metadata || {}) },
    })
    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Checkout error', err)
    return NextResponse.json({ error: 'checkout_failed', details: err?.message }, { status: 500 })
  }
}
