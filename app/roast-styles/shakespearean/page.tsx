import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Shakespearean - Eloquent Instagram Roasts | Roast a Profile',
  description: 'Experience Instagram roasts in the style of Shakespeare. Eloquent burns delivered in old English that would make the Bard himself proud.',
  keywords: 'shakespearean instagram roast, eloquent profile roaster, old english social media humor, literary roasts',
  openGraph: {
    title: 'Shakespearean Mode - Eloquent Instagram Roasts in Old English',
    description: 'Thy Instagram doth receive most eloquent burns. Experience roasting as Shakespeare intended.',
    url: 'https://www.lookatmyprofile.org/roast-styles/shakespearean',
  }
};

export default function ShakespeareanRoastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
            <Link href="/roast-styles" className="hover:text-purple-400 transition">All Styles</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🎭</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Shakespearean: Roasts Most Eloquent
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Wherefore art thou posting such content? Our AI doth channel the Bard himself 
            to deliver roasts in iambic pentameter. Thy Instagram shall receive burns most literary.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/roast-generator?style=shakespearean" className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
              Commence Thy Roasting 🎭
            </Link>
            <Link href="/roast-styles" className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition">
              Compare Styles
            </Link>
          </div>
        </div>
      </section>

      {/* Example Roasts */}
      <section className="container mx-auto px-4 py-20 bg-black/40">
        <h2 className="text-4xl font-bold text-center mb-12">Samples of Eloquent Burns</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 rounded-lg border border-purple-600/30">
            <h3 className="text-xl font-bold mb-3 text-purple-400">The Vain Selfie Poster</h3>
            <p className="text-gray-300 italic">
              "Methinks the lady doth post too much. Thy visage appears more oft than 
              the sun at dawn, yet brings less light to this weary world."
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 rounded-lg border border-purple-600/30">
            <h3 className="text-xl font-bold mb-3 text-purple-400">The False Philosopher</h3>
            <p className="text-gray-300 italic">
              "To thine own self be true? Nay, thy quotes art but borrowed wisdom, 
              as hollow as thy filtered countenance. A fool thinks himself wise, indeed."
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-6 rounded-lg border border-purple-600/30">
            <h3 className="text-xl font-bold mb-3 text-purple-400">The Perpetual Traveler</h3>
            <p className="text-gray-300 italic">
              "All the world's a stage, yet thou makest it thy personal photo booth. 
              Thy wanderlust masks but a restless soul seeking validation in foreign lands."
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">The Art of Literary Roasting</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">📜 Poetic Precision</h3>
            <p className="text-gray-300">
              Every roast crafted with the care of a sonnet, employing metaphor, 
              alliteration, and the occasional rhyming couplet for maximum impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">🎨 Artistic Burns</h3>
            <p className="text-gray-300">
              Thy Instagram follies become the subject of literary criticism, 
              as if reviewed by the Globe Theatre's harshest critics.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">🏛️ Classical References</h3>
            <p className="text-gray-300">
              Drawing from mythology, literature, and classical arts to deliver 
              burns that are both educated and devastating.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">💎 Timeless Quality</h3>
            <p className="text-gray-300">
              These roasts age like fine wine - screenshot worthy burns that 
              become more appreciated with each reading.
            </p>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/10 to-indigo-900/10">
        <h2 className="text-4xl font-bold text-center mb-12">Reviews Most Favorable</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "Never before hath mine ego been so eloquently destroyed. I am both 
              insulted and impressed. Bravo, good AI, bravo!"
            </p>
            <cite className="text-purple-400">- @bardcore_enthusiast</cite>
          </blockquote>
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "My English teacher would be proud of how artistically I just got 
              roasted. Using this for my thesis on digital humanities."
            </p>
            <cite className="text-purple-400">- @lit_major_2025</cite>
          </blockquote>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold mb-6">The Renaissance of Digital Roasting</h2>
          <p className="text-gray-300 mb-4">
            In an age of emojis and abbreviations, our Shakespearean mode brings eloquence 
            back to social media humor. By combining natural language processing with a 
            deep understanding of Elizabethan English, we create roasts that are both 
            entertaining and educational.
          </p>
          <h3 className="text-2xl font-bold mb-4">Literary Devices at Work</h3>
          <p className="text-gray-300 mb-4">
            Our AI employs classic literary devices including metaphor, simile, alliteration, 
            and irony. Each roast is structured with the care of a Shakespearean insult, 
            drawing from the Bard's own arsenal of creative burns found throughout his plays.
          </p>
          <h3 className="text-2xl font-bold mb-4">Educational Entertainment</h3>
          <p className="text-gray-300 mb-4">
            Perfect for literature students, theater enthusiasts, or anyone who appreciates 
            wordplay at its finest. Many users report learning new vocabulary and gaining 
            appreciation for classical literature through our creatively crafted roasts.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Art Thou Ready for Literary Mockery?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Let thy Instagram receive the roasting it deserves, delivered with the 
          eloquence of the Globe Theatre's finest wordsmiths.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/roast-generator?style=shakespearean" className="bg-gradient-to-r from-purple-600 to-indigo-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-block">
            Begin Thy Roasting 🎭
          </Link>
          <Link href="/download" className="border border-purple-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-purple-400/10 transition inline-block">
            Procure the App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-purple-800/50">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© MMXXV Roast a Profile. All jests reserved.</p>
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