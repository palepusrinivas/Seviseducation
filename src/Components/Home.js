import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { 
  Award, Shield, Users, TrendingUp, Globe, Target, 
  CheckCircle, Star, BookOpen, Heart, Zap, ArrowRight,
  Phone, Mail, MapPin, GraduationCap, Building2, FileCheck,
  Rocket, Briefcase, Calendar, DollarSign, Trophy, ThumbsUp
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

// Import existing components
import Hero from './Hero'
import Feature from './Feature'
import Statistics from './Statistics'
import StudyDestinations from './StudyDestinations'
import Testimonials from './Testimonials'
import Scrolltotop from './Scrolltotop'
import GetStrated from './GetStrated'

// Import images
import aboutImg from '../assest/About2.jpg'
import aboutImg2 from '../assest/about.jpg'
import visaImg from '../assest/visa.jpg'
import adviceImg from '../assest/advice kart.png'
import sevisImg from '../assest/sevis mockup.png'

import Advicekart from "../assest/sevis mockup.png";

import blog1 from "../assest/blog1.jpg";
import blog2 from "../assest/blog2.jpg";
import blog3 from "../assest/blog3.jpg";
import globalVideo from "../assest/global video.mp4";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className='App'>
      {/* Hero Section - Keep Same */}
      <Hero />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Why Choose Sevis Section */}
      <WhyChooseSevis />

      {/* Core Services/Features - Keep Same */}
      <Feature />

      {/* Statistics/Counter Section - Keep Same */}
      {/* <Statistics /> */}

      {/* Success Journey Section */}
      <SuccessJourney />

      {/* Study Destinations - Keep Same */}
      <StudyDestinations />

      {/* Application Process */}
      {/* <ApplicationProcess /> */}

      {/* Expert Guidance Section */}
      <ExpertGuidance />

      {/* Student Success Stories */}
      <Testimonials />

      {/* Value Propositions */}
      {/* <ValuePropositions /> */}

      {/* Global Presence */}
      {/* <GlobalPresence /> */}

      {/* Latest Insights */}
      {/* <LatestInsights /> */}

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Scroll to Top & Get Started - Keep Same */}
      <Scrolltotop />
      <GetStrated />
    </div>
  )
}

// CountUp Component
const CountUp = ({ end, suffix = "", duration = 2, decimals = 0, start = 0 }) => {
  const [count, setCount] = useState(start)
  const hasStartedRef = useRef(false)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true
            
            const startTime = Date.now()
            const endTime = startTime + duration * 1000

            const animate = () => {
              const now = Date.now()
              const progress = Math.min((now - startTime) / (duration * 1000), 1)
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentCount = start + (end - start) * easeOutQuart
              
              setCount(currentCount)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [end, duration, start])

  const formatNumber = (num) => {
    if (decimals === 0) {
      return Math.floor(num).toLocaleString()
    }
    return num.toFixed(decimals).toLocaleString()
  }

  return (
    <span ref={countRef}>
      {formatNumber(count)}{suffix}
    </span>
  )
}

// Trust Badges Section
const TrustBadges = () => {
  const badges = [
    { icon: Award, number: 11, suffix: "+", label: "Years Experience", color: "from-primary to-red-600" },
    { icon: Users, number: 10000, suffix: "+", label: "Happy Students", color: "from-secondary to-blue-600" },
    { icon: Globe, number: 50, suffix: "+", label: "Countries Served", color: "from-purple-500 to-pink-500" },
    { icon: Trophy, number: 99, suffix: "%", label: "Visa Success", color: "from-yellow-500 to-orange-500", decimals: 0 },
    { icon: Building2, number: 500, suffix: "+", label: "Partner Universities", color: "from-green-500 to-teal-500" },
    { icon: ThumbsUp, number: 100, suffix: "%", label: "Satisfaction Rate", color: "from-indigo-500 to-purple-500", decimals: 0 }
  ]

  return (
    <section className="relative py-16 overflow-hidden animated-gradient-bg">
      {/* Animated Color Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{
          animation: 'pulse 8s ease-in-out infinite'
        }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{
          animation: 'pulse 10s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{
          animation: 'pulse 12s ease-in-out infinite',
          animationDelay: '4s'
        }} />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leading the way in global education consulting with proven results
          </p>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                <badge.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <h3 className={`text-3xl font-bold bg-gradient-to-br ${badge.color} bg-clip-text text-transparent mb-2`}>
                <CountUp 
                  end={badge.number} 
                  suffix={badge.suffix || ""} 
                  duration={2.5}
                  decimals={badge.decimals !== undefined ? badge.decimals : 0}
                />
              </h3>

              {/* Label */}
              <p className="text-gray-600 text-sm font-semibold">
                {badge.label}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${badge.color} opacity-5 rounded-bl-full transition-all duration-500 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Sevis Section
const WhyChooseSevis = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Transparency",
      description: "No hidden charges, complete clarity in every step of your journey",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "One-on-one counseling tailored to your unique goals and aspirations",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "From university selection to visa approval, we're with you at every step",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "11+ years of experience with certified counselors and visa experts",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick turnaround time with efficient documentation and follow-ups",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Your success is our priority, we care about your dreams",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Sevis Global?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We don't just help you study abroad—we transform your dreams into reality with dedication, expertise, and care
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              style={{ transform: 'translateY(0) translateX(0) scale(1)', willChange: 'auto' }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center relative z-10`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {reason.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${reason.gradient} opacity-5 rounded-full group-hover:opacity-20 transition-opacity duration-700`} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
        >
          {/* <NavLink to="/about">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </NavLink> */}
        </motion.div>
      </div>
    </section>
  )
}

