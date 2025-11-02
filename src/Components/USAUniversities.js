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
  BarChart,
  Plane
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
  FaChartLine,
  FaGraduationCap,
  FaDollarSign,
  FaUserGraduate,
  FaLandmark
} from 'react-icons/fa';

// Import all USA university logos
import usa1 from "../assest/usa1.png";
import usa2 from "../assest/usa2.png";
import usa3 from "../assest/usa3.png";
import usa4 from "../assest/usa4.png";
import usa5 from "../assest/usa5.png";
import usa6 from "../assest/usa6.webp";
import usa7 from "../assest/usa7.png";
import usa8 from "../assest/usa8.png";
import usa9 from "../assest/usa9.webp";
import usa10 from "../assest/usa10.webp";
import usa11 from "../assest/usa11.webp";
import usa12 from "../assest/usa12.png";
import usa13 from "../assest/usa13.png";
import usa14 from "../assest/usa14.png";
import usa15 from "../assest/usa15.png";
import usa16 from "../assest/usa16.jpeg";
import usa17 from "../assest/usa17.jpg";
import usa18 from "../assest/usa18.png";
import usa19 from "../assest/usa19.png";
import usa20 from "../assest/usa20.png";
import usa21 from "../assest/usa21.png";
import usa22 from "../assest/usa22.png";
import usa23 from "../assest/usa23.png";
import usa24 from "../assest/usa24.png";
import usa25 from "../assest/usa25.png";
import usa26 from "../assest/usa26.png";
import usa27 from "../assest/usa27.png";
import usa28 from "../assest/usa28.png";
import usa29 from "../assest/usa29.png";
import usa30 from "../assest/usa30.png";
import usa31 from "../assest/usa31.png";
import usa32 from "../assest/usa32.png";
import usa33 from "../assest/usa33.png";
import usa34 from "../assest/usa34.png";
import usa35 from "../assest/usa35.png";
import usa36 from "../assest/usa36.png";
import usa37 from "../assest/usa37.png";
import usa38 from "../assest/usa38.png";
import usa39 from "../assest/usa39.png";
import usa40 from "../assest/usa40.png";
import usa41 from "../assest/usa41.png";
import usa42 from "../assest/usa42.jpg";
import usa43 from "../assest/usa43.png";
import usa44 from "../assest/usa44.png";
import usa45 from "../assest/usa45.png";
import usa46 from "../assest/usa46.png";
import usa47 from "../assest/usa47.png";
import usa48 from "../assest/usa48.png";
import usa49 from "../assest/usa49.png";
import usa50 from "../assest/usa50.png";
import usa51 from "../assest/usa51.png";
import usa52 from "../assest/usa52.png";
import USA from "../assest/USA_City-.jpg";
import usBridge from "../assest/us-bridge-scaled.jpg";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import usaCanada from "../assest/usa-canda.jpg";

