import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FileText, 
  Send, 
  CheckCircle, 
  BookOpen, 
  GraduationCap, 
  Award,
  Globe,
  Users,
  Camera,
  Calendar,
  MapPin,
  DollarSign,
  Briefcase,
  Heart,
  Plane,
  Shield,
  TrendingUp,
  Clock,
  Home,
  ClipboardCheck,
  Building,
  Zap,
  Target
} from "lucide-react";
import {
  FaPassport,
  FaUniversity,
  FaFileAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaCheckCircle,
  FaClipboardList,
  FaStar,
  FaGlobe,
  FaHandshake,
  FaPoundSign
} from "react-icons/fa";

// Images
import uk1 from "../assest/UK1.jpg";
import uk2 from "../assest/UK2.jpg";
import uk3 from "../assest/UK3.jpg";
import uk4 from "../assest/UK4.jpg";
import uk5 from "../assest/UK5.jpg";
import ukbig from "../assest/big-ben-houses-parliament-london-uk-min-scaled-1.jpg";
import ukBridge from "../assest/UK_Bridge-scaled.jpg";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import visaImg from "../assest/visa.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const Unitedkingdom = () => {
  const [activeCategory, setActiveCategory] = useState("OVERVIEW");

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Why UK Benefits
  const ukBenefits = [
    {
      icon: <FaUniversity className="w-8 h-8" />,
      title: "Historic Universities",
      description: "Home to Oxford, Cambridge, and other world-renowned institutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Shorter Course Duration",
      description: "3-year undergraduate and 1-year postgraduate programs"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Post-Study Work Visa",
      description: "Graduate Route allows 2 years (3 for PhD) to work after studies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Recognition",
      description: "UK qualifications are recognized and valued worldwide"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Cultural Heritage",
      description: "Rich history, museums, arts, and multicultural society"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Access to top employers and global networking"
    }
  ];

  // Eligibility Criteria
  const eligibilityCriteria = [
    "You have received an offer of a place on a course from a licensed student sponsor",
    "You have sufficient funds to support yourself and cover your course expenses",
    "You possess the ability to speak, read, write, and understand English",
    "If you are 16 or 17 years old, you have obtained consent from your parents"
  ];

  // Course Options
  const courseOptions = [
    {
      level: "Below Degree Level",
      rqf: "RQF Level 3, 4, or 5",
      requirement: "Minimum 15 hours of organized daytime study per week",
      duration: "Full-time course"
    },
    {
      level: "Degree Level",
      rqf: "RQF Level 6, 7, or 8",
      requirement: "Full-time study leading to degree qualification",
      duration: "3-4 years undergraduate, 1-2 years postgraduate"
    },
    {
      level: "Higher Education (Overseas)",
      rqf: "RQF Level 6, 7, or 8",
      requirement: "Part of longer overseas course delivered in UK",
      duration: "As per course structure"
    }
  ];

  // Required Documents
  const requiredDocuments = [
    {
      icon: <FaPassport className="w-6 h-6" />,
      title: "Valid Passport",
      description: "Current passport or valid travel documentation with blank pages"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "CAS Reference Number",
      description: "Confirmation of Acceptance for Studies from your course provider"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Documents",
      description: "Certificates and transcripts from previous educational qualifications"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "English Language Test",
      description: "IELTS, TOEFL, or PTE scores proving English proficiency"
    },
    {
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      title: "Financial Evidence",
      description: "Proof of sufficient funds for tuition and living costs"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photographs",
      description: "Passport-sized color photographs as per UK visa specifications"
    }
  ];

  // Additional Documents
  const additionalDocuments = [
    {
      category: "Financial Proof",
      items: [
        "Bank statements for last 28 days (must show required amount)",
        "Official financial sponsorship letter (if sponsored)",
        "Student loan letter (if applicable)",
        "Parents' bank statements and consent letter (if using parental funds)"
      ]
    },
    {
      category: "Academic Proof",
      items: [
        "ATAS certificate (if required for your course and nationality)",
        "Academic Technology Approval Scheme clearance",
        "Degree certificates and transcripts (notarized translations if not in English)",
        "Professional qualifications (if applicable)"
      ]
    },
    {
      category: "For Minors (Under 18)",
      items: [
        "Proof of parental or legal guardian consent",
        "Birth certificate showing relationship to parent/guardian",
        "Letter of consent from both parents",
        "Details of care arrangements in the UK"
      ]
    },
    {
      category: "Medical & Background",
      items: [
        "TB test certificate (from approved testing facility)",
        "Medical examination results (if required)",
        "Police clearance certificate (for certain countries)",
        "Previous visa history (if applicable)"
      ]
    }
  ];

  // Financial Requirements
  const financialRequirements = [
    {
      category: "Course Fees",
      amount: "Full amount for 1 year",
      description: "As stated on your CAS",
      icon: <FaPoundSign className="w-6 h-6" />
    },
    {
      category: "London Living Costs",
      amount: "£1,334 per month",
      description: "Up to 9 months (£12,006 total)",
      icon: <Home className="w-6 h-6" />
    },
    {
      category: "Outside London",
      amount: "£1,023 per month",
      description: "Up to 9 months (£9,207 total)",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      category: "Funds Availability",
      amount: "28 consecutive days",
      description: "Must be held before application",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  // English Proficiency Options
  const englishProficiency = [
    {
      test: "IELTS Academic",
      requirement: "CEFR Level B2 (Overall 5.5-6.5)",
      provider: "British Council, IDP",
      validity: "2 years"
    },
    {
      test: "TOEFL iBT",
      requirement: "CEFR Level B2 (Overall 72-94)",
      provider: "ETS",
      validity: "2 years"
    },
    {
      test: "PTE Academic",
      requirement: "CEFR Level B2 (Overall 51-59)",
      provider: "Pearson",
      validity: "2 years"
    },
    {
      test: "Cambridge English",
      requirement: "FCE, CAE, or CPE",
      provider: "Cambridge Assessment",
      validity: "No expiry"
    }
  ];

  // Application Process Steps
  const applicationSteps = [
    {
      number: "01",
      title: "Choose Your Course",
      description: "Research and select the right course and university",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Check Requirements",
      description: "Verify academic and English language requirements",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Apply to University",
      description: "Submit application through UCAS or directly",
      icon: <Send className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Receive Offer",
      description: "Get conditional or unconditional offer letter",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "05",
      title: "Meet Conditions",
      description: "Fulfill any conditions like English test or grades",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "06",
      title: "Receive CAS",
      description: "Get Confirmation of Acceptance for Studies",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "07",
      title: "Prepare Documents",
      description: "Gather all required visa documents",
      icon: <FaClipboardList className="w-8 h-8" />
    },
    {
      number: "08",
      title: "Apply for Visa",
      description: "Submit online visa application and pay fee",
      icon: <FaPassport className="w-8 h-8" />
    },
    {
      number: "09",
      title: "Biometrics & Interview",
      description: "Attend visa application centre appointment",
      icon: <Camera className="w-8 h-8" />
    },
    {
      number: "10",
      title: "Receive Visa Decision",
      description: "Get your visa and prepare for UK journey",
      icon: <Plane className="w-8 h-8" />
    }
  ];

  const categories = ["OVERVIEW", "YOUR COURSE", "REQUIRED DOCUMENTS", "FUNDS REQUIREMENT", "ENGLISH PROFICIENCY", "DOCUMENTS"];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.img
        src={ukbig}
          alt="Study in United Kingdom"
        className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
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
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative flex h-full items-center justify-center px-4">
          <div className="text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Study in the United Kingdom
              <br />
              <span className="text-primary">Student Visa Guide</span>
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Gateway to World-Class British Education
            </motion.p>
      </div>
    </div>
   </section>

      {/* Tab Navigation */}
      <div className="bg-gray-50 py-6 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
              <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
                activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white border-primary shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
              }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              {category}
              </motion.button>
          ))}
          </div>
        </div>
        </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {activeCategory === "OVERVIEW" && (
        <motion.div
              key="overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Overview Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <motion.div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    UK Student Visa Overview
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    If you are 16 years of age or older and meet the following criteria, you are eligible to apply for a Student visa to study in the UK:
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {eligibilityCriteria.map((criteria, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="text-white w-4 h-4" />
                        </div>
                        <p className="text-gray-700">{criteria}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <FaStar className="text-primary flex-shrink-0" />
                        <span><strong>160+</strong> UK universities and institutions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaStar className="text-primary flex-shrink-0" />
                        <span><strong>4</strong> UK universities in world's top 10</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaStar className="text-primary flex-shrink-0" />
                        <span><strong>600,000+</strong> international students annually</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  data-aos="fade-left"
                >
                  <img 
                    src={uk1} 
                    alt="UK Student Life" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Historic Excellence</h3>
                    <p className="text-white/90">Study at world-renowned British institutions</p>
                  </div>
                </motion.div>
              </div>

              {/* Benefits Grid */}
              <div className="mb-16">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Study in the UK?
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Discover the advantages of pursuing your education in the United Kingdom
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ukBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      whileHover={{ y: -8 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 10-Step Process */}
              <div>
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Your UK Study Journey - 10 Steps
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Complete step-by-step guide to study in the United Kingdom
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {applicationSteps.map((step, index) => (
                    <motion.div
              key={index}
                      className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 30}
                      whileHover={{ y: -8 }}
                    >
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.number}
                      </div>

                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {step.icon}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeCategory === "YOUR COURSE" && (
            <motion.div
              key="your-course"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Course Requirements & CAS
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    To apply for a visa, you must have an unconditional offer from a licensed student sponsor for a course. Your education provider will provide you with a reference number known as a Confirmation of Acceptance for Studies (CAS) once they have offered you a place on the course.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">📌 Important:</h3>
                    <p className="text-gray-700">
                      You will need your CAS reference number to apply for your Student visa. This is issued only after you accept your offer and meet any conditions.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  data-aos="fade-left"
                >
                  <img 
                    src={uk2} 
                    alt="UK University" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Course Options</h3>
                    <p className="text-white/90">Choose from diverse programs across all levels</p>
                  </div>
                </motion.div>
              </div>

              {/* Course Options */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
                  Course Types You Can Pursue
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {courseOptions.map((course, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold mb-4 text-xl">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{course.level}</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Level:</strong> {course.rqf}</p>
                        <p><strong>Requirement:</strong> {course.requirement}</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center" data-aos="fade-up">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Help Choosing Your Course?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our expert counselors can help you select the right course and university based on your academic background and career goals.
                </p>
                <motion.button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Course Guidance
                </motion.button>
              </div>
            </motion.div>
          )}

          {activeCategory === "REQUIRED DOCUMENTS" && (
            <motion.div
              key="required-docs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Documents */}
              <div className="mb-16">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Essential Documents for UK Student Visa
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    Complete checklist of documents required for your UK student visa application
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {requiredDocuments.map((doc, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        {doc.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Documents by Category */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
                  Additional Documentation Requirements
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {additionalDocuments.map((category, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                  </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Financial Requirements */}
              <div className="mb-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Financial Requirements
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {financialRequirements.map((req, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 text-center"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary mx-auto mb-3">
                        {req.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{req.category}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{req.amount}</p>
                      <p className="text-gray-600 text-sm">{req.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CAS Information */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12" data-aos="fade-up">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What is a CAS Number?
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The Confirmation of Acceptance for Studies (CAS) is a unique reference number that your university or college will issue once you have:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Accepted your unconditional offer",
                        "Paid your deposit or first installment",
                        "Met all the conditions of your offer",
                        "Provided required documentation"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
            </div>
                          <p className="text-gray-700">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={visaImg} 
                      alt="CAS Document" 
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </motion.div>
                </div>
              </div>

              {/* Document Assistance CTA */}
              <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center" data-aos="fade-up">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Expert Document Preparation Assistance
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our experienced team will help you prepare, verify, and organize all required documents for a successful visa application.
                </p>
                <motion.button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Document Checklist
                </motion.button>
              </div>
            </motion.div>
          )}

          {activeCategory === "FUNDS REQUIREMENT" && (
            <motion.div
              key="funds-req"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div 
                  className="order-2 md:order-1"
                  data-aos="fade-right"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Financial Requirements for UK Student Visa
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    It is necessary to have sufficient funds to cover the costs of your course and living expenses in the UK. The amount of money you need will vary depending on your individual circumstances and where you will be studying.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Total Funds Required:</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Tuition Fees (1 year):</span>
                          <span className="font-bold text-lg">As per CAS</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Living Costs (London):</span>
                          <span className="font-bold text-primary text-lg">£12,006</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Living Costs (Outside London):</span>
                          <span className="font-bold text-secondary text-lg">£9,207</span>
                        </div>
                        <div className="pt-3 border-t border-gray-300">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-semibold">Must be held for:</span>
                            <span className="font-bold text-gray-900">28 consecutive days</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-2">💡 Important Note:</h4>
                      <p className="text-gray-700">
                        The funds must be in your account or your parent's/legal guardian's account for at least 28 consecutive days before you apply for your visa. The 28-day period must end no more than 31 days before you submit your visa application.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl"
                  data-aos="fade-left"
                >
                  <img 
                    src={uk3} 
                    alt="UK Living Costs" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Financial Planning</h3>
                    <p className="text-white/90">Prepare your finances well in advance</p>
                  </div>
        </motion.div>
      </div>

              {/* Financial Evidence Types */}
              <div className="mb-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Acceptable Financial Evidence
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Personal Bank Account",
                      description: "Your own bank statements showing required funds",
                      icon: <FaMoneyBillWave className="w-8 h-8" />
                    },
                    {
                      title: "Parental Sponsorship",
                      description: "Parents' bank statements with consent letter",
                      icon: <Users className="w-8 h-8" />
                    },
                    {
                      title: "Official Sponsorship",
                      description: "Government or organization sponsorship letter",
                      icon: <FileText className="w-8 h-8" />
                    },
                    {
                      title: "Student Loan",
                      description: "Official loan letter from recognized provider",
                      icon: <Building className="w-8 h-8" />
                    },
                    {
                      title: "Scholarship",
                      description: "Scholarship award letter covering expenses",
                      icon: <Award className="w-8 h-8" />
                    },
                    {
                      title: "Fixed Deposits",
                      description: "Bank fixed deposits with proof of funds",
                      icon: <Shield className="w-8 h-8" />
                    }
                  ].map((option, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {option.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{option.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeCategory === "ENGLISH PROFICIENCY" && (
            <motion.div
              key="english-prof"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    English Language Requirements
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    You are required to demonstrate your proficiency in the English language when you submit your application. You can prove your English language knowledge by:
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Successfully completing a Secure English Language Test (SELT) from an approved provider",
                      "Possessing a GCSE, A level, or Scottish qualification in English obtained from UK school",
                      "Having a degree taught in English (from majority English-speaking country)",
                      "Being a national of a majority English-speaking country"
                    ].map((option, index) => (
                      <motion.div
        key={index}
                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{option}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 border-2 border-secondary/20">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">CEFR Level Requirement:</h3>
                    <p className="text-gray-700 mb-2">
                      You must demonstrate English language skills in reading, writing, speaking, and understanding at a certain level on the Common European Framework of Reference for Languages (CEFR) scale.
                    </p>
                    <p className="text-secondary font-bold text-lg">
                      Minimum: CEFR Level B2
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  data-aos="fade-left"
                >
                  <img 
                    src={uk4} 
                    alt="English Proficiency" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Language Proficiency</h3>
                    <p className="text-white/90">Meet the English language requirements</p>
                  </div>
                </motion.div>
              </div>

              {/* English Tests */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
                  Approved English Language Tests
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {englishProficiency.map((test, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{test.test}</h3>
                      </div>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold">Requirement: </span>
                            <span>{test.requirement}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Building className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold">Provider: </span>
                            <span>{test.provider}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold">Validity: </span>
                            <span>{test.validity}</span>
                          </div>
                        </div>
      </div>
                    </motion.div>
    ))}
  </div>
              </div>

              {/* Test Prep CTA */}
              <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center" data-aos="fade-up">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need English Test Preparation?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  We offer comprehensive IELTS, TOEFL, and PTE coaching to help you achieve the required scores for your UK student visa.
                </p>
                <motion.button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll in Test Prep
                </motion.button>
              </div>
            </motion.div>
          )}

          {activeCategory === "DOCUMENTS" && (
            <motion.div
              key="documents"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Complete Document Checklist
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    To apply for your Student visa, you will need to provide the following documents:
                  </p>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Mandatory Documents:</h3>
                    <ul className="space-y-3">
                      {[
                        "A current passport or other valid travel documentation",
                        "A Confirmation of Acceptance for Studies (CAS) from your course provider"
                      ].map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-secondary rounded-r-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Additional Documents You May Need:</h4>
                    <ul className="space-y-2">
                      {[
                        "Proof of sufficient funds to support yourself and pay for your course",
                        "A valid ATAS certificate if your course and nationality require it",
                        "Proof of parental or legal guardian consent if you are under 18",
                        "Proof of your relationship to your parent or guardian if under 18"
                      ].map((doc, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-secondary">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  data-aos="fade-left"
                >
                  <img 
                    src={uk5} 
                    alt="UK Visa Documents" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Complete Documentation</h3>
                    <p className="text-white/90">Ensure all documents are properly prepared</p>
                  </div>
                </motion.div>
              </div>

              {/* Visa Application Process */}
              <div className="mb-16" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Visa Application & Processing
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Application Fee",
                      amount: "£363",
                      description: "Standard student visa fee (outside UK)",
                      icon: <FaPoundSign className="w-8 h-8" />
                    },
                    {
                      title: "Healthcare Surcharge",
                      amount: "£470/year",
                      description: "Immigration Health Surcharge (IHS)",
                      icon: <Heart className="w-8 h-8" />
                    },
                    {
                      title: "Processing Time",
                      amount: "3 weeks",
                      description: "Standard processing from outside UK",
                      icon: <Clock className="w-8 h-8" />
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 text-center"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary mx-auto mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-3xl font-bold text-primary mb-2">{item.amount}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Expert Assistance CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center" data-aos="fade-up">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Complete Visa Application Support
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  From document preparation to visa interview coaching, we provide end-to-end support for your UK student visa application.
                </p>
                <motion.button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Visa Assistance
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>

      {/* Bottom Components */}
      <Scrolltotop />
      <GetStarted />
    </section>
  );
};

export default Unitedkingdom;
