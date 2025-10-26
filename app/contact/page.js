'use client';

import { useState } from 'react';
import { openWhatsAppChat, generateBookingMessage } from '../../lib/whatsapp';
import { DynamicLazyLoad } from '../../lib/dynamicImports';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookingDetails = {
      service: formData.service,
      name: formData.name,
      email: formData.email,
      specialRequest: `Phone: ${formData.phone}\nMessage: ${formData.message}`
    };
    
    const message = generateBookingMessage(bookingDetails);
    openWhatsAppChat(message);
  };

  // Placeholder for lazy loading
  const ContactInfoPlaceholder = () => (
    <div>
      <div className="h-8 bg-royal-blue rounded mb-6 w-48 animate-pulse"></div>
      <div className="space-y-6 mb-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-start">
            <div className="bg-royal-blue rounded-full w-12 h-12 mr-4 animate-pulse"></div>
            <div>
              <div className="h-6 bg-gray-300 rounded mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gold rounded-xl p-6">
        <div className="h-6 bg-royal-blue rounded mb-3 w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 animate-pulse"></div>
        <div className="h-12 bg-green-200 rounded animate-pulse"></div>
      </div>
    </div>
  );

  const ContactFormPlaceholder = () => (
    <div>
      <div className="h-8 bg-royal-blue rounded mb-6 w-64 animate-pulse"></div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
          <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="h-12 bg-royal-blue rounded animate-pulse"></div>
      </div>
    </div>
  );

  const MapPlaceholder = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-royal-blue rounded mb-8 w-48 mx-auto animate-pulse"></div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-64 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-royal-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for bookings, inquiries, and travel assistance
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <DynamicLazyLoad 
              height="auto"
              placeholder={<ContactInfoPlaceholder />}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-royal-blue">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-royal-blue p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Our Office</h3>
                      <p className="text-gray-600">Patna, Bihar, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-royal-blue p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9155969543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-royal-blue p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email</h3>
                      <p className="text-gray-600">info@ramtravelsindia.com</p>
                    </div>
                  </div>
                </div>
                
                {/* WhatsApp CTA */}
                <div className="bg-gold rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-royal-blue">Quick Booking on WhatsApp</h3>
                  <p className="text-gray-700 mb-4">Get instant quotes and book your travel directly on WhatsApp</p>
                  <a 
                    href="https://wa.me/919155969543" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex items-center"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </DynamicLazyLoad>
            
            {/* Contact Form */}
            <DynamicLazyLoad 
              height="auto"
              placeholder={<ContactFormPlaceholder />}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-royal-blue">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Service Interested</label>
                      <select 
                        name="service" 
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="Car Rental">Car Rental</option>
                        <option value="Self-Drive">Self-Drive</option>
                        <option value="Bus/Traveller">Bus/Traveller</option>
                        <option value="Tour Package">Tour Package</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </DynamicLazyLoad>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<MapPlaceholder />}
      >
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-royal-blue">Find Us</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Map Location (Patna, Bihar)</p>
              </div>
            </div>
          </div>
        </section>
      </DynamicLazyLoad>
    </div>
  );
}