import React from 'react'

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { ArrowRight } from "lucide-react";


import { FaRocket,FaHandHoldingUsd,FaChartLine,  FaMoneyBillWave,  FaBalanceScale, FaLightbulb, FaBuilding, FaBullhorn, FaGraduationCap, FaUniversity, FaFileAlt, FaCalendarCheck 
} from "react-icons/fa";

import { FileText, DollarSign, Users, CreditCard } from "lucide-react"
import { Briefcase, ClipboardList, Calendar, BookOpen } from "lucide-react"; // Importing relevant icons



import england from "../assest/england.avif";
import usa from "../assest/usa.avif";
import germany from "../assest/germany.avif";
import dubai from "../assest/dubai.jpg";

import bgwave from "../assest/bgwave_11-1.png";
import background from "../assest/grouphappy.avif";


import { GiOpenBook } from "react-icons/gi"; // ✅ Correct icon for scholarship



import "../Components/Feature.css";


import Advice from "../assest/advice kart.png";
import Advicekart from "../assest/sevis mockup.png";

 import { Phone, Check, Play } from "lucide-react"
import { NavLink } from 'react-router-dom';
// import { Button } from "@/components/ui/button"
//  import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ArrowUp } from "lucide-react"

import blog1 from "../assest/blog1.jpg";
import blog2 from "../assest/blog2.jpg";
import blog3 from "../assest/blog3.jpg";
import aboutImg from "../assest/about.jpg";
import aboutImg2 from "../assest/About2.jpg";
import visaImg from "../assest/visa.jpg";
import Aos from 'aos';
import About from './About';

