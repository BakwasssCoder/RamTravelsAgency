'use client';

import { useState, useEffect } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../lib/whatsapp';

export default function FixedDepartureCalendar() {
  const [upcomingDepartures, setUpcomingDepartures] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState(null);

  // Generate fixed departures on 1st and 10th of each month
  useEffect(() => {
    const generateDepartures = () => {
      const departures = [];
      const today = new Date();
      
      // Generate departures for next 6 months
      for (let i = 0; i < 6; i++) {
        const year = today.getFullYear();
        const month = today.getMonth() + i;
        
        // Create dates for 1st and 10th of the month
        const firstDate = new Date(year, month, 1);
        const tenthDate = new Date(year, month, 10);
        
        // Only add future dates
        if (firstDate >= today) {
          departures.push({
            id: `dep-${firstDate.getTime()}`,
            date: firstDate,
            formattedDate: firstDate.toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            }),
            day: firstDate.toLocaleDateString('en-IN', { weekday: 'long' }),
            packages: ['Chardham Yatra', 'Kedarnath Special', 'Himachal Tour']
          });
        }
        
        if (tenthDate >= today) {
          departures.push({
            id: `dep-${tenthDate.getTime()}`,
            date: tenthDate,
            formattedDate: tenthDate.toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            }),
            day: tenthDate.toLocaleDateString('en-IN', { weekday: 'long' }),
            packages: ['Kedarnath Express', 'Delhi-Himachal', 'International Tour']
          });
        }
      }
      
      // Sort by date
      departures.sort((a, b) => a.date - b.date);
      
      // Take only first 10 departures
      setUpcomingDepartures(departures.slice(0, 10));
    };
    
    generateDepartures();
  }, []);

  const handleBookNow = (departure) => {
    const message = `Hello Ram Travels India,
    
I'm interested in booking a seat for the fixed departure on ${departure.formattedDate}.
Packages available: ${departure.packages.join(', ')}

Please provide more details and confirm availability.`;
    
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  const handleInquiry = (departure) => {
    setSelectedDeparture(departure);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-royal-blue">Fixed Departure Calendar</h3>
      <p className="text-gray-600 mb-6">
        We organize fixed departures on the 1st and 10th of every month for popular tour packages.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingDepartures.map((departure) => (
          <div key={departure.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-royal-blue">
                {departure.date.getDate()}
              </div>
              <div className="text-gray-600">
                {departure.date.toLocaleDateString('en-IN', { month: 'short' })} {departure.date.getFullYear()}
              </div>
              <div className="text-sm text-gray-500">
                {departure.day}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Available Packages:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {departure.packages.map((pkg, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-royal-blue mr-2">•</span>
                    {pkg}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleBookNow(departure)}
                className="btn-primary text-sm py-2 px-4"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Book Now
              </button>
              <button
                onClick={() => handleInquiry(departure)}
                className="btn-secondary text-sm py-2 px-4"
              >
                Inquiry
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedDeparture && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h4 className="text-xl font-bold mb-4 text-royal-blue">
              Inquiry for {selectedDeparture.formattedDate}
            </h4>
            <p className="mb-4">
              Send us your inquiry for the {selectedDeparture.day} departure on {selectedDeparture.formattedDate}.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const message = `Hello Ram Travels India,
                  
I have an inquiry about the fixed departure on ${selectedDeparture.formattedDate}.
Packages: ${selectedDeparture.packages.join(', ')}

Please provide more details.`;
                  
                  const url = generateWhatsAppUrl(message);
                  window.open(url, '_blank');
                  setSelectedDeparture(null);
                }}
                className="btn-whatsapp flex-1"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp Inquiry
              </button>
              <button
                onClick={() => setSelectedDeparture(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}