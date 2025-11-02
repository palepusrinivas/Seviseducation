/**
 * Performance Optimization Utilities
 * Provides tools for measuring and improving website performance
 */

/**
 * Debounce function for optimizing scroll/resize handlers
 * @param {function} func - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for limiting function execution
 * @param {function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {function} - Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Measure Core Web Vitals
 * @param {function} onPerfEntry - Callback function
 */
export const measureWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Lazy load component wrapper
 * @param {function} importFunc - Dynamic import function
 * @returns {React.Component} - Lazy loaded component
 */
export const lazyLoadComponent = (importFunc) => {
  const React = require('react');
  return React.lazy(importFunc);
};

/**
 * Prefetch resources
 * @param {array} urls - Array of URLs to prefetch
 */
export const prefetchResources = (urls) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      urls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      urls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    }, 1000);
  }
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} - True if reduced motion preferred
 */
export const prefersReducedMotion = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

/**
 * Optimize animation based on user preference
 * @param {object} animation - Animation configuration
 * @returns {object} - Optimized animation or null
 */
export const optimizeAnimation = (animation) => {
  return prefersReducedMotion() ? null : animation;
};

/**
 * Track performance metrics
 */
export const trackPerformance = () => {
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      console.log('Performance Metrics:', {
        pageLoadTime: `${pageLoadTime}ms`,
        connectTime: `${connectTime}ms`,
        renderTime: `${renderTime}ms`,
      });

      // Send to analytics (if configured)
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'load',
          value: pageLoadTime,
          event_category: 'Performance'
        });
      }
    });
  }
};

/**
 * Service Worker registration for PWA
 */
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    });
  }
};

/**
 * Optimize third-party scripts loading
 */
export const loadThirdPartyScripts = () => {
  // Load analytics after page load
  if (document.readyState === 'complete') {
    loadScripts();
  } else {
    window.addEventListener('load', loadScripts);
  }

  function loadScripts() {
    // Add any third-party scripts here
    // Example: Chat widgets, social media widgets, etc.
  }
};

/**
 * Memory cleanup utility
 * @param {function} cleanup - Cleanup function
 * @returns {function} - Cleanup function
 */
export const useCleanup = (cleanup) => {
  return () => {
    if (cleanup && typeof cleanup === 'function') {
      cleanup();
    }
  };
};

/**
 * Detect connection speed and adjust accordingly
 * @returns {string} - Connection type: '4g', '3g', '2g', 'slow-2g'
 */
export const getConnectionSpeed = () => {
  if ('connection' in navigator) {
    return navigator.connection.effectiveType || '4g';
  }
  return '4g';
};

/**
 * Optimize content based on connection
 * @returns {object} - Optimization settings
 */
export const getOptimizationSettings = () => {
  const speed = getConnectionSpeed();
  
  switch(speed) {
    case 'slow-2g':
    case '2g':
      return {
        imageQuality: 'low',
        animationsEnabled: false,
        lazyLoadOffset: 200,
        prefetchEnabled: false
      };
    case '3g':
      return {
        imageQuality: 'medium',
        animationsEnabled: true,
        lazyLoadOffset: 100,
        prefetchEnabled: false
      };
    case '4g':
    default:
      return {
        imageQuality: 'high',
        animationsEnabled: true,
        lazyLoadOffset: 50,
        prefetchEnabled: true
      };
  }
};

export default {
  debounce,
  throttle,
  measureWebVitals,
  lazyLoadComponent,
  prefetchResources,
  prefersReducedMotion,
  optimizeAnimation,
  trackPerformance,
  registerServiceWorker,
  loadThirdPartyScripts,
  useCleanup,
  getConnectionSpeed,
  getOptimizationSettings
};


