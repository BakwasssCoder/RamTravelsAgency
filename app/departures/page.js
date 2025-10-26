'use client';

import { useState, lazy, Suspense } from 'react';
import { DynamicLazyLoad } from '../../lib/dynamicImports';

// Lazy load the FixedDepartureCalendar component
const FixedDepartureCalendar = lazy(() => import('../../components/FixedDepartureCalendar'));

export default function Departures() {
  // Placeholder for lazy loading
  const CalendarPlaceholder = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="h-8 bg-gray-300 rounded mb-6 w-64 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4">
            <div className="text-center mb-4">
              <div className="h-8 bg-royal-blue rounded w-16 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-16 mx-auto mt-1 animate-pulse"></div>
            </div>
            <div className="mb-4">
              <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-10 bg-green-200 rounded animate-pulse"></div>
              <div className="h-10 bg-gold rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const HowItWorksPlaceholder = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-300 rounded mb-12 w-64 mx-auto animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="h-16 bg-royal-blue rounded-full w-16 mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
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
      <div className="container-fluid bg-primary py-5 mb-5">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Fixed Departures
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Join our scheduled group tours with fixed departure dates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Departures Calendar */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<CalendarPlaceholder />}
      >
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<CalendarPlaceholder />}>
              <FixedDepartureCalendar />
            </Suspense>
          </div>
        </section>
      </DynamicLazyLoad>

      {/* How It Works */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<HowItWorksPlaceholder />}
      >
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-royal-blue">How It Works</h2>
            
            <div className="row gy-5 gx-4 justify-content-center">
              <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" 
                       style={{ width: 100, height: 100 }}>
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h5 className="mt-4">Choose Departure</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Select from our fixed departure dates for popular tour packages
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" 
                       style={{ width: 100, height: 100 }}>
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h5 className="mt-4">Book on WhatsApp</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Click "Book on WhatsApp" and send us your booking details
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" 
                       style={{ width: 100, height: 100 }}>
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h5 className="mt-4">Confirm & Travel</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Receive confirmation and join us for an unforgettable journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DynamicLazyLoad>
    </div>
  );
}