'use client';

import { useState, lazy, Suspense, useEffect } from 'react';
import Link from 'next/link';
import { DynamicLazyLoad } from '../lib/dynamicImports';
import { measureComponentLoad, withPerformanceMonitoring } from '../lib/performanceMonitor';
import { generateWhatsAppUrl, generateBookingMessage, generatePackageInquiryMessage } from '../lib/whatsapp';

// Lazy load heavy components
const LazyFareEstimator = lazy(() => import('../components/FareEstimator'));

function HomeContent() {
  const [quoteForm, setQuoteForm] = useState({
    service: '',
    city: '',
    destination: '',
    date: '',
    vehicle: '',
    passengers: ''
  });

  // Performance monitoring
  useEffect(() => {
    const endMeasure = measureComponentLoad('HomePage');
    return () => endMeasure();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const message = generateBookingMessage(quoteForm);
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Experience Premium Travel With Us
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Luxury car rentals, tour packages, and unforgettable travel experiences across India and beyond
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about.jpg"
                  alt="About Ram Travels India"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Ram Travels India</span>
              </h1>
              <p className="mb-4">
                With over a decade of experience in the travel industry, Ram Travels India offers premium car rentals, 
                luxury tour packages, and exceptional travel services across India and internationally.
              </p>
              <p className="mb-4">
                We specialize in Chardham Yatra, Kedarnath tours, Himachal expeditions, and international destinations. 
                Our fleet includes luxury sedans, SUVs, Innova, Travellers, and buses to suit all your travel needs.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Luxury Car Rentals
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Premium Tour Packages
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Experienced Travel Guides
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Customer Support
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    All India Service
                  </p>
                </div>
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" href="/about">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-car text-primary mb-4" />
                  <h5>Car Rentals</h5>
                  <p>
                    Premium sedans, SUVs, and luxury vehicles for all your travel needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Booking</h5>
                  <p>
                    Handpicked accommodations ranging from budget to luxury options
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-route text-primary mb-4" />
                  <h5>Tour Packages</h5>
                  <p>
                    Customized domestic and international tour packages
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                  <h5>Travel Guides</h5>
                  <p>
                    Experienced local guides for an authentic travel experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destinations
            </h6>
            <h1 className="mb-5">Popular Destinations</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <Link
                    className="position-relative d-block overflow-hidden"
                    href="/destinations/chardham"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-1.jpg"
                      alt="Chardham Yatra"
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      Special Offer
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Chardham Yatra
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                  <Link
                    className="position-relative d-block overflow-hidden"
                    href="/destinations/kedarnath"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-2.jpg"
                      alt="Kedarnath"
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      Popular
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Kedarnath
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                  <Link
                    className="position-relative d-block overflow-hidden"
                    href="/destinations/himachal"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-3.jpg"
                      alt="Himachal Pradesh"
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      Adventure
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Himachal
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
              <Link
                className="position-relative d-block h-100 overflow-hidden"
                href="/destinations/international"
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/destination-4.jpg"
                  alt="International Tours"
                  style={{ objectFit: 'cover' }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  International
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Global Tours
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}

      {/* Package Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h6>
            <h1 className="mb-5">Awesome Packages</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/package-1.jpg" alt="Chardham Package" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Uttarakhand
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />10 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />1 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">₹24,999</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p>
                    Complete Chardham Yatra package with luxury accommodations
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link
                      href="/packages/chardham"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: '30px 0 0 30px' }}
                    >
                      Read More
                    </Link>
                    <button
                      onClick={() => {
                        const message = generatePackageInquiryMessage('Chardham Package');
                        const url = generateWhatsAppUrl(message);
                        window.open(url, '_blank');
                      }}
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: '0 30px 30px 0' }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/package-2.jpg" alt="Kedarnath Package" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Kedarnath
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />5 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />1 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">₹12,999</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p>
                    Kedarnath Temple tour with comfortable stay options
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link
                      href="/packages/kedarnath"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: '30px 0 0 30px' }}
                    >
                      Read More
                    </Link>
                    <button
                      onClick={() => {
                        const message = generatePackageInquiryMessage('Kedarnath Package');
                        const url = generateWhatsAppUrl(message);
                        window.open(url, '_blank');
                      }}
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: '0 30px 30px 0' }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/package-3.jpg" alt="Himachal Package" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    Himachal
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2" />7 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />1 Person
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">₹18,999</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p>
                    Himachal Pradesh tour with sightseeing and adventure activities
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    <Link
                      href="/packages/himachal"
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: '30px 0 0 30px' }}
                    >
                      Read More
                    </Link>
                    <button
                      onClick={() => {
                        const message = generatePackageInquiryMessage('Himachal Package');
                        const url = generateWhatsAppUrl(message);
                        window.open(url, '_blank');
                      }}
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: '0 30px 30px 0' }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Package End */}

      {/* Booking Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h6 className="text-white text-uppercase">Booking</h6>
                <h1 className="text-white mb-4">Get Instant Quote</h1>
                <p className="mb-4">
                  Contact us for personalized travel arrangements and exclusive deals. 
                  Our travel experts are available 24/7 to assist you with your travel needs.
                </p>
                <p className="mb-4">
                  We offer competitive pricing and guaranteed best rates for all our services.
                </p>
                <a 
                  href="https://wa.me/919155969543" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light py-3 px-5 mt-2"
                >
                  Book on WhatsApp
                </a>
              </div>
              <div className="col-md-6">
                <h1 className="text-white mb-4">Request a Quote</h1>
                <form onSubmit={handleWhatsAppRedirect}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="service"
                          name="service"
                          value={quoteForm.service}
                          onChange={handleInputChange}
                          placeholder="Service Type"
                        />
                        <label htmlFor="service">Service Type</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="city"
                          name="city"
                          value={quoteForm.city}
                          onChange={handleInputChange}
                          placeholder="From City"
                        />
                        <label htmlFor="city">From City</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="destination"
                          name="destination"
                          value={quoteForm.destination}
                          onChange={handleInputChange}
                          placeholder="Destination"
                        />
                        <label htmlFor="destination">Destination</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control bg-transparent"
                          id="date"
                          name="date"
                          value={quoteForm.date}
                          onChange={handleInputChange}
                          placeholder="Travel Date"
                        />
                        <label htmlFor="date">Travel Date</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          id="vehicle"
                          name="vehicle"
                          value={quoteForm.vehicle}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Vehicle</option>
                          <option value="Sedan">Sedan</option>
                          <option value="SUV">SUV</option>
                          <option value="Innova">Innova</option>
                          <option value="Traveller">Traveller</option>
                          <option value="Luxury Bus">Luxury Bus</option>
                        </select>
                        <label htmlFor="vehicle">Vehicle Type</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          id="passengers"
                          name="passengers"
                          value={quoteForm.passengers}
                          onChange={handleInputChange}
                        >
                          <option value="">Passengers</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="5">5 Persons</option>
                          <option value="6">6+ Persons</option>
                        </select>
                        <label htmlFor="passengers">Passengers</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-light w-100 py-3" type="submit">
                        Get Quote on WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Fare Estimator Section */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={
          <div className="container-xxl py-5 bg-gray-50">
            <div className="container">
              <div className="text-center">
                <h6 className="section-title bg-gray-50 text-center text-primary px-3">
                  Fare Estimator
                </h6>
                <h1 className="mb-5">Calculate Your Fare</h1>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 h-96 animate-pulse"></div>
            </div>
          </div>
        }
      >
        <div className="container-xxl py-5 bg-gray-50">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-gray-50 text-center text-primary px-3">
                Fare Estimator
              </h6>
              <h1 className="mb-5">Calculate Your Fare</h1>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Suspense fallback={<div className="h-64 bg-gray-200 rounded animate-pulse"></div>}>
                <LazyFareEstimator />
              </Suspense>
            </div>
          </div>
        </div>
      </DynamicLazyLoad>
    </div>
  );
}

export default withPerformanceMonitoring(HomeContent, 'HomePage');