// Image optimization utilities

// Function to generate responsive image sources
export const generateImageSrcSet = (baseSrc, sizes = [320, 480, 768, 1024, 1280]) => {
  return sizes.map(size => `${baseSrc}?w=${size} ${size}w`).join(', ');
};

// Function to generate appropriate image sizes attribute
export const generateImageSizes = (breakpoints = {
  sm: '100vw',
  md: '50vw',
  lg: '33vw',
  xl: '25vw'
}) => {
  return `(max-width: 768px) ${breakpoints.sm}, (max-width: 1024px) ${breakpoints.md}, (max-width: 1280px) ${breakpoints.lg}, ${breakpoints.xl}`;
};

// Function to optimize image loading with progressive enhancement
export const optimizeImageLoading = (src, alt, className = '', priority = false) => {
  // In a real implementation, this would integrate with Next.js Image component
  // For now, we'll return optimized img attributes
  return {
    src: src || '/images/placeholder.jpg',
    alt: alt || 'Image',
    className: className,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    fetchPriority: priority ? 'high' : 'auto'
  };
};

// Function to preload critical images
export const preloadCriticalImages = (imageUrls) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

// Function to implement progressive image loading
export const progressiveImageLoader = (lowQualitySrc, highQualitySrc, callback) => {
  const img = new Image();
  
  // Load low quality image first
  img.src = lowQualitySrc;
  img.onload = () => {
    // Once low quality image is loaded, load high quality version
    const highQualityImg = new Image();
    highQualityImg.src = highQualitySrc;
    highQualityImg.onload = () => {
      // When high quality image is loaded, call callback
      if (callback) callback(highQualitySrc);
    };
  };
};

// Utility to determine image dimensions based on container
export const getImageDimensions = (containerWidth, aspectRatio = 16/9) => {
  return {
    width: containerWidth,
    height: containerWidth / aspectRatio
  };
};