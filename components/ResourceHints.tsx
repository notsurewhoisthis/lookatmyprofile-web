export function ResourceHints() {
  return (
    <>
      {/* DNS Prefetch for third-party domains */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://unpkg.com" />
      
      {/* Preconnect for critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Prefetch likely next navigations */}
      <link rel="prefetch" href="/roast-generator" />
      <link rel="prefetch" href="/download" />
      <link rel="prefetch" href="/instagram-roaster" />
      
      {/* Preload critical fonts */}
      <link 
        rel="preload" 
        href="/fonts/inter-var.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      
      {/* Module preload for critical JavaScript */}
      <link rel="modulepreload" href="/_next/static/chunks/main.js" />
      
      {/* Preload critical CSS */}
      <link 
        rel="preload" 
        href="/_next/static/css/app.css" 
        as="style"
      />
    </>
  );
}