// Success Journey Section
const SuccessJourney = () => {
  const [activeMilestone, setActiveMilestone] = useState(0)

  const milestones = [
    { 
      year: "2015", 
      title: "Founded", 
      description: "Started with a vision to make global education accessible", 
      details: "Established Sevis Global Education with a mission to bridge the gap between ambitious students and world-class universities. Began operations with a dedicated team of 5 counselors.",
      stats: "1 Country • 5 Universities • 50+ Students",
      achievement: "Laid the foundation for transforming dreams into reality",
      icon: Rocket,
      color: "from-red-600 to-blue-600",
      yearColor: "from-red-600 to-blue-600"
    },
    { 
      year: "2018", 
      title: "1000+ Students", 
      description: "Helped our first thousand students achieve their dreams", 
      details: "Reached a significant milestone by successfully placing over 1,000 students in top universities worldwide. Built strong partnerships with leading educational institutions across multiple countries.",
      stats: "10+ Countries • 100+ Universities • 1,000+ Students",
      achievement: "Became a trusted name in international education",
      icon: Users,
      color: "from-blue-600 to-indigo-600",
      yearColor: "from-blue-600 to-indigo-600"
    },
    { 
      year: "2020", 
      title: "International Expansion", 
      description: "Expanded services to USA, Australia, UK, UAE worldwide",
      details: "Major expansion into key study destinations including USA, Australia, UK, Canada, UAE, and India. Established regional offices and enhanced our global network of partner universities.",
      stats: "30+ Countries • 200+ Universities • 3,000+ Students",
      achievement: "Global presence with local expertise",
      icon: Globe,
      color: "from-indigo-600 to-purple-600",
      yearColor: "from-indigo-600 to-purple-600"
    },
    { 
      year: "2022", 
      title: "Digital Transformation", 
      description: "Launched online counseling and virtual services", 
      details: "Embraced technology to provide seamless online counseling, virtual campus tours, and digital documentation services. Enhanced accessibility for students worldwide during challenging times.",
      stats: "24/7 Online Support • Virtual Consultations • Digital Platform",
      achievement: "Innovation meets accessibility",
      icon: Zap,
      color: "from-amber-600 to-orange-600",
      yearColor: "from-amber-600 to-orange-600"
    },
    { 
      year: "2024", 
      title: "Industry Leader", 
      description: "Recognized as top global education consultant", 
      details: "Achieved industry recognition as a leading global education consultant. Celebrated 10,000+ successful student placements with a 99% visa success rate and 100% client satisfaction.",
      stats: "50+ Countries • 500+ Universities • 10,000+ Students",
      achievement: "Setting new benchmarks in education consulting",
      icon: Trophy,
      color: "from-emerald-600 to-teal-600",
      yearColor: "from-emerald-600 to-teal-600"
    }
  ]

  // Auto-rotate through milestones
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [milestones.length])

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            minWidth: '100%',
            minHeight: '100%',
            width: '100%',
            height: '100%'
          }}
        >
          <source src={globalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() > 0.5 ? '255, 0, 19' : Math.random() > 0.5 ? '3, 105, 178' : '255, 209, 102'}, ${0.4 + Math.random() * 0.4})`,
              boxShadow: `0 0 ${Math.random() * 8 + 3}px rgba(${Math.random() > 0.5 ? '255, 0, 19' : '3, 105, 178'}, 0.7)`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [0.5, 1.8, 0.5],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 19, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 19, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(3, 105, 178, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(3, 105, 178, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px',
        }} className="absolute inset-0" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Our <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Success Journey</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            11+ years of excellence, innovation, and unwavering commitment to transforming student dreams into global success stories
          </p>
        </motion.div>
        
        {/* Timeline with Alternating Cards */}
          <div className="relative">
          {/* Center Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 z-10" />
          
          {/* Timeline Dots for Each Milestone */}
          {milestones.map((_, index) => {
            // Calculate vertical position - cards are evenly spaced
            // Each card takes roughly equal space, so position dots at card centers
            const totalItems = milestones.length;
            const positionPercent = ((index + 0.5) / totalItems) * 100;
            
            return (
              <div
                key={`dot-${index}`}
                className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20"
                style={{
                  top: `${positionPercent}%`,
                  marginTop: '-10px'
                }}
              >
                <div 
                  className="w-5 h-5 rounded-full bg-gradient-to-br from-red-600 to-blue-600 border-2 border-white shadow-lg"
                  style={{
                    boxShadow: '0 0 10px rgba(220, 38, 38, 0.5), 0 0 15px rgba(37, 99, 235, 0.4)'
                  }}
                />
              </div>
            );
          })}
              
          {milestones.map((milestone, index) => {
            const isActive = index === activeMilestone
          return (
            <motion.div
              key={index}
                className={`relative flex items-center mb-1 md:mb-2 z-20 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onClick={() => {
                  setActiveMilestone(index)
                }}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
        <motion.div
                    className="group relative cursor-pointer"
                    whileHover={{ y: -2 }}
          animate={{
                      scale: isActive ? 1.02 : 1,
          }}
                    transition={{ duration: 0.3 }}
        >
                    <div className={`relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-5 shadow-lg transition-all duration-500 overflow-hidden border ${
                      isActive 
                        ? `border-gray-300 shadow-xl` 
                        : 'border-gray-200 hover:border-gray-250 hover:shadow-xl'
                    }`}>
                      {/* Active Glow Effect - Subtle Professional */}
                      {isActive && (
                <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-xl blur-md opacity-30"
                  animate={{
                            opacity: [0.25, 0.35, 0.25],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                      )}

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon and Year */}
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-md">
                      <milestone.icon className="w-5 h-5 text-white" />
                    </div>
                          <span className="text-2xl md:text-3xl font-bold">
                            <span className="text-red-600">{milestone.year.substring(0, 2)}</span>
                            <span className="text-blue-600">{milestone.year.substring(2)}</span>
                      </span>
                  </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5">
                          {milestone.title}
                        </h3>
                  
                  {/* Description */}
                        <p className="text-gray-700 text-sm mb-2.5 leading-relaxed line-clamp-2">
                    {milestone.description}
                  </p>
                  
                  {/* Stats Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 rounded-full border border-gray-300">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 ${
                              isActive ? 'animate-pulse' : ''
                            }`}></div>
                            <span className="text-xs font-semibold text-gray-700">
                          {milestone.stats}
                        </span>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                </div>
              </motion.div>
          </div>


                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            )
          })}
        </div>

        {/* Progress Indicator */}
        {/* <motion.div 
          className="flex justify-center items-center gap-2 mt-6"
        >
          {milestones.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeMilestone 
                  ? 'w-8 bg-gradient-to-r from-primary via-accent to-secondary' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => {
                setActiveMilestone(index)
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

// Application Process Section
const ApplicationProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "Book a free session with our expert counselors to discuss your goals",
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Profile Assessment",
      description: "We evaluate your academic profile and suggest best-fit universities",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "University Selection",
      description: "Choose from our curated list of 500+ partner universities worldwide",
      icon: Building2,
      color: "from-green-500 to-teal-500"
    },
    {
      number: "04",
      title: "Application Support",
      description: "Complete application assistance with documentation and SOP guidance",
      icon: Briefcase,
      color: "from-yellow-500 to-orange-500"
    },
    {
      number: "05",
      title: "Visa Processing",
      description: "End-to-end visa support with mock interviews and documentation",
      icon: CheckCircle,
      color: "from-red-500 to-pink-500"
    },
    {
      number: "06",
      title: "Pre-Departure",
      description: "Accommodation, forex, and travel assistance for smooth departure",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A seamless, step-by-step process designed to make your study abroad dream a reality
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden h-full">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                {/* Number Badge */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-4 opacity-20 group-hover:opacity-30 transition-opacity`}>
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow Connector (desktop only) */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-300 group-hover:text-primary transition-colors">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          data-aos="fade-up"
        >
          <NavLink to="/Contact">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  )
}

// Expert Guidance Section
const ExpertGuidance = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images with Premium Card Effects */}
          <motion.div 
            className="relative"
            data-aos="fade-right"
          >
            {/* Main Image with Enhanced Effects */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:border-transparent group transition-all duration-500">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500 -z-10" />
              
              <img 
                src={Advicekart} 
                alt="Expert Counseling" 
                className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />
              
              {/* Enhanced Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Premium Corner Accents */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Enhanced Floating Card with 3D Effect */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-7 shadow-2xl max-w-xs border-4 border-gray-100 hover:border-transparent group/card transition-all duration-500"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Card Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover/card:opacity-30 blur-2xl transition-opacity duration-500 -z-10" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg transform group-hover/card:rotate-12 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">99%</h4>
                  <p className="text-gray-700 text-sm font-semibold">Visa Success Rate</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Industry-leading approval rates with expert guidance</p>
              
              {/* Decorative Dot Pattern */}
              <div className="absolute bottom-2 right-2 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-40" />
                ))}
              </div>
            </motion.div>

            {/* Enhanced Decorative Orbs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-6"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Expert <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Guidance</span> at Every Step
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of certified counselors and visa experts brings 11+ years of experience to help you navigate the complex journey of studying abroad with confidence and ease.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: "Certified & Experienced Counselors", color: "from-green-500 to-teal-500" },
                { icon: Target, text: "Personalized Study Plan & University Matching", color: "from-blue-500 to-cyan-500" },
                { icon: FileCheck, text: "Complete Documentation & SOP Assistance", color: "from-purple-500 to-pink-500" },
                { icon: Shield, text: "Visa Interview Preparation & Mock Sessions", color: "from-yellow-500 to-orange-500" },
                { icon: Globe, text: "Post-Landing Support & Accommodation Help", color: "from-red-500 to-pink-500" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              {/* <NavLink to="/Contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Consultation
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </NavLink> */}
              
              {/* <NavLink to="/about">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet Our Team
                  <Users className="w-5 h-5" />
                </motion.button>
              </NavLink> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Value Propositions Section
const ValuePropositions = () => {
  const values = [
    {
      title: "Affordable Excellence",
      description: "Premium services at competitive prices with flexible payment options and no hidden costs",
      icon: DollarSign,
      image: aboutImg,
      stats: [
        { label: "Service Fee", value: "Competitive" },
        { label: "Success Rate", value: "99%" }
      ]
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance from application to landing, we're always here for you",
      icon: Phone,
      image: visaImg,
      stats: [
        { label: "Response Time", value: "<2 Hours" },
        { label: "Availability", value: "24/7" }
      ]
    }
  ]

  return (
    <section className=" container p-5 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unmatched <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Value & Support</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We go beyond consultation to ensure your complete success and satisfaction
          </p>
        </motion.div>

        Values
        <div className="space-y-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image Side with Premium Effects */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-transparent hover:border-white transition-all duration-500">
                  {/* Outer Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10" />
                  
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-all duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Enhanced Multi-layer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Enhanced Stats Overlay with 3D Effect */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    {value.stats.map((stat, i) => (
                      <motion.div 
                        key={i} 
                        className="flex-1 bg-white/15 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/30 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/25"
                        whileHover={{ y: -5 }}
                      >
                        <p className="text-white/90 text-sm font-semibold mb-2">{stat.label}</p>
                        <p className="text-white text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text">{stat.value}</p>
                        {/* Shine Effect */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-xl" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>

                  <NavLink to="/Contact">
                    <motion.button
                      className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Global Presence Section
const GlobalPresence = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Header */}
          <motion.div
            data-aos="fade-up"
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Global Reach, Local Expertise
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              With offices worldwide and partnerships across continents, we bring international education within your reach
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "50+", label: "Countries" },
              { number: "500+", label: "Universities" },
              { number: "10,000+", label: "Students Placed" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white/90 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div data-aos="fade-up">
            <NavLink to="/Contact">
              <motion.button
                className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5" />
                Explore Global Opportunities
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Latest Insights Section
const LatestInsights = () => {
  // Lock all card positions continuously
  useEffect(() => {
    const lockCardPositions = () => {
      const cards = document.querySelectorAll('.latest-insights-card');
      cards.forEach((card, index) => {
        if (card) {
          card.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
          card.style.setProperty('transition', 'none', 'important');
          card.style.setProperty('animation', 'none', 'important');
          card.style.setProperty('top', '0', 'important');
          card.style.setProperty('bottom', 'auto', 'important');
          card.style.setProperty('margin-top', '0', 'important');
          card.style.setProperty('margin-bottom', '0', 'important');
          card.style.setProperty('align-self', 'start', 'important');
          
          // Specifically target middle card (index 1 in 3-column grid) - EXTRA AGGRESSIVE
          if (index === 1 || index % 3 === 1 || card.classList.contains('middle-card')) {
            card.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
            card.style.setProperty('transition', 'none', 'important');
            card.style.setProperty('transition-property', 'none', 'important');
            card.style.setProperty('transition-duration', '0s', 'important');
            card.style.setProperty('animation', 'none', 'important');
            card.style.setProperty('animation-duration', '0s', 'important');
            card.style.setProperty('top', '0', 'important');
            card.style.setProperty('bottom', 'auto', 'important');
            card.style.setProperty('margin-top', '0', 'important');
            card.style.setProperty('margin-bottom', '0', 'important');
            card.style.setProperty('padding-top', '0', 'important');
            card.style.setProperty('padding-bottom', '0', 'important');
            card.style.setProperty('align-self', 'start', 'important');
            card.style.setProperty('vertical-align', 'top', 'important');
            card.style.setProperty('will-change', 'auto', 'important');
            // Force the card to stay at the same vertical position
            const rect = card.getBoundingClientRect();
            if (rect.top !== 0) {
              card.style.setProperty('position', 'relative', 'important');
            }
          }
        }
      });
      
      // Also lock grid container alignment
      const grid = document.querySelector('.latest-insights-section .grid');
      if (grid) {
        grid.style.setProperty('align-items', 'start', 'important');
      }
    };

    // Lock immediately
    lockCardPositions();
    
    // Lock on every frame using requestAnimationFrame for maximum precision
    let animationFrameId;
    const lockPositions = () => {
      lockCardPositions();
      // Extra check for middle cards
      const middleCards = document.querySelectorAll('.middle-card, .latest-insights-section .grid > *:nth-child(2), .latest-insights-section .grid > *:nth-child(5)');
      middleCards.forEach((card) => {
        if (card) {
          card.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
          card.style.setProperty('transition', 'none', 'important');
          card.style.setProperty('animation', 'none', 'important');
          card.style.setProperty('top', '0', 'important');
          card.style.setProperty('margin-top', '0', 'important');
          card.style.setProperty('margin-bottom', '0', 'important');
          card.style.setProperty('align-self', 'start', 'important');
          card.style.setProperty('vertical-align', 'top', 'important');
        }
      });
      // Also lock all cards
      const allCards = document.querySelectorAll('.latest-insights-card');
      allCards.forEach((card) => {
        if (card) {
          card.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
          card.style.setProperty('top', '0', 'important');
          card.style.setProperty('margin-top', '0', 'important');
        }
      });
      animationFrameId = requestAnimationFrame(lockPositions);
    };
    animationFrameId = requestAnimationFrame(lockPositions);
    
    // Also use interval as backup
    const interval = setInterval(lockCardPositions, 16);
    
    // MutationObserver to prevent any style changes that might cause movement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target;
          if (target.classList.contains('latest-insights-card') || target.classList.contains('middle-card')) {
            target.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
            target.style.setProperty('transition', 'none', 'important');
            target.style.setProperty('top', '0', 'important');
            target.style.setProperty('margin-top', '0', 'important');
          }
        }
      });
    });
    
    // Observe all cards for style changes
    const cards = document.querySelectorAll('.latest-insights-card');
    cards.forEach((card) => {
      observer.observe(card, {
        attributes: true,
        attributeFilter: ['style', 'class'],
        subtree: true
      });
    });
    
    // Also lock on mouse events
    const handleMouseEvents = (e) => {
      const card = e.currentTarget;
      if (card) {
        card.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
        card.style.setProperty('transition', 'none', 'important');
        card.style.setProperty('animation', 'none', 'important');
        card.style.setProperty('top', '0', 'important');
        card.style.setProperty('margin-top', '0', 'important');
        card.style.setProperty('margin-bottom', '0', 'important');
      }
    };
    
    cards.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEvents);
      card.addEventListener('mousemove', handleMouseEvents);
      card.addEventListener('mouseleave', handleMouseEvents);
      card.addEventListener('mouseover', handleMouseEvents);
      card.addEventListener('mouseout', handleMouseEvents);
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearInterval(interval);
      observer.disconnect();
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEvents);
        card.removeEventListener('mousemove', handleMouseEvents);
        card.removeEventListener('mouseleave', handleMouseEvents);
        card.removeEventListener('mouseover', handleMouseEvents);
        card.removeEventListener('mouseout', handleMouseEvents);
      });
    };
  }, []);

  const insights = [
    {
      title: "Top 10 Universities in USA for Indian Students 2024",
      excerpt: "Discover the best American universities offering excellent programs and scholarships for international students...",
      image: aboutImg,
      category: "Study Abroad",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Complete Guide to Student Visa Process",
      excerpt: "Step-by-step breakdown of visa application, documentation, and interview preparation for success...",
      image: visaImg,
      category: "Visa Guide",
      date: "Dec 10, 2024",
      readTime: "8 min read"
    },
    {
      title: "Scholarship Opportunities for 2025 Intake",
      excerpt: "Explore fully-funded and partial scholarships available for students planning to study abroad...",
      image: aboutImg2,
      category: "Scholarships",
      date: "Dec 5, 2024",
      readTime: "6 min read"
    },
     {
      title: "Scholarship Opportunities for 2025 Intake",
      excerpt: "Explore fully-funded and partial scholarships available for students planning to study abroad...",
      image: aboutImg2,
      category: "Scholarships",
      date: "Dec 5, 2024",
      readTime: "6 min read"
    },
  

  ]

  return (
    <section className="latest-insights-section relative py-14 md:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Prevent all card animations and AOS animations with global styles */}
      <style>{`
        /* Disable ALL transitions and animations globally for this section */
        .latest-insights-section * {
          transition: none !important;
          transition-property: none !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          transition-timing-function: none !important;
          animation: none !important;
          animation-name: none !important;
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          animation-fill-mode: none !important;
          animation-iteration-count: 1 !important;
        }
        
        /* Disable AOS animations for this section */
        .latest-insights-section [data-aos],
        .latest-insights-section [data-aos].aos-animate,
        .latest-insights-section [data-aos].aos-init {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
          animation: none !important;
          visibility: visible !important;
        }
        /* Prevent ALL card movement - Ultra aggressive */
        .latest-insights-section article,
        .latest-insights-section article:hover,
        .latest-insights-section article:focus,
        .latest-insights-section article:active,
        .latest-insights-section article:before,
        .latest-insights-section article:after,
        .latest-insights-section article:hover:before,
        .latest-insights-section article:hover:after {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
          will-change: auto !important;
          opacity: 1 !important;
          top: 0 !important;
          bottom: auto !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          position: relative !important;
        }
        .latest-insights-card,
        .latest-insights-card:hover,
        .latest-insights-card:focus,
        .latest-insights-card:active,
        .latest-insights-card:before,
        .latest-insights-card:after,
        .latest-insights-card:hover:before,
        .latest-insights-card:hover:after,
        .latest-insights-card *,
        .latest-insights-card:hover *,
        .latest-insights-card:focus *,
        .latest-insights-card:active * {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
          will-change: auto !important;
          opacity: 1 !important;
          top: 0 !important;
          bottom: auto !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        .latest-insights-card img,
        .latest-insights-card:hover img,
        .latest-insights-card:focus img,
        .latest-insights-card:active img {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
          top: 0 !important;
          margin-top: 0 !important;
        }
        .latest-insights-card button,
        .latest-insights-card:hover button,
        .latest-insights-card:focus button,
        .latest-insights-card:active button {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
          top: 0 !important;
          margin-top: 0 !important;
        }
        /* Prevent any grid layout shifts */
        .latest-insights-section .grid > * {
          transform: translateY(0) !important;
          transition: none !important;
          animation: none !important;
        }
        /* Prevent all hover effects that might cause movement */
        .latest-insights-section article:hover,
        .latest-insights-section .latest-insights-card:hover {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          top: 0 !important;
          bottom: auto !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          position: relative !important;
        }
        /* Disable all transitions and transforms on hover */
        .latest-insights-section *:hover {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
        }
        /* Force no movement - override any external CSS */
        .latest-insights-section article,
        .latest-insights-section article *,
        .latest-insights-section .latest-insights-card,
        .latest-insights-section .latest-insights-card * {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          transition-property: none !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          transition-timing-function: none !important;
          animation: none !important;
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          animation-fill-mode: none !important;
          animation-name: none !important;
          animation-iteration-count: 1 !important;
          top: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          will-change: auto !important;
          transform-origin: center center !important;
        }
        
        /* Disable all hover effects that could cause movement */
        .latest-insights-section article:hover,
        .latest-insights-section article:hover *,
        .latest-insights-section .latest-insights-card:hover,
        .latest-insights-section .latest-insights-card:hover * {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
          top: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        
        /* Disable all focus effects */
        .latest-insights-section article:focus,
        .latest-insights-section article:focus *,
        .latest-insights-section .latest-insights-card:focus,
        .latest-insights-section .latest-insights-card:focus * {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
        }
        
        /* Disable all active effects */
        .latest-insights-section article:active,
        .latest-insights-section article:active *,
        .latest-insights-section .latest-insights-card:active,
        .latest-insights-section .latest-insights-card:active * {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
        }
        /* Prevent any CSS hover effects from Tailwind or other sources */
        .latest-insights-section article:hover,
        .latest-insights-section .latest-insights-card:hover {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          top: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        /* Specifically target middle card (2nd child in 3-column grid) - ULTRA AGGRESSIVE */
        .latest-insights-section .grid > *:nth-child(2),
        .latest-insights-section .grid > *:nth-child(2):hover,
        .latest-insights-section .grid > *:nth-child(2):focus,
        .latest-insights-section .grid > *:nth-child(2):active,
        .latest-insights-section .grid > *:nth-child(5),
        .latest-insights-section .grid > *:nth-child(5):hover,
        .latest-insights-section .grid > *:nth-child(5):focus,
        .latest-insights-section .grid > *:nth-child(5):active,
        .latest-insights-section .middle-card,
        .latest-insights-section .middle-card:hover,
        .latest-insights-section .middle-card:focus,
        .latest-insights-section .middle-card:active {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          transition-property: none !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          animation: none !important;
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          top: 0 !important;
          bottom: auto !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          position: relative !important;
          align-self: start !important;
          will-change: auto !important;
          pointer-events: auto !important;
          vertical-align: top !important;
        }
        .latest-insights-section .middle-card *,
        .latest-insights-section .middle-card:hover *,
        .latest-insights-section .grid > *:nth-child(2) *,
        .latest-insights-section .grid > *:nth-child(2):hover * {
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
        }
        /* Prevent grid alignment issues */
        .latest-insights-section .grid {
          align-items: start !important;
          align-content: start !important;
          display: grid !important;
        }
        .latest-insights-section .grid > * {
          align-self: start !important;
          vertical-align: top !important;
          position: relative !important;
          transform: translateY(0) !important translateX(0) !important scale(1) !important;
          transition: none !important;
          animation: none !important;
          top: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        /* Force all cards to align at the top - prevent any vertical offset */
        .latest-insights-section .grid > article,
        .latest-insights-section .grid > .latest-insights-card {
          align-self: start !important;
          vertical-align: top !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          top: 0 !important;
        }
      `}</style>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Professional Rotating Globe Background - Subtle and Centered */}
      <div className="absolute left-0 right-0 top-1/2 pointer-events-none overflow-hidden flex items-center justify-center -translate-y-1/2 opacity-15">
        {/* Outer Rotating Rings */}
        <motion.div
          className="absolute"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-[600px] h-[600px] rounded-full border border-primary/15 relative">
            <div className="absolute inset-0 rounded-full border border-secondary/15" style={{
              transform: 'scale(0.92)'
            }}></div>
            <div className="absolute inset-0 rounded-full border border-accent/15" style={{
              transform: 'scale(0.85)'
            }}></div>
          </div>
        </motion.div>
        
        {/* Main Rotating Globe */}
        <motion.div
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="relative">
            {/* Glow Layers */}
            <div className="absolute inset-0 blur-3xl opacity-40">
              <Globe className="w-[500px] h-[500px] text-primary/20" strokeWidth={2} />
            </div>
            
            {/* Main Globe */}
            <div className="relative">
              {/* Gradient Overlay Globe */}
              <div className="absolute inset-0 z-0 opacity-30">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/15 via-accent/12 to-secondary/15 blur-2xl"></div>
              </div>
              
              {/* Main Globe Icon */}
              <div className="relative z-10">
                <Globe className="w-[500px] h-[500px] text-white/20 relative" strokeWidth={2.5} />
                <Globe className="w-[500px] h-[500px] text-primary/15 absolute inset-0" strokeWidth={2} style={{ transform: 'scale(0.99)', opacity: 0.5 }} />
              </div>
              
              {/* Animated Highlight */}
              <motion.div
                className="absolute inset-0 z-15 opacity-25"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.08) 50%, transparent 70%)',
                  borderRadius: '50%',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner Core - Static */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-[350px] h-[350px] rounded-full border border-white/6 opacity-20"></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Static Journey Markers - Professional */}
        <div className="absolute">
          <div className="w-[550px] h-[550px] relative">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const radius = 275;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const colors = ['#FF0013', '#0369B2', '#FFD166'];
              const color = colors[i % 3];
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    width: '5px',
                    height: '5px',
                    background: color,
                    boxShadow: `0 0 10px ${color}40`,
                    opacity: 0.3
                  }}
                />
              );
            })}
          </div>
        </div>
        
        {/* Static Glow Effects - Professional */}
        <div className="absolute w-[550px] h-[550px] bg-primary/8 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-secondary/8 rounded-full blur-3xl opacity-15"></div>
      </div>

      {/* Subtle Grid Pattern - Professional */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px',
        }} className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Latest <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Insights & Updates</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Stay informed with expert advice, university updates, and success stories from our global journey
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ 
          alignItems: 'start',
          alignContent: 'start',
          verticalAlign: 'top'
        }}>
          {insights.map((insight, index) => {
            // Check if this is the middle card in a 3-column layout
            const isMiddleCard = (index % 3 === 1);
            return (
            <article
              key={index}
              className={`latest-insights-card ${isMiddleCard ? 'middle-card' : ''} relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20`}
              onMouseDown={(e) => {
                e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                e.currentTarget.style.setProperty('top', '0', 'important');
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                e.currentTarget.style.setProperty('top', '0', 'important');
              }}
              style={{ 
                transform: 'translateY(0) !important translateX(0) !important scale(1) !important',
                willChange: 'auto',
                transition: 'none !important',
                animation: 'none !important',
                transformStyle: 'flat',
                position: 'relative !important',
                top: '0 !important',
                bottom: 'auto !important',
                marginTop: '0 !important',
                marginBottom: '0 !important',
                paddingTop: '0',
                paddingBottom: '0',
                alignSelf: 'start',
                ...(isMiddleCard ? {
                  transform: 'translateY(0) translateX(0) scale(1) !important',
                  top: '0 !important',
                  marginTop: '0 !important',
                  marginBottom: '0 !important',
                  alignSelf: 'start !important',
                  transition: 'none !important',
                  animation: 'none !important'
                } : {})
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                if (isMiddleCard) {
                  // Extra aggressive locking for middle card
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('transition', 'none', 'important');
                  el.style.setProperty('animation', 'none', 'important');
                  el.style.setProperty('top', '0', 'important');
                  el.style.setProperty('bottom', 'auto', 'important');
                  el.style.setProperty('margin-top', '0', 'important');
                  el.style.setProperty('margin-bottom', '0', 'important');
                  el.style.setProperty('padding-top', '0', 'important');
                  el.style.setProperty('padding-bottom', '0', 'important');
                  el.style.setProperty('align-self', 'start', 'important');
                } else {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('transition', 'none', 'important');
                  el.style.setProperty('top', '0', 'important');
                  el.style.setProperty('bottom', 'auto', 'important');
                  el.style.setProperty('margin-top', '0', 'important');
                  el.style.setProperty('margin-bottom', '0', 'important');
                  el.style.setProperty('padding-top', '0', 'important');
                  el.style.setProperty('padding-bottom', '0', 'important');
                }
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                if (isMiddleCard) {
                  // Extra aggressive locking for middle card
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                  el.style.setProperty('margin-top', '0', 'important');
                  el.style.setProperty('margin-bottom', '0', 'important');
                } else {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                  el.style.setProperty('bottom', 'auto', 'important');
                  el.style.setProperty('margin-top', '0', 'important');
                  el.style.setProperty('margin-bottom', '0', 'important');
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (isMiddleCard) {
                  // Extra aggressive locking for middle card
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                  el.style.setProperty('bottom', 'auto', 'important');
                  el.style.setProperty('margin-top', '0', 'important');
                  el.style.setProperty('margin-bottom', '0', 'important');
                } else {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                  el.style.setProperty('bottom', 'auto', 'important');
                  el.style.setProperty('margin-top', '0', 'important');
                  el.style.setProperty('margin-bottom', '0', 'important');
                }
              }}
              onFocus={(e) => {
                const el = e.currentTarget;
                if (isMiddleCard) {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                } else {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                }
              }}
              onBlur={(e) => {
                const el = e.currentTarget;
                if (isMiddleCard) {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                } else {
                  el.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  el.style.setProperty('top', '0', 'important');
                }
              }}
            >
              {/* Image */}
              <div 
                className="relative h-56 overflow-hidden"
                style={{
                  transform: 'translateY(0) !important translateX(0) !important scale(1) !important',
                  transition: 'none !important',
                  top: '0 !important',
                  position: 'relative !important',
                  marginTop: '0 !important',
                  marginBottom: '0 !important'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  e.currentTarget.style.setProperty('transition', 'none', 'important');
                  e.currentTarget.style.setProperty('top', '0', 'important');
                  e.currentTarget.style.setProperty('margin-top', '0', 'important');
                }}
              >
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'translateY(0) !important translateX(0) !important scale(1) !important',
                    transition: 'none !important',
                    willChange: 'auto',
                    animation: 'none !important',
                    transformStyle: 'flat',
                    position: 'relative !important',
                    top: '0 !important',
                    marginTop: '0 !important',
                    marginBottom: '0 !important'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                    e.currentTarget.style.setProperty('transition', 'none', 'important');
                    e.currentTarget.style.setProperty('top', '0', 'important');
                    e.currentTarget.style.setProperty('margin-top', '0', 'important');
                  }}
                />
                {/* Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Category Badge with Gradient */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary backdrop-blur-md rounded-full text-xs font-bold text-white shadow-lg border border-white/20">
                  {insight.category}
                </div>
              </div>

              {/* Content */}
              <div 
                className="p-5 relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
                style={{
                  transform: 'translateY(0) !important translateX(0) !important scale(1) !important',
                  transition: 'none !important',
                  animation: 'none !important',
                  transformStyle: 'flat',
                  position: 'relative !important',
                  top: '0 !important',
                  marginTop: '0 !important',
                  marginBottom: '0 !important',
                  paddingTop: '1.25rem',
                  paddingBottom: '1.25rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                  e.currentTarget.style.setProperty('transition', 'none', 'important');
                  e.currentTarget.style.setProperty('top', '0', 'important');
                  e.currentTarget.style.setProperty('margin-top', '0', 'important');
                  e.currentTarget.style.setProperty('margin-bottom', '0', 'important');
                }}
              >
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-300 mb-3">
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {insight.date}
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <BookOpen className="w-3.5 h-3.5 text-secondary" />
                    {insight.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {insight.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {insight.excerpt}
                </p>

                <button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
                  style={{
                    transform: 'translateY(0) !important translateX(0) !important scale(1) !important',
                    transition: 'none !important',
                    animation: 'none !important',
                    transformStyle: 'flat',
                    position: 'relative !important',
                    top: '0 !important',
                    marginTop: '0 !important',
                    marginBottom: '0 !important'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                    e.currentTarget.style.setProperty('transition', 'none', 'important');
                    e.currentTarget.style.setProperty('top', '0', 'important');
                    e.currentTarget.style.setProperty('margin-top', '0', 'important');
                    e.currentTarget.style.setProperty('margin-bottom', '0', 'important');
                  }}
                  onMouseMove={(e) => {
                    e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                    e.currentTarget.style.setProperty('top', '0', 'important');
                    e.currentTarget.style.setProperty('margin-top', '0', 'important');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
                    e.currentTarget.style.setProperty('top', '0', 'important');
                    e.currentTarget.style.setProperty('margin-top', '0', 'important');
                  }}
                >
                  <span className="relative z-10">Read More</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </button>
              </div>
            </article>
            );
          })}
        </div>

        {/* View All Button */}
        <div 
          className="text-center mt-10"
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold rounded-full shadow-2xl border-2 border-white/20"
            style={{
              transform: 'translateY(0) translateX(0) scale(1) !important',
              transition: 'none !important',
              animation: 'none !important'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
              e.currentTarget.style.setProperty('transition', 'none', 'important');
              e.currentTarget.style.setProperty('animation', 'none', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('transform', 'translateY(0) translateX(0) scale(1)', 'important');
              e.currentTarget.style.setProperty('transition', 'none', 'important');
              e.currentTarget.style.setProperty('animation', 'none', 'important');
            }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          data-aos="zoom-in"
          className="space-y-8"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Ready to Transform Your<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Study Abroad Dreams?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
            Join 10,000+ successful students who trusted Sevis Global to make their international education journey smooth, successful, and unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <NavLink to="/FreeConsultation">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </NavLink>

            {/* <NavLink to="/Contact">
              <motion.button
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-green hover:text-gray-900 transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
            </NavLink> */}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
            {[
              { icon: Shield, text: "100% Secure" },
              { icon: Award, text: "11+ Years Trusted" },
              { icon: Heart, text: "Student First" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <item.icon className="w-8 h-8 text-primary" />
                <p className="text-white/80 font-semibold text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
