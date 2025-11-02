import React, { useEffect } from 'react';
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
  Send,
  Lightbulb,
  Rocket,
  Plane,
  Sun,
  Palmtree
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
  FaBuilding,
  FaUserGraduate,
  FaLandmark,
  FaCoins
} from 'react-icons/fa';

// University Logos
import asu1 from "../assest/aus1.svg";
import asu2 from "../assest/asu2.png";
import asu3 from "../assest/asu3.jpg";
import asu4 from "../assest/asu4.png";
import asu5 from "../assest/asu5.png";
import asu6 from "../assest/asu6.png";
import asu7 from "../assest/asu7.png";
import asu8 from "../assest/asu8.png";
import asu9 from "../assest/asu9.jpg";
import asu10 from "../assest/asu10.png";
import asu11 from "../assest/asu11.png";
import asu12 from "../assest/asu12.png";
import asu13 from "../assest/asu13.webp";
import asu14 from "../assest/asu14.png";

// Images
import Australia from "../assest/Australia.jpg";
import Australia2 from "../assest/aus-scaled 1.png";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import aboutImg from "../assest/about.jpg";
import careersImg from "../assest/careers.jpg";
import advantageImg from "../assest/Advantages.jpg";

import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const AustraliaUniversities = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // All university logos
  const universities = [
    asu1, asu2, asu3, asu4, asu5, asu6, asu7, 
    asu8, asu9, asu10, asu11, asu12, asu13, asu14
  ];

  // Why Australia Universities
  const whyAustraliaUniversities = [
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "World-Class Rankings",
      description: "7 Australian universities in global top 100",
      stat: "Top 100"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Education",
      description: "TEQSA ensures highest education standards",
      stat: "TEQSA Certified"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Degrees recognized in 180+ countries worldwide",
      stat: "180+ Countries"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work Opportunities",
      description: "Work 40 hours per fortnight while studying",
      stat: "40 hrs/fortnight"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Quality of Life",
      description: "7 Australian cities in world's most liveable",
      stat: "7 Cities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Student Protection",
      description: "ESOS Act protects international student rights",
      stat: "ESOS Protected"
    }
  ];

  // Popular Programs
  const popularPrograms = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      category: "Business & Management",
      programs: ["MBA", "Accounting", "Marketing", "Finance"],
      universities: "40+ universities",
      topSchools: "Melbourne Business School, UNSW"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      category: "IT & Computer Science",
      programs: ["Data Science", "AI", "Cybersecurity", "Software"],
      universities: "43+ universities",
      topSchools: "ANU, University of Melbourne"
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      category: "Engineering",
      programs: ["Civil", "Mechanical", "Electrical", "Mining"],
      universities: "35+ universities",
      topSchools: "UNSW, Monash, UQ"
    },
    {
      icon: <FaStethoscope className="w-8 h-8" />,
      category: "Health & Medicine",
      programs: ["Medicine", "Nursing", "Pharmacy", "Dentistry"],
      universities: "25+ universities",
      topSchools: "University of Sydney, Monash"
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      category: "Sciences",
      programs: ["Biology", "Chemistry", "Environmental", "Physics"],
      universities: "43+ universities",
      topSchools: "ANU, University of Queensland"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      category: "Arts & Design",
      programs: ["Fine Arts", "Architecture", "Media", "Design"],
      universities: "30+ universities",
      topSchools: "RMIT, UTS, QUT"
    }
  ];

  // University Groups
  const universityGroups = [
    {
      type: "Group of Eight (Go8)",
      description: "Australia's leading research-intensive universities",
      examples: "ANU, Sydney, Melbourne, UNSW, UQ, Monash, UWA, Adelaide",
      icon: <FaLandmark className="w-10 h-10" />,
      count: "8"
    },
    {
      type: "Australian Technology Network",
      description: "Universities focused on practical and industry-relevant education",
      examples: "UTS, RMIT, QUT, Curtin, UniSA",
      icon: <Rocket className="w-10 h-10" />,
      count: "5"
    },
    {
      type: "Regional Universities",
      description: "Excellent education in regional Australian cities",
      examples: "JCU, CQU, SCU, Federation University",
      icon: <MapPin className="w-10 h-10" />,
      count: "15+"
    },
    {
      type: "Specialized Institutions",
      description: "Universities with specific focus areas and strengths",
      examples: "Bond University, Torrens, AIM",
      icon: <Target className="w-10 h-10" />,
      count: "10+"
    }
  ];

  // Statistics
  const statistics = [
    {
      number: "43",
      label: "Universities in Australia",
      icon: <FaUniversity className="w-8 h-8" />
    },
    {
      number: "7",
      label: "in World's Top 100",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "700K+",
      label: "International Students",
      icon: <FaUserGraduate className="w-8 h-8" />
    },
    {
      number: "2-4 Years",
      label: "Post-Study Work Visa",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  // University Features
  const universityFeatures = [
    {
      title: "Practical Learning Approach",
      description: "Focus on hands-on experience and industry collaboration",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Research Excellence",
      description: "World-leading research across all disciplines",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Modern Infrastructure",
      description: "State-of-the-art campuses and facilities",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Industry Partnerships",
      description: "Strong connections with Australian and global companies",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Multicultural Environment",
      description: "Students from 200+ countries creating diverse community",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Support Services",
      description: "Comprehensive support for international students",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  // Application Timeline
  const applicationTimeline = [
    {
      month: "Feb - May",
      title: "Research & Prepare",
      tasks: ["Research universities", "Prepare documents", "Take English tests"],
      icon: <BookOpen className="w-6 h-6" />,
      intake: "Semester 2 (July)"
    },
    {
      month: "Jun - Aug",
      title: "Apply to Universities",
      tasks: ["Submit applications", "Pay application fees", "Track status"],
      icon: <Send className="w-6 h-6" />,
      intake: "July Intake"
    },
    {
      month: "Sep - Nov",
      title: "Receive Offer & CoE",
      tasks: ["Accept offer", "Pay tuition deposit", "Get CoE"],
      icon: <Award className="w-6 h-6" />,
      intake: "Semester 1 (Feb)"
    },
    {
      month: "Dec - Jan",
      title: "Visa & Departure",
      tasks: ["Apply for visa", "Medical checkup", "Prepare to travel"],
      icon: <Plane className="w-6 h-6" />,
      intake: "February Intake"
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={Australia2}
          alt="Australian Universities"
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
              <span className="text-white text-sm font-semibold">🇦🇺 Premier Australian Institutions</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Universities in Australia
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Excellence Down Under
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore 43 world-class Australian universities offering exceptional education, innovative research, and outstanding lifestyle in the world's most liveable cities
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
                  Apply to Australian Universities
                </motion.button>
              </NavLink>
              <NavLink to="/Australiastudentvisa">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Student Visa Guide
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

      {/* Why Australia Universities */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Study in Australian Universities?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover what makes Australia one of the world's top study destinations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyAustraliaUniversities.map((feature, index) => (
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

      {/* University Groups */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Australian University Networks
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding different university groups to find your perfect fit
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universityGroups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary mb-6">
                  {group.icon}
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{group.type}</span>
                  <span className="ml-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    {group.count}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{group.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Members:</strong> {group.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Popular Programs in Australia
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore diverse academic programs at Australia's leading universities
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
                  <p className="text-sm text-gray-500 mb-2">Top Specializations:</p>
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

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Building className="w-4 h-4" />
                    <span>{program.universities}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-4 h-4" />
                    <span>{program.topSchools}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities Grid - Enhanced */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Partner Universities in Australia
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We collaborate with leading Australian universities to help you achieve your academic goals
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* University Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {universities.map((logo, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={(index % 10) * 40}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-28 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`Australian University ${index + 1}`}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                
                {/* Corner Decoration */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div 
            className="mt-12 text-center"
            data-aos="fade-up"
          >
            <p className="text-gray-600 text-lg mb-6">
              <strong>14+ partner universities</strong> including Group of Eight research institutions, 
              Australian Technology Network members, and specialized colleges
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Group of Eight", "ATN Universities", "Regional Excellence", "Specialized Programs", "Research Leaders"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* University Features */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Australian Universities Offer
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Australian universities combine academic excellence with a practical, industry-focused approach to education, ensuring graduates are career-ready.
              </p>

              <div className="space-y-4">
                {universityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
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
                src={Australia} 
                alt="Australia Campus Life" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Student Life in Australia</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold mb-1">98%</p>
                    <p className="text-white/90 text-sm">Student Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">AUD 60K+</p>
                    <p className="text-white/90 text-sm">Average Graduate Salary</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Application Timeline for Australia
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Australia has 2 main intakes - February and July. Plan your application accordingly
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationTimeline.map((phase, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -8 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-sm shadow-lg">
                  {phase.month}
                </div>

                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center text-primary mx-auto mb-6 mt-4">
                  {phase.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{phase.title}</h3>
                <p className="text-center text-sm text-secondary font-semibold mb-4">
                  For {phase.intake}
                </p>
                
                <ul className="space-y-2">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Experience Life in Australia
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Beautiful campuses, vibrant cities, and unforgettable student experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: Australia, title: "Coastal Campuses", description: "Study near world-famous beaches" },
              { image: advantageImg, title: "Modern Facilities", description: "State-of-the-art learning spaces" },
              { image: studentImg, title: "Diverse Community", description: "Students from 200+ countries" },
              { image: aboutImg, title: "Urban Excellence", description: "Study in liveable cities" },
              { image: careersImg, title: "Career Success", description: "Strong graduate outcomes" },
              { image: Australia, title: "Natural Beauty", description: "Stunning Australian landscape" }
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

      {/* Student Support Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Student Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Australian universities provide world-class support services for international students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Academic Support",
                points: ["English language programs", "Academic advisors", "Study skills workshops", "Peer tutoring"]
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Student Wellbeing",
                points: ["OSHC health cover", "Counseling services", "Accommodation help", "24/7 support"]
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Career & Work",
                points: ["Part-time work guidance", "PSW visa assistance", "Internship programs", "Career counseling"]
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
              Ready to Study in Australia?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Get expert guidance on selecting the perfect Australian university and securing your student visa
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/Contact">
                <motion.button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                </motion.button>
              </NavLink>
              <NavLink to="/Australiastudentvisa">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Student Visa Guide
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

export default AustraliaUniversities;
