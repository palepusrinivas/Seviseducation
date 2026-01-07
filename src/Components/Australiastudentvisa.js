
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  MapPin,eader ,
  DollarSign,
  Briefcase,
  Heart,
  Plane,
  Shield,
  TrendingUp,
  Clock,
  Home,
  ClipboardCheck
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
  FaHandshake
} from "react-icons/fa";

// Images
import Australia from "../assest/Australia.jpg";
import Australia2 from "../assest/aus-scaled 1.png";
import visa from "../assest/visa.jpg";
import Advantage from "../assest/Advantages.jpg";
import admission from "../assest/Admission.jpg";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";
import { NavLink } from "react-router-dom";

const Australiastudentvisa = () => {
  const [activeCategory, setActiveCategory] = useState("WHY AUSTRALIA");

  // Why Australia Benefits
  const australiaBenefits = [
    {
      icon: <FaUniversity className="w-8 h-8" />,
      title: "World-Class Universities",
      description: "7 Australian universities ranked in the world's top 100"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Globally Recognized Degrees",
      description: "Qualifications recognized worldwide by employers and institutions"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Work While Studying",
      description: "Work up to 40 hours per fortnight during semester"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Student Protection",
      description: "ESOS Act ensures quality education and protection for international students"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multicultural Society",
      description: "Safe, diverse, and welcoming environment for international students"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Post-Study Work Rights",
      description: "Temporary Graduate visa (subclass 485) for work experience"
    }
  ];

  // Key Advantages
  const keyAdvantages = [
          "Exceptional Academic Staff and Premier Educational Institutions",
          "High-Quality Educational Standards",
          "Globally Recognized Certifications",
          "Dynamic, Secure, and Diverse Community",
          "Cost-Effective Education",
          "Abundant Career Prospects Post-Graduation",
  ];

  // Required Documents Details
  const requiredDocuments = [
    {
      icon: <FaPassport className="w-6 h-6" />,
      title: "Valid Passport",
      description: "Valid passport with minimum 6 months validity beyond your course duration"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Confirmation of Enrolment (CoE)",
      description: "Electronic Confirmation of Enrolment from your Australian education provider"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Documents",
      description: "Mark sheets, passing certificates (10th, 12th, and graduation if applicable)"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "English Proficiency Test",
      description: "IELTS/PTE/TOEFL score card meeting university requirements"
    },
    {
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      title: "Financial Documents",
      description: "Bank statements, income proof, and evidence of sufficient funds"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Recent Photographs",
      description: "Passport-sized color photographs as per Australian visa specifications"
    }
  ];

  // Admission Requirements Details
  const admissionRequirements = [
    {
      category: "Secondary Education",
      items: [
        "10th Standard Mark sheet & Passing certificate",
        "12th Standard (10+2) Mark sheet & Passing certificate",
        "School Leaving Certificate (if applicable)"
      ]
    },
    {
      category: "Higher Education",
      items: [
        "Bachelor's Degree mark sheets (all semesters/years)",
        "Bachelor's Degree certificate",
        "Consolidated mark sheet if provided by university"
      ]
    },
    {
      category: "English Proficiency",
      items: [
        "IELTS Academic score card (minimum 6.0-6.5 overall)",
        "PTE Academic score card (minimum 50-58 overall)",
        "TOEFL iBT score card (minimum 60-79 overall)"
      ]
    },
    {
      category: "Additional Documents",
      items: [
        "Passport copy (all pages)",
        "Work Experience certificates (if applicable)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)"
      ]
    }
  ];

  // Visa Requirements Detailed
  const visaDocuments = [
    "Notarized Academic Documents (10th, 12th, Bachelor's degree)",
    "Notarized Work Experience Letters (if applicable)",
    "Notarized English Test Score Card (IELTS/PTE/TOEFL)",
    "Bank Attested Financial Documents (last 6 months statements)",
    "Genuine Temporary Entrant (GTE) Statement",
    "Statement of Purpose explaining study plans and career goals",
    "Notarized Family Income Documents (salary slips, tax returns)",
    "Valid Passport with at least 18 months validity",
    "Recent Passport-sized Photographs",
    "Overseas Student Health Cover (OSHC) payment proof",
    "Visa Application Fee payment receipt",
    "Medical Examination reports from approved panel physicians",
    "Police Clearance Certificate (if required)",
    "Proof of accommodation arrangements in Australia"
  ];

  // Financial Requirements
  const financialRequirements = [
    {
      category: "Tuition Fees",
      amount: "AUD 20,000 - 45,000 per year",
      description: "Varies by course and institution"
    },
    {
      category: "Living Costs",
      amount: "AUD 21,041 per year",
      description: "As per Department of Home Affairs requirements"
    },
    {
      category: "Dependent Partner",
      amount: "AUD 7,362 per year",
      description: "Additional living costs if bringing spouse"
    },
    {
      category: "Dependent Child",
      amount: "AUD 3,152 per year per child",
      description: "Additional living costs for each child"
    }
  ];

  // Study Pathway Steps
  const studyPathway = [
    {
      number: "01",
      title: "Research and Choose Course",
      description: "Explore universities and courses that align with your career goals",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Check Entry Requirements",
      description: "Ensure you meet academic and English language requirements",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Prepare Documents",
      description: "Gather all academic transcripts, test scores, and supporting documents",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Apply to Universities",
      description: "Submit applications through university portals or agents",
      icon: <Send className="w-8 h-8" />
    },
    {
      number: "05",
      title: "Receive Offer Letter",
      description: "Get conditional or unconditional offer from university",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: "06",
      title: "Pay Tuition Fee & Get CoE",
      description: "Pay initial tuition and receive Confirmation of Enrolment",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      number: "07",
      title: "Arrange Health Cover",
      description: "Purchase Overseas Student Health Cover (OSHC)",
      icon: <Heart className="w-8 h-8" />
    },
    {
      number: "08",
      title: "Apply for Student Visa",
      description: "Lodge visa application online with all required documents",
      icon: <FaPassport className="w-8 h-8" />
    },
    {
      number: "09",
      title: "Medical & Biometrics",
      description: "Complete health examination and provide biometrics",
      icon: <Shield className="w-8 h-8" />
    },
    {
      number: "10",
      title: "Receive Visa & Prepare",
      description: "Get visa approval and prepare for your Australian journey",
      icon: <Plane className="w-8 h-8" />
    }
  ];

  const categories = ["WHY AUSTRALIA", "ADVANTAGES", "REQUIRED DOCUMENTS", "ADMISSION REQUIREMENTS", "VISA REQUIREMENTS"];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.img
          src={Australia2}
          alt="Study in Australia"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Study in Australia
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Student Visa Guide</span>
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Your Complete Guide to Studying in the Land Down Under
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-gray-50 py-6 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white border-primary shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeCategory === "WHY AUSTRALIA" && (
          <div>
              {/* Overview Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Why Choose Australia?
                  </h2>
                  <div className="space-y-4 text-gray-800 leading-relaxed">
                    <p className="text-sm md:text-base">
                      Studying in Australia offers international students more than just academic success and a globally recognized degree. It's a unique opportunity for personal growth, fostering independence, maturity, cross-cultural understanding, and a diverse outlook on global issues.
                    </p>
                    <p className="text-sm md:text-base">
                      Australia's education system is highly regarded worldwide, renowned for its efficient framework and groundbreaking policy initiatives. Numerous nations seek guidance from Australia to enhance their own educational landscapes.
                    </p>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20 mt-6">
                      <h3 className="text-base font-bold text-gray-900 mb-4">Quick Facts:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span><strong>43</strong> universities across Australia</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span><strong>7</strong> cities ranked in world's most liveable</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span><strong>700,000+</strong> international students annually</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={Australia} 
                    alt="Study in Australia" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Quality of Life</h3>
                    <p className="text-white/90">Experience world-class education in a safe and welcoming environment</p>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Key Benefits of Studying in Australia
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                    Discover why Australia is one of the top destinations for international students
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {australiaBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10-Step Pathway */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Your Study Pathway to Australia
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                    Follow these 10 comprehensive steps to successfully study in Australia
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {studyPathway.map((step, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100"
                    >
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.number}
                      </div>

                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {step.icon}
                      </div>

                      <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "ADVANTAGES" && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={Advantage} 
                    alt="Advantages of Studying in Australia" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Educational Excellence</h3>
                    <p className="text-white/90">Premier institutions with cutting-edge research facilities</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Why Choose Australia for Your Studies?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    Australia offers a unique combination of academic excellence, quality of life, and career opportunities that make it one of the world's premier study destinations.
                  </p>

                  <div className="space-y-3">
                    {keyAdvantages.map((advantage, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="text-white w-4 h-4" />
                        </div>
                        <p className="text-gray-700 text-sm font-medium">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info CTA */}
              <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Ready to Start Your Australian Journey?
                </h3>
                <p className="text-white/90 text-sm mb-6 max-w-2xl mx-auto">
                  Get personalized guidance from our expert counselors and take the first step towards your dream education in Australia.
                </p>
                <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl transition-colors">
                  Get Free Consultation
                </button>
              </div>
            </div>
          )}

          {activeCategory === "REQUIRED DOCUMENTS" && (
            <div>
              {/* Main Required Documents */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Required Documents for Australia Student Visa
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                    Complete checklist of documents needed for your Australian student visa application
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {requiredDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        {doc.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{doc.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CoE Information */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                      Confirmation of Enrolment (CoE)
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      The CoE is the most critical document for your student visa application. It is issued by your Australian education provider once you have:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Received an offer letter from the institution",
                        "Accepted the offer by signing the acceptance form",
                        "Paid the initial tuition fee deposit",
                        "Arranged Overseas Student Health Cover (OSHC)"
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={visa} 
                      alt="CoE Document" 
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Financial Requirements */}
              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                  Financial Requirements
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {financialRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      <h3 className="text-base font-bold text-gray-900 mb-2">{req.category}</h3>
                      <p className="text-xl font-bold text-primary mb-2">{req.amount}</p>
                      <p className="text-gray-600 text-xs">{req.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Assistance CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Need Help Preparing Your Documents?
                </h3>
                <p className="text-white/90 text-sm mb-6 max-w-2xl mx-auto">
                  Our expert team will guide you through document preparation, verification, and submission to ensure a smooth visa application process.
                </p>
                <NavLink to="/Contact" className="">
                  <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl transition-colors">
                  CONTACT US
                </button>
                </NavLink>
              </div>
            </div>
          )}

          {activeCategory === "ADMISSION REQUIREMENTS" && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Admission Requirements
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    To secure admission to Australian universities, you need to meet specific academic and English language requirements. Here's a comprehensive breakdown of what you'll need:
                  </p>

                  <div className="space-y-6">
                    {admissionRequirements.map((category, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                      >
                        <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm">
                            {index + 1}
                          </span>
                          {category.category}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                  ))}
                </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={admission} 
                    alt="Admission Requirements" 
                    className="w-full h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Academic Excellence</h3>
                    <p className="text-white/90">Meeting requirements is the first step to your Australian education</p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-base">📚 Important Information:</h3>
                <p className="text-gray-700 text-sm mb-4">
                  For detailed admission requirements specific to your chosen course and university, please visit:
                </p>
                <a
                  href="https://www.studyinaustralia.gov.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  https://www.studyinaustralia.gov.au/
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {activeCategory === "VISA REQUIREMENTS" && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Student Visa Requirements
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    Once you receive your Confirmation of Enrolment (CoE), you can apply for an Australian student visa. The following documents are required for your visa application:
                  </p>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20 mb-6">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Processing Time & Fees:</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Visa Application Fee:</span>
                        <span className="font-bold text-primary text-sm">AUD 650</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Processing Time:</span>
                        <span className="font-bold text-secondary text-sm">29-79 days (average)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Visa Validity:</span>
                        <span className="font-bold text-gray-900 text-sm">Course duration + extra time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={studentImg} 
                    alt="Visa Requirements" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Student Visa (Subclass 500)</h3>
                    <p className="text-white/90">Your gateway to studying in Australia</p>
                  </div>
                </div>
              </div>

              {/* Visa Documents Checklist */}
              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                  Complete Visa Documents Checklist
                </h2>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-4">
                    {visaDocuments.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-white text-xs">✓</span>
                      </div>
                        <p className="text-gray-700 text-xs">{doc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* GTE Statement */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Genuine Temporary Entrant (GTE) Statement
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  The GTE statement is a crucial component of your visa application. It should clearly explain:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">What to Include:</h4>
                    <ul className="space-y-2 text-gray-700 text-xs">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Your circumstances in your home country</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Your potential circumstances in Australia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>The value of the course to your future</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Your immigration history</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">Key Points to Address:</h4>
                    <ul className="space-y-2 text-gray-700 text-xs">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>Why you chose this specific course and institution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>How it relates to your previous studies/work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>Your career plans after completing the course</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>Evidence of ties to your home country</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* More Information Link */}
              <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-base">🔗 Official Resources:</h3>
                <p className="text-gray-700 text-sm mb-4">
                  For the most up-to-date visa information and to lodge your application, visit:
                </p>
                <a
                  href="https://www.studyinaustralia.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  https://www.studyinaustralia.gov.au/
                  <Globe className="w-4 h-4" />
                </a>
              </div>

              {/* Expert Help CTA */}
              <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Expert Visa Application Assistance
                </h3>
                <p className="text-white/90 text-sm mb-6 max-w-2xl mx-auto">
                  Our experienced visa counselors will guide you through every step of the visa application process, from document preparation to interview coaching.
                </p>
                <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl transition-colors">
                  Schedule Visa Consultation
                </button>
              </div>
            </div>
          )}
        </div>
     
      {/* Bottom Components */}
      <Scrolltotop />
      <GetStarted />
   </section>
  );
};

export default Australiastudentvisa;
