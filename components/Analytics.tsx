import Script from 'next/script'

// GA4 Measurement ID from environment variable with fallback
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-FMHXYGPTF1'

export function GoogleAnalytics() {
  // Skip GA initialization if no ID is configured
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics: No valid measurement ID configured')
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload" // Optimized: Changed from afterInteractive to lazyOnload for better performance
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true, // Privacy compliance
            cookie_flags: 'SameSite=None;Secure' // Security enhancement
          });
        `}
      </Script>
    </>
  )
}

// Core Web Vitals tracking
export function WebVitalsTracking() {
  return (
    <Script id="web-vitals" strategy="lazyOnload">
      {`
        // Lazy load web-vitals library for better performance
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          requestIdleCallback(() => {
            import('https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              function sendToGoogleAnalytics({ name, delta, id }) {
                // Only send if gtag is available
                if (window.gtag) {
                  gtag('event', name, {
                    event_category: 'Web Vitals',
                    event_label: id,
                    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
                    non_interaction: true,
                  });
                }
              }

              getCLS(sendToGoogleAnalytics);
              getFID(sendToGoogleAnalytics);
              getFCP(sendToGoogleAnalytics);
              getLCP(sendToGoogleAnalytics);
              getTTFB(sendToGoogleAnalytics);
            }).catch(err => console.error('Failed to load web-vitals:', err));
          });
        }
      `}
    </Script>
  )
}