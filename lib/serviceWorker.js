// Service Worker Registration Utility

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
          console.log('[SW] Registered:', registration);
        })
        .catch(function(error) {
          console.log('[SW] Registration failed:', error);
        });
    });
  }
};

export const unregisterServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
};

export const sendNotification = (title, options) => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, options);
    });
  }
};

// Check if browser supports PWA features
export const isPWASupported = () => {
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

// Check if app is installed as PWA
export const isPWAInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true;
};

// Prompt user to install PWA (for browsers that support it)
export const promptPWAInstall = () => {
  if ('BeforeInstallPromptEvent' in window) {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      window.deferredPrompt = e;
      // Show install button or prompt
      return e;
    });
  }
};