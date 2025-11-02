import React, { useEffect, useState, useRef } from "react";
import { Globe, SmilePlus, BarChart3 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Counter = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);


  
    const countries1 = [
  { name: "USA", font: "font-extrabold text-5xl tracking-wider uppercase" },
  { name: "GERMANY", font: "font-serif text-4xl italic tracking-wide" },
  { name: "AUSTRALIA", font: "font-mono text-5xl uppercase" },
  { name: "DUBAI", font: "font-sans text-4xl font-semibold" },
  { name: "UK", font: "font-bold text-5xl tracking-tight" },
];

// Duplicate for infinite scroll effect
const allCountries = [...countries1, ...countries1];
      

  return (
   <section>
    <section>
       <div className="w-full  bg-[#0369B2] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl md:text-3xl lg:text-3xl font-bold mb-16 max-w-4xl mx-auto leading-tight"
        >
          With extensive experience in handling visa processes for an extended
          period, we provide expert assistance and guidance.
        </motion.h2>

        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <CounterCard
            icon={<Globe className="w-12 h-12" />}
            endValue={5000}
            suffix="+"
            label="VISA APPROVED"
          />

          <CounterCard
            icon={<SmilePlus className="w-12 h-12" />}
            endValue={100}
            suffix="%"
            label="CLIENT SATISFACTION"
          />

          <CounterCard
            icon={<BarChart3 className="w-12 h-12" />}
            endValue={99}
            suffix="%"
            label="SUCCESS RATE"
          />
        </motion.div>
      </div>
    </div>
    </section>

     <section className="w-full overflow-hidden relative  py-8">
  <div className="flex animate-scroll">
    {allCountries.map((country, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[250px] h-[120px] flex items-center justify-center mx-6"
      >
        <span
          className={`${country.font} text-gray-800 transition-transform duration-300 hover:text-red-600 hover:scale-125`}
        >
          {country.name}
        </span>
      </div>
    ))}
  </div>
</section>
    
   </section>



  );
};

// CounterCard Component
const CounterCard = ({ icon, endValue, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 6000; // **6 seconds for ultra-slow effect**
          const startTime = performance.now();

          const animateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3); // **Smooth easing function**
            const newValue = Math.round(easeOut * endValue);

            setCount(newValue);

            if (progress < 1) {
              requestAnimationFrame(animateCounter);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105"
    >
      {/* Icon with Hover Effect */}
      <motion.div
        className="mb-6 text-white"
        initial={{ scale: 1, rotate: 0 }}
        whileHover={{
          scale: 1.2, // **Enlarge on hover**
          rotate: 10, // **Slight rotation for dynamic effect**
          color: "#FFD700", // **Optional glowing effect**
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {icon}
      </motion.div>

      <div className="text-5xl md:text-6xl font-bold mb-2 flex items-center justify-center">
        <span className="tabular-nums">{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-xl tracking-wider">{label}</div>
    </motion.div>
  );
};

export default Counter;
