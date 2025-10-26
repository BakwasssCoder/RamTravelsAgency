'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../../../lib/whatsapp';

export default function HimachalPackage() {
  const [bookingForm, setBookingForm] = useState({
    service: 'Himachal Package',
    city: '',
    destination: 'Himachal Pradesh',
    date: '',
    vehicle: 'Innova',
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
      title: 'Arrival in Delhi',
      description: 'Arrive at Delhi Airport/Railway Station. Meet our representative and transfer to hotel. Evening at leisure. Overnight stay at Delhi.'
    },
    {
      day: 'Day 2',
      title: 'Delhi to Shimla',
      description: 'Early morning departure for Shimla (350 kms, 8-9 hours). Enroute visit Chandigarh Rock Garden and Rose Garden. Reach Shimla and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 3',
      title: 'Shimla Local Sightseeing',
      description: 'Morning visit The Mall, Ridge, and Christ Church. Afternoon visit Jakhu Temple and Annandale Ground. Evening at leisure. Overnight stay at Shimla.'
    },
    {
      day: 'Day 4',
      title: 'Shimla to Manali',
      description: 'Departure for Manali (250 kms, 6-7 hours). Enroute visit Kullu Valley and Bijli Mahadev. Reach Manali and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 5',
      title: 'Manali Local Sightseeing',
      description: 'Morning visit Hadimba Temple, Manu Temple, and Tibetan Monastery. Afternoon visit Vashisth Hot Springs and Club House. Evening at leisure. Overnight stay at Manali.'
    },
    {
      day: 'Day 6',
      title: 'Manali to Delhi',
      description: 'Departure for Delhi (550 kms, 10-12 hours). Enroute visit Sundernagar and Bilaspur. Reach Delhi and check-in at hotel. Overnight stay.'
    },
    {
      day: 'Day 7',
      title: 'Departure',
      description: 'Morning at leisure for shopping. Later transfer to Delhi Airport/Railway Station for onward journey.'
    }
  ];

  const packageInclusions = [
    'Comfortable accommodation for 6 nights and 7 days',
    'All meals (breakfast, lunch, dinner) during the tour',
    'Transportation in a comfortable Innova/Tempo Traveller',
    'Experienced tour guide and driver',
    'All applicable taxes and government fees',
    'Sightseeing as per itinerary',
    'Adventure activities (paragliding, river rafting)',
    'Welcome drink on arrival'
  ];

  const packageExclusions = [
    'Airfare to and from Delhi',
    'Personal expenses and tips',
    'Insurance and medical emergencies',
    'Any item not mentioned in inclusions',
    'Camera fees at monuments',
    'Lunch and dinner on travel days',
    'Adventure activities (if not opted)'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Himachal Package
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Himachal Pradesh tour with sightseeing and adventure activities
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
                <h2 className="mb-4">Himachal Package - 7 Days</h2>
                <p className="mb-4">
                  Explore the breathtaking beauty of Himachal Pradesh with our comprehensive tour package. 
                  From the colonial charm of Shimla to the adventure capital of Manali, experience the 
                  diverse landscapes and rich culture of this Himalayan state.
                </p>
                <p className="mb-4">
                  Himachal Pradesh is known for its hill stations, ancient temples, and adventure sports. 
                  Our package covers the most popular destinations including Shimla and Manali, 
                  offering a perfect blend of sightseeing, adventure, and relaxation.
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-5">
                <h3 className="mb-4">Tour Gallery</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/assets/img/package-3.jpg" alt="Himachal View" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-3.jpg" alt="Shimla" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-1.jpg" alt="Manali" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-1.jpg" alt="Hill Station" className="img-fluid rounded" />
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
                    <h5 className="text-primary">₹18,999</h5>
                    <p className="mb-0">Per Person</p>
                    <p className="text-muted">
                      <i className="fa fa-calendar-alt me-2"></i>
                      7 Days / 6 Nights
                    </p>
                    <p className="text-muted">
                      <i className="fa fa-user me-2"></i>
                      1 Person
                    </p>
                    <p className="text-muted">
                      <i className="fa fa-map-marker-alt me-2"></i>
                      Himachal Pradesh
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