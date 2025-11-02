import React, { useEffect } from 'react'
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
      <Statistics />

      {/* Success Journey Section */}
      <SuccessJourney />

      {/* Study Destinations - Keep Same */}
      <StudyDestinations />

      {/* Application Process */}
      <ApplicationProcess />

      {/* Expert Guidance Section */}
      <ExpertGuidance />

      {/* Student Success Stories */}
      <Testimonials />

      {/* Value Propositions */}
      <ValuePropositions />

      {/* Global Presence */}
      <GlobalPresence />

      {/* Latest Insights */}
      <LatestInsights />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Scroll to Top & Get Started - Keep Same */}
      <Scrolltotop />
      <GetStrated />
    </div>
  )
}

// Trust Badges Section
const TrustBadges = () => {
  const badges = [
    { icon: Award, number: "15+", label: "Years Experience", color: "from-primary to-red-600" },
    { icon: Users, number: "10,000+", label: "Happy Students", color: "from-secondary to-blue-600" },
    { icon: Globe, number: "50+", label: "Countries Served", color: "from-purple-500 to-pink-500" },
    { icon: Trophy, number: "99%", label: "Visa Success", color: "from-yellow-500 to-orange-500" },
    { icon: Building2, number: "500+", label: "Partner Universities", color: "from-green-500 to-teal-500" },
    { icon: ThumbsUp, number: "100%", label: "Satisfaction Rate", color: "from-indigo-500 to-purple-500" }
  ]

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                {badge.number}
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
      description: "15+ years of experience with certified counselors and visa experts",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Sevis Global?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We don't just help you study abroad—we transform your dreams into reality with dedication, expertise, and care
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
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
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${reason.gradient} opacity-5 rounded-full group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <NavLink to="/about">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  )
}

// Success Journey Section
const SuccessJourney = () => {
  const milestones = [
    { year: "2008", title: "Founded", description: "Started with a vision to make global education accessible", icon: Rocket },
    { year: "2012", title: "1000+ Students", description: "Helped our first thousand students achieve their dreams", icon: Users },
    { year: "2016", title: "International Expansion", description: "Expanded services to 30+ countries worldwide", icon: Globe },
    { year: "2020", title: "Digital Transformation", description: "Launched online counseling and virtual services", icon: Zap },
    { year: "2024", title: "Industry Leader", description: "Recognized as top global education consultant", icon: Trophy }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'linear-gradient(45deg, #FF0013 25%, transparent 25%), linear-gradient(-45deg, #FF0013 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FF0013 75%), linear-gradient(-45deg, transparent 75%, #FF0013 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            15+ years of excellence, innovation, and unwavering commitment to student success
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              {/* Content */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-white shadow-lg z-10" />

              {/* Spacer */}
              <div className="hidden lg:block w-5/12" />
            </motion.div>
          ))}
        </div>
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
      <div className="max-w-7xl mx-auto px-4">
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
                src={aboutImg2} 
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Expert <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Guidance</span> at Every Step
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of certified counselors and visa experts brings 15+ years of experience to help you navigate the complex journey of studying abroad with confidence and ease.
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
              <NavLink to="/Contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Consultation
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </NavLink>
              
              <NavLink to="/about">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet Our Team
                  <Users className="w-5 h-5" />
                </motion.button>
              </NavLink>
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

        {/* Values */}
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
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights & Updates</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with expert advice, university updates, and success stories
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -15, scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10" />
              
              {/* Image with Enhanced Effects */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 filter group-hover:brightness-110"
                />
                {/* Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge with Gradient */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary backdrop-blur-md rounded-full text-xs font-bold text-white shadow-lg border border-white/20">
                  {insight.category}
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content with Enhanced Styling */}
              <div className="p-6 relative bg-gradient-to-br from-white to-gray-50 group-hover:from-gray-50 group-hover:to-white transition-all duration-500">
                {/* Decorative Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {insight.date}
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-full">
                    <BookOpen className="w-3.5 h-3.5 text-secondary" />
                    {insight.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {insight.title}
                </h3>

                <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                  {insight.excerpt}
                </p>

                <button className="group/btn w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Read More</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          data-aos="fade-up"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
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

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          data-aos="zoom-in"
          className="space-y-8"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Study Abroad Dreams?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
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

            <NavLink to="/Contact">
              <motion.button
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
            </NavLink>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
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
  )
}

export default Home
