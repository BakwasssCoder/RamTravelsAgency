'use client';

import dynamic from 'next/dynamic';

// Dynamic imports for heavy components
export const DynamicFareEstimator = dynamic(
  () => import('../components/FareEstimator'),
  {
    loading: () => <div className="bg-gray-200 animate-pulse h-96 rounded-xl" />,
    ssr: true
  }
);

export const DynamicHeader = dynamic(
  () => import('../components/Header'),
  {
    loading: () => <div className="bg-white h-16 animate-pulse" />,
    ssr: true
  }
);

export const DynamicFooter = dynamic(
  () => import('../components/Footer'),
  {
    loading: () => <div className="bg-royal-blue h-64 animate-pulse" />,
    ssr: true
  }
);

export const DynamicLazyImage = dynamic(
  () => import('../components/LazyImage'),
  {
    loading: () => <div className="bg-gray-200 animate-pulse" />,
    ssr: true
  }
);

export const DynamicLazyLoad = dynamic(
  () => import('../components/LazyLoad'),
  {
    loading: () => <div className="bg-gray-200 animate-pulse" />,
    ssr: true
  }
);

// Utility function for conditional dynamic imports
export const conditionalDynamicImport = (componentPath, condition, fallback = null) => {
  if (condition) {
    return dynamic(() => import(componentPath), {
      loading: () => fallback || <div className="bg-gray-200 animate-pulse" />,
      ssr: true
    });
  }
  return null;
};