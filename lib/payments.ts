import { stripe } from './stripe'
import fs from 'fs'
import path from 'path'

const STORE_PATH = path.join(process.cwd(), 'data', 'used-payments.json')

function readStore(): Record<string, string> {
  try {
    const raw = fs.readFileSync(STORE_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function writeStore(data: Record<string, string>) {
  try {
    fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true })
    fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2))
  } catch (e) {
    console.error('Failed to write used payments store', e)
  }
}

export async function verifyOneTimePayment(sessionId: string): Promise<boolean> {
  if (!sessionId) return false
  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items'] })
  if (!session) return false
  if (session.mode !== 'payment') return false
  if (session.payment_status !== 'paid') return false
  // Basic replay window guard: require recent session (<= 30 minutes)
  if (typeof session.created === 'number') {
    const ageSec = Math.floor(Date.now()/1000) - session.created
    if (ageSec > 1800) return false
  }
  // Optional: check metadata or price match
  if (session.metadata?.usage && session.metadata.usage !== 'single_roast') return false
  return true
}

export async function verifyOneTimePaymentAndMarkUsed(sessionId: string): Promise<boolean> {
  if (!sessionId) return false
  const store = readStore()
  if (store[sessionId] === 'used') return false
  const ok = await verifyOneTimePayment(sessionId)
  if (!ok) return false
  store[sessionId] = 'used'
  writeStore(store)
  return true
}

export function markSessionUsed(sessionId: string) {
  if (!sessionId) return
  const store = readStore()
  store[sessionId] = 'used'
  writeStore(store)
}
