import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Roast a Profile',
  description: 'Get answers to common questions about Roast a Profile. Learn how Instagram roasting works, privacy concerns, and everything about our AI roast generator.',
  keywords: 'roast a profile faq, instagram roaster questions, AI roast generator help, roasting app support',
  openGraph: {
    title: 'Frequently Asked Questions - Roast a Profile',
    description: 'Everything you need to know about AI Instagram roasting.',
    url: 'https://www.lookatmyprofile.org/faq',
  }
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How does Roast a Profile work?",
          a: "Our AI analyzes public Instagram profiles and generates humorous roasts based on profile pictures, bio, posts, and overall aesthetic. Simply enter any public username and choose your roasting style!"
        },
        {
          q: "Do I need to log in with Instagram?",
          a: "No! We never ask for your Instagram credentials. Just enter any public username and get instant roasts. The app works with publicly available information only."
        },
        {
          q: "Is it free to use?",
          a: "The web version offers 3 free roasts per day. Download our app for unlimited roasts, exclusive styles, battle mode, and more features!"
        }
      ]
    },
    {
      category: "Privacy & Safety",
      questions: [
        {
          q: "Is my data safe?",
          a: "Absolutely. We don't store personal information, passwords, or private data. We only analyze publicly visible Instagram content, and we don't save or share your search history."
        },
        {
          q: "Can people see that I roasted them?",
          a: "No! Roasting is completely anonymous. The profile owner won't know they've been roasted unless you choose to share the results with them."
        },
        {
          q: "What if someone roasts me without permission?",
          a: "All roasts are generated from public information. If you're uncomfortable with potential roasts, consider making your Instagram profile private. We also have content guidelines to prevent harmful content."
        }
      ]
    },
    {
      category: "Roasting Features",
      questions: [
        {
          q: "What are the different roast styles?",
          a: "We offer 4 main styles: Savage Mode (brutal burns), Friendly Fire (playful teasing), Shakespearean (eloquent insults), and Gen Z (modern slang). The app has 8 additional exclusive styles!"
        },
        {
          q: "Can I roast private profiles?",
          a: "No, our AI only works with public Instagram profiles. Private profiles cannot be analyzed or roasted for privacy reasons."
        },
        {
          q: "How accurate are the roasts?",
          a: "Our AI is trained on millions of profiles and social media patterns. While roasts are meant to be funny generalizations, users often report they're surprisingly accurate!"
        }
      ]
    },
    {
      category: "Technical Issues",
      questions: [
        {
          q: "Why can't I find a specific profile?",
          a: "Make sure the profile is public and you're entering the exact username without the @ symbol. Very new profiles might take time to become discoverable."
        },
        {
          q: "The roast generator isn't working. What should I do?",
          a: "Try refreshing the page, clearing your browser cache, or using a different browser. If issues persist, contact our support team."
        },
        {
          q: "Can I use Roast a Profile on my phone?",
          a: "Yes! Download our iOS app for the best experience. Android version coming soon. The web version also works on mobile browsers."
        }
      ]
    },
    {
      category: "App Features",
      questions: [
        {
          q: "What's different in the mobile app?",
          a: "The app offers unlimited roasts, 12+ roast styles, battle mode, daily challenges, profile analysis, custom styles, and the ability to save and share roasts easily."
        },
        {
          q: "What is Battle Mode?",
          a: "Battle Mode lets you compare two profiles head-to-head. The AI roasts both and declares a winner based on various factors. It's perfect for friendly competitions!"
        },
        {
          q: "Can I create custom roast styles?",
          a: "Yes! App users can create personalized roast styles by adjusting humor level, topics to focus on, and specific slang or references to include."
        }
      ]
    }
  ];

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
            <Link href="/roast-styles" className="hover:text-purple-400 transition">Roast Styles</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Everything you need to know about roasting Instagram profiles with AI
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <details key={index} className="bg-gray-800/50 rounded-lg overflow-hidden group">
                    <summary className="p-6 cursor-pointer hover:bg-gray-800/70 transition flex justify-between items-center">
                      <h3 className="text-lg font-semibold pr-4">{faq.q}</h3>
                      <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help! Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/support" className="bg-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition">
              Contact Support
            </Link>
            <a href="mailto:support@lookatmyprofile.org" className="border border-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400/10 transition">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. All questions answered.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}