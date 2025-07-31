import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your GA4 Measurement ID

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

// Core Web Vitals tracking
export function WebVitalsTracking() {
  return (
    <Script id="web-vitals" strategy="afterInteractive">
      {`
        // Import web-vitals library dynamically
        import('https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          function sendToGoogleAnalytics({ name, delta, id }) {
            // Send the metric to Google Analytics
            gtag('event', name, {
              event_category: 'Web Vitals',
              event_label: id,
              value: Math.round(name === 'CLS' ? delta * 1000 : delta),
              non_interaction: true,
            });
          }

          getCLS(sendToGoogleAnalytics);
          getFID(sendToGoogleAnalytics);
          getFCP(sendToGoogleAnalytics);
          getLCP(sendToGoogleAnalytics);
          getTTFB(sendToGoogleAnalytics);
        });
      `}
    </Script>
  )
}