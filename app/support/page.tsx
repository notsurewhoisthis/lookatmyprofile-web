import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Support & Contact | Roast a Profile',
  description: 'Get help with Roast a Profile. Contact our support team, report issues, or find answers to common problems.',
  keywords: 'roast a profile support, instagram roaster help, AI roast generator contact',
  openGraph: {
    title: 'Support - Roast a Profile',
    description: 'We\'re here to help with any questions or issues.',
    url: 'https://www.lookatmyprofile.org/support',
  }
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Try Now</Link>
            <Link href="/faq" className="hover:text-purple-400 transition">FAQ</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            How Can We Help?
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Our support team is here to ensure you have the best roasting experience possible
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {/* Quick Help */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-xl font-bold mb-3">Quick Help</h3>
            <p className="text-gray-300 mb-4">
              Find instant answers to common questions
            </p>
            <Link href="/faq" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              Browse FAQ →
            </Link>
          </div>

          {/* Email Support */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-3">Email Support</h3>
            <p className="text-gray-300 mb-4">
              Get help from our friendly support team
            </p>
            <a href="mailto:support@lookatmyprofile.org" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              Send Email →
            </a>
          </div>

          {/* App Issues */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">App Support</h3>
            <p className="text-gray-300 mb-4">
              Having issues with the mobile app?
            </p>
            <a href="https://apps.apple.com/app/roast-a-profile/id6747992467" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              App Store Page →
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select a topic</option>
                <option value="general">General Question</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing & Payments</option>
                <option value="feature">Feature Request</option>
                <option value="report">Report a Problem</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Response Time */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Response Times</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">< 2 hrs</div>
              <p className="text-gray-300">Critical Issues</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">< 24 hrs</div>
              <p className="text-gray-300">General Support</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">< 48 hrs</div>
              <p className="text-gray-300">Feature Requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Can't find a profile?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Make sure the profile is public</li>
              <li>• Enter username without @ symbol</li>
              <li>• Check for typos in the username</li>
              <li>• Try refreshing the page</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">App not working?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Update to the latest version</li>
              <li>• Check your internet connection</li>
              <li>• Try closing and reopening the app</li>
              <li>• Reinstall if issues persist</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Payment issues?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Purchases are handled by App Store</li>
              <li>• Check your payment method</li>
              <li>• Restore purchases in app settings</li>
              <li>• Contact Apple Support if needed</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-400">Roasts not generating?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Check if you have tokens available</li>
              <li>• Ensure profile is public</li>
              <li>• Try a different roast style</li>
              <li>• Clear browser cache and retry</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Here to help 24/7.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}