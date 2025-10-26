'use client';

import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      question: "What services does Ram Travels India offer?",
      answer: "Ram Travels India offers a wide range of travel services including car rentals (sedans, SUVs, luxury vehicles), bus rentals (travelers and luxury buses), and tour packages for domestic destinations like Chardham, Kedarnath, Himachal Pradesh, Vrindavan, and international destinations."
    },
    {
      question: "How can I book a service?",
      answer: "You can book our services through multiple channels: 1) Fill out the booking form on our website, 2) Call us directly at +91 9155969543, 3) Message us on WhatsApp at the same number, or 4) Visit our office in Patna, Bihar."
    },
    {
      question: "What are your operating hours?",
      answer: "Our customer service team is available 24/7 to assist you with bookings and inquiries. However, our office in Patna operates from 9:00 AM to 8:00 PM, Monday through Sunday."
    },
    {
      question: "Do you provide international tour packages?",
      answer: "Yes, we offer international tour packages to popular destinations including Dubai, Singapore, Thailand, and Malaysia. Our packages include flights, accommodation, transfers, and sightseeing."
    },
    {
      question: "What is included in your Chardham Yatra package?",
      answer: "Our Chardham Yatra package includes luxury accommodation for 9 nights and 10 days, all meals, transportation in a comfortable traveler/bus, experienced tour guide and driver, all applicable taxes, first aid kit, oxygen cylinder, sightseeing as per itinerary, and darshan tickets for all temples."
    },
    {
      question: "Can I customize a tour package?",
      answer: "Yes, we offer customizable tour packages based on your preferences, budget, and travel dates. Our travel experts will work with you to create a personalized itinerary that meets your specific needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies depending on the service booked. Generally, cancellations made 15 days or more before the travel date receive a full refund minus a small processing fee. Cancellations made within 15 days are subject to partial or no refund. Please contact us for specific details regarding your booking."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance for all our tour packages. The insurance covers medical emergencies, trip cancellations, lost baggage, and other travel-related issues. It can be added to your booking for a nominal fee."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We prioritize the safety and comfort of our customers. All our vehicles are regularly serviced and maintained. Our drivers are experienced and trained. We provide first aid kits and oxygen cylinders for high-altitude tours. All our tour packages include experienced guides who are familiar with local conditions."
    },
    {
      question: "How do I make payments?",
      answer: "We accept multiple payment methods including bank transfers, credit/debit cards, UPI, and digital wallets. For tour packages, we typically require a 50% advance payment at the time of booking, with the balance due before the travel date."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Frequently Asked Questions
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="bg-white rounded p-4 shadow-sm">
                <h2 className="text-primary mb-4 text-center">Frequently Asked Questions</h2>
                <p className="text-center mb-5">
                  Can't find the answer you're looking for? Contact us at <a href="tel:+919155969543">+91 9155969543</a> or email us at <a href="mailto:info@ramtravelsindia.com">info@ramtravelsindia.com</a>
                </p>
                
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div key={index} className="accordion-item mb-3">
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#collapse${index}`} 
                          aria-expanded="false" 
                          aria-controls={`collapse${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div 
                        id={`collapse${index}`} 
                        className="accordion-collapse collapse" 
                        aria-labelledby={`heading${index}`} 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5 text-center">
                  <h3 className="text-primary mb-4">Still have questions?</h3>
                  <p className="mb-4">
                    Contact our customer support team for personalized assistance
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="tel:+919155969543" className="btn btn-primary py-2 px-4">
                      <i className="fa fa-phone me-2"></i>Call Us
                    </a>
                    <a 
                      href="https://wa.me/919155969543" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success py-2 px-4"
                    >
                      <i className="fab fa-whatsapp me-2"></i>WhatsApp Us
                    </a>
                    <a href="mailto:info@ramtravelsindia.com" className="btn btn-info text-white py-2 px-4">
                      <i className="fa fa-envelope me-2"></i>Email Us
                    </a>
                  </div>
                </div>
                
                <div className="mt-5">
                  <Link href="/" className="btn btn-primary py-2 px-4">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}