'use client';

import { useState, useEffect, useRef } from 'react';

export default function LazyLoad({ children, placeholder, height = 'auto', once = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasBeenVisible(true);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: '50px', // Load 50px before entering viewport
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once]);

  return (
    <div ref={elementRef} style={{ height }}>
      {isVisible || hasBeenVisible ? (
        children
      ) : (
        placeholder || <div className="bg-gray-200 animate-pulse" style={{ height: '100%' }} />
      )}
    </div>
  );
}