// Performance monitoring utilities

// Function to measure component loading times
export const measureComponentLoad = (componentName) => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      const loadTime = end - start;
      
      // Log performance metrics
      console.log(`[Performance] ${componentName} loaded in ${loadTime.toFixed(2)}ms`);
      
      // In a production environment, you might send this to analytics
      // sendToAnalytics({ componentName, loadTime });
      
      return loadTime;
    };
  }
  
  return () => {}; // No-op if performance API is not available
};

// Function to track lazy loading performance
export const trackLazyLoadPerformance = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const loadTime = performance.now() - parseFloat(entry.target.dataset.loadStart);
          console.log(`[Performance] Lazy loaded element in ${loadTime.toFixed(2)}ms`);
          observer.unobserve(entry.target);
        }
      });
    });
    
    return observer;
  }
  
  return null;
};

// Function to measure First Contentful Paint (FCP)
export const measureFCP = (callback) => {
  if (typeof window !== 'undefined' && 'performance' in window && 'getEntriesByName' in window.performance) {
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry.name === 'first-contentful-paint') {
        callback(lastEntry.startTime);
        fcpObserver.disconnect();
      }
    });
    
    fcpObserver.observe({ entryTypes: ['paint'] });
  }
};

// Function to measure Largest Contentful Paint (LCP)
export const measureLCP = (callback) => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      callback(lastEntry.startTime);
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

// Function to measure Cumulative Layout Shift (CLS)
export const measureCLS = (callback) => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    let clsValue = 0;
    const clsEntries = [];
    
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      });
      
      callback(clsValue, clsEntries);
    });
    
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

// Function to add performance monitoring to components
export const withPerformanceMonitoring = (Component, componentName) => {
  if (process.env.NODE_ENV === 'development') {
    const endMeasure = measureComponentLoad(componentName);
    
    // Return wrapped component
    const WrappedComponent = (props) => {
      endMeasure();
      return Component(props);
    };
    
    WrappedComponent.displayName = `PerformanceMonitored(${componentName})`;
    
    return WrappedComponent;
  }
  
  return Component;
};

// Function to preload critical resources
export const preloadCriticalResources = (resources) => {
  if (typeof document !== 'undefined') {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.type;
      link.href = resource.url;
      
      if (resource.type === 'font') {
        link.crossOrigin = 'anonymous';
      }
      
      document.head.appendChild(link);
    });
  }
};