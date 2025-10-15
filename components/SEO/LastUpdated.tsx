import React from 'react';

interface LastUpdatedProps {
  date: string; // ISO 8601 format
  publishedDate?: string;
  showSchema?: boolean;
}

export const LastUpdated: React.FC<LastUpdatedProps> = ({
  date,
  publishedDate,
  showSchema = true
}) => {
  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const schema = publishedDate ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "datePublished": publishedDate,
    "dateModified": date,
  } : null;

  return (
    <>
      {showSchema && schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>
          Last Updated: <time dateTime={date} className="text-gray-300 font-medium">{formatDate(date)}</time>
        </span>
      </div>
    </>
  );
};

// Badge component for "Updated for 2025" labels
export const UpdatedBadge: React.FC = () => {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-600/20 text-green-400 text-xs font-semibold rounded-full border border-green-600/30">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Updated for 2025
    </span>
  );
};

export default LastUpdated;
