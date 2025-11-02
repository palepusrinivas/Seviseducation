import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import {
  Award,
  Globe,
  Users,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Building,
  Briefcase,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Target,
  Zap,
  Clock,
  ClipboardCheck,
  Send
} from 'lucide-react';
import {
  FaUniversity,
  FaMedal,
  FaGlobeAmericas,
  FaLaptopCode,
  FaFlask,
  FaBriefcase,
  FaPalette,
  FaCalculator,
  FaStethoscope,
  FaBuilding
} from 'react-icons/fa';

// University Logos
import university from "../assest/University_for_the_Creative_Arts_Logo.png";
import cccu from "../assest/CCCU_Logo.png";
import usw from "../assest/USW-Logo.png";
import st from "../assest/st-georges-university-logo.png";
import hult from "../assest/Hult-Logo-1-1.png";
import uk7 from "../assest/uk7.png";
import uk8 from "../assest/uk8.png";
import uk9 from "../assest/uk9.png";

// Images
import ukbig from "../assest/big-ben-houses-parliament-london-uk-min-scaled-1.jpg";
import ukBridge from "../assest/UK_Bridge-scaled.jpg";
import uk1 from "../assest/UK1.jpg";
import uk2 from "../assest/UK2.jpg";
import uk3 from "../assest/UK3.jpg";
import uk4 from "../assest/UK4.jpg";
import uk5 from "../assest/UK5.jpg";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";

