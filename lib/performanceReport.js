// Performance Reporting Utility

// Function to generate a comprehensive performance report
export const generatePerformanceReport = async () => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const report = {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    metrics: {}
  };

  // Navigation timing
  const navEntries = performance.getEntriesByType('navigation');
  if (navEntries.length > 0) {
    const nav = navEntries[0];
    report.metrics.navigation = {
      dnsLookup: nav.domainLookupEnd - nav.domainLookupStart,
      tcpConnection: nav.connectEnd - nav.connectStart,
      requestTime: nav.responseEnd - nav.requestStart,
      domContentLoaded: nav.domContentLoadedEventEnd - nav.fetchStart,
      loadTime: nav.loadEventEnd - nav.fetchStart,
      firstByte: nav.responseStart - nav.requestStart
    };
  }

  // Paint timing
  const paintEntries = performance.getEntriesByType('paint');
  report.metrics.paint = {};
  paintEntries.forEach(entry => {
    report.metrics.paint[entry.name] = entry.startTime;
  });

  // Resource timing
  const resourceEntries = performance.getEntriesByType('resource');
  report.metrics.resources = {
    count: resourceEntries.length,
    totalSize: resourceEntries.reduce((sum, entry) => sum + (entry.transferSize || 0), 0),
    slowestResources: resourceEntries
      .sort((a, b) => (b.responseEnd - b.requestStart) - (a.responseEnd - a.requestStart))
      .slice(0, 5)
      .map(entry => ({
        name: entry.name,
        duration: entry.responseEnd - entry.requestStart,
        size: entry.transferSize
      }))
  };

  // Memory usage (if available)
  if ('memory' in performance) {
    report.metrics.memory = {
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit
    };
  }

  // Network information (if available)
  if ('connection' in navigator) {
    report.metrics.network = {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt
    };
  }

  return report;
};

// Function to send performance report to analytics
export const sendPerformanceReport = async (report) => {
  // In a real implementation, this would send to your analytics service
  console.log('[Performance Report]', report);
  
  // Example implementation:
  /*
  try {
    await fetch('/api/performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(report),
    });
  } catch (error) {
    console.error('Failed to send performance report:', error);
  }
  */
};

// Function to monitor performance continuously
export const startPerformanceMonitoring = (interval = 30000) => {
  if (typeof window === 'undefined') return;

  const sendReport = async () => {
    const report = await generatePerformanceReport();
    if (report) {
      await sendPerformanceReport(report);
    }
  };

  // Send initial report after page load
  window.addEventListener('load', () => {
    setTimeout(sendReport, 5000); // Wait 5 seconds after load
  });

  // Send periodic reports
  setInterval(sendReport, interval);
};

// Function to measure component render performance
export const measureRenderPerformance = (componentName) => {
  if (typeof window === 'undefined' || !window.performance) return () => {};

  const startMark = `${componentName}_start`;
  const endMark = `${componentName}_end`;

  performance.mark(startMark);

  return () => {
    performance.mark(endMark);
    performance.measure(componentName, startMark, endMark);
    
    const measures = performance.getEntriesByName(componentName);
    if (measures.length > 0) {
      console.log(`[Render Performance] ${componentName}: ${measures[0].duration.toFixed(2)}ms`);
    }
  };
};

// Function to identify performance bottlenecks
export const identifyBottlenecks = async () => {
  const report = await generatePerformanceReport();
  if (!report) return [];

  const bottlenecks = [];

  // Check for slow DNS lookup
  if (report.metrics.navigation?.dnsLookup > 100) {
    bottlenecks.push({
      type: 'dns',
      message: 'Slow DNS lookup detected',
      value: report.metrics.navigation.dnsLookup
    });
  }

  // Check for slow TCP connection
  if (report.metrics.navigation?.tcpConnection > 200) {
    bottlenecks.push({
      type: 'tcp',
      message: 'Slow TCP connection detected',
      value: report.metrics.navigation.tcpConnection
    });
  }

  // Check for slow first byte
  if (report.metrics.navigation?.firstByte > 200) {
    bottlenecks.push({
      type: 'server',
      message: 'Slow server response time detected',
      value: report.metrics.navigation.firstByte
    });
  }

  // Check for large resource sizes
  if (report.metrics.resources?.totalSize > 5000000) { // 5MB
    bottlenecks.push({
      type: 'resources',
      message: 'Large total resource size detected',
      value: report.metrics.resources.totalSize
    });
  }

  return bottlenecks;
};