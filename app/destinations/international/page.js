'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../../../lib/whatsapp';

export default function InternationalDestination() {
  const [bookingForm, setBookingForm] = useState({
    service: 'International Tour Package',
    city: '',
    destination: 'International',
    date: '',
    vehicle: '',
    passengers: '1',
    name: '',
    email: '',
    phone: '',
    specialRequest: ''
  });

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
  };

  const popularDestinations = [
    {
      name: 'Dubai',
      description: 'Experience the luxury and modernity of Dubai with its iconic skyscrapers, shopping malls, and desert safaris.'
    },
    {
      name: 'Singapore',
      description: 'Explore the Garden City with its futuristic architecture, diverse culture, and world-class attractions.'
    },
    {
      name: 'Thailand',
      description: 'Discover the Land of Smiles with its beautiful beaches, vibrant street food scene, and rich cultural heritage.'
    },
    {
      name: 'Malaysia',
      description: 'Experience the multicultural paradise with its stunning landscapes, delicious cuisine, and bustling cities.'
    }
  ];

  const packageInclusions = [
    'International airfare (economy class)',
    'Comfortable accommodation for the duration of the tour',
    'All meals as per itinerary',
    'Airport transfers and sightseeing transportation',
    'Experienced tour guide and local guides',
    'All applicable taxes and government fees',
    'Sightseeing as per itinerary',
    'Travel insurance'
  ];

  const packageExclusions = [
    'Personal expenses and tips',
    'Visa fees and processing charges',
    'Travel insurance (if not opted)',
    'Any item not mentioned in inclusions',
    'Camera fees at monuments',
    'Lunch and dinner on travel days',
    'Optional activities and excursions'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                International Tours
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Experience international destinations with our premium tour packages
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="mb-5">
                <h2 className="mb-4">International Tour Packages</h2>
                <p className="mb-4">
                  Explore the world with our carefully crafted international tour packages. 
                  From the futuristic cities of Dubai and Singapore to the tropical paradises of Thailand and Malaysia, 
                  our packages offer a perfect blend of sightseeing, cultural experiences, and relaxation.
                </p>
                <p className="mb-4">
                  Our international tour packages are designed to provide you with a hassle-free travel experience. 
                  We take care of all the arrangements including flights, accommodation, transfers, and sightseeing, 
                  allowing you to focus on enjoying your vacation.
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-5">
                <h3 className="mb-4">Tour Gallery</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/assets/img/destination-4.jpg" alt="International Tour" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-1.jpg" alt="Dubai" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-2.jpg" alt="Singapore" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-3.jpg" alt="Thailand" className="img-fluid rounded" />
                  </div>
                </div>
              </div>

              {/* Popular Destinations */}
              <div className="mb-5">
                <h3 className="mb-4">Popular Destinations</h3>
                <div className="row g-4">
                  {popularDestinations.map((destination, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0 btn-lg-square bg-primary text-white me-3">
                          <span>{index + 1}</span>
                        </div>
                        <div className="pt-1">
                          <h5 className="mb-2">{destination.name}</h5>
                          <p className="mb-0">{destination.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Inclusions */}
              <div className="mb-5">
                <h3 className="mb-4">Package Inclusions</h3>
                <div className="row g-3">
                  {packageInclusions.map((item, index) => (
                    <div key={index} className="col-md-6">
                      <p className="mb-2">
                        <i className="fa fa-check text-primary me-2"></i>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Exclusions */}
              <div className="mb-5">
                <h3 className="mb-4">Package Exclusions</h3>
                <div className="row g-3">
                  {packageExclusions.map((item, index) => (
                    <div key={index} className="col-md-6">
                      <p className="mb-2">
                        <i className="fa fa-times text-danger me-2"></i>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">Book International Tour</h4>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <h5 className="text-primary">From ₹50,000</h5>
                    <p className="mb-0">Per Person</p>
                    <p className="text-muted">Varies by destination</p>
                  </div>
                  
                  <form onSubmit={handleBookingSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Destination</label>
                      <select
                        className="form-select"
                        name="destination"
                        value={bookingForm.destination}
                        onChange={handleFormChange}
                        required
                      >
                        <option value="">Select Destination</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Other">Other (Specify in Special Request)</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Travel Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={bookingForm.date}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Passengers</label>
                      <select
                        className="form-select"
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
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Special Request</label>
                      <textarea
                        className="form-control"
                        name="specialRequest"
                        value={bookingForm.specialRequest}
                        onChange={handleFormChange}
                        rows="3"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      <i className="fab fa-whatsapp me-2"></i>
                      Book on WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}