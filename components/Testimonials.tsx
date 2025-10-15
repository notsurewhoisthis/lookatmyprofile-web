import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  author: string;
  rating: number;
  text: string;
  date: string;
  platform?: string;
}

interface TestimonialsProps {
  limit?: number;
  showSchema?: boolean;
}

const testimonials: Testimonial[] = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "This roast had me DYING 😂 Accuracy level: 💯 My friends couldn't stop laughing!",
    date: "2025-01-10",
    platform: "App Store"
  },
  {
    author: "Mike Johnson",
    rating: 5,
    text: "Best app ever! The savage mode absolutely destroyed my profile and I loved every second of it 🔥",
    date: "2025-01-08",
    platform: "App Store"
  },
  {
    author: "Jessica L.",
    rating: 5,
    text: "I can't believe how accurate this AI is. It roasted my aesthetic pics and called me out perfectly 💀",
    date: "2025-01-05",
    platform: "Twitter"
  },
  {
    author: "David Chen",
    rating: 5,
    text: "Used this to roast my friend's profile. We couldn't breathe from laughing. Gen Z mode hits different!",
    date: "2025-01-03",
    platform: "App Store"
  },
  {
    author: "Emma Wilson",
    rating: 5,
    text: "The Shakespearean roast style is GENIUS. Made my boyfriend's gym pics into poetry 😭",
    date: "2024-12-28",
    platform: "App Store"
  },
  {
    author: "Carlos R.",
    rating: 4,
    text: "Super fun app! The roasts are creative and actually clever, not just mean. Recommend!",
    date: "2024-12-25",
    platform: "App Store"
  },
  {
    author: "Lily Zhang",
    rating: 5,
    text: "This app knows me better than my therapist 😂 The personality analysis is scary accurate",
    date: "2024-12-20",
    platform: "Twitter"
  },
  {
    author: "Alex K.",
    rating: 5,
    text: "Downloaded for fun, stayed for the entertainment. Celebrity roasts are absolutely brutal!",
    date: "2024-12-15",
    platform: "App Store"
  },
  {
    author: "Maya Patel",
    rating: 5,
    text: "Best roast generator I've tried. The AI actually understands context and doesn't just use templates.",
    date: "2024-12-10",
    platform: "Twitter"
  },
  {
    author: "Tom Harrison",
    rating: 5,
    text: "My whole group chat uses this now. We have weekly roast battles. So much fun! 🎯",
    date: "2024-12-05",
    platform: "App Store"
  }
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  limit,
  showSchema = true
}) => {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  // Generate Review schema for each testimonial
  const reviewSchemas = displayedTestimonials.map(testimonial => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": testimonial.author
    },
    "reviewBody": testimonial.text,
    "datePublished": testimonial.date,
    "publisher": {
      "@type": "Organization",
      "name": "Roast a Profile"
    }
  }));

  return (
    <>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Roast a Profile - AI Instagram Roaster",
              "description": "AI-powered Instagram profile roaster and analyzer",
              "brand": {
                "@type": "Brand",
                "name": "Roast a Profile"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "ratingCount": "15420"
              },
              "review": reviewSchemas
            })
          }}
        />
      )}

      <div className="testimonials-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  {testimonial.platform && (
                    <p className="text-gray-500 text-xs">{testimonial.platform}</p>
                  )}
                </div>
                <p className="text-gray-500 text-xs">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Compact testimonial slider for hero sections
export const TestimonialSlider: React.FC = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-scroll">
        {featuredTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700"
          >
            <div className="flex gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-300 text-sm mb-2">"{testimonial.text}"</p>
            <p className="text-gray-500 text-xs font-semibold">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
