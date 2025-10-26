'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-royal-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <a 
            href="https://wa.me/919155969543" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}