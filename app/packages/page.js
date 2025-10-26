'use client';

import Link from 'next/link';
import { lazy, Suspense } from 'react';
import { DynamicLazyLoad } from '../../lib/dynamicImports';
import { generateWhatsAppUrl, generatePackageInquiryMessage } from '../../lib/whatsapp';

// Lazy load the FareEstimator component
const LazyFareEstimator = lazy(() => import('../../components/FareEstimator'));

export default function Packages() {
  const packages = [
    {
      id: 'chardham',
      name: 'Chardham Package',
      description: 'Complete Chardham Yatra package with luxury accommodations',
      duration: '10 days',
      price: '₹24,999',
      image: 'assets/img/package-1.jpg',
      destination: 'Uttarakhand',
      passengers: '1 Person'
    },
    {
      id: 'kedarnath',
      name: 'Kedarnath Package',
      description: 'Kedarnath Temple tour with comfortable stay options',
      duration: '5 days',
      price: '₹12,999',
      image: 'assets/img/package-2.jpg',
      destination: 'Kedarnath',
      passengers: '1 Person'
    },
    {
      id: 'himachal',
      name: 'Himachal Package',
      description: 'Himachal Pradesh tour with sightseeing and adventure activities',
      duration: '7 days',
      price: '₹18,999',
      image: 'assets/img/package-3.jpg',
      destination: 'Himachal',
      passengers: '1 Person'
    },
    {
      id: 4,
      name: 'Vrindavan Tour',
      description: 'Explore the spiritual and cultural heritage of Vrindavan and Mathura.',
      duration: '4 days',
      price: '₹9,999',
      image: 'assets/img/destination-1.jpg',
      destination: 'Vrindavan',
      passengers: '1 Person'
    },
    {
      id: 5,
      name: 'International Tour',
      description: 'Experience international destinations with our premium tour packages.',
      duration: 'Varies',
      price: 'From ₹50,000',
      image: 'assets/img/destination-4.jpg',
      destination: 'Global',
      passengers: '1 Person'
    }
  ];

  const handlePackageBooking = (packageName) => {
    const message = generatePackageInquiryMessage(packageName);
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  // Placeholder for lazy loading
  const PackagesGridPlaceholder = () => (
    <div className="row g-4 justify-content-center">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
          <div className="package-item">
            <div className="overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="d-flex border-bottom">
              <div className="flex-fill text-center border-end py-2">
                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto animate-pulse"></div>
              </div>
              <div className="flex-fill text-center border-end py-2">
                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
              </div>
              <div className="flex-fill text-center py-2">
                <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-3 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="d-flex justify-content-center mb-2">
                <div className="h-8 bg-royal-blue rounded w-24 animate-pulse"></div>
                <div className="h-8 bg-green-200 rounded w-24 ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const CTAPlaceholder = () => (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 text-center text-white">
              <div className="h-8 bg-white rounded mb-4 w-80 mx-auto animate-pulse"></div>
              <div className="h-6 bg-white rounded mb-8 w-96 mx-auto animate-pulse"></div>
              <div className="h-12 bg-gold rounded w-64 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Our Tour Packages
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Discover our carefully crafted tour packages for unforgettable travel experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<PackagesGridPlaceholder />}
      >
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Packages
              </h6>
              <h1 className="mb-5">Awesome Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
              {packages.map((pkg, index) => (
                <div key={pkg.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                  <div className="package-item">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src={pkg.image} alt={pkg.name} />
                    </div>
                    <div className="d-flex border-bottom">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        {pkg.destination}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />{pkg.duration}
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-user text-primary me-2" />{pkg.passengers}
                      </small>
                    </div>
                    <div className="text-center p-4">
                      <h3 className="mb-0">{pkg.price}</h3>
                      <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                      </div>
                      <p>
                        {pkg.description}
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                        <Link
                          href={`/packages/${pkg.id}`}
                          className="btn btn-sm btn-primary px-3 border-end"
                          style={{ borderRadius: "30px 0 0 30px" }}
                        >
                          Read More
                        </Link>
                        <button
                          onClick={() => handlePackageBooking(pkg.name)}
                          className="btn btn-sm btn-primary px-3"
                          style={{ borderRadius: "0 30px 30px 0" }}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DynamicLazyLoad>

      {/* CTA Section */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<CTAPlaceholder />}
      >
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="booking p-5">
              <div className="row g-5 align-items-center">
                <div className="col-md-12 text-center text-white">
                  <h6 className="text-white text-uppercase">Special Offers</h6>
                  <h1 className="text-white mb-4">Ready for Your Dream Vacation?</h1>
                  <p className="mb-4">
                    Contact us for personalized travel arrangements and exclusive deals. 
                    Our travel experts are available 24/7 to assist you with your travel needs.
                  </p>
                  <a 
                    href="https://wa.me/919155969543" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-light py-3 px-5 mt-2"
                  >
                    Book on WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DynamicLazyLoad>
    </div>
  );
}