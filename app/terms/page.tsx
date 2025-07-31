import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service | Roast a Profile',
  description: 'Terms of Service for Roast a Profile. Understand the rules, guidelines, and legal agreements for using our AI Instagram roasting service.',
  keywords: 'roast a profile terms, instagram roaster terms of service, AI roast generator legal',
  openGraph: {
    title: 'Terms of Service - Roast a Profile',
    description: 'The legal stuff, but make it readable.',
    url: 'https://www.lookatmyprofile.org/terms',
  }
};

export default function TermsPage() {
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

      {/* Terms Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Last updated: January 31, 2025
          </p>

          <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">The Fun Legal Stuff 🎉</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Roast a Profile! By using our service, you agree to these terms. 
              Don't worry, we've tried to make them as painless as possible.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use our service for fun, not to bully or harass</li>
              <li>You must be 13+ years old to use Roast a Profile</li>
              <li>Don't try to hack, spam, or break our service</li>
              <li>The roasts are AI-generated entertainment, not facts</li>
              <li>We're not responsible for hurt feelings (roast responsibly!)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By accessing or using Roast a Profile ("Service"), you agree to be bound by these 
            Terms of Service ("Terms"). If you disagree with any part of these terms, then you 
            may not access the Service.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">2. Description of Service</h2>
          <p className="text-gray-300 mb-4">
            Roast a Profile provides AI-generated humorous commentary ("roasts") about public 
            Instagram profiles. Key points:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Roasts are generated from publicly available information only</li>
            <li>Content is created for entertainment purposes</li>
            <li>We do not guarantee accuracy of any statements</li>
            <li>Service includes both free web version and paid mobile app</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">3. User Conduct</h2>
          <p className="text-gray-300 mb-4">You agree NOT to use the Service to:</p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Harass, bully, or intimidate any individual</li>
            <li>Generate roasts of minors or protected individuals</li>
            <li>Violate any laws or regulations</li>
            <li>Attempt to access private profiles or information</li>
            <li>Reverse engineer or hack our systems</li>
            <li>Create multiple accounts to bypass limitations</li>
            <li>Use automated systems or bots</li>
            <li>Impersonate others or misrepresent affiliations</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">4. Content Guidelines</h2>
          <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
            <p className="text-gray-300 mb-2">
              While our AI generates edgy humor, we maintain standards:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>No hate speech or discrimination</li>
              <li>No threats or incitement to violence</li>
              <li>No sexual content involving minors</li>
              <li>No doxxing or sharing private information</li>
              <li>No content promoting self-harm</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">5. Intellectual Property</h2>
          <p className="text-gray-300 mb-4">
            <strong>Our Content:</strong> All Service content, features, and functionality are 
            owned by Roast a Profile, Inc. and are protected by international copyright, 
            trademark, and other intellectual property laws.
          </p>
          <p className="text-gray-300 mb-6">
            <strong>User Content:</strong> You retain rights to any content you submit, but 
            grant us a worldwide, non-exclusive license to use, modify, and display such 
            content in connection with the Service.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">6. Privacy & Data</h2>
          <p className="text-gray-300 mb-6">
            Your use of our Service is also governed by our Privacy Policy. Please review our 
            Privacy Policy, which also governs the Site and informs users of our data 
            collection practices.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">7. Disclaimers</h2>
          <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg mb-6">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>The Service is provided "as is" without warranties of any kind</li>
              <li>We don't guarantee continuous, uninterrupted access to the Service</li>
              <li>Roasts are AI-generated and may not reflect reality</li>
              <li>We are not responsible for any decisions made based on roast content</li>
              <li>Technical issues may occur and affect service availability</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">8. Limitation of Liability</h2>
          <p className="text-gray-300 mb-6">
            To the fullest extent permitted by law, Roast a Profile shall not be liable for 
            any indirect, incidental, special, consequential, or punitive damages, including 
            without limitation, loss of profits, data, use, goodwill, or other intangible 
            losses resulting from your use of the Service.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">9. Indemnification</h2>
          <p className="text-gray-300 mb-6">
            You agree to defend, indemnify, and hold harmless Roast a Profile and its 
            licensee and licensors, and their employees, contractors, agents, officers and 
            directors, from and against any and all claims, damages, obligations, losses, 
            liabilities, costs or debt, and expenses (including but not limited to attorney's 
            fees).
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">10. Termination</h2>
          <p className="text-gray-300 mb-6">
            We may terminate or suspend your account and bar access to the Service immediately, 
            without prior notice or liability, under our sole discretion, for any reason 
            whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">11. Governing Law</h2>
          <p className="text-gray-300 mb-6">
            These Terms shall be governed and construed in accordance with the laws of 
            California, United States, without regard to its conflict of law provisions. 
            Our failure to enforce any right or provision of these Terms will not be 
            considered a waiver of those rights.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">12. Changes to Terms</h2>
          <p className="text-gray-300 mb-6">
            We reserve the right to modify or replace these Terms at any time. If a revision 
            is material, we will provide at least 30 days notice prior to any new terms 
            taking effect.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-purple-400">13. Contact Information</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-300">
              <strong>Email:</strong> legal@lookatmyprofile.org<br />
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
          <p className="text-gray-400">© 2025 Roast a Profile. Legally roasting since 2025.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}