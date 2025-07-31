import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | Roast a Profile',
  description: 'Privacy policy for Roast a Profile. Learn how we handle your data, protect your privacy, and ensure safe Instagram roasting.',
  keywords: 'roast a profile privacy, instagram roaster privacy policy, AI data protection',
  openGraph: {
    title: 'Privacy Policy - Roast a Profile',
    description: 'Your privacy matters. Learn how we protect your data.',
    url: 'https://www.lookatmyprofile.org/privacy',
  }
};

export default function PrivacyPage() {
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

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Last updated: January 31, 2025
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">TL;DR - Your Privacy Matters</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>We never ask for your Instagram password</li>
              <li>We only analyze public Instagram profiles</li>
              <li>We don't store personal data or search history</li>
              <li>Roasting is anonymous - profile owners aren't notified</li>
              <li>We use standard analytics to improve our service</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">1. Information We Collect</h2>
          
          <h3 className="text-xl font-bold mb-2">1.1 Information You Provide</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Username Searches:</strong> Instagram usernames you enter to generate roasts</li>
            <li><strong>App Account (Optional):</strong> Email address if you create an account in our mobile app</li>
            <li><strong>Feedback:</strong> Any feedback or support requests you send us</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">1.2 Information We Collect Automatically</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong>Usage Data:</strong> Which features you use, roast styles selected</li>
            <li><strong>Device Information:</strong> Device type, operating system, browser type</li>
            <li><strong>Analytics:</strong> Page views, session duration, general location (country/city level)</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">2. How We Use Information</h2>
          <p className="text-gray-300 mb-4">We use collected information to:</p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Generate AI-powered roasts of Instagram profiles</li>
            <li>Improve our AI algorithms and roasting quality</li>
            <li>Provide customer support</li>
            <li>Send important service updates (app users only)</li>
            <li>Analyze usage patterns to improve features</li>
            <li>Prevent abuse and ensure service stability</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">3. What We DON'T Do</h2>
          <div className="bg-red-900/20 border border-red-600/30 p-4 rounded-lg mb-6">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>We NEVER ask for or store Instagram passwords</li>
              <li>We DON'T notify users when their profile is roasted</li>
              <li>We DON'T sell your data to third parties</li>
              <li>We DON'T store the roasts you generate</li>
              <li>We DON'T track individual user behavior across sites</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">4. Data Storage & Security</h2>
          <p className="text-gray-300 mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>All data transmission is encrypted using HTTPS</li>
            <li>App user accounts are secured with encrypted passwords</li>
            <li>We use secure cloud infrastructure providers</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to user data (need-to-know basis)</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">5. Third-Party Services</h2>
          <p className="text-gray-300 mb-4">We use the following third-party services:</p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong>Analytics:</strong> Google Analytics for usage statistics</li>
            <li><strong>Hosting:</strong> Heroku for website hosting</li>
            <li><strong>Payment Processing:</strong> Apple App Store for in-app purchases</li>
            <li><strong>AI Services:</strong> OpenAI for generating roasts</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">6. Your Rights</h2>
          <p className="text-gray-300 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Access any personal data we have about you</li>
            <li>Request deletion of your account and associated data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request correction of inaccurate information</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">7. Children's Privacy</h2>
          <p className="text-gray-300 mb-6">
            Roast a Profile is not intended for users under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If we learn we have collected 
            information from a child under 13, we will delete it immediately.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">8. International Data Transfers</h2>
          <p className="text-gray-300 mb-6">
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your information in accordance 
            with this privacy policy.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">9. Changes to This Policy</h2>
          <p className="text-gray-300 mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">10. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have questions about this privacy policy or our practices, please contact us at:
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-300">
              <strong>Email:</strong> privacy@lookatmyprofile.org<br />
              <strong>Address:</strong> Roast a Profile, Inc.<br />
              San Francisco, CA 94102<br />
              United States
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Privacy protected.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}