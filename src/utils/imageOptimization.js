/**
 * Image Optimization Utilities
 * Provides lazy loading and performance optimization for images
 */

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for lazy loading images
 * @param {string} src - Image source URL
 * @param {string} placeholder - Placeholder image (optional)
 * @returns {object} - { imageSrc, isLoaded }
 */
export const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;
    const imageElement = imageRef.current;

    if (imageElement && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Load images 50px before they enter viewport
        }
      );

      observer.observe(imageElement);
    } else {
      // Fallback for browsers without IntersectionObserver
      setImageSrc(src);
      setIsLoaded(true);
    }

    return () => {
      if (observer && imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, [src, placeholder]);

  return { imageSrc, isLoaded, imageRef };
};

/**
 * Lazy Image Component
 * Usage: <LazyImage src="/path/to/image.jpg" alt="Description" className="..." />
 */
export const LazyImage = ({ src, alt, className = '', ...props }) => {
  const { imageSrc, isLoaded, imageRef } = useLazyImage(src);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

/**
 * Generate responsive image srcset
 * @param {string} imagePath - Base image path
 * @param {array} sizes - Array of sizes [width, width, ...]
 * @returns {string} - srcset string
 */
export const generateSrcSet = (imagePath, sizes = [320, 640, 960, 1280, 1920]) => {
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `${basePath}-${size}w.${extension} ${size}w`)
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 * @returns {string} - sizes string
 */
export const generateSizes = () => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};

/**
 * Image preloader utility
 * @param {array} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Convert image to WebP (client-side check)
 * @param {string} src - Image source
 * @returns {string} - WebP source if supported, original otherwise
 */
export const toWebP = (src) => {
  // Check if browser supports WebP
  const supportsWebP = () => {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };

  if (supportsWebP() && src) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return src;
};

export default {
  useLazyImage,
  LazyImage,
  generateSrcSet,
  generateSizes,
  preloadImages,
  toWebP
};


