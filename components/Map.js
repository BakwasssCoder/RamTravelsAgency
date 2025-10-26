'use client';

import { useEffect, useState } from 'react';

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-royal-blue">Our Location</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-royal-blue">Our Location</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.887454479193!2d85.1334933150649!3d25.77822898362876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edba9f6750930f%3A0x2d9d7526aab0e43d!2sDak%20Bungalow%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Patna Dak Bungalow Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}