import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import worldMap from '../assest/background image.png';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 5000, suffix: '+', label: 'Visas Approved', duration: 2000 },
    { number: 100, suffix: '%', label: 'Client Satisfaction', duration: 2000 },
    { number: 99, suffix: '%', label: 'Visa Success Rate', duration: 2000 },
    { number: 15, suffix: '+', label: 'Years Experience', duration: 2000 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ target, suffix, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, target, duration]);

    return (
      <span className="font-bold text-5xl md:text-6xl lg:text-7xl">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-20 overflow-hidden bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${worldMap})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-blue-900/90 animate-gradient-shift" 
           style={{ backgroundSize: '200% 200%' }}>
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Trusted by thousands of students worldwide to achieve their study abroad dreams
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Counter */}
                <div className="text-white mb-4 animate-count-up">
                  <Counter 
                    target={stat.number} 
                    suffix={stat.suffix} 
                    duration={stat.duration} 
                  />
                </div>
                
                {/* Label */}
                <p className="text-white/90 text-lg md:text-xl font-semibold">
                  {stat.label}
                </p>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow-lg">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;

