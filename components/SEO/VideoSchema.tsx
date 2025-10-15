import React from 'react';

export interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
  embedUrl?: string;
  duration?: string; // ISO 8601 format: PT1M33S
  interactionCount?: string;
}

export const VideoSchema: React.FC<VideoSchemaProps> = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
  interactionCount
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "contentUrl": contentUrl,
    ...(embedUrl && { "embedUrl": embedUrl }),
    ...(duration && { "duration": duration }),
    ...(interactionCount && { "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": interactionCount
    }})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// YouTube video embed component with schema
export interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description: string;
  uploadDate: string;
  className?: string;
  autoplay?: boolean;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  description,
  uploadDate,
  className = '',
  autoplay = false
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;
  const contentUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={`video-embed-container ${className}`}>
      <VideoSchema
        name={title}
        description={description}
        thumbnailUrl={thumbnailUrl}
        uploadDate={uploadDate}
        contentUrl={contentUrl}
        embedUrl={embedUrl}
      />
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Pre-configured video embeds for common use cases
export const VideoEmbeds = {
  howItWorks: {
    videoId: "dQw4w9WgXcQ", // Placeholder - replace with actual video
    title: "How to Use Instagram Roast Generator - Step by Step Tutorial",
    description: "Learn how to generate hilarious AI-powered Instagram roasts in under 60 seconds. Complete walkthrough of all roast styles including Savage, Friendly, Shakespearean, and Gen Z modes.",
    uploadDate: "2025-01-15"
  },
  celebrityRoasts: {
    videoId: "dQw4w9WgXcQ", // Placeholder
    title: "Top 10 Savage Celebrity Instagram Roasts - AI Generated",
    description: "Watch the AI roast the biggest Instagram celebrities including Cristiano Ronaldo, Selena Gomez, The Rock, and more. Brutal yet hilarious roasts you won't believe.",
    uploadDate: "2025-01-12"
  },
  testimonials: {
    videoId: "dQw4w9WgXcQ", // Placeholder
    title: "Real User Reactions - Instagram Profile Roasts Gone Viral",
    description: "Compilation of users reacting to their AI-generated Instagram roasts. Watch people laugh, cry, and question their entire social media existence.",
    uploadDate: "2025-01-10"
  },
  genZRoasts: {
    videoId: "dQw4w9WgXcQ", // Placeholder
    title: "Gen Z Roast Mode - No Cap These Roasts Hit Different",
    description: "Experience the viral Gen Z roast style that's breaking the internet. AI-generated roasts using modern slang that absolutely slaps fr fr.",
    uploadDate: "2025-01-08"
  }
};

export default VideoSchema;
