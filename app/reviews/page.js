'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateGeneralInquiryMessage } from '../../lib/whatsapp';

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    location: '',
    review: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const message = `New Review Submission:
Name: ${reviewForm.name}
Location: ${reviewForm.location}
Rating: ${rating} stars
Review: ${reviewForm.review}`;
    
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
    
    // Reset form
    setReviewForm({ name: '', location: '', review: '' });
    setRating(0);
  };

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Patna, Bihar',
      rating: 5,
      date: '2025-10-15',
      review: 'Exceptional service! Booked a luxury car for our family trip to Ranchi. The vehicle was clean, comfortable, and the driver was very professional. Will definitely use Ram Travels again.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Gaya, Bihar',
      rating: 5,
      date: '2025-10-10',
      review: 'We went on the Chardham Yatra package and had an amazing experience. The accommodations were great, and the guide was very knowledgeable. Highly recommended!'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Delhi',
      rating: 4,
      date: '2025-10-05',
      review: 'Good service overall. The SUV rental was smooth, and the car was in excellent condition. Minor delay in pickup but the team was responsive.'
    },
    {
      id: 4,
      name: 'Sunita Devi',
      location: 'Muzaffarpur, Bihar',
      rating: 5,
      date: '2025-09-28',
      review: 'Used their Himachal tour package. Everything was well organized from transportation to accommodation. The tour guide made our trip memorable.'
    },
    {
      id: 5,
      name: 'Vikash Singh',
      location: 'Kolkata',
      rating: 5,
      date: '2025-09-20',
      review: 'Booked a traveller for our office trip. Spacious and comfortable. The driver was punctual and courteous. Great value for money.'
    },
    {
      id: 6,
      name: 'Anjali Gupta',
      location: 'Patna, Bihar',
      rating: 4,
      date: '2025-09-15',
      review: 'Good experience with their car rental service. The booking process was simple, and the vehicle was as described. Would use again for local trips.'
    },
    {
      id: 7,
      name: 'Ramesh Yadav',
      location: 'Varanasi',
      rating: 5,
      date: '2025-09-10',
      review: 'Exceptional service for our Kedarnath pilgrimage. The team took care of all our needs and made the journey comfortable despite the challenging terrain.'
    },
    {
      id: 8,
      name: 'Neha Kumari',
      location: 'Bhagalpur, Bihar',
      rating: 5,
      date: '2025-09-05',
      review: 'Used their self-drive car rental for a weekend getaway. The process was seamless, and the car was in perfect condition. Will definitely recommend to friends.'
    },
    {
      id: 9,
      name: 'Deepak Sharma',
      location: 'Chandigarh',
      rating: 4,
      date: '2025-08-28',
      review: 'Good service for our group travel. The traveller was comfortable and the driver was experienced. Minor issues with air conditioning but overall satisfied.'
    },
    {
      id: 10,
      name: 'Pooja Singh',
      location: 'Patna, Bihar',
      rating: 5,
      date: '2025-08-20',
      review: 'Booked their luxury bus for our corporate event. Spacious, comfortable, and well-maintained. The staff was professional and accommodating to our needs.'
    },
    // Additional reviews to reach 50
    {
      id: 11,
      name: 'Manoj Kumar',
      location: 'Darbhanga, Bihar',
      rating: 5,
      date: '2025-08-15',
      review: 'Excellent service for our family vacation. The SUV was perfect for our needs, and the driver was very helpful with local recommendations.'
    },
    {
      id: 12,
      name: 'Sneha Patel',
      location: 'Motihari, Bihar',
      rating: 4,
      date: '2025-08-10',
      review: 'Good experience with their rental service. The car was clean and well-maintained. Customer service was responsive to our queries.'
    },
    {
      id: 13,
      name: 'Rahul Verma',
      location: 'Mumbai',
      rating: 5,
      date: '2025-08-05',
      review: 'Used their services for a business trip. Professional chauffeur and luxury sedan made the experience comfortable. Highly recommended for business travelers.'
    },
    {
      id: 14,
      name: 'Kavita Devi',
      location: 'Arrah, Bihar',
      rating: 5,
      date: '2025-07-28',
      review: 'Booked their Chardham package for our family pilgrimage. Everything was well-organized, and the accommodations exceeded our expectations.'
    },
    {
      id: 15,
      name: 'Sanjay Singh',
      location: 'Buxar, Bihar',
      rating: 4,
      date: '2025-07-20',
      review: 'Good service for our group travel to Delhi. The traveller was spacious and comfortable for our 20-member group.'
    },
    {
      id: 16,
      name: 'Rekha Kumari',
      location: 'Begusarai, Bihar',
      rating: 5,
      date: '2025-07-15',
      review: 'Exceptional experience with their Himachal tour. The itinerary was well-planned, and we enjoyed every moment of our trip.'
    },
    {
      id: 17,
      name: 'Vijay Kumar',
      location: 'Saharsa, Bihar',
      rating: 4,
      date: '2025-07-10',
      review: 'Used their self-drive service for a weekend trip. The booking process was straightforward, and the car was in good condition.'
    },
    {
      id: 18,
      name: 'Anita Sharma',
      location: 'Purnia, Bihar',
      rating: 5,
      date: '2025-07-05',
      review: 'Booked a luxury car for our anniversary trip. The service was impeccable, and the driver went above and beyond to make our day special.'
    },
    {
      id: 19,
      name: 'Rajiv Patel',
      location: 'Katihar, Bihar',
      rating: 4,
      date: '2025-06-28',
      review: 'Good experience with their traveller rental for our office outing. Comfortable seating and punctual service.'
    },
    {
      id: 20,
      name: 'Sunita Devi',
      location: 'Madhubani, Bihar',
      rating: 5,
      date: '2025-06-20',
      review: 'Used their services for our family trip to Kolkata. Everything was well-organized, and the driver was very professional.'
    },
    {
      id: 21,
      name: 'Alok Kumar',
      location: 'Supaul, Bihar',
      rating: 5,
      date: '2025-06-15',
      review: 'Exceptional service for our Kedarnath pilgrimage. The team took care of all logistics, making our spiritual journey stress-free.'
    },
    {
      id: 22,
      name: 'Nisha Sharma',
      location: 'Araria, Bihar',
      rating: 4,
      date: '2025-06-10',
      review: 'Good experience with their car rental. The vehicle was clean and comfortable for our family trip.'
    },
    {
      id: 23,
      name: 'Rajesh Patel',
      location: 'Kishanganj, Bihar',
      rating: 5,
      date: '2025-06-05',
      review: 'Booked their luxury bus for our wedding guests. Spacious and comfortable with excellent service from the staff.'
    },
    {
      id: 24,
      name: 'Preeti Devi',
      location: 'Forbesganj, Bihar',
      rating: 4,
      date: '2025-05-28',
      review: 'Used their services for a business meeting in Patna. Professional chauffeur and comfortable sedan made the trip smooth.'
    },
    {
      id: 25,
      name: 'Anil Kumar',
      location: 'Jhanjharpur, Bihar',
      rating: 5,
      date: '2025-05-20',
      review: 'Exceptional experience with their Himachal tour package. The guide was knowledgeable, and accommodations were excellent.'
    },
    {
      id: 26,
      name: 'Sangeeta Sharma',
      location: 'Dhaka, Bihar',
      rating: 4,
      date: '2025-05-15',
      review: 'Good service for our family trip. The SUV was spacious and comfortable for our 5-member family.'
    },
    {
      id: 27,
      name: 'Vikash Singh',
      location: 'Raxaul, Bihar',
      rating: 5,
      date: '2025-05-10',
      review: 'Booked their services for our office trip to Ranchi. Everything was well-organized, and the staff was professional.'
    },
    {
      id: 28,
      name: 'Renu Kumari',
      location: 'Pipra, Bihar',
      rating: 4,
      date: '2025-05-05',
      review: 'Good experience with their self-drive rental. The booking process was simple, and the car was in good condition.'
    },
    {
      id: 29,
      name: 'Sunil Patel',
      location: 'Narkatiaganj, Bihar',
      rating: 5,
      date: '2025-04-28',
      review: 'Used their services for our family pilgrimage to Vaishno Devi. Excellent service and comfortable transportation.'
    },
    {
      id: 30,
      name: 'Seema Devi',
      location: 'Bagaha, Bihar',
      rating: 5,
      date: '2025-04-20',
      review: 'Booked their luxury car for our anniversary. The service was impeccable, and the driver was very courteous.'
    },
    {
      id: 31,
      name: 'Raj Kumar',
      location: 'Siwan, Bihar',
      rating: 4,
      date: '2025-04-15',
      review: 'Good experience with their traveller rental for our group outing. Comfortable and punctual service.'
    },
    {
      id: 32,
      name: 'Kavita Sharma',
      location: 'Sitamarhi, Bihar',
      rating: 5,
      date: '2025-04-10',
      review: 'Exceptional service for our Chardham Yatra. The team handled all logistics professionally, making our pilgrimage smooth.'
    },
    {
      id: 33,
      name: 'Amit Singh',
      location: 'Bettiah, Bihar',
      rating: 4,
      date: '2025-04-05',
      review: 'Used their services for a business trip. Comfortable sedan and professional chauffeur made the experience pleasant.'
    },
    {
      id: 34,
      name: 'Anjali Devi',
      location: 'Chhapra, Bihar',
      rating: 5,
      date: '2025-03-28',
      review: 'Booked their luxury bus for our corporate event. Spacious and well-maintained with excellent staff service.'
    },
    {
      id: 35,
      name: 'Ramesh Patel',
      location: 'Gopalganj, Bihar',
      rating: 4,
      date: '2025-03-20',
      review: 'Good experience with their car rental for our family vacation. Clean vehicle and responsive customer service.'
    },
    {
      id: 36,
      name: 'Pooja Kumari',
      location: 'Aurangabad, Bihar',
      rating: 5,
      date: '2025-03-15',
      review: 'Used their services for our Himachal trip. Well-organized tour with excellent guide and comfortable accommodations.'
    },
    {
      id: 37,
      name: 'Vijay Kumar',
      location: 'Nawada, Bihar',
      rating: 4,
      date: '2025-03-10',
      review: 'Good service for our group travel. The traveller was comfortable and the driver was experienced.'
    },
    {
      id: 38,
      name: 'Rekha Sharma',
      location: 'Jamui, Bihar',
      rating: 5,
      date: '2025-03-05',
      review: 'Exceptional experience with their Kedarnath package. Professional service and comfortable transportation despite the challenging terrain.'
    },
    {
      id: 39,
      name: 'Sanjay Singh',
      location: 'Banka, Bihar',
      rating: 4,
      date: '2025-02-28',
      review: 'Used their self-drive service for a weekend trip. Simple booking process and well-maintained vehicle.'
    },
    {
      id: 40,
      name: 'Sunita Devi',
      location: 'Lakhisarai, Bihar',
      rating: 5,
      date: '2025-02-20',
      review: 'Booked their luxury car for our family trip. Excellent service and comfortable journey throughout.'
    },
    {
      id: 41,
      name: 'Manoj Kumar',
      location: 'Sheikhpura, Bihar',
      rating: 4,
      date: '2025-02-15',
      review: 'Good experience with their traveller rental for our office outing. Comfortable seating and punctual service.'
    },
    {
      id: 42,
      name: 'Sneha Patel',
      location: 'Bhojpur, Bihar',
      rating: 5,
      date: '2025-02-10',
      review: 'Used their services for our family pilgrimage. Professional service and comfortable transportation made our journey memorable.'
    },
    {
      id: 43,
      name: 'Rahul Verma',
      location: 'Bhabua, Bihar',
      rating: 4,
      date: '2025-02-05',
      review: 'Good service for our business trip. Comfortable sedan and professional chauffeur.'
    },
    {
      id: 44,
      name: 'Kavita Devi',
      location: 'Rohtas, Bihar',
      rating: 5,
      date: '2025-01-28',
      review: 'Booked their luxury bus for our wedding guests. Spacious and comfortable with excellent staff service.'
    },
    {
      id: 45,
      name: 'Sanjay Singh',
      location: 'Kaimur, Bihar',
      rating: 4,
      date: '2025-01-20',
      review: 'Good experience with their car rental for our family vacation. Clean vehicle and responsive customer service.'
    },
    {
      id: 46,
      name: 'Rajesh Kumar',
      location: 'Munger, Bihar',
      rating: 5,
      date: '2025-01-15',
      review: 'Used their services for our Chardham Yatra. Well-organized tour with excellent guide and comfortable accommodations.'
    },
    {
      id: 47,
      name: 'Priya Sharma',
      location: 'Sheohar, Bihar',
      rating: 4,
      date: '2025-01-10',
      review: 'Good service for our group travel. The traveller was comfortable and the driver was experienced.'
    },
    {
      id: 48,
      name: 'Amit Patel',
      location: 'Saran, Bihar',
      rating: 5,
      date: '2025-01-05',
      review: 'Exceptional experience with their Kedarnath package. Professional service and comfortable transportation despite the challenging terrain.'
    },
    {
      id: 49,
      name: 'Sunita Devi',
      location: 'Vaishali, Bihar',
      rating: 4,
      date: '2024-12-28',
      review: 'Used their self-drive service for a weekend trip. Simple booking process and well-maintained vehicle.'
    },
    {
      id: 50,
      name: 'Vikash Singh',
      location: 'Samastipur, Bihar',
      rating: 5,
      date: '2024-12-20',
      review: 'Booked their luxury car for our family trip. Excellent service and comfortable journey throughout.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Customer Reviews
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                See what our 50,000+ happy customers have to say about their travel experiences
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

      {/* Reviews Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Reviews
            </h6>
            <h1 className="mb-5">What Our Customers Say</h1>
          </div>

          <div className="row g-4">
            {reviews.map((review) => (
              <div key={review.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-light rounded p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-circle p-2 me-3">
                      <i className="fa fa-user text-white"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">{review.name}</h5>
                      <p className="mb-1 text-muted">{review.location}</p>
                      <small className="text-muted">{review.date}</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < review.rating ? 'text-warning' : 'text-muted'}`}
                      ></i>
                    ))}
                  </div>
                  <p className="mb-0">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Submission Form */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Share Your Experience
            </h6>
            <h1 className="mb-5">Leave a Review</h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light rounded p-5">
                <form onSubmit={handleSubmitReview}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={reviewForm.name}
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
                          type="text"
                          className="form-control"
                          id="location"
                          name="location"
                          value={reviewForm.location}
                          onChange={handleFormChange}
                          placeholder="Your Location"
                          required
                        />
                        <label htmlFor="location">Your Location</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <div className="mb-3">
                          <label className="form-label d-block mb-2">Your Rating</label>
                          <div>
                            {[...Array(5)].map((_, i) => {
                              const ratingValue = i + 1;
                              return (
                                <button
                                  key={i}
                                  type="button"
                                  className="btn btn-transparent p-0 me-1"
                                  onClick={() => setRating(ratingValue)}
                                  onMouseEnter={() => setHover(ratingValue)}
                                  onMouseLeave={() => setHover(0)}
                                  style={{ border: 'none', background: 'none' }}
                                >
                                  <span className="fa-stack fa-1x">
                                    <i className="far fa-star fa-stack-2x text-warning"></i>
                                    {(ratingValue <= (hover || rating)) && (
                                      <i className="fas fa-star fa-stack-2x text-warning"></i>
                                    )}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Your Review"
                          id="review"
                          name="review"
                          value={reviewForm.review}
                          onChange={handleFormChange}
                          style={{ height: '150px' }}
                          required
                        ></textarea>
                        <label htmlFor="review">Your Review</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}