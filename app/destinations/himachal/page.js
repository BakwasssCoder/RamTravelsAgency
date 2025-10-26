'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../../../lib/whatsapp';

export default function HimachalDestination() {
  const [bookingForm, setBookingForm] = useState({
    service: 'Himachal Tour Package',
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

  const placesToVisit = [
    {
      name: 'Shimla',
      description: 'The former British hill station and capital of Himachal Pradesh, known for its colonial architecture and the historic Viceregal Lodge.'
    },
    {
      name: 'Manali',
      description: 'A popular hill station at the foothills of the Pir Panjal range, known for adventure sports and the Hadimba Temple.'
    },
    {
      name: 'Dalhousie',
      description: 'A scenic hill station with beautiful views of the Dhauladhar ranges, known for its churches and colonial architecture.'
    },
    {
      name: 'Kullu',
      description: 'Known as the valley of gods, famous for its temples, adventure sports, and the annual Dussehra festival.'
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
                Himachal Tour
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Discover the natural beauty and adventure activities in Himachal Pradesh
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
                <h2 className="mb-4">Himachal Tour Package</h2>
                <p className="mb-4">
                  Explore the breathtaking beauty of Himachal Pradesh with our comprehensive tour package. 
                  From the colonial charm of Shimla to the adventure capital of Manali, experience the 
                  diverse landscapes and rich culture of this Himalayan state.
                </p>
                <p className="mb-4">
                  Himachal Pradesh is known for its hill stations, ancient temples, and adventure sports. 
                  Our package covers the most popular destinations including Shimla, Manali, Kullu, and Dalhousie, 
                  offering a perfect blend of sightseeing, adventure, and relaxation.
                </p>
              </div>

              {/* Gallery */}
              <div className="mb-5">
                <h3 className="mb-4">Tour Gallery</h3>
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/assets/img/destination-3.jpg" alt="Himachal View" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/package-3.jpg" alt="Shimla" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-4.jpg" alt="Manali" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/destination-1.jpg" alt="Hill Station" className="img-fluid rounded" />
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
                    <h5 className="text-primary">₹18,999</h5>
                    <p className="mb-0">Per Person</p>
                    <p className="text-muted">7 Days / 6 Nights</p>
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