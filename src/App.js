import { useState, useEffect, lazy, Suspense, memo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import ScrollToTop from "./ScrollToTop.js";

// Lazy load heavy libraries only when needed
const loadAOS = () => import('aos/dist/aos.css');
const loadAnimateCSS = () => import('animate.css');
const loadBootstrap = () => import('bootstrap/dist/css/bootstrap.min.css');

// Lazy load components for better initial load
const Loader = lazy(() => import('./Components/Loader'));
const Header = memo(lazy(() => import('./Components/Header')));
const LazyRoutes = lazy(() => import('./Components/LazyRoutes'));
const Footer = memo(lazy(() => import('./Components/Footer.js')));

// Minimal loading fallback
const MinimalLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [libsLoaded, setLibsLoaded] = useState(false);

  // Optimize loader timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced from 3000ms to 2000ms

    return () => clearTimeout(timer);
  }, []);

  // Load heavy CSS libraries after initial render
  useEffect(() => {
    if (!loading) {
      Promise.all([
        loadAOS(),
        loadAnimateCSS(),
        loadBootstrap()
      ]).then(() => {
        setLibsLoaded(true);
        // Initialize AOS after loading
        import('aos').then((AOS) => {
          AOS.init({
            duration: 800, // Reduced from 1000ms
            once: true,
            offset: 100,
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches // Respect user preferences
          });
        });
      });
    }
  }, [loading]);

  // Performance optimization: Log Web Vitals only in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Defer web vitals reporting to idle time
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          import('./reportWebVitals').then(({ default: reportWebVitals }) => {
            reportWebVitals(console.log);
          });
        });
      }
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    // Preconnect to external domains
    const preconnect = (href) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    };

    preconnect('https://fonts.googleapis.com');
    preconnect('https://fonts.gstatic.com');
  }, []);

  if (loading) {
    return (
      <Suspense fallback={<MinimalLoader />}>
        <Loader />
      </Suspense>
    );
  }

  return (
    <HelmetProvider>
      <Suspense fallback={<MinimalLoader />}>
        <div className="App overflow-x-hidden w-full" style={{ position: 'relative', overflowY: 'visible' }}>
          <ScrollToTop />
          <Header />
          <LazyRoutes />
          <Footer />
        </div>
      </Suspense>
    </HelmetProvider>
  );
}

export default memo(App);
