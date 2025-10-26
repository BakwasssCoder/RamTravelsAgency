'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../../../lib/whatsapp';

export default function KedarnathDestination() {
  const [bookingForm, setBookingForm] = useState({
    service: 'Kedarnath Special Package',
    city: '',
    destination: 'Kedarnath',
    date: '',
    vehicle: 'SUV',
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

  const placesToVisit = [
    {
      name: 'Kedarnath Temple',
      description: 'The main shrine dedicated to Lord Shiva, located at an altitude of 3,583 meters in the Himalayas.'
    },
    {
      name: 'Bhairavnath Temple',
      description: 'Located 1 km from Kedarnath Temple, this temple is dedicated to Lord Bhairav, the guardian of Kedarnath.'
    },
    {
      name: 'Gaurikund',
      description: 'The base point for the trek to Kedarnath Temple, known for its hot water springs.'
    },
    {
      name: 'Triyuginarayan',
      description: 'The place where Lord Shiva and Goddess Parvati are believed to have gotten married.'
    }
  ];

  const packageInclusions = [
    'Comfortable accommodation for 4 nights and 5 days',
    'All meals (breakfast, lunch, dinner) during the tour',
    'Transportation from Haridwar/Rishikesh to Gaurikund',
    'Stay at Gaurikund and Kedarnath',
    'Experienced tour guide and driver',
    'All applicable taxes and government fees',
    'First aid kit and oxygen cylinder',
    'Helicopter option (optional, extra cost)'
  ];

  const packageExclusions = [
    'Airfare to and from Haridwar/Rishikesh',
    'Personal expenses and tips',
    'Insurance and medical emergencies',
    'Any item not mentioned in inclusions',
    'Camera fees at monuments',
    'Lunch and dinner on travel days',
    'Helicopter fare (if opted)'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Kedarnath Special
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Visit the revered Kedarnath Temple amidst the majestic Himalayas
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
                <h2 className="mb-4">Kedarnath Special Package</h2>
                <p className="mb-4">
                  Experience the divine aura of Lord Shiva at the Kedarnath Temple, one of the twelve Jyotirlingas. 
                  Our Kedarnath Special package offers a comfortable and hassle-free pilgrimage experience with 
                  all necessary arrangements for a memorable spiritual journey.
                </p>
                <p className="mb-4">
                  Located at an altitude of 3,583 meters in the Himalayas, Kedarnath Temple is part of the Chardham 
                  Yatra but can also be visited as a standalone pilgrimage. The temple is open only during the summer 
                  months (April to November) due to heavy snowfall in the region.
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-5">
                <h3 className="mb-4">Tour Gallery</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/assets/img/destination-2.jpg" alt="Kedarnath Temple" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-2.jpg" alt="Kedarnath View" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-1.jpg" alt="Mountain View" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-1.jpg" alt="Pilgrims" className="img-fluid rounded" />
                  </div>
                </div>
              </div>

              {/* Places to Visit */}
              <div className="mb-5">
                <h3 className="mb-4">Places to Visit</h3>
                <div className="row g-4">
                  {placesToVisit.map((place, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0 btn-lg-square bg-primary text-white me-3">
                          <span>{index + 1}</span>
                        </div>
                        <div className="pt-1">
                          <h5 className="mb-2">{place.name}</h5>
                          <p className="mb-0">{place.description}</p>
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
                  <h4 className="mb-0">Book This Package</h4>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <h5 className="text-primary">₹12,999</h5>
                    <p className="mb-0">Per Person</p>
                    <p className="text-muted">5 Days / 4 Nights</p>
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