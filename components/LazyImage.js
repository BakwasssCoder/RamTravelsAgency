'use client';

import { useState, useEffect, useRef } from 'react';
import LazyLoad from './LazyLoad';

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholderColor = 'bg-gray-200', 
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Simulate image loading for demo purposes
  // In a real app, you would use the actual image loading
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300); // Simulate loading delay
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '50px',
      threshold: 0.1,
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded ? (
        <div className={`w-full h-full ${placeholderColor} animate-pulse`} />
      ) : (
        <img
          src={src || '/images/placeholder.jpg'}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
      {/* Progressive enhancement - show low-quality image first */}
      {isInView && !isLoaded && (
        <img
          src={src || '/images/placeholder.jpg'}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-30'} ${className}`}
          {...props}
        />
      )}
    </div>
  );
}

// Wrapper component for lazy loading images with LazyLoad
export function LazyImageWrapper({ 
  src, 
  alt, 
  className = '', 
  placeholderColor = 'bg-gray-200',
  height = '200px',
  ...props 
}) {
  return (
    <LazyLoad 
      height={height}
      placeholder={
        <div className={`w-full h-full ${placeholderColor} animate-pulse`} />
      }
    >
      <LazyImage 
        src={src} 
        alt={alt} 
        className={className} 
        placeholderColor={placeholderColor}
        {...props}
      />
    </LazyLoad>
  );
}