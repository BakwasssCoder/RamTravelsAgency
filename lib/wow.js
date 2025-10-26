// WOW.js initialization helper to prevent hydration errors
export const initWOW = () => {
  if (typeof window !== 'undefined' && window.WOW) {
    // Clean up any existing inline styles that might cause hydration issues
    const wowElements = document.querySelectorAll('[class*="wow"]');
    wowElements.forEach(el => {
      el.style.removeProperty('visibility');
      el.style.removeProperty('animation-delay');
      el.style.removeProperty('animation-name');
    });
    
    // Initialize WOW.js with proper configuration
    const wow = new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
      callback: function(box) {
        // Clean up inline styles after animation completes
        setTimeout(() => {
          box.style.removeProperty('visibility');
          box.style.removeProperty('animation-delay');
          box.style.removeProperty('animation-name');
        }, 1000);
      }
    });
    
    wow.init();
    return wow;
  }
  return null;
};

// Cleanup function to remove WOW.js styles
export const cleanupWOWStyles = () => {
  if (typeof document !== 'undefined') {
    const wowElements = document.querySelectorAll('[class*="wow"]');
    wowElements.forEach(el => {
      el.style.removeProperty('visibility');
      el.style.removeProperty('animation-delay');
      el.style.removeProperty('animation-name');
    });
  }
};