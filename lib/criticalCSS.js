// Critical CSS Optimization Utilities

// Function to extract critical CSS for above-the-fold content
export const extractCriticalCSS = (html) => {
  // This would typically be handled by a build tool like PurgeCSS or Critical
  // For demonstration, we'll return a simplified version
  
  const criticalSelectors = [
    'body', 'h1', 'h2', 'h3', 'p', 'a', 'button', 'input', 'select', 'textarea',
    '.btn-primary', '.btn-secondary', '.btn-whatsapp', '.card', '.container',
    '.bg-royal-blue', '.text-royal-blue', '.bg-gold', '.text-gold',
    '.py-16', '.py-20', '.px-4', '.text-center', '.font-bold',
    '.grid', '.grid-cols-1', '.md:grid-cols-2', '.md:grid-cols-3',
    '.gap-8', '.mb-12', '.rounded-xl', '.shadow-lg'
  ];
  
  return criticalSelectors.join(', ');
};

// Function to inline critical CSS
export const inlineCriticalCSS = (css) => {
  return `<style>${css}</style>`;
};

// Function to preload non-critical CSS
export const preloadNonCriticalCSS = () => {
  return `<link rel="preload" href="/_next/static/css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/_next/static/css/styles.css"></noscript>`;
};

// Function to optimize font loading
export const optimizeFontLoading = () => {
  return `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
      }
    </style>
  `;
};

// Function to implement CSS loading strategy
export const implementCSSLoadingStrategy = () => {
  return `
    <script>
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
    </script>
  `;
};