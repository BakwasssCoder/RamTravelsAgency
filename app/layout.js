import '../styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { DynamicHeader } from '../lib/dynamicImports';
import { DynamicFooter } from '../lib/dynamicImports';
import { registerServiceWorker } from '../lib/serviceWorker';
import { startPerformanceMonitoring } from '../lib/performanceReport';
import { DynamicMap } from '../lib/dynamicImports';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Ram Travels India - Car Rentals & Tour Packages',
  description: 'Premium car rentals, luxury car & bus rentals, and tour packages including Chardham, Kedarnath, Vrindavan, Himachal, and International tours.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        
        {/* External CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/style.css"
          rel="stylesheet"
        />
        <link
          href="/assets/lib/animate/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Spinner */}
        <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        
        <DynamicHeader />
        <main className="flex-grow">
          {children}
        </main>
        <DynamicMap />
        <DynamicFooter />
        
        {/* JavaScript Libraries */}
        <Script 
          src="https://code.jquery.com/jquery-3.4.1.min.js" 
          strategy="beforeInteractive" 
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossOrigin="anonymous"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/wow/wow.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/easing/easing.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/waypoints/waypoints.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/owlcarousel/owl.carousel.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/tempusdominus/js/moment.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/tempusdominus/js/moment-timezone.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" 
          strategy="beforeInteractive"
        />

        {/* Template Javascript */}
        <Script 
          src="/assets/js/main.js" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}