/**
 * WhatsApp integration utilities for Ram Travels India
 */

// WhatsApp business number
const WHATSAPP_NUMBER = '919155969543';

/**
 * Generate WhatsApp URL with pre-filled message
 * @param {string} message - The message to pre-fill
 * @returns {string} - WhatsApp URL
 */
export const generateWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp chat with pre-filled message
 * @param {string} message - The message to pre-fill
 */
export const openWhatsAppChat = (message) => {
  const url = generateWhatsAppUrl(message);
  window.open(url, '_blank');
};

/**
 * Generate standard booking inquiry message
 * @param {Object} bookingDetails - Booking details
 * @returns {string} - Formatted message
 */
export const generateBookingMessage = (bookingDetails) => {
  const {
    service = '',
    city = '',
    destination = '',
    date = '',
    vehicle = '',
    passengers = '',
    name = '',
    email = '',
    specialRequest = ''
  } = bookingDetails;

  let message = 'Hello Ram Travels India,\n\n';
  
  if (name) message += `My name is ${name}\n`;
  if (email) message += `Email: ${email}\n\n`;
  
  message += 'I\'d like to book:\n';
  if (service) message += `• Service: ${service}\n`;
  if (city && destination) message += `• Route: ${city} → ${destination}\n`;
  if (date) message += `• Date: ${date}\n`;
  if (vehicle) message += `• Vehicle: ${vehicle}\n`;
  if (passengers) message += `• Passengers: ${passengers}\n`;
  if (specialRequest) message += `\nSpecial Request:\n${specialRequest}\n`;
  
  message += '\nPlease share final quote.';
  
  return message;
};

/**
 * Generate package inquiry message
 * @param {string} packageName - Name of the package
 * @param {Object} customerDetails - Customer details
 * @returns {string} - Formatted message
 */
export const generatePackageInquiryMessage = (packageName, customerDetails = {}) => {
  const {
    name = '',
    email = '',
    phone = '',
    travelDate = '',
    passengers = ''
  } = customerDetails;

  let message = `Hello Ram Travels India,\n\n`;
  message += `I'm interested in the ${packageName} package.\n\n`;
  
  if (name) message += `Name: ${name}\n`;
  if (email) message += `Email: ${email}\n`;
  if (phone) message += `Phone: ${phone}\n`;
  if (travelDate) message += `Preferred Travel Date: ${travelDate}\n`;
  if (passengers) message += `Number of Passengers: ${passengers}\n`;
  
  message += `\nPlease provide more details and quote for this package.`;
  
  return message;
};

/**
 * Generate general inquiry message
 * @param {string} subject - Subject of inquiry
 * @param {string} details - Additional details
 * @returns {string} - Formatted message
 */
export const generateGeneralInquiryMessage = (subject, details = '') => {
  let message = `Hello Ram Travels India,\n\n`;
  message += `I have an inquiry about: ${subject}\n\n`;
  
  if (details) {
    message += `Details:\n${details}\n\n`;
  }
  
  message += `Please assist me with this.`;
  
  return message;
};