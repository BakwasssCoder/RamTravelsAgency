'use client';

import Link from 'next/link';
import { useState } from 'react';
import { lazy, Suspense } from 'react';
import { DynamicLazyLoad } from '../../lib/dynamicImports';
import { generateWhatsAppUrl, generateBookingMessage } from '../../lib/whatsapp';

// Lazy load the FareEstimator component
const LazyFareEstimator = lazy(() => import('../../components/FareEstimator'));

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    service: '',
    city: '',
    destination: '',
    date: '',
    vehicle: '',
    passengers: '1',
    name: '',
    email: '',
    phone: '',
    specialRequest: ''
  });

  const serviceCategories = [
    {
      id: 'car-rental',
      name: 'Car Rental Services',
      services: [
        {
          id: 1,
          name: 'Sedan Car Rental',
          description: 'Premium sedan rental for comfortable travel with professional chauffeur.',
          features: ['Professional Chauffeur', 'Well-maintained Vehicles', '24/7 Customer Support', 'Flexible Booking', 'Air Conditioning', 'Music System'],
          image: 'assets/img/package-1.jpg'
        },
        {
          id: 2,
          name: 'SUV Car Rental',
          description: 'Spacious SUV rental perfect for family trips and group travel.',
          features: ['Spacious Interior', 'Professional Driver', 'All-Weather Capability', 'Luggage Space', 'Child Safety Seats', 'GPS Navigation'],
          image: 'assets/img/package-2.jpg'
        },
        {
          id: 3,
          name: 'Luxury Car Rental',
          description: 'Premium luxury vehicles for special occasions and business travel.',
          features: ['Premium Vehicles', 'Experienced Chauffeur', 'Complimentary Water', 'Wi-Fi Connectivity', 'Newspaper/Magazine', 'Meet & Greet Service'],
          image: 'assets/img/package-3.jpg'
        }
      ]
    },
    {
      id: 'self-drive',
      name: 'Self-Drive Options',
      services: [
        {
          id: 4,
          name: 'Self-Drive Car Rental',
          description: 'Rent a car and drive yourself to explore destinations at your own pace.',
          features: ['Flexible Schedule', 'Multiple Vehicle Options', 'Affordable Rates', 'Easy Booking Process', '24/7 Roadside Assistance', 'Unlimited Kilometers'],
          image: 'assets/img/destination-1.jpg'
        },
        {
          id: 5,
          name: 'Monthly Self-Drive',
          description: 'Long-term self-drive rental for extended stays or business needs.',
          features: ['Monthly Discounts', 'Free Servicing', 'Insurance Included', '24/7 Support', 'Flexible Extensions', 'Nationwide Coverage'],
          image: 'assets/img/destination-2.jpg'
        }
      ]
    },
    {
      id: 'group-travel',
      name: 'Group Travel Solutions',
      services: [
        {
          id: 6,
          name: 'Traveller Rental',
          description: 'Spacious travellers for group travel, perfect for corporate events and tours.',
          features: ['Group Travel Solutions', 'Comfortable Seating', 'Air Conditioning', 'Experienced Drivers', 'Onboard Toilets', 'Water Bottles'],
          image: 'assets/img/destination-3.jpg'
        },
        {
          id: 7,
          name: 'Luxury Bus Rental',
          description: 'Premium buses for large group travel with luxury amenities.',
          features: ['Luxury Seating', 'Entertainment System', 'Onboard Restroom', 'Wi-Fi Connectivity', 'Refreshments', 'Professional Staff'],
          image: 'assets/img/destination-4.jpg'
        }
      ]
    },
    {
      id: 'tour-packages',
      name: 'Tour Packages',
      services: [
        {
          id: 8,
          name: 'Chardham Yatra Package',
          description: 'Complete pilgrimage tour to the four sacred abodes in the Himalayas.',
          features: ['Complete Tour Package', 'Luxury Accommodations', 'Experienced Guide', 'All Meals Included', 'Transportation', 'Temple Darshan'],
          image: 'assets/img/package-1.jpg'
        },
        {
          id: 9,
          name: 'Kedarnath Special Package',
          description: 'Dedicated tour package for Kedarnath Temple visit with all amenities.',
          features: ['Special Kedarnath Tour', 'Comfortable Stay', 'Helicopter Option', 'Guide Support', 'Medical Kit', 'Local Transport'],
          image: 'assets/img/package-2.jpg'
        },
        {
          id: 10,
          name: 'Himachal Tour Package',
          description: 'Scenic tour of Himachal Pradesh with sightseeing and adventure activities.',
          features: ['Himachal Sightseeing', 'Adventure Activities', 'Luxury Hotels', 'Local Guide', 'Transportation', 'Meals Included'],
          image: 'assets/img/package-3.jpg'
        }
      ]
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setBookingForm(prev => ({
      ...prev,
      service: service.name
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = generateBookingMessage(bookingForm);
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
    setSelectedService(null);
  };

  // Placeholder for lazy loading
  const ServicesGridPlaceholder = () => (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <div className="h-8 bg-gray-300 rounded mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FareEstimatorPlaceholder = () => (
    <div className="container-xxl py-5 bg-gray-50">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Fare Estimator
          </h6>
          <h1 className="mb-5">Calculate Your Fare</h1>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 h-96 animate-pulse"></div>
      </div>
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
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Our Premium Services
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Comprehensive travel solutions tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center border rounded p-4">
                <i className="fa fa-3x fa-car text-primary mb-3"></i>
                <h2 className="mb-1" data-toggle="counter-up">28+</h2>
                <p className="mb-0">Cities</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center border rounded p-4">
                <i className="fa fa-3x fa-users text-primary mb-3"></i>
                <h2 className="mb-1" data-toggle="counter-up">100</h2>
                <p className="mb-0">K+ Happy Customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center border rounded p-4">
                <i className="fa fa-3x fa-bus text-primary mb-3"></i>
                <h2 className="mb-1" data-toggle="counter-up">200</h2>
                <p className="mb-0">Commercial Cards</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="text-center border rounded p-4">
                <i className="fa fa-3x fa-car text-primary mb-3"></i>
                <h2 className="mb-1" data-toggle="counter-up">100</h2>
                <p className="mb-0">Luxury Cars</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<ServicesGridPlaceholder />}
      >
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Services
              </h6>
              <h1 className="mb-5">Our Services</h1>
            </div>
            {serviceCategories.map((category) => (
              <div key={category.id} className="mb-5">
                <h2 className="text-2xl font-bold text-center mb-4 text-royal-blue">{category.name}</h2>
                <div className="row g-4">
                  {category.services.map((service) => (
                    <div key={service.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="service-item rounded pt-3">
                        <div className="p-4">
                          <div className="overflow-hidden mb-4 rounded-xl">
                            <img className="img-fluid" src={service.image} alt={service.name} />
                          </div>
                          <h5 className="mb-3">{service.name}</h5>
                          <p className="mb-4">{service.description}</p>
                          <ul className="list-disc pl-5 mb-4">
                            {service.features.map((feature, index) => (
                              <li key={index} className="mb-1">{feature}</li>
                            ))}
                          </ul>
                          <button 
                            onClick={() => handleServiceSelect(service)}
                            className="btn btn-primary py-2 px-4"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DynamicLazyLoad>

      {/* Service Booking Modal */}
      {selectedService && (
        <div className="modal fade show d-block" id="bookingModal" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title">Book {selectedService.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedService(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleBookingSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="service"
                          name="service"
                          value={bookingForm.service}
                          onChange={handleFormChange}
                          readOnly
                        />
                        <label htmlFor="service">Service</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={bookingForm.name}
                          onChange={handleFormChange}
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={bookingForm.email}
                          onChange={handleFormChange}
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={bookingForm.phone}
                          onChange={handleFormChange}
                          placeholder="Your Phone"
                          required
                        />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          value={bookingForm.city}
                          onChange={handleFormChange}
                          placeholder="From City"
                        />
                        <label htmlFor="city">From City</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="destination"
                          name="destination"
                          value={bookingForm.destination}
                          onChange={handleFormChange}
                          placeholder="Destination"
                        />
                        <label htmlFor="destination">Destination</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="date"
                          value={bookingForm.date}
                          onChange={handleFormChange}
                          placeholder="Travel Date"
                        />
                        <label htmlFor="date">Travel Date</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="vehicle"
                          name="vehicle"
                          value={bookingForm.vehicle}
                          onChange={handleFormChange}
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
                          className="form-select"
                          id="passengers"
                          name="passengers"
                          value={bookingForm.passengers}
                          onChange={handleFormChange}
                        >
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
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Special Requests"
                          id="specialRequest"
                          name="specialRequest"
                          value={bookingForm.specialRequest}
                          onChange={handleFormChange}
                          style={{ height: '100px' }}
                        ></textarea>
                        <label htmlFor="specialRequest">Special Requests</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Booking Request to WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fare Estimator */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<FareEstimatorPlaceholder />}
      >
        <div className="container-xxl py-5 bg-gray-50">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-white text-center text-primary px-3">
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

      {/* CTA Section */}
      <DynamicLazyLoad 
        height="auto"
        placeholder={<CTAPlaceholder />}
      >
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="booking p-5">
              <div className="row g-5 align-items-center">
                <div className="col-md-6 text-white">
                  <h6 className="text-white text-uppercase">Booking</h6>
                  <h1 className="text-white mb-4">Ready to Book Your Journey?</h1>
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
                  <h1 className="text-white mb-4">Quick Inquiry</h1>
                  <form onSubmit={handleBookingSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="quickName"
                            name="name"
                            value={bookingForm.name}
                            onChange={handleFormChange}
                            placeholder="Your Name"
                          />
                          <label htmlFor="quickName">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control bg-transparent"
                            id="quickPhone"
                            name="phone"
                            value={bookingForm.phone}
                            onChange={handleFormChange}
                            placeholder="Your Phone"
                          />
                          <label htmlFor="quickPhone">Your Phone</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="quickService"
                            name="service"
                            value={bookingForm.service}
                            onChange={handleFormChange}
                            placeholder="Service Type"
                          />
                          <label htmlFor="quickService">Service Type</label>
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
      </DynamicLazyLoad>
    </div>
  );
}