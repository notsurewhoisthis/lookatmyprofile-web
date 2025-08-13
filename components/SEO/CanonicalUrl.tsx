import Head from 'next/head';

interface CanonicalUrlProps {
  path: string;
}

export const CanonicalUrl: React.FC<CanonicalUrlProps> = ({ path }) => {
  const baseUrl = 'https://www.lookatmyprofile.org';
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

// Helper to generate canonical URL
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://www.lookatmyprofile.org';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};