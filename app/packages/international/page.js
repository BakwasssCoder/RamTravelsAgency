'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../../../lib/whatsapp';

export default function InternationalPackage() {
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

  const itinerary = [
    {
      day: 'Day 1',
      title: 'Arrival in Dubai',
      description: 'Arrive at Dubai International Airport. Meet our representative and transfer to hotel. Evening at leisure. Overnight stay at Dubai hotel.'
    },
    {
      day: 'Day 2',
      title: 'Dubai City Tour',
      description: 'Morning visit Burj Khalifa (world\'s tallest building), Dubai Mall, and Dubai Fountain Show. Afternoon visit Palm Jumeirah and Atlantis Hotel. Evening at leisure. Overnight stay at Dubai hotel.'
    },
    {
      day: 'Day 3',
      title: 'Desert Safari',
      description: 'Early morning visit Dubai Museum and Gold Souk. Afternoon desert safari with dune bashing, camel ride, BBQ dinner, and traditional entertainment. Overnight stay at Dubai hotel.'
    },
    {
      day: 'Day 4',
      title: 'Dubai to Singapore',
      description: 'Check out from hotel and transfer to Dubai Airport for flight to Singapore. Arrive at Singapore Changi Airport and transfer to hotel. Evening at leisure. Overnight stay at Singapore hotel.'
    },
    {
      day: 'Day 5',
      title: 'Singapore City Tour',
      description: 'Morning visit Merlion Park, Marina Bay Sands, and Gardens by the Bay. Afternoon visit Sentosa Island and Universal Studios. Evening at leisure. Overnight stay at Singapore hotel.'
    },
    {
      day: 'Day 6',
      title: 'Singapore to Departure',
      description: 'Morning at leisure for shopping at Orchard Road. Later check out from hotel and transfer to Singapore Airport for onward journey.'
    }
  ];

  const packageInclusions = [
    'International airfare (economy class)',
    'Comfortable accommodation for 5 nights and 6 days',
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
                International Tour Package
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Experience international destinations with our premium tour packages
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
                <h2 className="mb-4">International Tour Package - 6 Days</h2>
                <p className="mb-4">
                  Explore the world with our carefully crafted international tour package. 
                  From the futuristic cities of Dubai and Singapore, experience the perfect blend 
                  of modernity, culture, and luxury.
                </p>
                <p className="mb-4">
                  Our international tour package is designed to provide you with a hassle-free travel experience. 
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
                    <h5 className="text-primary">From ₹50,000</h5>
                    <p className="mb-0">Per Person</p>
                    <p className="text-muted">
                      <i className="fa fa-calendar-alt me-2"></i>
                      6 Days / 5 Nights
                    </p>
                    <p className="text-muted">
                      <i className="fa fa-user me-2"></i>
                      1 Person
                    </p>
                    <p className="text-muted">
                      <i className="fa fa-map-marker-alt me-2"></i>
                      International
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