import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  CalendarDays, Phone, Mail, MapPin, CheckCircle, Star, 
  User, GraduationCap, Globe, Building2, Clock, Shield,
  Award, Users, Sparkles, Zap, Heart, TrendingUp, Target,
  FileCheck, Briefcase, DollarSign, ArrowRight, Play, Quote
} from "lucide-react";

// Images
import about from "../assest/about.jpg";
import aboutImg from "../assest/About2.jpg";
import visaImg from "../assest/visa.jpg";
import studyImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import ukBridge from "../assest/UK_Bridge-scaled.jpg";

import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

// Define Zod schema with enhanced validation
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z.string().min(10, "Please enter a valid 10-digit contact number"),
  interestedCountry: z.string().min(1, "Please select a country"),
  interestOfStudy: z.string().min(1, "Please select your interest of study"),
  collegeOfGraduation: z.string().min(3, "College name must be at least 3 characters"),
  graduationDate: z.string().min(1, "Graduation date is required"),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

const countries = [
  "🇺🇸 United States",
  "🇬🇧 United Kingdom",
  "🇨🇦 Canada",
  "🇦🇺 Australia",
  "🇩🇪 Germany",
  "🇫🇷 France",
  "🇳🇱 Netherlands",
  "🇸🇪 Sweden",
  "🇨🇭 Switzerland",
  "🇳🇿 New Zealand",
  "🇸🇬 Singapore",
  "🇮🇪 Ireland",
];

const studyInterests = [
  "💻 Computer Science & IT",
  "⚙️ Engineering",
  "💼 Business Administration",
  "⚕️ Medicine & Healthcare",
  "⚖️ Law",
  "🎨 Arts & Humanities",
  "📊 Social Sciences",
  "🔬 Natural Sciences",
  "📐 Mathematics",
  "🧠 Psychology",
  "🏗️ Architecture",
  "📱 Digital Marketing",
];

const preferredTimes = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 3 PM)",
  "Evening (3 PM - 6 PM)",
  "Night (6 PM - 9 PM)",
];

const FreeConsultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", data);
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Why Book Section */}
      <WhyBookSection />

      {/* Main Form Section */}
      <FormSection 
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
        showSuccess={showSuccess}
        formStep={formStep}
        setFormStep={setFormStep}
      />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* Contact Info */}
      <ContactInfo />

      {/* FAQ Section */}
      <FAQSection />

      {/* Components */}
      <GetStarted />
      <Scrolltotop />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={about}
          alt="Free Consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-white font-semibold">100% Free Consultation</span>
                <Star className="w-5 h-5 text-accent" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Start Your <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Dream Journey</span> Today
              </h1>

              <p className="text-xl text-white/90 mb-8">
                Get expert guidance from our certified counselors and take the first step towards studying at your dream university abroad
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: CheckCircle, text: "No Hidden Costs" },
                  { icon: Clock, text: "30-Min Session" },
                  { icon: Users, text: "Expert Counselors" },
                  { icon: Shield, text: "100% Confidential" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#consultation-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Free Session
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Right - Floating Card */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">15+ Years</h3>
                        <p className="text-white/80">Expert Counseling</p>
                      </div>
                    </div>

                    <div className="h-px bg-white/20" />

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { number: "10,000+", label: "Students Guided" },
                        { number: "99%", label: "Success Rate" },
                        { number: "500+", label: "Universities" },
                        { number: "50+", label: "Countries" }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <h4 className="text-2xl font-bold text-white">{stat.number}</h4>
                          <p className="text-white/70 text-sm">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Trust Indicators
const TrustIndicators = () => {
  const indicators = [
    { icon: Users, number: "10,000+", label: "Happy Students" },
    { icon: Award, number: "99%", label: "Success Rate" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: Star, number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{item.number}</h3>
              <p className="text-white/90 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Book Section
const WhyBookSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "Get customized advice based on your academic profile, career goals, and preferences",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "University Selection",
      description: "Discover the best-fit universities from our network of 500+ partner institutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileCheck,
      title: "Document Assessment",
      description: "Understand what documents you need and how to prepare them for success",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Learn about scholarships, education loans, and budget planning for your journey",
      color: "from-yellow-500 to-orange-500"
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
            Why Book a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Free Consultation?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A 30-minute session that could change your life - completely free with no obligations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {reason.description}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${reason.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Form Section
const FormSection = ({ register, handleSubmit, onSubmit, errors, isSubmitting, showSuccess, formStep, setFormStep }) => {
  return (
    <section id="consultation-form" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image & Info */}
          <motion.div 
            className="lg:sticky lg:top-24"
            data-aos="fade-right"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
              <img 
                src={studyImg}
                alt="Consultation"
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">What You'll Get:</h3>
                  <div className="space-y-3">
                    {[
                      "Personalized university recommendations",
                      "Course & career guidance",
                      "Admission requirements breakdown",
                      "Scholarship opportunities",
                      "Application timeline & strategy"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-white text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Phone, text: "+91 9256-9256-45", label: "Call Us" },
                { icon: Mail, text: "info@sevisedu.com", label: "Email Us" }
              ].map((contact, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{contact.label}</p>
                      <p className="text-sm font-bold text-gray-900">{contact.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            data-aos="fade-left"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Free Session</h2>
              <p className="text-gray-600 mb-8">Fill in your details and our expert will contact you within 24 hours</p>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <p className="text-green-800 font-semibold">Application submitted successfully! We'll contact you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.firstName ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.lastName ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.email ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("contactNumber")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.contactNumber ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber.message}</p>}
                  </div>
                </div>

                {/* Country & Study Interest */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Interested Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("interestedCountry")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.interestedCountry ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    {errors.interestedCountry && <p className="text-red-500 text-xs mt-1">{errors.interestedCountry.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      Interest of Study <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("interestOfStudy")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.interestOfStudy ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                    >
                      <option value="">Select your interest</option>
                      {studyInterests.map((interest) => (
                        <option key={interest} value={interest}>{interest}</option>
                      ))}
                    </select>
                    {errors.interestOfStudy && <p className="text-red-500 text-xs mt-1">{errors.interestOfStudy.message}</p>}
                  </div>
                </div>

                {/* College & Graduation */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      College of Graduation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("collegeOfGraduation")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.collegeOfGraduation ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                      placeholder="Your college name"
                    />
                    {errors.collegeOfGraduation && <p className="text-red-500 text-xs mt-1">{errors.collegeOfGraduation.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <CalendarDays className="w-4 h-4 inline mr-2" />
                      Graduation Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("graduationDate")}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.graduationDate ? "border-red-500" : "border-gray-200 focus:border-primary"
                      }`}
                    />
                    {errors.graduationDate && <p className="text-red-500 text-xs mt-1">{errors.graduationDate.message}</p>}
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Consultation Time
                  </label>
                  <select
                    {...register("preferredTime")}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">Select preferred time</option>
                    {preferredTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Zero Cost",
      description: "Completely free consultation with no hidden charges or obligations"
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description: "Certified professionals with 15+ years of experience"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get callback within 24 hours of booking"
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "Customized guidance based on your unique profile"
    },
    {
      icon: TrendingUp,
      title: "Success Focus",
      description: "Proven strategies with 99% success rate"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Efficient application support and quick turnaround"
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
            What Makes Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Consultation</span> Special?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            More than just advice - we provide a comprehensive roadmap to your study abroad success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Success Stories
const SuccessStories = () => {
  const stories = [
    {
      text: "The free consultation was a game-changer! The counselor understood my profile and suggested universities I never knew about. Now I'm studying at my dream university in the USA!",
      author: "Rahul Sharma",
      university: "Stanford University",
      image: aboutImg,
      rating: 5
    },
    {
      text: "I was confused about which country to choose. The consultation helped me understand all my options clearly. The guidance was personalized and extremely helpful!",
      author: "Priya Patel",
      university: "University of Toronto",
      image: visaImg,
      rating: 5
    },
    {
      text: "Best decision I made was booking this free consultation. They helped me with everything from course selection to scholarship applications. Highly recommended!",
      author: "Amit Kumar",
      university: "University of Melbourne",
      image: ukBridge,
      rating: 5
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Hear from students who started their journey with a free consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              <p className="text-white mb-6 leading-relaxed">"{story.text}"</p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {story.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{story.author}</h4>
                  <p className="text-gray-400 text-sm">{story.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Info
const ContactInfo = () => {
  const contacts = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9256-9256-45",
      subInfo: "Mon-Sat: 9 AM - 7 PM",
      action: "tel:+919256925645"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@sevisedu.com",
      subInfo: "24/7 Support",
      action: "mailto:info@sevisedu.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Hyderabad, Telangana",
      subInfo: "Get Directions",
      action: "#"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.action}
              className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border-2 border-transparent hover:border-primary/20"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
              <p className="text-lg text-primary font-semibold mb-1">{contact.info}</p>
              <p className="text-sm text-gray-500">{contact.subInfo}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is the consultation really free?",
      answer: "Yes! Our consultation is 100% free with absolutely no hidden charges. We believe in providing value first and building long-term relationships with our students."
    },
    {
      question: "How long is the consultation session?",
      answer: "Each consultation session is approximately 30-45 minutes, giving us enough time to understand your profile and provide personalized guidance."
    },
    {
      question: "What should I prepare before the consultation?",
      answer: "Just come with your questions and career goals. It helps to have your academic transcripts, test scores (if any), and a rough idea of your preferred countries and courses."
    },
    {
      question: "Can I book multiple consultations?",
      answer: "Absolutely! You can book follow-up consultations as needed throughout your application process. We're here to support you at every step."
    },
    {
      question: "Will I be pressured to sign up for services?",
      answer: "Never! Our consultation is genuinely free with no obligations. You're free to decide if you want to proceed with our services after understanding what we offer."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our free consultation
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden border-2 border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-6 h-6 text-primary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