// Latest Insights Section
const LatestInsights = () => {
  const insights = [
    {
      title: "Top 10 Universities in USA for Indian Students 2024",
      excerpt: "Discover the best American universities offering excellent programs and scholarships for international students...",
      image: aboutImg,
      category: "Study Abroad",
      readTime: "5 min read"
    },
    {
      title: "Complete Guide to Student Visa Process",
      excerpt: "Step-by-step breakdown of visa application, documentation, and interview preparation for success...",
      image: visaImg,
      category: "Visa Guide",
      readTime: "8 min read"
    },
    {
      title: "Scholarship Opportunities for 2025 Intake",
      excerpt: "Explore fully-funded and partial scholarships available for students planning to study abroad...",
      image: aboutImg2,
      category: "Scholarships",
      readTime: "6 min read"
    },
    {
      title: "Top 5 Common Mistakes in Visa Applications",
      excerpt: "Avoid the most common errors that often lead to visa rejections and learn how to prepare a flawless application...",
      image: visaImg,
      category: "Visa Guide",
      readTime: "7 min read"
    },
    {
      title: "Mock Interviews: Why They Are the Secret to Visa Success",
      excerpt: "Gain confidence and clarity with mock interviews before your real visa session. Practice makes perfect...",
      image: blog2,
      category: "Interview Prep",
      readTime: "6 min read"
    },
    {
      title: "Planning Your Expenses as an International Student",
      excerpt: "Smart budgeting ensures your study abroad journey stays financially stress-free. Plan wisely...",
      image: blog3,
      category: "Financial Planning",
      readTime: "5 min read"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-secondary/3 to-primary/3 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div 
          className="text-center mb-16 relative"
          data-aos="fade-up"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold mb-5">
              Latest <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Insights & Updates</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-5 rounded-full" />
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay informed with expert advice, university updates, and success stories from our global education journey
            </p>
          </div>
        </motion.div>

        {/* Insights Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 border border-gray-100/50 backdrop-blur-sm"
            >
              {/* Animated Gradient Background Glow - Enhanced */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-500 -z-10 rounded-3xl" />
              
              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
              
              {/* Image Container with Modern Effects */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ transformOrigin: 'center center' }}
                />
                
                {/* Multi-layer Gradient Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Shimmer Effect - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                {/* Pulsing Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-primary/10 transition-all duration-500" />
                
                
                {/* Category Badge - Premium Design with Enhanced Hover */}
                <div className="absolute top-5 left-5 px-4 py-2.5 bg-gradient-to-r from-primary via-primary/90 to-secondary backdrop-blur-xl rounded-full text-xs font-extrabold text-white shadow-2xl border border-white/30 group-hover:border-white/50 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <span className="relative z-10">{insight.category}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Badge Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10 rounded-full" />
                </div>
                
                {/* Read Time Badge - Bottom Right */}
                <div className="absolute bottom-5 right-5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-xs font-semibold text-white shadow-lg border border-white/20 flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  {insight.readTime}
                </div>
                
                {/* Corner Decorative Elements - Enhanced */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/30 via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-full" />
              </div>

              {/* Content Section - Premium Styling with Enhanced Hover */}
              <div className="p-7 relative bg-gradient-to-br from-white via-white to-gray-50/50 group-hover:from-gray-50/80 group-hover:via-white group-hover:to-white transition-all duration-500">
                {/* Animated Top Border - Enhanced */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-lg" />
                
                {/* Subtle Background Pattern on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }} />
                
                {/* Metadata Row - Enhanced Design with Hover Effects */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-xs font-semibold text-gray-700 border border-primary/20 group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300">
                    <Calendar className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span>Recent</span>
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent group-hover:from-primary/30 group-hover:via-secondary/30 transition-all duration-300" />
                </div>

                {/* Title - Enhanced Typography */}
                <h3 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {insight.title}
                </h3>

                {/* Excerpt - Better Readability */}
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm md:text-base">
                  {insight.excerpt}
                </p>

                {/* Premium CTA Button - Enhanced with Multiple Effects */}
                <button className="group/btn w-full px-6 py-3.5 bg-gradient-to-r from-primary via-primary to-secondary text-white font-bold rounded-xl shadow-lg group-hover:shadow-2xl flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-500 relative overflow-hidden border border-white/20 group-hover:border-white/40">
                 <NavLink to= '/Blogs' className='no-underline text-white'>
                  <span className="relative z-10 text-sm md:text-base text-white group-hover:font-extrabold transition-all duration-300">Read More</span>
                 </NavLink>
                  <ArrowRight className="w-5 h-5 relative z-10 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                  
                  {/* Animated Shine Effect - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  {/* Button Glow - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-30 blur-2xl transition-opacity duration-500 -z-10" />
                  
                  {/* Pulsing Ring Effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover/btn:border-white/30 transition-all duration-500" />
                </button>
              </div>
              
              
              {/* Decorative Corner Elements - Enhanced */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/8 via-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/8 via-secondary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-full" />
              
              {/* Additional Glow Rings */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

        {/* View All Button - Premium Design */}
        {/* <motion.div 
          className="text-center mt-16"
          data-aos="fade-up"
        > */}
          {/* <motion.button
            className="group relative px-10 py-4 bg-gradient-to-r from-primary via-primary to-secondary text-white font-extrabold rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden border-2 border-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
              View All Articles
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span> */}
            
            {/* Animated Background Gradient */}
            {/* <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            /> */}
            
            {/* Shine Effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}

const Feature = () => {

    const features = [
      {
        icon: (
          <FaGraduationCap className="w-10 h-10 text-blue-600 group-hover:text-red-600 transition-colors duration-300" />
        ),
        title: "Student Visa",
        description:
          "Seamless student visa services for studying abroad, providing expert guidance and support."
      },
      {
        icon: (
          <FaUniversity className="w-10 h-10 text-blue-600 group-hover:text-red-600 transition-colors duration-300" />
        ),
        title: "Choose Right University",
        description:
          "Expert guidance in choosing the right university, tailored to your academic and career goals."
           
      },
      {
        icon: (
          <FaFileAlt className="w-10 h-10 text-blue-600 group-hover:text-red-600 transition-colors duration-300" />
        ),
        title: "Documentation Assistance",
        description:
          "Simplify your documentation process with our efficient and reliable service."
      },
      {
        icon: (
          <FaCalendarCheck className="w-10 h-10 text-blue-600 group-hover:text-red-600 transition-colors duration-300" />
        ),
        title: "Scheduling Visa Interview",
        description:
          "Effortlessly schedule your visa interview with our convenient service."
      },
      {
        icon: (
          <FaMoneyBillWave className="w-10 h-10 text-blue-600 group-hover:text-red-600 transition-colors duration-300" />
        ),
        title: "Plan Your Expenses",
        description:
          "Plan your expenses wisely with our comprehensive service, helping you budget effectively."
      },
      {
        icon: (
          <GiOpenBook className="w-10 h-10 text-blue-600 group-hover:text-red-600 transition-colors duration-300" />
        ),
        title: "Scholarships Assistance",
        description:
          "Unlock opportunities with our scholarship service, providing personalized guidance."
      }
    ];
    
const countries = [
  {
    name: "USA",
    image: [usa],
    description: "Creative agency, we believe in ideas and innovation.",
  },

  {
    name: "England",
    image: [england], // Make sure this path is correct
    description: "Creative agency, we believe in ideas and innovation.",
  },

  {
    name: "Dubai",
    image: [dubai],
    description: "Creative agency, we believe in ideas and innovation.",
  },

  {
    name: "Germany",
    image: [germany],
    description: "Creative agency, we believe in ideas and innovation.",
  },
  
];

  const steps = [ 
  {
    number: 1,
    title: "Choose A Service",
    description: "Select the right study abroad service tailored to your academic goals.",
    icon: <FileText className="w-8 h-8 text-white" />,
  },
  {
    number: 2,
    title: "Request A Meeting",
    description: "Book a consultation with our expert counselors at your convenience.",
    icon: <Users className="w-8 h-8 text-white" />,
  },
  {
    number: 3,
    title: "Documents And Payments",
    description: "We help you organize documents and ensure secure, transparent payments.",
    icon: <DollarSign className="w-8 h-8 text-white" />,
  },
  {
    number: 4,
    title: "Receive Your Visa Now",
    description: "Get your visa approved smoothly with our expert guidance and support.",
    icon: <CreditCard className="w-8 h-8 text-white" />,
  },
]


//   const blogPosts = [
//   {
//     id: 1,
//     date: { day: "26", month: "Nov" },
//     image: blog1,
//     author: "Admin",
//     comments: "03",
//     title: "USA vs Canada: Which is the Better Study Destination?",
//     description:
//       "Discover the key differences between studying in the USA and Canada, from costs to career opportunities...",
//     link: "/USACanada",
//   },
//   {
//     id: 2,
//     date: { day: "11", month: "Dec" },
//     image: blog2,
//     author: "Admin",
//     comments: "03",
//     title: "UK vs Australia: Understanding Student Visa Benefits",
//     description:
//       "Explore how UK’s fast-track degrees compare with Australia’s flexible post-study work options...",
//     link: "/uk-vs-australia",
//   },
//   {
//     id: 3,
//     date: { day: "27", month: "Sep" },
//     image: blog3,
//     author: "Admin",
//     comments: "03",
//     title: "Scholarships Abroad: How to Maximize Your Chances",
//     description:
//       "Learn how to secure scholarships that make studying abroad more affordable...",
//     link: "/scholarships-abroad",
//   },
//   {
//     id: 4,
//     date: { day: "14", month: "Oct" },
//     image: blog3,
//     author: "Admin",
//     comments: "03",
//     title: "Top 5 Common Mistakes in Visa Applications",
//     description:
//       "Avoid the most common errors that often lead to visa rejections...",
//     link: "/visa-mistakes",
//   },
//   {
//     id: 5,
//     date: { day: "20", month: "Nov" },
//     image: blog2,
//     author: "Admin",
//     comments: "03",
//     title: "Mock Interviews: Why They Are the Secret to Visa Success",
//     description:
//       "Gain confidence and clarity with mock interviews before your real visa session...",
//     link: "/mock-interviews",
//   },
//   {
//     id: 6,
//     date: { day: "05", month: "Dec" },
//     image: blog1,
//     author: "Admin",
//     comments: "03",
//     title: "Planning Your Expenses as an International Student",
//     description:
//       "Smart budgeting ensures your study abroad journey stays financially stress-free...",
//     link: "/student-expenses",
//   },
// ];
   

      const [visible, setVisible] = useState(false);

      useEffect(() => {
        const toggleVisibility = () => {
          setVisible(window.scrollY > 300);
        };
    
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

      Aos.init({
        duration :3000
      })
    console.log('Component mounted!');

//     const countries1 = [
//   { 
//     name: "USA", 
//     flag: "🇺🇸",
//     gradient: "from-blue-500 via-red-500 to-blue-500",
//     tagline: "Study in the Land of Opportunities"
//   },
//   { 
//     name: "GERMANY", 
//     flag: "🇩🇪",
//     gradient: "from-yellow-400 via-red-500 to-black",
//     tagline: "Excellence in Engineering & Innovation"
//   },
//   { 
//     name: "AUSTRALIA", 
//     flag: "🇦🇺",
//     gradient: "from-green-500 via-yellow-400 to-blue-500",
//     tagline: "World-Class Education Down Under"
//   },
//   { 
//     name: "DUBAI", 
//     flag: "🇦🇪",
//     gradient: "from-red-600 via-green-500 to-black",
//     tagline: "Future-Ready Global Hub"
//   },
//   { 
//     name: "UK", 
//     flag: "🇬🇧",
//     gradient: "from-blue-700 via-white to-red-600",
//     tagline: "Historic Excellence & Prestige"
//   },
//   { 
//     name: "CANADA", 
//     flag: "🇨🇦",
//     gradient: "from-red-600 via-white to-red-600",
//     tagline: "Quality Education & Great Lifestyle"
//   },
// ];

// // Duplicate for infinite scroll effect
// const allCountries = [...countries1, ...countries1];

   



  return (
    <section> 

      
    {/* Our Core Services */}
{/*       
 <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto"> */}
        {/* Section Header */}
        {/* <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Comprehensive study abroad solutions tailored to your success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"></div>
        </div> */}

        {/* Features Grid */}
        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-transparent hover:border-primary"
            > */}
              {/* Gradient Background on Hover */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
               */}
              {/* Content */}
              {/* <div className="relative z-10"> */}
                {/* Icon Container with Animation */}
                {/* <div className="mb-6 inline-block">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-primary group-hover:to-secondary transition-all duration-300 transform group-hover:rotate-6 group-hover:scale-110 animate-pulse-glow">
                    {feature.icon}
                  </div>
                </div>
                 */}
                {/* Title */}
                {/* <h3 className="text-2xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                 */}
                {/* Description */}
                {/* <p className="text-black leading-relaxed">
                  {feature.description}
                </p> */}

                {/* Learn More Arrow */}
                {/* <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold mr-2">Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div> */}
              
              {/* Corner Accent */}
              {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    */}





{/* 
     <section className='container-fluid p-5'> 
        <div className='row'> 
            <div className='col-12 col-md-6'> 
                <img className='' src={Advice} alt='' />
            </div>
            <div className='col-12 col-md-6'> 
            <div className='justify-center'> 
            <div className="mr-auto place-self-center  " >
            <h1 className="max-w-2xl mb-4 text-4xl font-semilbold tracking-tight leading-tight md:text-5xl xl:text-5xl text-black">
             Expert Advice, Anytime – Your Success <span className="text-[#FAAF40]">Starts Here!  </span>
            </h1>
            <p className="max-w-2xl mb-6  text-black lg:mb-8 md:text-lg lg:text-xl  text-justify">
             Get expert advice anytime, anywhere! From startups to funding, marketing to financial planning, we connect you with top advisors to guide you at every step. Personalized solutions, real-world strategies, and actionable insights – all in one place. Let’s turn your ideas into success with the right advice at the right time!      </p>
            </div>
            </div>
            </div>
        </div>
     </section> */}

   
  {/* Latest Insights Section */}
  <LatestInsights />


     
     <section>
     <div className="max-w-6xl mx-auto px-4 py-16"  data-aos="fade-up" data-aos-duration={1400}>
      <div className="text-center mb-12">
        {/* <h3 className="text-red-600 font-medium uppercase tracking-wide mb-2">WORKING PROCESS</h3> */}
        <h2 className="text-3xl md:text-4xl font-bold ">
          4 Steps for Your Visa  <br className="hidden md:block" />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {steps.map((step, index) => (

          <div key={step.number} className="flex flex-col items-center text-center relative">
            {/* Step number with icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center relative z-10">
                {step.icon}
              </div>
              <div className="absolute -top-5 -right-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
            </div>

            {/* Step content */}
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>

            {/* Connector lines between steps */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-20 left-[60%] w-[80%] border-t-2 border-dashed border-red-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
     </section>
     
     <section
  className="relative bg-cover bg-center bg-fixed min-h-screen"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* Content Box (overlapping into next section) */}
    <div className="relative z-10 flex justify-center px-4 md:px-12 lg:px-24 py-20">
      {/* Background image with dark overlay */}
      <div
        className="relative bg-cover bg-center p-8 md:p-10 max-w-md shadow-xl rounded-lg -mb-40"
        style={{ backgroundImage: `url(${bgwave})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-white/70 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-600 mb-4">
            Expert assistance for a seamless educational journey.
          </h2>

          <p className="text-gray-800 text-sm mb-4">
            We create a personalized experience based on the individual's educational background and assist the individual through picking the right program while we compile and submit all the necessary documentation involved in the application process.
          </p>

          <p className="text-gray-800 text-sm mb-6">
            With our expert coaches we also train the applicant with mock interviews to make them more comfortable and confident with the actual interview process.
          </p>

        <NavLink to="/about" className="no-underline">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 flex items-center text-sm font-medium transition-colors">
            READ MORE <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </NavLink>
        </div>
      </div>
    </div>
</section>





{/*      
<section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto" >
    <div className="lg:flex lg:items-center">
      <div className="w-full space-y-12 lg:w-1/2"> */}
        {/* Updated H1 with Blue Color */}
        
        {/* <div>
          <h1 className="text-3xl md:text-3xl font-bold mb-4">
             <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
               We Assist You with Various Services
            </span>
          </h1>
          <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
          </div>
        </div> */}

        {/* Free Assessment */}
        {/* <div className="md:flex md:items-start md:-mx-4 group"  data-aos="fade-up" data-aos-duration={1200}>
          <span className="inline-block p-3 text-red-600 bg-red-100 rounded-xl md:mx-4 transition duration-300 transform group-hover:scale-125 group-hover:bg-red-500 group-hover:text-white">
            <ClipboardList className="w-8 h-8" />
          </span>
          <div className="mt-4 md:mx-4 md:mt-0">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Free Assessment
            </h1>
            <p className="mt-3 text-black">
              Get a quick evaluation of your profile to explore the best study abroad options.
              Our experts analyze your academic background and guide you toward the right path. </p>
          </div>
        </div> */}

        {/* Career Guidance */}
        {/* <div className="md:flex md:items-start md:-mx-4 group" data-aos="fade-up" data-aos-duration={1200}>
          <span className="inline-block p-3 text-red-600 bg-red-100 rounded-xl md:mx-4 transition duration-300 transform group-hover:scale-125 group-hover:bg-red-500 group-hover:text-white">
            <Briefcase className="w-8 h-8" />
          </span>
          <div className="mt-4 md:mx-4 md:mt-0">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Career Guidance
            </h1>
            <p className="mt-3 text-black">
             Discover career opportunities that align with your education and future goals.
             We help you choose courses and universities that build a strong foundation for success.
            </p>
          </div>
        </div> */}

        {/* Book Appointment */}
        {/* <div className="md:flex md:items-start md:-mx-4 group"data-aos="fade-up" data-aos-duration={1200} >
          <span className="inline-block p-3 text-red-600 bg-red-100 rounded-xl md:mx-4 transition duration-300 transform group-hover:scale-125 group-hover:bg-red-500 group-hover:text-white">
            <Calendar className="w-8 h-8" />
          </span>
          <div className="mt-4 md:mx-4 md:mt-0">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Book an Appointment
            </h1>
            <p className="mt-3 text-black">
              Schedule a one-on-one session with our experienced counselors at your convenience.
              Get personalized advice and answers to all your study abroad queries.  </p>
          </div>
        </div>
      </div> */}

      {/* Image Section */}
      {/* <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
      <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={Advicekart} alt />
      </div>
    </div>

    <hr className="my-12 border-gray-200 dark:border-gray-700" />
  </div>
</section> */}


 {/* <section className="w-full overflow-hidden relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black"> */}
  {/* Animated Particle Background */}
  {/* <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: 'rgba(255, 255, 255, 0.6)',
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, Math.random() * 15 - 7.5, 0],
          scale: [0.8, 1.4, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div> */}

  {/* Section Title */}
  {/* <motion.div 
    className="text-center mb-12 relative z-10"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
      Your Global Education Journey
    </h2>
    <p className="text-gray-400 text-sm md:text-base">
      Explore premium study destinations worldwide
    </p>
    <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
  </motion.div> */}

  {/* Infinite Scrolling Countries */}
  {/* <div className="relative">
    <div className="flex animate-scroll">
      {allCountries.map((country, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0 w-[320px] md:w-[380px] mx-4 md:mx-6 group"
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ duration: 0.3 }}
        > */}
          {/* Glassmorphic Card */}
          {/* <div className="relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"> */}
            {/* Animated Gradient Background */}
            {/* <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div> */}
            
            {/* Shimmer Effect on Hover */}
            {/* <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            
            {/* Glow Effect */}
            {/* <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div> */}
            
            {/* Content */}
            {/* <div className="relative h-full flex flex-col items-center justify-center p-6 text-center"> */}
              {/* Flag with Pulse Animation */}
              {/* <motion.div 
                className="text-6xl md:text-7xl mb-4 filter drop-shadow-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {country.flag}
              </motion.div>
               */}
              {/* Country Name */}
              {/* <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wider uppercase">
                {country.name}
              </h3> */}
              
              {/* Tagline */}
              {/* <p className="text-gray-300 text-xs md:text-sm font-medium opacity-90">
                {country.tagline}
              </p>
               */}
              {/* Decorative Line */}
              {/* <motion.div 
                className={`mt-4 h-1 bg-gradient-to-r ${country.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              />
               */}
              {/* Corner Accent */}
              {/* <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div> */}

            {/* Hover Border Glow */}
            {/* <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300`}></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div> */}

  {/* Gradient Fade Edges */}
  {/* <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
  <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
</section> */}








  {/* <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto"> */}
        {/* Section Title */}
        {/* <div className="text-center mb-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          </div>
          <h2 className="text-4xl font-bold mt-6">
            Read Our Latest News & Blog
          </h2>
        </div> */}

        {/* Blog Posts Grid */}
        {/* <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            > */}
              {/* Image with Zoom Effect on Hover */}
              {/* <div className="relative overflow-hidden group rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-center py-1 px-2 rounded">
                  <div className="text-xl font-bold">{post.date.day}</div>
                  <div className="text-sm">{post.date.month}</div>
                </div>
              </div> */}

              {/* Blog Content */}
              {/* <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-1">•</span>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-red-500 mr-1">•</span>
                    <span>Comments ({post.comments})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p> */}

                {/* Read More Button */}
                {/* <NavLink
                  to={post.link}
                  className="inline-flex items-center text-gray-800 font-medium hover:text-red-600 transition-colors no-underline "
                >
                  Read More
                  <span className="ml-1 bg-red-600 text-white p-1 rounded-full">
                    <ArrowRight size={16} />
                  </span>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

{/*    
     <div className="container p-5 mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Our Advices Services</h2>
      <div className="grid grid-cols-1 md:gb 
      rid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-2xl hover:border-l-4 border-blue-500 text-center">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div> */}


     <div className="wh-api">
                 <div className="wh-fixed whatsapp-pulse">
                   <NavLink to="https://api.whatsapp.com/send/?phone=919948899366&text=Hello+Sudheer+Varma+Tirumalaraju+%0D%0ALike+to+know+more+information+about+Home%2C+https%3A%2F%2Fsudheervarma.com%2F&type=phone_number&app_absent=0 ">
                     <button className="wh-ap-btn" />
                   </NavLink>
                 </div>
               </div>


    </section>
  )
}

export default Feature;