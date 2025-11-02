import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../assest/slider1.jpg";
import slider2 from "../assest/slider2.jpg";
import slider3 from "../assest/slider3.jpg";
import slider4 from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";

const slides = [
  {
    id: 1,
    tag: "Global Education Partner",
    title: "Your Gateway to World-Class Universities",
    subtitle: "Expert guidance for studying in USA, UK, Canada and Australia",
    description: "We provide comprehensive visa assistance, complete documentation support, and personalized counseling to transform your study abroad dreams into reality.",
    image: slider1,
    stats: [
      { value: "5000+", label: "Students Placed" },
      { value: "99%", label: "Success Rate" },
      { value: "50+", label: "Partner Universities" }
    ]
  },
  {
    id: 2,
    tag: "Expert Counseling",
    title: "Shape Your International Academic Career",
    subtitle: "Personalized guidance from application to visa approval",
    description: "Our experienced counselors work with you at every step - from selecting the perfect university to securing your student visa with confidence.",
    image: slider2,
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" }
    ]
  },
  {
    id: 3,
    tag: "Visa Success Specialists",
    title: "Excellence in Study Abroad Solutions",
    subtitle: "Your trusted partner for seamless international education",
    description: "From documentation to mock interviews, we ensure your complete preparedness for visa success with our proven methodology and expert coaching.",
    image: slider3,
    stats: [
      { value: "30+", label: "Countries" },
      { value: "500+", label: "Programs" },
      { value: "98%", label: "Visa Approval" }
    ]
  },
  {
    id: 4,
    tag: "Test Preparation Excellence",
    title: "Ace Your IELTS, TOEFL & Admission Tests",
    subtitle: "Comprehensive test prep and coaching for study abroad success",
    description: "Master IELTS, TOEFL, GRE, GMAT, and SAT with our expert coaching programs. We provide personalized training to help you achieve your target scores.",
    image: slider4,
    stats: [
      { value: "95%", label: "Target Score Achievement" },
      { value: "1000+", label: "Test Takers Coached" },
      { value: "8.5", label: "Avg IELTS Score" }
    ]
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Auto-play with progress
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      setProgress(0);
      
      // Progress bar animation
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 100;
          }
          return prev + (100 / 60); // 60 frames for 6 seconds
        });
      }, 100);

      // Slide transition
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, 6000);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isAutoPlaying, isPaused, currentSlide]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setProgress(0);
  };
  
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };
  
  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };
  
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      zIndex: 0,
    }),
  };

  // Premium alternating zoom with professional timing
  const getZoomAnimation = (slideIndex) => {
    const animations = [
      { initial: { scale: 1.3 }, animate: { scale: 1 } },      // Slide 1: Zoom OUT - Dramatic
      { initial: { scale: 1 }, animate: { scale: 1.2 } },      // Slide 2: Zoom IN - Engaging
      { initial: { scale: 1.28 }, animate: { scale: 1 } },     // Slide 3: Zoom OUT - Cinematic
      { initial: { scale: 1 }, animate: { scale: 1.22 } },     // Slide 4: Zoom IN - Dynamic
    ];
    return animations[slideIndex] || animations[0];
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Professional Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#FF0013' : i % 3 === 1 ? '#0369B2' : '#FFD166',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              scale: [0.8, 1.5, 0.8],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Slides with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            x: { type: "spring", stiffness: 400, damping: 40 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* High-Quality Image with Premium Zoom Effect */}
          <div className="absolute inset-0 overflow-hidden bg-black">
            <motion.div
              {...getZoomAnimation(currentSlide)}
              transition={{ 
                duration: 7,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              className="w-full h-full bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.88) contrast(1.18) saturate(1.08)',
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>

          {/* Stunning Dark Overlay for Vibrant Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/85 to-black/75" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/60" />
          
          {/* Deep Vignette for Focus */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{
                 boxShadow: 'inset 0 0 150px rgba(0,0,0,0.6)',
               }}
          />
          
          {/* Subtle Glow Enhancement */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px]"
                 style={{
                   background: 'radial-gradient(circle, rgba(255,0,19,0.3) 0%, transparent 70%)',
                 }}
            />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px]"
                 style={{
                   background: 'radial-gradient(circle, rgba(3,105,178,0.3) 0%, transparent 70%)',
                 }}
            />
          </div>

          {/* Professional Content - Fast Loading */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
              <div className="max-w-4xl">
                
                {/* Professional Tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wide border border-white/20 shadow-lg">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                    <span className="text-white">
                      {slides[currentSlide].tag}
                    </span>
                  </span>
                </motion.div>

                {/* Professional Title - Clean White */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight"
                  style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Subtitle - Professional White */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.14, ease: "easeOut" }}
                  className="text-sm md:text-base lg:text-lg text-gray-200 mb-3 font-medium"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Description - Clean Gray */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
                  className="text-xs md:text-sm lg:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-xl"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Professional CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.22 }}
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm md:text-base rounded-lg overflow-hidden shadow-2xl hover:shadow-primary/60 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 md:px-8 py-3 md:py-3.5 bg-white/10 backdrop-blur-lg text-white font-semibold text-sm md:text-base rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/15 transition-all duration-300 shadow-lg"
                  >
                    Free Consultation
                  </motion.button>
                </motion.div>

                {/* Statistics - Professional White */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="grid grid-cols-3 gap-4 md:gap-6 pt-5 border-t-2 border-white/20"
                >
                  {slides[currentSlide].stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, delay: 0.27 + idx * 0.05, type: "spring", stiffness: 200 }}
                      className="text-center md:text-left"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Professional Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.12, x: -2 }}
        whileTap={{ scale: 0.92 }}
        onClick={goToPrevious}
        className="group absolute left-4 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border-2 border-white/25 hover:border-white/50 hover:bg-white/15 shadow-2xl transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.12, x: 2 }}
        whileTap={{ scale: 0.92 }}
        onClick={goToNext}
        className="group absolute right-4 md:right-8 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border-2 border-white/25 hover:border-white/50 hover:bg-white/15 shadow-2xl transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
      </motion.button>

      {/* Professional Progress Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2.5">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
            >
              <div className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-14 md:w-16 bg-white shadow-lg" 
                  : "w-8 bg-white/35 hover:bg-white/55"
              }`}>
                {index === currentSlide && (
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
        <div className="px-4 py-1.5 bg-black/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          <span className="font-semibold text-xs">
            <span className="text-white">{currentSlide + 1}</span>
            <span className="text-gray-400 mx-1.5">/</span>
            <span className="text-gray-300">{slides.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
