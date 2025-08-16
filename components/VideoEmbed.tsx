'use client';

import { useState } from 'react';

interface VideoEmbedProps {
  platform: 'youtube' | 'tiktok' | 'instagram';
  videoId: string;
  title: string;
  thumbnail?: string;
}

export function VideoEmbed({ platform, videoId, title, thumbnail }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getEmbedUrl = () => {
    switch (platform) {
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      case 'tiktok':
        return `https://www.tiktok.com/embed/v2/${videoId}`;
      case 'instagram':
        return `https://www.instagram.com/p/${videoId}/embed`;
      default:
        return '';
    }
  };

  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail;
    
    switch (platform) {
      case 'youtube':
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      case 'tiktok':
        return '/tiktok-placeholder.jpg';
      case 'instagram':
        return '/instagram-placeholder.jpg';
      default:
        return '/video-placeholder.jpg';
    }
  };

  if (!isLoaded) {
    return (
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
           onClick={() => setIsLoaded(true)}>
        <img 
          src={getThumbnailUrl()} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
          <button className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
          {platform.toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <iframe
        src={getEmbedUrl()}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export function VideoGrid({ videos }: { videos: Array<VideoEmbedProps & { description: string }> }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <div key={index} className="space-y-3">
          <VideoEmbed {...video} />
          <div>
            <h3 className="font-bold text-lg">{video.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}