import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const USAUniversities = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // All university logos
  const universities = [
    usa1, usa2, usa3, usa4, usa5, usa6, usa7, usa8, usa9, usa10,
    usa11, usa12, usa13, usa14, usa15, usa16, usa17, usa18, usa19, usa20,
    usa21, usa22, usa23, usa24, usa25, usa26, usa27, usa28, usa29, usa30,
    usa31, usa32, usa33, usa34, usa35, usa36, usa37, usa38, usa39, usa40,
    usa41, usa42, usa43, usa44, usa45, usa46, usa47, usa48, usa49, usa50,
    usa51, usa52
  ];

  // Why USA Universities
  const whyUSAUniversities = [
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "Top Global Rankings",
      description: "8 USA universities in global top 10, 30+ in top 100",
      stat: "#1 Global"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation & Research",
      description: "Leading in cutting-edge research and technological innovation",
      stat: "$70bn Research"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Degrees from US universities are the most valued worldwide",
      stat: "Most Valued"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Access to Fortune 500 companies and Silicon Valley",
      stat: "Fortune 500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Community",
      description: "Over 1 million international students from 200+ countries",
      stat: "1M+ Students"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Post-Study Work",
      description: "OPT allows 12-36 months work authorization after graduation",
      stat: "36 Months OPT"
    }
  ];

  // Popular Programs
  const popularPrograms = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      category: "Business & MBA",
      programs: ["MBA", "Finance", "Marketing", "Entrepreneurship"],
      universities: "500+ universities",
      topSchools: "Harvard, Stanford, Wharton"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      category: "Computer Science",
      programs: ["AI & ML", "Data Science", "Cybersecurity", "Software Dev"],
      universities: "450+ universities",
      topSchools: "MIT, Carnegie Mellon, Stanford"
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      category: "Engineering",
      programs: ["Mechanical", "Electrical", "Civil", "Aerospace"],
      universities: "400+ universities",
      topSchools: "MIT, Caltech, Berkeley"
    },
    {
      icon: <FaStethoscope className="w-8 h-8" />,
      category: "Medicine & Health",
      programs: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
      universities: "180+ universities",
      topSchools: "Johns Hopkins, Harvard Medical"
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      category: "Sciences",
      programs: ["Biology", "Chemistry", "Physics", "Environmental"],
      universities: "420+ universities",
      topSchools: "Caltech, MIT, Stanford"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      category: "Arts & Humanities",
      programs: ["Fine Arts", "Design", "Film", "Architecture"],
      universities: "300+ universities",
      topSchools: "RISD, Parsons, Yale"
    }
  ];

  // University Types
  const universityTypes = [
    {
      type: "Ivy League",
      description: "Elite institutions known for academic excellence",
      examples: "Harvard, Yale, Princeton, Columbia",
      icon: <FaLandmark className="w-10 h-10" />,
      count: "8"
    },
    {
      type: "Public Research",
      description: "State universities with strong research programs",
      examples: "UC Berkeley, UCLA, University of Michigan",
      icon: <FaUniversity className="w-10 h-10" />,
      count: "200+"
    },
    {
      type: "Private Universities",
      description: "Independent institutions with smaller class sizes",
      examples: "Stanford, MIT, Duke, Northwestern",
      icon: <FaBuilding className="w-10 h-10" />,
      count: "1,700+"
    },
    {
      type: "Liberal Arts Colleges",
      description: "Focus on undergraduate education and critical thinking",
      examples: "Williams, Amherst, Swarthmore",
      icon: <BookOpen className="w-10 h-10" />,
      count: "200+"
    }
  ];

  // Statistics
  const statistics = [
    {
      number: "4,000+",
      label: "Colleges & Universities",
      icon: <FaUniversity className="w-8 h-8" />
    },
    {
      number: "8",
      label: "in World's Top 10",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "1M+",
      label: "International Students",
      icon: <FaUserGraduate className="w-8 h-8" />
    },
    {
      number: "3 Years",
      label: "STEM OPT Extension",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  // University Features
  const universityFeatures = [
    {
      title: "Flexible Education System",
      description: "Choose majors, minors, and electives freely",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Research Facilities",
      description: "Access to world's best labs and technology",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Campus Resources",
      description: "Libraries, sports, clubs, and activities",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Industry Connections",
      description: "Partnerships with leading companies",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "International Support",
      description: "Dedicated services for international students",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Career Services",
      description: "Job placement and networking opportunities",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  // Application Timeline
  const applicationTimeline = [
    {
      month: "Aug - Oct",
      title: "Early Applications",
      tasks: ["Research universities", "Prepare test scores", "Draft essays"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      month: "Nov - Dec",
      title: "Submit Applications",
      tasks: ["Complete applications", "Submit documents", "Track status"],
      icon: <Send className="w-6 h-6" />
    },
    {
      month: "Mar - Apr",
      title: "Decisions Released",
      tasks: ["Review offers", "Compare aid packages", "Make choice"],
      icon: <Award className="w-6 h-6" />
    },
    {
      month: "May - Jul",
      title: "Visa Processing",
      tasks: ["Apply for F1 visa", "Attend interview", "Prepare to depart"],
      icon: <Plane className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
        src={USA}
          alt="USA Universities"
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
              <span className="text-white text-sm font-semibold">🇺🇸 Top American Universities</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Universities in United States
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Home to World's Best
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover over 4,000 colleges and universities offering world-class education, cutting-edge research, and unparalleled career opportunities
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
                  Apply to US Universities
                </motion.button>
              </NavLink>
              <NavLink to="/UnitedStateofAmerica">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  F1 Visa Guide
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

      {/* Why USA Universities */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Study in USA Universities?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover what makes American universities the world's most sought-after institutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUSAUniversities.map((feature, index) => (
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

      {/* University Types Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Types of US Universities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding different types of institutions to find your perfect fit
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universityTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary mb-6">
                  {type.icon}
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{type.type}</span>
                  <span className="ml-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    {type.count}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Examples:</strong> {type.examples}
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
              Popular Programs in USA
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore diverse academic programs at America's finest institutions
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
              Our Partner Universities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We partner with 50+ prestigious American universities across all 50 states
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* University Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {universities.map((logo, index) => (
              <motion.div
          key={index}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={(index % 12) * 30}
                whileHover={{ y: -8 }}
        >
                <div className="relative h-24 flex items-center justify-center">
          <img
            src={logo}
            alt={`University ${index + 1}`}
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
              <strong>50+ partner universities</strong> spanning prestigious Ivy League institutions, 
              top public research universities, and specialized colleges
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Ivy League", "Public Research", "Private Universities", "Liberal Arts", "Tech Schools"].map((tag, index) => (
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
                What Makes US Universities Unique
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                American universities offer unparalleled opportunities for academic growth, research, and career development through their innovative approach to education.
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
                src={usBridge} 
                alt="USA University Campus" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Campus Life in USA</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold mb-1">97%</p>
                    <p className="text-white/90 text-sm">Student Satisfaction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-1">$60K+</p>
                    <p className="text-white/90 text-sm">Average Starting Salary</p>
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
              Application Timeline
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Plan your application journey with this comprehensive timeline
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

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{phase.title}</h3>
                
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
              Experience Campus Life in America
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Vibrant campus culture, state-of-the-art facilities, and diverse student communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: usa17, title: "Modern Campus", description: "World-class facilities and infrastructure" },
              { image: usa42, title: "Research Excellence", description: "Cutting-edge labs and innovation centers" },
              { image: usaCanada, title: "Student Life", description: "Vibrant clubs and activities" },
              { image: studentImg, title: "Diverse Community", description: "Students from 200+ countries" },
              { image: usBridge, title: "Career Resources", description: "Networking and job placement" },
              { image: USA, title: "City Experience", description: "Study in world-leading cities" }
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
              Comprehensive Student Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              US universities provide world-class support services for international students
            </p>
    </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Academic Excellence",
                points: ["Academic advisors", "Tutoring services", "Writing centers", "Study groups"]
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Student Wellbeing",
                points: ["Health insurance", "Counseling services", "Campus safety", "Housing assistance"]
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Career Development",
                points: ["Career counseling", "CPT/OPT guidance", "Internships", "Job fairs"]
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
              Ready to Start Your American Dream?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Get expert guidance on selecting the perfect US university and securing your F1 visa
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
              <NavLink to="/UnitedStateofAmerica">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View F1 Visa Guide
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

export default USAUniversities;
