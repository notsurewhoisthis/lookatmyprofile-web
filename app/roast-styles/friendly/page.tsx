import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Friendly Fire - Playful Instagram Roasts | Roast a Profile',
  description: 'Get lighthearted, playful roasts for Instagram profiles. Perfect for friends, our Friendly Fire mode delivers jokes without the sting.',
  keywords: 'friendly instagram roast, playful profile jokes, lighthearted social media humor, friendly roast generator',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-styles/friendly'
  },
  openGraph: {
    title: 'Friendly Fire - Playful Instagram Roasts for Friends',
    description: 'Fun, lighthearted roasts that make everyone laugh. Perfect for sharing with friends.',
    url: 'https://www.lookatmyprofile.org/roast-styles/friendly',
  }
};

export default function FriendlyRoastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-900 to-teal-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-green-400 transition">Roast Generator</Link>
            <Link href="/roast-styles" className="hover:text-green-400 transition">All Styles</Link>
            <Link href="/blog" className="hover:text-green-400 transition">Blog</Link>
            <Link href="/download" className="bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">😊</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Friendly Fire: Roasts That Make Everyone Smile
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            The perfect balance of funny and nice. Our Friendly AI delivers playful jokes 
            that tease without crossing the line. Great for friends, family, and coworkers!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/roast-generator?style=friendly" className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition">
              Start Friendly Roasting 😄
            </Link>
            <Link href="/roast-styles" className="border border-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400/10 transition">
              Compare Styles
            </Link>
          </div>
        </div>
      </section>

      {/* Example Roasts */}
      <section className="container mx-auto px-4 py-20 bg-black/30">
        <h2 className="text-4xl font-bold text-center mb-12">Sample Friendly Roasts</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-6 rounded-lg border border-green-600/30">
            <h3 className="text-xl font-bold mb-3 text-green-400">The Selfie Queen</h3>
            <p className="text-gray-300 italic">
              "You take more selfies than a tourist at the Eiffel Tower! But hey, 
              at least you're consistent with that signature duck face 🦆"
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-6 rounded-lg border border-green-600/30">
            <h3 className="text-xl font-bold mb-3 text-green-400">The Food Blogger</h3>
            <p className="text-gray-300 italic">
              "Your food gets more photoshoots than supermodels! We get it, you eat. 
              But props for making instant ramen look gourmet! 🍜"
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-6 rounded-lg border border-green-600/30">
            <h3 className="text-xl font-bold mb-3 text-green-400">The Gym Enthusiast</h3>
            <p className="text-gray-300 italic">
              "Your gym posts are so frequent, I'm getting a workout just scrolling! 
              But respect for the dedication - even if half are just mirror selfies 💪"
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Friendly Fire</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">🤗 Keeps It Light</h3>
            <p className="text-gray-300">
              Our AI is trained to find humor without hurting feelings. Perfect for 
              sharing with friends who can take a joke but appreciate boundaries.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">🎯 Cleverly Observant</h3>
            <p className="text-gray-300">
              Still insightful and funny, just wrapped in a friendlier package. We 
              notice the quirks without being mean about them.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">👥 Group-Friendly</h3>
            <p className="text-gray-300">
              Safe for work, family gatherings, and social settings. Share the laughs 
              without worrying about offending anyone.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">💚 Positive Vibes</h3>
            <p className="text-gray-300">
              Ends on a high note! Our friendly roasts often include a compliment 
              or positive observation to balance the teasing.
            </p>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-green-900/10 to-blue-900/10">
        <h2 className="text-4xl font-bold text-center mb-12">Happy Roasters</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "Perfect for our family group chat! Even grandma laughed at her roast. 
              It's funny without being mean - exactly what we needed."
            </p>
            <cite className="text-green-400">- @wholesome_humor</cite>
          </blockquote>
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "Used this at our office party to roast everyone's work Instagram. 
              HR approved! Everyone had a good laugh without drama."
            </p>
            <cite className="text-green-400">- @office_fun_committee</cite>
          </blockquote>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold mb-6">The Art of Friendly Roasting</h2>
          <p className="text-gray-300 mb-4">
            Friendly Fire mode represents the perfect balance in social media humor. Our AI 
            understands that the best jokes bring people together rather than tear them down. 
            Using advanced sentiment analysis, we ensure every roast stays on the right side 
            of funny.
          </p>
          <h3 className="text-2xl font-bold mb-4">Perfect for Social Situations</h3>
          <p className="text-gray-300 mb-4">
            Whether you're at a birthday party, team building event, or just hanging with 
            friends, Friendly Fire provides entertainment that everyone can enjoy. No awkward 
            moments, no hurt feelings - just good-natured fun.
          </p>
          <h3 className="text-2xl font-bold mb-4">Building Connections Through Humor</h3>
          <p className="text-gray-300 mb-4">
            Research shows that shared laughter strengthens social bonds. Our Friendly Fire 
            mode creates moments of connection by highlighting relatable quirks we all share 
            on social media. It's roasting that brings people together.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready for Some Friendly Fun?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join millions who are discovering the joy of lighthearted roasting. 
          Perfect for any occasion where you want laughs without tears!
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/roast-generator?style=friendly" className="bg-gradient-to-r from-green-600 to-blue-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition inline-block">
            Try Friendly Fire 😊
          </Link>
          <Link href="/download" className="border border-green-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-green-400/10 transition inline-block">
            Get the App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-green-800/50">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Spreading smiles, not tears.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/roast-styles" className="text-gray-400 hover:text-white transition">All Styles</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}