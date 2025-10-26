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
  const [isCalculating, setIsCalculating] = useState(false);

  const baseRates = {
    sedan: 18, // ₹ per km
    suv: 22,   // ₹ per km
    traveller: 32 // ₹ per km
  };

  const vehicleOptions = [
    { id: 'sedan', name: 'Sedan', rate: 18 },
    { id: 'suv', name: 'SUV', rate: 22 },
    { id: 'traveller', name: 'Traveller', rate: 32 }
  ];

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

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
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
        base: Math.round(baseFare),
        distance: formData.distance,
        vehicle: vehicleOptions.find(v => v.id === formData.vehicleType)
      });
      
      setIsCalculating(false);
    }, 800);
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
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-5 transition-all duration-300 border border-gray-200">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Fare Estimator</h3>
        <p className="text-gray-600 text-xs">Calculate your travel costs</p>
      </div>
      
      <div className="space-y-4">
        {/* Distance Input */}
        <div>
          <label className="block text-gray-700 font-medium text-xs mb-1">Distance (km)</label>
          <div className="relative">
            <input 
              type="number" 
              name="distance" 
              value={formData.distance}
              onChange={handleInputChange}
              placeholder="Enter distance"
              className="w-full p-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              min="1"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <i className="fas fa-road text-gray-400 text-xs"></i>
            </div>
          </div>
        </div>
        
        {/* Vehicle Selection */}
        <div>
          <label className="block text-gray-700 font-medium text-xs mb-1">Vehicle Type</label>
          <div className="relative">
            <select 
              name="vehicleType" 
              value={formData.vehicleType}
              onChange={handleInputChange}
              className="w-full p-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none bg-white"
            >
              {vehicleOptions.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.name} (₹{vehicle.rate}/km)
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400 text-[9px]"></i>
            </div>
          </div>
        </div>
        
        {/* Surcharges Checkboxes */}
        <div>
          <label className="block text-gray-700 font-medium text-xs mb-1">Surcharges</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hillRoute"
                name="isHillRoute"
                checked={formData.isHillRoute}
                onChange={handleInputChange}
                className="w-3.5 h-3.5 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="hillRoute" className="ml-2 text-xs text-gray-700">
                Hill Route (+15%)
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="peakSeason"
                name="isPeakSeason"
                checked={formData.isPeakSeason}
                onChange={handleInputChange}
                className="w-3.5 h-3.5 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="peakSeason" className="ml-2 text-xs text-gray-700">
                Peak Season (+20%)
              </label>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-1.5">
          <button 
            onClick={calculateFare}
            disabled={isCalculating}
            className={`flex-1 py-1.5 px-2 rounded-lg font-bold text-xs transition-all duration-200 flex items-center justify-center ${
              isCalculating 
                ? 'bg-yellow-500/80 cursor-not-allowed' 
                : 'bg-yellow-500 hover:bg-yellow-600 text-black'
            }`}
          >
            {isCalculating ? (
              <>
                <i className="fas fa-spinner fa-spin mr-1 text-[10px]"></i> Calculating...
              </>
            ) : (
              <>
                <i className="fas fa-calculator mr-1 text-[10px]"></i> Calculate
              </>
            )}
          </button>
          <button 
            onClick={resetForm}
            className="py-1.5 px-2 rounded-lg font-bold text-xs bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-200 flex items-center justify-center"
          >
            <i className="fas fa-redo mr-1 text-[10px]"></i> Reset
          </button>
        </div>
        
        {/* Results */}
        {estimatedFare && (
          <div className="bg-yellow-400 rounded-lg p-3 text-center mt-3">
            <h4 className="text-xs font-bold mb-1.5 text-black">Estimated Fare</h4>
            <div className="bg-yellow-300 rounded-md p-2 mb-2">
              <p className="text-[10px] text-black mb-0.5">Distance: {estimatedFare.distance} km</p>
              <p className="text-sm font-bold text-black">₹{estimatedFare.min} – ₹{estimatedFare.max}</p>
              <p className="text-[10px] text-black mt-0.5">Base: ₹{estimatedFare.base}</p>
            </div>
            <button 
              onClick={handleWhatsAppClick}
              className="w-full py-1.5 px-2 rounded-lg font-bold text-xs bg-yellow-500 hover:bg-yellow-600 text-black flex items-center justify-center"
            >
              <i className="fab fa-whatsapp mr-1 text-xs"></i>
              <span>Get Quote</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}