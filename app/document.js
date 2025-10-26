import { Html, Head, Main, NextScript } from 'next/document';
import { optimizeFontLoading, implementCSSLoadingStrategy } from '../lib/criticalCSS';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Resource hints for faster loading */}
        <link rel="prefetch" href="/packages" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/departures" />
        
        {/* Performance optimizations */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Mobile optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* PWA support */}
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Font optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: 'Inter', sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Playfair Display', serif;
            }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* CSS loading strategy */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Critical CSS inlining strategy
              (function() {
                // Load non-critical CSS asynchronously
                var loadCSS = function(href, before, media) {
                  var doc = document;
                  var ss = doc.createElement("link");
                  var refs = (doc.body || doc.getElementsByTagName("head")[0]).childNodes;
                  var ref = before ? refs[before] : refs[refs.length - 1];
                  
                  var sheets = doc.styleSheets;
                  ss.rel = "stylesheet";
                  ss.href = href;
                  ss.media = media || "all";
                  
                  // Temporarily set media to something non-matching
                  ss.media = "only x";
                  
                  // Inject link
                  ref.parentNode.insertBefore(ss, before ? ref : ref.nextSibling);
                  
                  // Transition to complete state
                  setTimeout(function () {
                    ss.media = media || "all";
                  });
                  
                  return ss;
                };
                
                // Load non-critical CSS after page load
                if (window.addEventListener) {
                  window.addEventListener("load", function() {
                    loadCSS("/_next/static/css/styles.css");
                  });
                }
              })();
            `,
          }}
        />
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                // Measure page load time
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('[Performance] Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                    }
                  }, 0);
                });
              }
            `,
          }}
        />
      </body>
    </Html>
  );
}