import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You - Message Sent Successfully',
  description: 'Your message has been sent successfully. We will get back to you soon.',
  robots: 'noindex, nofollow'
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative animate-bounce">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <svg 
                  className="w-16 h-16 text-green-400 animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            
            {/* Confetti-like particles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
              <div className="absolute bottom-10 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
              <div className="absolute bottom-20 right-10 w-3 h-3 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Message Sent!
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Thank you for reaching out! We've received your message and will get back to you within 24 hours.
          </p>

          {/* Response Time Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-600/30 rounded-full mb-12">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm">Average response time: &lt; 12 hours</span>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">While You Wait...</h2>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3 text-purple-300">
                🎉 Get Our Free App
              </h3>
              <p className="text-gray-300 mb-6">
                Join 2M+ users roasting Instagram profiles with AI
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/download"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <span className="flex items-center justify-center gap-2">
                    📱 Download Free App
                  </span>
                </Link>
                
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all border border-gray-700"
                >
                  Try Web Version
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">Explore more:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
                Home
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/faq" className="text-purple-400 hover:text-purple-300 transition">
                FAQ
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition">
                Blog
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/roast-examples" className="text-purple-400 hover:text-purple-300 transition">
                Roast Examples
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}