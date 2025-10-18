"use client"
import Link from 'next/link'
import { useEffect } from 'react'

export default function BillingSuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams?.session_id
  useEffect(() => {
    if (sessionId) {
      document.cookie = `stripe_session=${sessionId}; Path=/; Max-Age=${60*60*24*365}; SameSite=Lax`;
    }
  }, [sessionId])
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white grid place-items-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-2">Payment Received 🎉</h1>
        <p className="text-gray-300 mb-6">You can now generate your roast. The page will use your payment automatically.</p>
        <Link href="/roast-generator" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 inline-block">Generate Roast</Link>
      </div>
    </div>
  )
}
