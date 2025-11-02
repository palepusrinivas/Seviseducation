/**
 * Performance Optimization Utilities
 * Collection of utilities to improve React app performance
 */

/**
 * Debounce function - Delays execution until after wait milliseconds
 * Use for: Search inputs, resize handlers, scroll events
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
 * Throttle function - Limits function execution to once per specified time
 * Use for: Scroll events, mouse move, window resize
 */
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Preload images for better performance
 * Use for: Critical images, next page images
 */
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );
};

/**
 * Lazy load component when element is in viewport
 * Use for: Below-fold components, modals, tooltips
 */
export const lazyLoadComponent = (importFunc) => {
  return React.lazy(() => {
    return new Promise((resolve) => {
      // Minimum delay to prevent flash of loading
      setTimeout(() => {
        resolve(importFunc());
      }, 100);
    });
  });
};

/**
 * Detect if user prefers reduced motion
 * Use for: Conditional animations
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Optimize animation frame rate
 * Use for: Smooth animations at 60fps
 */
export const requestIdleCallback = (callback) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  return setTimeout(callback, 1);
};

/**
 * Cancel idle callback
 */
export const cancelIdleCallback = (id) => {
  if ('cancelIdleCallback' in window) {
    return window.cancelIdleCallback(id);
  }
  return clearTimeout(id);
};

/**
 * Measure component render time
 * Use for: Performance monitoring in development
 */
export const measureRenderTime = (componentName, callback) => {
  if (process.env.NODE_ENV === 'development') {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    console.log(`${componentName} rendered in ${(endTime - startTime).toFixed(2)}ms`);
  } else {
    callback();
  }
};

/**
 * Check if element is in viewport
 * Use for: Lazy loading, scroll animations
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Optimize scroll performance
 * Use for: Infinite scroll, parallax effects
 */
export const optimizedScroll = (callback) => {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  return handleScroll;
};

/**
 * Batch state updates for better performance
 * Use for: Multiple setState calls
 */
export const batchUpdates = (callback) => {
  if (typeof ReactDOM !== 'undefined' && ReactDOM.unstable_batchedUpdates) {
    ReactDOM.unstable_batchedUpdates(callback);
  } else {
    callback();
  }
};

/**
 * Get optimal image format based on browser support
 * Use for: Dynamic image format selection
 */
export const getOptimalImageFormat = () => {
  const canvas = document.createElement('canvas');
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    return 'webp';
  }
  return 'jpg';
};

/**
 * Compress and optimize image before upload
 * Use for: Form submissions, profile uploads
 */
export const compressImage = (file, maxWidth = 1920, quality = 0.8) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => resolve(blob), 'image/jpeg', quality);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};

export default {
  debounce,
  throttle,
  preloadImages,
  prefersReducedMotion,
  requestIdleCallback,
  cancelIdleCallback,
  measureRenderTime,
  isInViewport,
  optimizedScroll,
  batchUpdates,
  getOptimalImageFormat,
  compressImage
};

