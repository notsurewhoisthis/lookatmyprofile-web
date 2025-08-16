import Link from "next/link";
import { Metadata } from 'next';
import { FooterNavigation } from '@/components/SEO/SiteNavigation';

export const metadata: Metadata = {
  title: 'Support Center - Get Help with Roast a Profile',
  description: 'Need help with our Instagram roast generator? Contact our support team for assistance with the app, roasting features, or any technical issues.',
  keywords: 'support, help, contact, Instagram roast generator support, customer service',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/support'
  },
  openGraph: {
    title: 'Support Center - Roast a Profile Help',
    description: 'Get help with our Instagram roast generator. Our support team is here to assist you.',
    url: 'https://www.lookatmyprofile.org/support',
    type: 'website'
  }
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're here to help! Whether you're having trouble generating roasts or need assistance with the app,
            our support team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-300 mb-4">
              Get help from our friendly support team
            </p>
            <a href="mailto:support@lookatmyprofile.org" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              support@lookatmyprofile.org
            </a>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">FAQ</h3>
            <p className="text-gray-300 mb-4">
              Find answers to common questions
            </p>
            <Link href="/faq" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              Browse FAQ →
            </Link>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">App Issues</h3>
            <p className="text-gray-300 mb-4">
              Having trouble with the app?
            </p>
            <Link href="/download" className="text-purple-400 hover:text-purple-300 transition inline-flex items-center">
              Get Latest Version →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="0f956355-ec37-4284-b31d-3b7c7800df64" />
            
            {/* Redirect to Thank You Page */}
            <input type="hidden" name="redirect" value="https://www.lookatmyprofile.org/thank-you" />
            
            {/* From Name for Email */}
            <input type="hidden" name="from_name" value="LookAtMyProfile Support Form" />
            
            {/* Subject Line */}
            <input type="hidden" name="subject" value="New Support Request from LookAtMyProfile.org" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="topic" className="block text-sm font-medium mb-2">
                Topic *
              </label>
              <select
                id="topic"
                name="topic"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                required
              >
                <option value="">Select a topic</option>
                <option value="General Question">General Question</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Billing & Payments">Billing & Payments</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Report a Problem">Report a Problem</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>

            {/* Honeypot field for spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
            />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              Send Message
            </button>
          </form>

          {/* Privacy Notice */}
          <p className="text-sm text-gray-400 text-center mt-4">
            By submitting this form, you agree to our{' '}
            <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </Link>
            . We'll only use your information to respond to your inquiry.
          </p>
        </div>
      </section>

      {/* Response Time */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Response Times</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">&lt; 2 hrs</div>
              <p className="text-gray-300">Critical Issues</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">&lt; 24 hrs</div>
              <p className="text-gray-300">General Support</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">&lt; 48 hrs</div>
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

      {/* Footer Navigation */}
      <FooterNavigation currentPath="/support" />
    </div>
  );
}