"use client"
import { useState } from 'react'

export function StripeCheckoutButton({ label = 'Pay $1.99', priceId, mode = 'payment' }: { label?: string; priceId?: string; mode?: 'payment'|'subscription' }) {
  const [loading, setLoading] = useState(false)
  const onClick = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/checkout/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, mode }),
      })
      const data = await res.json()
      if (data?.url) {
        window.location.href = data.url
      } else {
        alert('Unable to start checkout. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <button onClick={onClick} disabled={loading}
      className={`px-6 py-3 rounded-full font-semibold ${loading ? 'bg-gray-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'}`}>
      {loading ? 'Redirecting…' : label}
    </button>
  )
}