import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const Ukuniversities = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Partner Universities Data
  const partnerUniversities = [
    {
      name: "University for the Creative Arts",
      logo: university,
      ranking: "Top 10 Creative Arts UK",
      location: "Farnham, Canterbury, Rochester",
      programs: "Art, Design, Fashion, Architecture",
      students: "6,000+",
      link: "https://www.uca.ac.uk/"
    },
    {
      name: "Canterbury Christ Church University",
      logo: cccu,
      ranking: "Guardian University Guide 2024",
      location: "Canterbury, Kent",
      programs: "Arts, Business, Health, Education",
      students: "15,000+",
      link: "https://www.canterbury.ac.uk/"
    },
    {
      name: "University of South Wales",
      logo: usw,
      ranking: "Times Higher Education Ranked",
      location: "Cardiff, Newport",
      programs: "Business, Engineering, Computing",
      students: "23,000+",
      link: "https://www.southwales.ac.uk/"
    },
    {
      name: "St. George's University",
      logo: st,
      ranking: "Top Medical School",
      location: "London",
      programs: "Medicine, Veterinary, Science",
      students: "4,000+",
      link: "https://www.sgul.ac.uk/"
    },
    {
      name: "Hult International Business School",
      logo: hult,
      ranking: "Top Business School Global",
      location: "London, Cambridge",
      programs: "Business, Finance, Marketing",
      students: "2,500+",
      link: "https://www.hult.edu/"
    },
    {
      name: "Leading UK University",
      logo: uk7,
      ranking: "Russell Group Member",
      location: "Multiple Campuses",
      programs: "All Major Disciplines",
      students: "20,000+",
      link: "#"
    },
    {
      name: "Premier UK Institution",
      logo: uk8,
      ranking: "QS World Ranked",
      location: "England",
      programs: "Sciences, Humanities, Arts",
      students: "18,000+",
      link: "#"
    },
    {
      name: "Distinguished UK University",
      logo: uk9,
      ranking: "Times Ranked University",
      location: "United Kingdom",
      programs: "Research & Innovation Focus",
      students: "12,000+",
      link: "#"
    }
  ];

  // Why UK Universities
  const whyUKUniversities = [
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "World-Class Rankings",
      description: "4 UK universities in global top 10, 18 in top 100",
      stat: "Top 10"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Rigorous quality standards ensuring exceptional education",
      stat: "QAA Certified"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Degrees recognized and valued by employers worldwide",
      stat: "Worldwide"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Community",
      description: "600,000+ international students from 200+ countries",
      stat: "200+ Nations"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Strong industry connections and internship opportunities",
      stat: "90% Employed"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Excellence",
      description: "World-leading research with £7.5bn annual investment",
      stat: "£7.5bn"
    }
  ];

  // Popular Programs
  const popularPrograms = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      category: "Business & Management",
      programs: ["MBA", "Finance", "Marketing", "International Business"],
      universities: "130+ universities"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      category: "Computer Science & IT",
      programs: ["Data Science", "AI & ML", "Cybersecurity", "Software Engineering"],
      universities: "120+ universities"
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      category: "Sciences",
      programs: ["Biotechnology", "Chemistry", "Physics", "Environmental Science"],
      universities: "110+ universities"
    },
    {
      icon: <FaStethoscope className="w-8 h-8" />,
      category: "Medicine & Health",
      programs: ["Medicine", "Nursing", "Pharmacy", "Public Health"],
      universities: "40+ universities"
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      category: "Engineering",
      programs: ["Mechanical", "Civil", "Electrical", "Aerospace"],
      universities: "100+ universities"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      category: "Arts & Design",
      programs: ["Fashion", "Graphic Design", "Fine Arts", "Architecture"],
      universities: "80+ universities"
    }
  ];

  // University Features
  const universityFeatures = [
    {
      title: "World-Class Facilities",
      description: "State-of-the-art libraries, labs, and learning spaces",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Expert Faculty",
      description: "Learn from renowned professors and industry experts",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Research Opportunities",
      description: "Access to cutting-edge research and innovation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Career Services",
      description: "Dedicated support for internships and placements",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Student Support",
      description: "Comprehensive welfare and academic support services",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Global Network",
      description: "Alumni network spanning across 180+ countries",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  // Statistics
  const statistics = [
    {
      number: "160+",
      label: "UK Universities",
      icon: <FaUniversity className="w-8 h-8" />
    },
    {
      number: "4",
      label: "in World's Top 10",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "600K+",
      label: "International Students",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "2-3 Years",
      label: "Post-Study Work",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={ukbig}
          alt="UK Universities"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
                y: [0, -25, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative flex h-full items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm font-semibold">🇬🇧 Premier UK Institutions</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Top UK Universities
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Partner Institutions
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover world-renowned British universities offering exceptional education, cutting-edge research, and outstanding career prospects
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <NavLink to="/Contact">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </NavLink>
              <NavLink to="/Unitedkingdom">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visa Information
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UK Universities Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose UK Universities?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover what makes British universities among the best in the world
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUKUniversities.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -8 }}
              >
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{feature.stat}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities Showcase */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Partner Universities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We partner with prestigious UK universities to help you achieve your academic dreams
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerUniversities.map((uni, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -10 }}
              >
                {/* Logo Section */}
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {uni.name}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{uni.ranking}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{uni.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{uni.students} students</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm font-medium mb-4">
                    {uni.programs}
                  </p>

                  {/* View Details Link */}
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Popular Programs in UK
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore diverse academic programs across various disciplines
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.category}</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Popular Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.programs.map((prog, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Building className="w-4 h-4" />
                  <span>{program.universities}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Features Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What UK Universities Offer
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                British universities provide comprehensive support and world-class facilities to ensure your academic and personal success.
              </p>

              <div className="space-y-4">
                {universityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              data-aos="fade-left"
            >
              <img 
                src={ukBridge} 
                alt="UK University Campus" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Student Life in UK</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold mb-1">95%</p>
                    <p className="text-white/90 text-sm">Student Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">90%</p>
                    <p className="text-white/90 text-sm">Graduate Employment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How to Apply to UK Universities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Simple step-by-step process to secure your place at a top UK institution
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Program",
                description: "Research and select courses that align with your career goals",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Check Requirements",
                description: "Verify academic and English language entry requirements",
                icon: <ClipboardCheck className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Submit Application",
                description: "Apply through UCAS or directly to universities",
                icon: <Send className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Receive Offer & Apply Visa",
                description: "Get your CAS and apply for student visa",
                icon: <Award className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 mt-4">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Experience Campus Life in UK
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Vibrant campus culture, modern facilities, and memorable student experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: uk1, title: "Modern Campus", description: "State-of-the-art facilities" },
              { image: uk2, title: "Student Life", description: "Vibrant community activities" },
              { image: uk3, title: "Research Labs", description: "Cutting-edge laboratories" },
              { image: uk4, title: "Library Resources", description: "Extensive academic resources" },
              { image: uk5, title: "Student Support", description: "Comprehensive guidance" },
              { image: studentImg, title: "Global Community", description: "Diverse international students" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Student Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UK universities provide exceptional support services to ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Academic Support",
                points: ["Personal tutors", "Study skills workshops", "Writing centers", "Peer mentoring"]
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Wellbeing Services",
                points: ["Mental health support", "Counseling services", "Health centers", "24/7 helplines"]
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Career Services",
                points: ["Career counseling", "Job fairs", "Internship programs", "Alumni networking"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 120 + 60 + 'px',
                height: Math.random() * 120 + 60 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your UK University Journey?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Get expert guidance on selecting the right university and course for your future success
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/Contact">
                <motion.button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Consultation
                </motion.button>
              </NavLink>
              <NavLink to="/Unitedkingdom">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Visa Requirements
                </motion.button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Components */}
      <Scrolltotop />
      <GetStarted />
    </section>
  );
};

export default Ukuniversities;
