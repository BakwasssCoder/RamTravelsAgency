'use client';

import { DynamicLazyLoad } from '../../lib/dynamicImports';

export default function About() {
  const trustBadges = [
    {
      id: 1,
      title: '10+ Years Experience',
      description: 'In the travel industry'
    },
    {
      id: 2,
      title: '5000+ Happy Customers',
      description: 'Satisfied travelers'
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Always here to help'
    },
    {
      id: 4,
      title: 'Licensed & Insured',
      description: 'Safe and reliable travel'
    }
  ];

  // Placeholder for lazy loading
  const StoryPlaceholder = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <div className="h-8 bg-royal-blue rounded mb-6 w-48 animate-pulse"></div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
        ))}
      </div>
      <div className="bg-gray-200 h-96 rounded-xl animate-pulse"></div>
    </div>
  );

  const MissionVisionPlaceholder = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-gold rounded-xl p-8">
        <div className="h-6 bg-royal-blue rounded mb-4 w-32 animate-pulse"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="bg-royal-blue rounded-xl p-8">
        <div className="h-6 bg-white rounded mb-4 w-32 animate-pulse"></div>
        <div className="h-4 bg-white rounded animate-pulse"></div>
      </div>
    </div>
  );

  const TrustBadgesPlaceholder = () => (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="h-8 bg-royal-blue rounded mb-12 w-64 mx-auto animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="bg-royal-blue rounded-full w-16 h-16 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const TeamPlaceholder = () => (
    <section className="py-16 bg-royal-blue text-white">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-white rounded mb-4 w-64 mx-auto animate-pulse"></div>
        <div className="h-6 bg-white rounded mb-12 w-96 mx-auto animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white text-gray-800 rounded-xl p-6 text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-royal-blue rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                About Ram Travels India
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Your trusted partner for premium travel experiences across India and beyond
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<StoryPlaceholder />}
      >
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-royal-blue">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Ram Travels India was founded in Patna, Bihar with a vision to provide exceptional travel experiences 
                  to customers across India and around the world. Starting as a small car rental service, we have grown 
                  into a comprehensive travel agency offering a wide range of services.
                </p>
                <p className="text-gray-600 mb-4">
                  Our commitment to quality, customer satisfaction, and attention to detail has made us one of the most 
                  trusted names in the travel industry. We specialize in car rentals, self-drive options, luxury bus 
                  services, and curated tour packages to some of the most beautiful destinations in India and abroad.
                </p>
                <p className="text-gray-600">
                  With our base in Patna, we have a deep understanding of local travel needs while maintaining the 
                  expertise to organize international tours. Our team of travel experts is dedicated to making your 
                  journey comfortable, memorable, and hassle-free.
                </p>
              </div>
              <div className="bg-gray-200 h-96 rounded-xl"></div>
            </div>
          </div>
        </section>
      </DynamicLazyLoad>

      {/* Mission & Vision */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<MissionVisionPlaceholder />}
      >
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gold rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-royal-blue">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional travel services that exceed customer expectations, ensuring safe, comfortable, 
                  and memorable journeys for every traveler.
                </p>
              </div>
              <div className="bg-royal-blue rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p>
                  To become the most trusted and preferred travel partner for customers across India and globally, 
                  known for our reliability, quality service, and personalized travel solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </DynamicLazyLoad>

      {/* Trust Badges */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<TrustBadgesPlaceholder />}
      >
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-royal-blue">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {trustBadges.map((badge) => (
                  <div key={badge.id} className="text-center">
                    <div className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">{badge.id}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
                    <p className="text-gray-600">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </DynamicLazyLoad>

      {/* Team Section */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<TeamPlaceholder />}
      >
        <section className="py-16 bg-royal-blue text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Dedicated professionals committed to making your travel experience exceptional
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white text-gray-800 rounded-xl p-6 text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Ram Kumar</h3>
                <p className="text-royal-blue font-semibold mb-2">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in the travel industry, Ram leads our team with vision and dedication.
                </p>
              </div>
              
              <div className="bg-white text-gray-800 rounded-xl p-6 text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Sita Devi</h3>
                <p className="text-royal-blue font-semibold mb-2">Operations Manager</p>
                <p className="text-gray-600">
                  Sita ensures all our operations run smoothly and efficiently, managing logistics and customer service.
                </p>
              </div>
              
              <div className="bg-white text-gray-800 rounded-xl p-6 text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Rajesh Patel</h3>
                <p className="text-royal-blue font-semibold mb-2">Tour Coordinator</p>
                <p className="text-gray-600">
                  Rajesh specializes in creating memorable tour experiences and handling all travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </DynamicLazyLoad>
    </div>
  );
}