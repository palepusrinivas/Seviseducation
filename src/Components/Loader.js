import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Sparkles, Award, GraduationCap } from 'lucide-react';
import logo from '../assest/sevis logo.png';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Loading text changes
    const textTimers = [
      setTimeout(() => setLoadingText('Loading Resources'), 800),
      setTimeout(() => setLoadingText('Preparing Experience'), 1600),
      setTimeout(() => setLoadingText('Almost Ready'), 2400)
    ];

    return () => {
      clearInterval(progressInterval);
      textTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          {/* Animated Logo Container */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Outer Rotating Ring */}
            <motion.div
              className="absolute inset-0 -m-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30" />
            </motion.div>

            {/* Middle Rotating Ring */}
            <motion.div
              className="absolute inset-0 -m-12"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border-2 border-dotted border-secondary/40" />
            </motion.div>

            {/* Orbiting Icons */}
            {[
              { Icon: Globe, angle: 0, color: 'text-blue-400' },
              { Icon: GraduationCap, angle: 120, color: 'text-red-400' },
              { Icon: Award, angle: 240, color: 'text-yellow-400' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.3
                }}
              >
                <div
                  style={{
                    transform: `rotate(${item.angle}deg) translateX(80px) rotate(-${item.angle}deg)`,
                  }}
                >
                  <motion.div
                    className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 ${item.color}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <item.Icon className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Center Logo */}
            <motion.div
              className="relative w-40 h-40 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl mx-auto"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,0,19,0.3)',
                  '0 0 40px rgba(3,105,178,0.5)',
                  '0 0 20px rgba(255,0,19,0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img 
                src={logo} 
                alt="Sevis Global" 
                className="w-32 h-32 object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Sevis Global
              </span>
            </h1>
            <p className="text-white/70 text-sm md:text-base font-medium">
              Your Gateway to Global Education
            </p>
          </motion.div>

          {/* Loading Text with Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-white/90 font-semibold text-lg"
                >
                  {loadingText}
                </motion.p>
              </AnimatePresence>
              <Sparkles className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            {/* Progress Container */}
            <div className="relative h-2 bg-white/10 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
              {/* Gradient Progress Bar */}
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-50 blur-md"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <div className="flex justify-between items-center mt-3">
              <motion.p
                className="text-white/60 text-xs font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading...
              </motion.p>
              <motion.p 
                className="text-white font-bold text-sm"
                animate={{ scale: progress === 100 ? [1, 1.2, 1] : 1 }}
              >
                {progress}%
              </motion.p>
            </div>
          </motion.div>

          {/* Features Tickers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Globe, text: "50+ Countries" },
              { icon: GraduationCap, text: "500+ Universities" },
              { icon: Award, text: "99% Success" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.2 }}
              >
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-white/80 text-xs font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-24 opacity-10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
              animate={{ 
                d: [
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
