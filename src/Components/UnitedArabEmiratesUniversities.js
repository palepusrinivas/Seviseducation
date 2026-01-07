import React from 'react';
import { motion } from 'framer-motion';
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
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  ClipboardCheck,
  Send,
  Target,
  Zap,
  AlertCircle,
  ExternalLink,
  Plane,
  Heart
} from 'lucide-react';
import {
  FaUniversity,
  FaMedal,
  FaGlobeAmericas,
  FaBriefcase,
  FaLaptopCode,
  FaFlask,
  FaStethoscope,
  FaPalette,
  FaCalculator,
  FaUserGraduate
} from 'react-icons/fa';

// Images
import dubai from "../assest/UAE.avif";

// University Logos
import murdochLogo from "../assest/Murdochuniversity.png";
import birminghamLogo from "../assest/University of Birmingham.jpeg";
import middlesexLogo from "../assest/Middlesex University Dubai.png";
import wollongongLogo from "../assest/University of Wollongong.png";
import europeLogo from "../assest/University of Europe.png";
import dmuLogo from "../assest/De Montfort University.png";

import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const UnitedArabEmiratesUniversities = () => {
  // All university logos
  const universities = [
    murdochLogo,
    birminghamLogo,
    middlesexLogo,
    wollongongLogo,
    europeLogo,
    dmuLogo
  ];

  // Detailed University Data
  const universityDetails = [
    {
      id: 1,
      name: "Murdoch University Dubai",
      logo: murdochLogo,
      location: "Dubai Knowledge Park",
      recognition: "Australian university, strong in Media, Communication, Psychology, IT",
      transferable: "Transferable to main campus but GS required",
      programs: {
        ug: ["BA Comm", "BSc Cyber Sec", "BBA", "BSc Psychology"],
        pg: ["MBA", "MA Education"]
      },
      eligibility: {
        ug: "65% in XII (best 4)",
        pg: "Bachelor's 55%"
      },
      english: {
        ielts: "IELTS 6.0",
        pte: "PTE 50+",
        waiver: "IELTS Waiver - 70 marks in any state board within 5 years (Not Punjab)"
      },
      gap: {
        ug: "5 yrs",
        pg: "15 yrs with work experience"
      },
      duration: {
        ug: "3 yrs",
        pg: "1-2 yrs"
      },
      scholarships: "Up to 40% merit scholarships",
      fees: {
        ug: "AED 60-65,000/yr",
        pg: "AED 75-90,000/yr"
      },
      color: "from-primary to-secondary"
    },
    {
      id: 2,
      name: "University of Birmingham Dubai",
      logo: birminghamLogo,
      location: "Dubai International Academic City (DIAC)",
      recognition: "UK Russell Group: Top 100 worldwide",
      programs: {
        ug: ["BSc Business Mgmt", "BEng Engg", "BSc CS", "BSc Psych"],
        pg: ["MSc Intl Business", "MSc AI", "MA Education", "MBA"]
      },
      eligibility: {
        ug: "75% in grade XII with grade X Math at 80% or Grade XII Maths at 70%",
        pg: "Bachelor's 60%"
      },
      english: {
        ielts: "IELTS 6.5 (no band <6.0)",
        pte: "PTE, TOEFL",
        waiver: "CBSE/ICSE-75 & Other State boards - 80 marks in english"
      },
      gap: {
        ug: "2 yrs",
        pg: "Case to Case basis assessed"
      },
      duration: {
        ug: "3 yrs",
        pg: "1 yr"
      },
      scholarships: "Up to 40% merit",
      fees: {
        ug: "AED 110-130,000/yr",
        pg: "AED 110-130,000/yr"
      },
      color: "from-secondary to-primary"
    },
    {
      id: 3,
      name: "Middlesex University Dubai",
      logo: middlesexLogo,
      location: "Dubai Knowledge Park",
      recognition: "First UK branch campus in Dubai (2005), KHDA & QAA accredited",
      programs: {
        ug: ["BBA", "BSc IT", "LL.B Law", "BA Media", "BSc Psychology"],
        pg: ["MBA", "MSc Data Science", "MSc Intl Business"]
      },
      eligibility: {
        ug: "65% in XII",
        pg: "Bachelor's 55%"
      },
      english: {
        ielts: "IELTS 6.0-6.5",
        pte: "PTE",
        waiver: "IELTS Waiver - 65+ english marks in any state board"
      },
      gap: {
        ug: "3 yrs",
        pg: "15 yrs with work experience"
      },
      duration: {
        ug: "3 yrs",
        pg: "1-1.5 yrs"
      },
      scholarships: "Up to 25-30% merit + early bird (FCFS) max 10k",
      fees: {
        ug: "AED 55-65,000/yr",
        pg: "AED 65-75,000/yr"
      },
      color: "from-accent to-primary"
    },
    {
      id: 4,
      name: "University of Wollongong in Dubai (UOWD)",
      logo: wollongongLogo,
      location: "Dubai Knowledge Park",
      recognition: "Australian university; Top 1% worldwide QS: AACSB accredited",
      programs: {
        ug: ["BBA", "BSc CS", "BEng Engg", "BSc Finance"],
        pg: ["MBA", "MSc Cyber Security", "MSc Supply Chain"]
      },
      eligibility: {
        ug: "65%+ in XII",
        pg: "Bachelor's 50%"
      },
      english: {
        ielts: "IELTS 6.0-6.5",
        pte: "PTE",
        waiver: "MOI acceptable (Only if student graduated in last 2 years from University)"
      },
      gap: {
        ug: "3 yrs",
        pg: "15 yrs with work exp."
      },
      duration: {
        ug: "3-4 yrs",
        pg: "1.5-2 yrs"
      },
      scholarships: "10-25% early bird (FCFS)",
      fees: {
        ug: "AED 55-65,000/yr",
        pg: "AED 50-60,000/yr"
      },
      color: "from-primary to-accent"
    },
    {
      id: 5,
      name: "University of Europe for Applied Sciences (UE)",
      logo: europeLogo,
      location: "Dubai World Trade Center (DWTC) Dubai",
      recognition: "German-origin; strong in Business, Digital Tech, Design, APS Required for VISA (Mandatory)",
      transferable: "Transferable to Main campus",
      programs: {
        ug: ["BSc Digital Business", "BSc UX/UI", "BBA"],
        pg: ["MSc Data Science", "MSc Business Intelligence", "MBA"]
      },
      eligibility: {
        ug: "50% in XII",
        pg: "Bachelor's 45%+"
      },
      english: {
        ielts: "IELTS 5.5-6.0",
        pte: "PTE 56-59",
        waiver: "DET 100-105, PASSWORD (Internal Test) 1st attempt free"
      },
      gap: {
        ug: "5 yrs",
        pg: "15-20 yrs with work exp."
      },
      duration: {
        ug: "3 yrs",
        pg: "1.5-2yrs (MBA 1 yr exp). With three year degree - 2 yrs, 4 yrs degree - 1.5 yrs"
      },
      scholarships: "Available",
      fees: {
        ug: "AED 60-70,000/yr",
        pg: "AED 60-70,000/yr"
      },
      color: "from-secondary to-accent"
    },
    {
      id: 6,
      name: "De Montfort University (DMU) Dubai",
      logo: dmuLogo,
      location: "Dubai Internet City (DIC)",
      recognition: "UK-based, TEF Gold, strong in Business, Design, Computing",
      transferable: "UG program is transferable to Main campus",
      programs: {
        ug: ["BA Business Mgmt", "BSc Computing", "BA Accounting & Finance"],
        pg: ["MBA Global", "MSc Cyber Security", "MSc Project Mgmt", "MSc Data Analytics"]
      },
      eligibility: {
        ug: "60%+ in XII (Best 4 subjects)",
        pg: "Bachelor's 50%"
      },
      english: {
        ielts: "Not Applicable for India region",
        pte: "Not Applicable for India region",
        waiver: "Not Applicable for India region"
      },
      gap: {
        ug: "3 years (Other case to case basis)",
        pg: "Up to 20 yrs with work proof"
      },
      duration: {
        ug: "3 yrs",
        pg: "1 yr"
      },
      scholarships: "Up to 30% merit-based along with Early Payment discount of upto 10k AED. (FCFS)",
      fees: {
        ug: "AED 60-70,000/yr",
        pg: "AED 80-90,000/yr"
      },
      color: "from-accent to-secondary"
    }
  ];

  // Why UAE Universities
  const whyUAEUniversities = [
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "International Recognition",
      description: "Degrees from Australian, UK, and European universities recognized globally",
      stat: "Global Recognition"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Generous Scholarships",
      description: "Up to 40% merit-based scholarships and early bird discounts available",
      stat: "Up to 40%"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Transfer Opportunities",
      description: "Option to transfer to main campuses in Australia, UK, and Europe",
      stat: "Transferable"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Education",
      description: "Competitive fees compared to studying in home countries",
      stat: "AED 50-130K"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Modern",
      description: "Dubai offers world-class infrastructure and a safe environment",
      stat: "Top Safety"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Access to Dubai's thriving job market and international companies",
      stat: "Global Hub"
    }
  ];

  // Popular Programs
  const popularPrograms = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      category: "Business & Management",
      programs: ["MBA", "BBA", "International Business", "Finance"],
      universities: "6 universities"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      category: "IT & Computer Science",
      programs: ["Data Science", "Cyber Security", "AI", "Software Engineering"],
      universities: "5 universities"
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      category: "Engineering",
      programs: ["Mechanical", "Electrical", "Civil", "Aerospace"],
      universities: "4 universities"
    },
    {
      icon: <FaStethoscope className="w-8 h-8" />,
      category: "Health & Psychology",
      programs: ["Psychology", "Public Health", "Nursing", "Medicine"],
      universities: "3 universities"
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      category: "Media & Design",
      programs: ["Media Studies", "UX/UI Design", "Digital Business", "Communication"],
      universities: "4 universities"
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      category: "Law & Education",
      programs: ["LL.B Law", "MA Education", "Legal Studies", "Teaching"],
      universities: "2 universities"
    }
  ];

  // Statistics
  const statistics = [
    {
      number: "6",
      label: "Partner Universities",
      icon: <FaUniversity className="w-8 h-8" />
    },
    {
      number: "100+",
      label: "Programs Available",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      number: "40%",
      label: "Max Scholarships",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "Global",
      label: "Degree Recognition",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  // Application Timeline
  const applicationTimeline = [
    {
      month: "Jan - Mar",
      title: "Research & Prepare",
      tasks: ["Research universities", "Prepare documents", "Take English tests"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      month: "Apr - Jun",
      title: "Submit Applications",
      tasks: ["Complete applications", "Pay fees", "Track status"],
      icon: <Send className="w-6 h-6" />
    },
    {
      month: "Jul - Sep",
      title: "Receive Offer & CoE",
      tasks: ["Accept offer", "Pay deposit", "Get CoE"],
      icon: <Award className="w-6 h-6" />
    },
    {
      month: "Oct - Dec",
      title: "Visa & Departure",
      tasks: ["Apply for visa", "Medical checkup", "Prepare to travel"],
      icon: <Plane className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={dubai}
          alt="UAE Universities"
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
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Universities in United Arab Emirates
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                World-Class Education in Dubai
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover prestigious international universities in Dubai offering globally recognized degrees from Australian, UK, and European institutions
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <NavLink to="/Contact">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply to UAE Universities
                </motion.button>
              </NavLink> */}
              {/* <NavLink to="/UnitedArabEmiratesstudentvisa">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Student Visa Guide
                </motion.button>
              </NavLink> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in UAE Universities */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Study in UAE Universities?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover what makes UAE universities an exceptional choice for international students
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUAEUniversities.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {feature.icon}
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{feature.stat}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities Grid */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <style>{`
          .uae-partner-universities-card,
          .uae-partner-universities-card *,
          .uae-partner-universities-card:hover,
          .uae-partner-universities-card:hover * {
            transform: translateY(0) !important;
            transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
            animation: none !important;
            top: auto !important;
            margin-top: 0 !important;
          }
          .uae-partner-universities-card img {
            transition: transform 0.3s ease !important;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Partner Universities in UAE
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We collaborate with leading international universities in Dubai to help you achieve your academic goals
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* University Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {universities.map((logo, index) => (
              <div
                key={index}
                className="uae-partner-universities-card group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100"
                style={{ transform: 'translateY(0) !important' }}
              >
                <div className="relative h-28 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={`UAE University ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                    style={{ transform: 'scale(1) !important' }}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                
                {/* Corner Decoration */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              <strong>6 partner universities</strong> including Australian, UK, and European institutions offering 
              globally recognized degrees with transfer options to main campuses
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Australian Universities", "UK Universities", "European Institutions", "Global Recognition", "Transfer Options"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <style>{`
          .uae-popular-programs-card,
          .uae-popular-programs-card *,
          .uae-popular-programs-card:hover,
          .uae-popular-programs-card:hover * {
            transform: translateY(0) !important;
            transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
            animation: none !important;
            top: auto !important;
            margin-top: 0 !important;
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Programs in UAE
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore diverse academic programs at UAE's leading international universities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPrograms.map((program, index) => (
              <div
                key={index}
                className="uae-popular-programs-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group"
                style={{ transform: 'translateY(0) !important' }}
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

                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Building className="w-4 h-4" />
                  <span>{program.universities}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed University Information */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Detailed University Information
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive details about each partner university including programs, eligibility, fees, and scholarships
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-12">
            {universityDetails.map((university, index) => (
              <motion.div
                key={university.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${university.color} p-8 md:p-10 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">University #{university.id}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{university.name}</h2>
                      <div className="flex items-center gap-2 text-white/95 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{university.location}</span>
                      </div>
                      <p className="text-white/95 text-sm md:text-base leading-relaxed mb-4">{university.recognition}</p>
                      {university.transferable && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/30">
                          <ArrowRight className="w-4 h-4" />
                          <span className="text-sm font-medium">{university.transferable}</span>
                        </div>
                      )}
                    </div>
                    <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/50 overflow-hidden">
                      <img
                        src={university.logo}
                        alt={university.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-gray-50/50 to-white">
                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Programs */}
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
                          <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          <span>Programs Offered</span>
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase">Undergraduate</h4>
                            <div className="flex flex-wrap gap-2">
                              {university.programs.ug.map((program, idx) => (
                                <span key={idx} className="text-xs bg-primary/5 text-gray-700 px-3 py-1 rounded-full">
                                  {program}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200">
                            <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase">Postgraduate</h4>
                            <div className="flex flex-wrap gap-2">
                              {university.programs.pg.map((program, idx) => (
                                <span key={idx} className="text-xs bg-secondary/5 text-gray-700 px-3 py-1 rounded-full">
                                  {program}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Eligibility & English */}
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
                          <div className="w-9 h-9 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                            <ClipboardCheck className="w-4 h-4 text-white" />
                          </div>
                          <span>Requirements</span>
                        </h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-l-4 border-primary">
                            <p className="text-xs font-bold text-primary mb-1 uppercase">Eligibility</p>
                            <p className="text-sm text-gray-700">UG: {university.eligibility.ug}</p>
                            <p className="text-sm text-gray-700">PG: {university.eligibility.pg}</p>
                          </div>
                          {university.english.ielts !== "Not Applicable for India region" ? (
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                              <p className="text-xs font-bold text-blue-900 mb-1 uppercase">English</p>
                              <p className="text-sm text-gray-800">{university.english.ielts}</p>
                              {university.english.waiver && (
                                <p className="text-xs text-gray-600 mt-2">{university.english.waiver}</p>
                              )}
                            </div>
                          ) : (
                            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                              <p className="text-sm font-bold text-gray-900">Not Required for Indian Students</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Scholarships & Fees */}
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 p-6 border-b border-orange-100">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                              <Award className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 mb-2">Scholarships</h4>
                              <p className="text-sm text-gray-800 font-semibold">{university.scholarships}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                              <DollarSign className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-900">Annual Fees</h4>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 rounded-xl border-2 border-red-200/60">
                              <p className="text-xs font-bold text-gray-700 mb-1 uppercase">Undergraduate</p>
                              <p className="text-base font-bold text-blue-600">{university.fees.ug}</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-xl border-2 border-blue-200/60">
                              <p className="text-xs font-bold text-gray-700 mb-1 uppercase">Postgraduate</p>
                              <p className="text-base font-bold text-blue-600">{university.fees.pg}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-4 h-4 text-primary" />
                            <h4 className="text-xs font-bold text-gray-900 uppercase">Gap Accepted</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">UG</p>
                              <p className="text-sm font-bold text-gray-900">{university.gap.ug}</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">PG</p>
                              <p className="text-sm font-bold text-gray-900">{university.gap.pg}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-secondary" />
                            <h4 className="text-xs font-bold text-gray-900 uppercase">Duration</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">UG</p>
                              <p className="text-sm font-bold text-gray-900">{university.duration.ug}</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-lg">
                              <p className="text-xs text-gray-600 mb-1">PG</p>
                              <p className="text-sm font-bold text-gray-900">{university.duration.pg}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Application Timeline for UAE
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Plan your application journey with this comprehensive timeline
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationTimeline.map((phase, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              International Student Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UAE universities provide comprehensive support services for international students
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
                points: ["Health insurance", "Counseling services", "Accommodation help", "24/7 support"]
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Career & Work",
                points: ["Part-time work guidance", "Visa assistance", "Internship programs", "Career counseling"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 120 + 60 + 'px',
                height: Math.random() * 120 + 60 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Study in UAE?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Get expert guidance on selecting the perfect UAE university and securing your student visa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/Contact">
              <button
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
              >
                Schedule Free Consultation
              </button>
            </NavLink>
            <NavLink to="/UnitedArabEmiratesstudentvisa">
              <button
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10"
              >
                View Student Visa Guide
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Bottom Components */}
      <Scrolltotop />
      <GetStarted />
    </section>
  );
};

export default UnitedArabEmiratesUniversities;
