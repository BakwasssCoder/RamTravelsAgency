'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../../../lib/whatsapp';

export default function ChardhamPackage() {
  const [bookingForm, setBookingForm] = useState({
    service: 'Chardham Package',
    city: '',
    destination: 'Chardham Yatra',
    date: '',
    vehicle: 'Traveller',
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

  const itinerary = [
    {
      day: 'Day 1',
      title: 'Arrival in Haridwar',
      description: 'Arrive at Haridwar Railway Station. Meet our representative and transfer to hotel. Evening visit Har Ki Pauri and attend Ganga Aarti. Overnight stay at Haridwar.'
    },
    {
      day: 'Day 2',
      title: 'Haridwar to Yamunotri',
      description: 'Early morning departure for Yamunotri (250 kms, 8-9 hours). Enroute visit Rishikesh, Laxman Jhula, and Tapovan. Reach Yamunotri and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 3',
      title: 'Yamunotri Darshan',
      description: 'Early morning trek to Yamunotri Temple (6 km). After darshan, visit Divya Shakti Peeth and Surya Kund. Return to hotel. Overnight stay at Yamunotri.'
    },
    {
      day: 'Day 4',
      title: 'Yamunotri to Gangotri',
      description: 'Departure for Gangotri (240 kms, 7-8 hours). Enroute visit Tehri Dam and Devprayag. Reach Gangotri and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 5',
      title: 'Gangotri Darshan',
      description: 'Early morning visit Gangotri Temple and Bhagirath Shila. After darshan, visit Gaumukh Glacier (18 kms trek, optional). Return to hotel. Overnight stay at Gangotri.'
    },
    {
      day: 'Day 6',
      title: 'Gangotri to Guptkashi',
      description: 'Departure for Guptkashi (230 kms, 7-8 hours). Enroute visit Uttarkashi and Bhojankhal. Reach Guptkashi and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 7',
      title: 'Guptkashi to Kedarnath',
      description: 'Departure for Kedarnath (35 kms, 1 hour). Enroute visit Kalimath Temple. Reach Gaurikund and trek to Kedarnath (14 kms, 5-6 hours). Check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 8',
      title: 'Kedarnath Darshan',
      description: 'Early morning visit Kedarnath Temple and Bhairavnath Temple. After darshan, visit Samadhi Mandir and explore the local market. Overnight stay at Kedarnath.'
    },
    {
      day: 'Day 9',
      title: 'Kedarnath to Badrinath',
      description: 'Departure for Badrinath (220 kms, 7-8 hours). Enroute visit Joshimath and Vishnuprayag. Reach Badrinath and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 10',
      title: 'Badrinath Darshan & Departure',
      description: 'Early morning visit Badrinath Temple and Tapt Kund. After darshan, visit Mana Village and Bheem Pul. Departure for Haridwar/Rishikesh (300 kms, 9-10 hours).'
    }
  ];

  const packageInclusions = [
    'Luxury accommodation for 9 nights and 10 days',
    'All meals (breakfast, lunch, dinner) during the tour',
    'Transportation in a comfortable traveller/bus',
    'Experienced tour guide and driver',
    'All applicable taxes and government fees',
    'First aid kit and oxygen cylinder',
    'Sightseeing as per itinerary',
    'Darshan tickets for all temples'
  ];

  const packageExclusions = [
    'Airfare to and from Haridwar',
    'Personal expenses and tips',
    'Insurance and medical emergencies',
    'Any item not mentioned in inclusions',
    'Camera fees at monuments',
    'Lunch and dinner on travel days'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Chardham Package
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Complete Chardham Yatra package with luxury accommodations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Package Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="mb-5">
                <h2 className="mb-4">Chardham Yatra Package - 10 Days</h2>
                <p className="mb-4">
                  Experience the spiritual journey to the four sacred abodes of Yamunotri, Gangotri, Kedarnath, and Badrinath. 
                  Our comprehensive Chardham Yatra package offers a seamless pilgrimage experience with comfortable accommodations, 
                  experienced guides, and all necessary arrangements for a memorable spiritual journey.
                </p>
                <p className="mb-4">
                  The Chardham Yatra is considered one of the holiest pilgrimages in Hinduism. Each of the four shrines represents 
                  one of the four elements: Yamunotri (water), Gangotri (water), Kedarnath (earth), and Badrinath (air). 
                  Completing this pilgrimage is believed to grant salvation (moksha) to devotees.
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-5">
                <h3 className="mb-4">Tour Gallery</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/assets/img/package-1.jpg" alt="Chardham Yatra" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-1.jpg" alt="Chardham Temple" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-2.jpg" alt="Himalayan View" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-2.jpg" alt="Pilgrims" className="img-fluid rounded" />
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-5">
                <h3 className="mb-4">Detailed Itinerary</h3>
                <div className="row g-4">
                  {itinerary.map((day, index) => (
                    <div key={index} className="col-12">
                      <div className="card">
                        <div className="card-header bg-primary text-white">
                          <h5 className="mb-0">{day.day} - {day.title}</h5>
                        </div>
                        <div className="card-body">
                          <p className="mb-0">{day.description}</p>
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
                    <h5 className="text-primary">₹24,999</h5>
                    <p className="mb-0">Per Person</p>
                    <p className="text-muted">
                      <i className="fa fa-calendar-alt me-2"></i>
                      10 Days / 9 Nights
                    </p>
                    <p className="text-muted">
                      <i className="fa fa-user me-2"></i>
                      1 Person
                    </p>
                    <p className="text-muted">
                      <i className="fa fa-map-marker-alt me-2"></i>
                      Uttarakhand
                    </p>
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