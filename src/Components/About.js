import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icons
import { 
  Award, Shield, Users, TrendingUp, Globe, Target, 
  CheckCircle, Star, BookOpen, Heart, Zap, ArrowRight,
  Phone, Mail, MapPin, GraduationCap, Building2, FileCheck,
  Briefcase, Calendar, DollarSign, Trophy, ThumbsUp, Clock,
  Sparkles, Rocket, Eye, MessageCircle, Video, Headphones,
  Lock, ChevronRight, Play, Quote, Check
} from 'lucide-react';

// Images
import aboutHero from '../assest/about.jpg';
import aboutImage from '../assest/About2.jpg';
import visaImage from '../assest/visa.jpg';
import studyImage from '../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg';
import ukBridge from '../assest/UK_Bridge-scaled.jpg';
import usBridge from '../assest/us-bridge-scaled.jpg';
import backgroundImg from '../assest/background image.png';

// Import existing components
import Counter from "./Counter";
import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Trust Banner */}
      <TrustBanner />

      {/* Story Section */}
      <StorySection />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <CoreValues />

      {/* Why Choose Sevis */}
      <WhyChooseSection />

      {/* Success Metrics */}
      <SuccessMetrics />

      {/* Enhanced Team Section */}
      <TeamSection 
        hoveredMember={hoveredMember}
        setHoveredMember={setHoveredMember}
      />

      {/* Student Journey */}
      <StudentJourney />

      {/* Services Showcase */}
      <ServicesShowcase activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Testimonials Banner */}
      <TestimonialsBanner />

      {/* Global Network */}
      <GlobalNetwork />

      {/* Technology & Innovation */}
      <TechnologySection />

      {/* Awards & Recognition */}
      <AwardsSection />

      {/* Counter Section */}
      <Counter />

      {/* Final CTA */}
      <FinalCTA />

      {/* Get Started Section */}
      <GetStarted />

      {/* Scroll to Top */}
      <Scrolltotop />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      className="relative h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
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

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-white font-semibold">Trusted by 10,000+ Students Worldwide</span>
            <Star className="w-5 h-5 text-accent" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Dreams</span><br />
          Into Global <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">Success Stories</span>
        </motion.h1>
        
        <motion.p
          className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          15+ years of excellence in making international education accessible, affordable, and achievable for every student
        </motion.p>

        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center gap-2 text-white/80 text-sm md:text-base mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NavLink to="/" className="hover:text-accent transition-colors no-underline text-white/80 hover:text-white">
            Home
          </NavLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-accent font-semibold">About Us</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <NavLink to="/Contact">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </NavLink>

          <motion.button
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            Watch Our Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Trust Banner
const TrustBanner = () => {
  const trustStats = [
    { icon: Trophy, label: "Industry Awards", value: "25+" },
    { icon: Users, label: "Students Placed", value: "10,000+" },
    { icon: Globe, label: "Countries", value: "50+" },
    { icon: Star, label: "Success Rate", value: "99%" }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/90 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Story Section
const StorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <motion.div 
            className="relative"
            data-aos="fade-right"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={aboutImage} 
                alt="Sevis Global Education Story" 
                className="w-full h-[550px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">15+</h4>
                    <p className="text-gray-600 text-sm">Years Excellence</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Trusted by thousands of students worldwide</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />

            {/* Small Stats Cards */}
            <div className="absolute -right-6 top-20 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">99%</p>
                  <p className="text-xs text-gray-500">Visa Success</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-6"
            data-aos="fade-left"
          >
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-bold text-sm mb-4">
                🌟 OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Building <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Educational Bridges</span> Since 2008
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                What started as a dream to make international education accessible has grown into a trusted global education consultancy, helping thousands of students achieve their aspirations of studying abroad.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that every student deserves the opportunity to experience world-class education, regardless of their background. Our commitment to transparency, personalized guidance, and unwavering support has made us the preferred choice for students and parents across India.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: Shield, text: "100% Transparency", color: "from-blue-500 to-cyan-500" },
                { icon: Heart, text: "Student-First Approach", color: "from-red-500 to-pink-500" },
                { icon: Trophy, text: "Award-Winning Team", color: "from-yellow-500 to-orange-500" },
                { icon: Globe, text: "Global Network", color: "from-green-500 to-teal-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <NavLink to="/Contact">
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mission & Vision
const MissionVision = () => {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower students with world-class education opportunities by providing transparent, personalized, and comprehensive study abroad solutions that transform lives and create global citizens.",
      gradient: "from-blue-500 to-cyan-500",
      image: usBridge
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted and preferred global education consultancy, recognized for our commitment to student success, innovation in counseling services, and contribution to international education.",
      gradient: "from-purple-500 to-pink-500",
      image: ukBridge
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Purpose</span> & <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Direction</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Guided by our mission and driven by our vision, we create pathways to global success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              whileHover={{ y: -10 }}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-90 transition-opacity`} />
                
                {/* Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full group-hover:opacity-20 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Core Values
const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Complete transparency in all our processes and communications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make prioritizes student success and satisfaction",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "Committed to delivering the highest quality of service every time",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with students, parents, and universities for success",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously evolving our services with latest technology and practices",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Embracing diversity and fostering international understanding",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we make
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {value.description}
              </p>

              {/* Decorative */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${value.color} opacity-5 rounded-full group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Section
const WhyChooseSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "99% visa success rate with 10,000+ students successfully placed in top universities worldwide",
      stats: "10,000+ Students"
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Team of certified counselors with 15+ years of experience in international education consulting",
      stats: "15+ Years Experience"
    },
    {
      icon: DollarSign,
      title: "Affordable Services",
      description: "Transparent pricing with no hidden costs, flexible payment options, and scholarship assistance",
      stats: "₹50,000+ Saved"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance from application to landing, ensuring you're never alone in your journey",
      stats: "<2 Hours Response"
    },
    {
      icon: Building2,
      title: "500+ Universities",
      description: "Partnerships with top-ranked universities across USA, UK, Canada, Australia, and 46+ other countries",
      stats: "50+ Countries"
    },
    {
      icon: Award,
      title: "End-to-End Service",
      description: "Complete support from counseling to post-landing assistance including accommodation and forex",
      stats: "100% Support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">10,000+ Students</span> Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We don't just help you study abroad—we ensure your success at every step with unmatched expertise and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed relative z-10">
                {benefit.description}
              </p>

              {/* Stats Badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full relative z-10">
                <p className="text-primary font-bold text-sm">{benefit.stats}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary to-secondary opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Success Metrics
const SuccessMetrics = () => {
  const metrics = [
    { number: "99%", label: "Visa Approval Rate", icon: CheckCircle },
    { number: "10,000+", label: "Students Placed", icon: Users },
    { number: "500+", label: "Partner Universities", icon: Building2 },
    { number: "50+", label: "Countries Covered", icon: Globe },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Heart }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-white/90 text-lg">
            Results that speak louder than words
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <metric.icon className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</h3>
              <p className="text-white/90 text-sm font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = ({ hoveredMember, setHoveredMember }) => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & CEO",
      bio: "15+ years in international education",
      image: aboutImage,
      expertise: ["Visa Consulting", "University Partnerships", "Strategic Planning"]
    },
    {
      name: "Priya Sharma",
      position: "Chief Immigration Officer",
      bio: "Certified immigration expert",
      image: studyImage,
      expertise: ["Visa Processing", "Documentation", "Interview Prep"]
    },
    {
      name: "Amit Patel",
      position: "Senior Counselor",
      bio: "1000+ successful placements",
      image: visaImage,
      expertise: ["Student Counseling", "Course Selection", "Application Support"]
    },
    {
      name: "Sarah Johnson",
      position: "USA Program Director",
      bio: "Ivy League specialist",
      image: aboutHero,
      expertise: ["US Universities", "Scholarship Guidance", "Career Counseling"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to transforming your study abroad dreams into reality
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Bio Badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: hoveredMember === index ? 1 : 0, scale: hoveredMember === index ? 1 : 0 }}
                  >
                    <p className="text-white text-xs font-semibold">{member.bio}</p>
                  </motion.div>

                  {/* Expertise Tags */}
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        className="absolute bottom-20 left-4 right-4 space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.expertise.map((skill, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-block mr-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <p className="text-white text-xs font-medium">{skill}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Contact Icons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <motion.a 
                      href="mailto:info@sevisedu.com"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white hover:text-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="tel:+919256925645"
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white hover:text-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Phone className="w-4 h-4" />
                    </motion.a>
                    <motion.button
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white hover:text-primary transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Info Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 text-white">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-accent font-medium text-sm">{member.position}</p>
                </div>
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
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Book a Consultation with Our Experts
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

// Student Journey (Continued in next part due to length...)

// Continuing the About.js file...

// Student Journey
const StudentJourney = () => {
  const journey = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Connect with our expert counselors to discuss your study abroad goals and aspirations",
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Profile Assessment",
      description: "Comprehensive evaluation of your academic profile, interests, and career objectives",
      icon: FileCheck,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "University Selection",
      description: "Personalized shortlist of universities matching your profile and preferences",
      icon: Building2,
      color: "from-green-500 to-teal-500"
    },
    {
      step: "04",
      title: "Application Support",
      description: "End-to-end application assistance including SOP, LOR, and documentation",
      icon: Briefcase,
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: "05",
      title: "Visa Processing",
      description: "Complete visa guidance with mock interviews and documentation support",
      icon: CheckCircle,
      color: "from-red-500 to-pink-500"
    },
    {
      step: "06",
      title: "Pre-Departure",
      description: "Accommodation, forex, travel assistance, and orientation for smooth landing",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success Journey</span> with Sevis
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A seamless, step-by-step process designed to make your study abroad dream a smooth reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center opacity-20">
                  <span className="text-4xl font-bold text-gray-600">{item.step}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Large Step Number */}
                <div className="text-7xl font-bold text-gray-100 mb-4 leading-none">{item.step}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>

                {/* Arrow Connector (Desktop) */}
                {index < journey.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-300 group-hover:text-primary transition-colors z-20">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Showcase
const ServicesShowcase = ({ activeTab, setActiveTab }) => {
  const services = [
    {
      title: "Counseling Services",
      icon: Users,
      features: [
        "One-on-one personalized counseling",
        "Career path guidance",
        "Course selection assistance",
        "University shortlisting",
        "Aptitude assessment"
      ]
    },
    {
      title: "Application Support",
      icon: FileCheck,
      features: [
        "SOP & LOR writing support",
        "Complete documentation",
        "Application review",
        "Deadline management",
        "Application tracking"
      ]
    },
    {
      title: "Visa Assistance",
      icon: Shield,
      features: [
        "Visa documentation guidance",
        "Mock interview sessions",
        "DS-160/Visa form filling",
        "Appointment scheduling",
        "Post-visa support"
      ]
    },
    {
      title: "Financial Guidance",
      icon: DollarSign,
      features: [
        "Education loan assistance",
        "Scholarship guidance",
        "Financial planning",
        "Forex assistance",
        "Budget planning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need for a successful study abroad journey
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="w-5 h-5" />
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Icon & Title */}
              <div>
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  {React.createElement(services[activeTab].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{services[activeTab].title}</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Professional support to ensure every aspect of your application is perfect
                </p>
                <NavLink to="/Contact">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.button>
                </NavLink>
              </div>

              {/* Right - Features */}
              <div className="space-y-4">
                {services[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Testimonials Banner
const TestimonialsBanner = () => {
  const testimonials = [
    {
      text: "Sevis Global made my dream of studying at Harvard a reality. Their counselors were supportive throughout!",
      author: "Rahul Verma",
      university: "Harvard University, USA",
      rating: 5
    },
    {
      text: "From visa processing to landing in Australia, every step was smooth and hassle-free. Highly recommended!",
      author: "Priya Singh",
      university: "University of Melbourne, Australia",
      rating: 5
    },
    {
      text: "The scholarship guidance helped me save lakhs! Thank you Sevis for making education affordable.",
      author: "Amit Patel",
      university: "University of Toronto, Canada",
      rating: 5
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <Quote className="w-16 h-16 text-accent mx-auto mb-8 opacity-50" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
              "{testimonials[current].text}"
            </p>

            <div>
              <h4 className="text-xl font-bold text-white mb-1">{testimonials[current].author}</h4>
              <p className="text-gray-400">{testimonials[current].university}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? 'w-8 bg-accent' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Global Network
const GlobalNetwork = () => {
  const regions = [
    { name: "North America", countries: 2, universities: 150, icon: "🇺🇸" },
    { name: "Europe", countries: 15, universities: 120, icon: "🇬🇧" },
    { name: "Australia & NZ", countries: 2, universities: 80, icon: "🇦🇺" },
    { name: "Asia", countries: 20, universities: 100, icon: "🇸🇬" },
    { name: "Middle East", countries: 8, universities: 30, icon: "🇦🇪" },
    { name: "Africa", countries: 3, universities: 20, icon: "🇿🇦" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global Network</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partnerships with 500+ universities across 50+ countries worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border-2 border-transparent hover:border-primary/20"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {region.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h3>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{region.countries} Countries</p>
                <p className="text-sm font-bold text-primary">{region.universities}+ Universities</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          data-aos="fade-up"
        >
          <NavLink to="/Contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-5 h-5" />
              Explore Global Opportunities
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

// Technology Section
const TechnologySection = () => {
  const features = [
    {
      icon: Video,
      title: "Virtual Counseling",
      description: "Connect with counselors from anywhere via HD video calls"
    },
    {
      icon: Headphones,
      title: "24/7 Chat Support",
      description: "Instant assistance through our AI-powered chat system"
    },
    {
      icon: Lock,
      title: "Secure Portal",
      description: "Track your application status in real-time on secure portal"
    },
    {
      icon: Rocket,
      title: "Fast Processing",
      description: "Automated workflows for quicker application processing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div data-aos="fade-right">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-bold text-sm mb-4">
              🚀 INNOVATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology-Driven <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We leverage the latest technology to make your study abroad journey seamless, transparent, and efficient.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            className="relative"
            data-aos="fade-left"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={studyImage}
                alt="Technology Innovation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              {/* Floating Tech Badge */}
              <motion.div
                className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-gray-900">Online Now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Awards Section
const AwardsSection = () => {
  const awards = [
    { year: "2024", title: "Best Education Consultancy", org: "Education Times" },
    { year: "2023", title: "Excellence in Student Support", org: "Global Education Awards" },
    { year: "2022", title: "Top Study Abroad Consultant", org: "India Today" },
    { year: "2021", title: "Outstanding Service Award", org: "Study Abroad Foundation" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Honored for our commitment to excellence and student success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <Trophy className="w-16 h-16 mx-auto mb-4 text-accent transform group-hover:scale-110 group-hover:rotate-12 transition-all" />
              <h3 className="text-3xl font-bold text-primary mb-2">{award.year}</h3>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h4>
              <p className="text-gray-600 text-sm">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your<br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Study Abroad Dreams?
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Join 10,000+ successful students who trusted Sevis Global to make their international education dreams come true
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/FreeConsultation">
              <motion.button
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </NavLink>

            <NavLink to="/Contact">
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
            </NavLink>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-16 border-t border-white/10 mt-16">
            {[
              { icon: Shield, text: "100% Secure" },
              { icon: Award, text: "15+ Years Trusted" },
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
  );
};

export default About;
