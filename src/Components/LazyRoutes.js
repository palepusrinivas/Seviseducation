import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

// Lazy load all route components for code splitting
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const FreeConsultation = lazy(() => import('./FreeConsultation'));

// Student Visa Routes
const Australiastudentvisa = lazy(() => import('./Australiastudentvisa'));
const Unitedkingdom = lazy(() => import('./Unitedkingdom'));
const UnitedStateofAmerica = lazy(() => import('./UnitedStateofAmerica'));
const USACanada = lazy(() => import('./USACanada'));
const UnitedArabEmiratesstudentvisa = lazy(() => import('./UnitedArabEmiratesstudentvisa'));

// Universities Routes
const Ukuniversities = lazy(() => import('./Ukuniversities'));
const USAUniversities = lazy(() => import('./USAUniversities'));
const AustraliaUniversities = lazy(() => import('./AustraliaUniversities'));
const UnitedArabEmiratesUniversities = lazy(() => import('./UnitedArabEmiratesUniversities'));


// Exams Routes
const GRE = lazy(() => import('./GRE'));
const GMAT = lazy(() => import('./GMAT'));
const IELTS = lazy(() => import('./IELTS'));
const TOEFL = lazy(() => import('./TOEFL'));
const PTE = lazy(() => import('./PTE'));
const SATEXAM = lazy(() => import('./SATEXAM'));
const DUOLINGO = lazy(() => import('./DUOLINGO'));

// Other Routes
const OVERPILOTTRAINING = lazy(() => import('./OVERPILOTTRAINING'));
const CourseCurriculum = lazy(() => import('./CourseCurriculum'));
const Advice = lazy(() => import('./Advice'));
const Immigration = lazy(() => import('./Immigration'));
const Blogs = lazy(() => import('./Blogs'));
const TermsOfService = lazy(() => import('./TermsOfService'))

// Professional Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div className="text-center">
      {/* Animated Spinner */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
      
      {/* Loading Text */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">Loading...</h2>
      <p className="text-gray-600 text-sm">Please wait while we prepare your content</p>
      
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Error Boundary Fallback
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-6">Please refresh the page to try again.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        Reload Page
      </button>
    </div>
  </div>
);

const LazyRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FreeConsultation" element={<FreeConsultation />} />
        <Route path="/Advice" element={<Advice />} />

        {/* Student Visa Routes */}
        <Route path="/Australiastudentvisa" element={<Australiastudentvisa />} />
        <Route path="/Unitedkingdom" element={<Unitedkingdom />} />
        <Route path="/UnitedStateofAmerica" element={<UnitedStateofAmerica />} />
        <Route path="/USACanada" element={<USACanada />} />

        {/* Universities Routes */}
        <Route path="/Ukuniversities" element={<Ukuniversities />} />
        <Route path="/USAUniversities" element={<USAUniversities />} />
        <Route path="/AustraliaUniversities" element={<AustraliaUniversities />} />
        <Route path='/UnitedArabEmiratesstudentvisa' element={<UnitedArabEmiratesstudentvisa/>} />
        <Route path='/UnitedArabEmiratesUniversities' element={<UnitedArabEmiratesUniversities/>} />

        {/* Exams Routes */}
        <Route path="/GRE" element={<GRE />} />
        <Route path="/GMAT" element={<GMAT />} />
        <Route path="/IELTS" element={<IELTS />} />
        <Route path="/TOEFL" element={<TOEFL />} />
        <Route path="/PTE" element={<PTE />} />
        <Route path="/SATEXAM" element={<SATEXAM />} />
        <Route path="/DUOLINGO" element={<DUOLINGO />} />

        {/* Other Routes */}
        <Route path="/OVERPIOLTTRAINING" element={<OVERPILOTTRAINING />} />
        <Route path="/CourseCurriculum" element={<CourseCurriculum />} />
        <Route path="/Immigration" element={<Immigration />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path='/TermsofService' element={<TermsOfService />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />

        {/* 404 Route */}
        <Route path="*" element={<ErrorFallback />} />
      </Routes>
    </Suspense>
  );
};

export default LazyRoutes;

