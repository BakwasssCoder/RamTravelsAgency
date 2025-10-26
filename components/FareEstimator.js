'use client';

import { useState } from 'react';
import { generateWhatsAppUrl, generateBookingMessage } from '../lib/whatsapp';

export default function FareEstimator() {
  const [formData, setFormData] = useState({
    distance: '',
    vehicleType: 'sedan',
    isHillRoute: false,
    isPeakSeason: false
  });

  const [estimatedFare, setEstimatedFare] = useState(null);

  const baseRates = {
    sedan: 18, // ₹ per km
    suv: 22,   // ₹ per km
    traveller: 32 // ₹ per km
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateFare = () => {
    if (!formData.distance || formData.distance <= 0) {
      alert('Please enter a valid distance');
      return;
    }

    let baseFare = formData.distance * baseRates[formData.vehicleType];
    
    // Apply hill route surcharge
    if (formData.isHillRoute) {
      baseFare *= 1.15; // +15%
    }
    
    // Apply peak season surcharge
    if (formData.isPeakSeason) {
      baseFare *= 1.20; // +20%
    }
    
    // Calculate range (±10% for estimation)
    const minFare = baseFare * 0.9;
    const maxFare = baseFare * 1.1;
    
    setEstimatedFare({
      min: Math.round(minFare),
      max: Math.round(maxFare),
      base: Math.round(baseFare)
    });
  };

  const resetForm = () => {
    setFormData({
      distance: '',
      vehicleType: 'sedan',
      isHillRoute: false,
      isPeakSeason: false
    });
    setEstimatedFare(null);
  };

  const handleWhatsAppClick = () => {
    const bookingDetails = {
      service: 'Car Rental',
      vehicle: formData.vehicleType,
      distance: formData.distance,
      specialRequest: `${formData.isHillRoute ? 'Hill Route, ' : ''}${formData.isPeakSeason ? 'Peak Season' : ''}`
    };
    
    const message = generateBookingMessage(bookingDetails);
    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-royal-blue">Fare Estimator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Distance (km)</label>
          <input 
            type="number" 
            name="distance" 
            value={formData.distance}
            onChange={handleInputChange}
            placeholder="Enter distance"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
            min="1"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Vehicle Type</label>
          <select 
            name="vehicleType" 
            value={formData.vehicleType}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
          >
            <option value="sedan">Sedan (₹18/km)</option>
            <option value="suv">SUV (₹22/km)</option>
            <option value="traveller">Traveller (₹32/km)</option>
          </select>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            name="isHillRoute" 
            checked={formData.isHillRoute}
            onChange={handleInputChange}
            className="w-5 h-5 text-royal-blue rounded focus:ring-royal-blue"
          />
          <label className="ml-2 text-gray-700">Hill Route (+15%)</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            name="isPeakSeason" 
            checked={formData.isPeakSeason}
            onChange={handleInputChange}
            className="w-5 h-5 text-royal-blue rounded focus:ring-royal-blue"
          />
          <label className="ml-2 text-gray-700">Peak Season (+20%)</label>
        </div>
      </div>
      
      <div className="flex gap-4 mb-6">
        <button 
          onClick={calculateFare}
          className="btn-primary flex-1"
        >
          Calculate Fare
        </button>
        <button 
          onClick={resetForm}
          className="btn-secondary flex-1"
        >
          Reset
        </button>
      </div>
      
      {estimatedFare && (
        <div className="bg-gold rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold text-royal-blue mb-2">Estimated Fare</h4>
          <p className="text-2xl font-bold mb-2">
            ₹{estimatedFare.min} – ₹{estimatedFare.max}
          </p>
          <p className="text-gray-700">
            Final quote on WhatsApp
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp mt-4 inline-flex items-center"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            <span>Get Final Quote on WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
}