import Link from 'next/link'
import type { Metadata } from 'next'
import { StripeCheckoutButton } from '@/components/StripeCheckoutButton'

export const metadata: Metadata = {
  title: 'Buy a Roast – $1.99 per Profile | LookAtMyProfile',
  description: 'Pay-as-you-go AI roasts. Just $1.99 per Instagram profile. No subscription.',
  alternates: { canonical: 'https://www.lookatmyprofile.org/pricing' },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Roast a Profile</Link>
          <div className="flex gap-4">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Try</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Buy a Roast</h1>
          <p className="text-gray-300 text-xl mb-8">Pay as you go. No subscription. $1.99 per roast.</p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="text-3xl font-bold mb-2">$1.99<span className="text-lg font-medium text-gray-400">/roast</span></div>
            <p className="text-gray-400 mb-6">One-time payment • No recurring billing</p>
            <StripeCheckoutButton label="Pay $1.99 & Roast" mode="payment" />
            <p className="text-xs text-gray-500 mt-3">Secure checkout by Stripe</p>
          </div>


          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            <ul className="space-y-3">
              <li>✓ Pay per roast ($1.99)</li>
              <li>✓ Savage, Friendly, Poetic, Gen‑Z styles</li>
              <li>✓ Profile picture analysis</li>
            </ul>
            <ul className="space-y-3">
              <li>✓ Instant delivery after payment</li>
              <li>✓ Share/copy friendly output</li>
              <li>✓ No subscription or login required</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
