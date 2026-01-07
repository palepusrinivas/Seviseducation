import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  CheckCircle, 
  BookOpen, 
  GraduationCap, 
  Award,
  Globe,
  Camera,
  Calendar,
  DollarSign,
  Briefcase,
  Plane,
  Shield,
  Clock,
  Home
} from "lucide-react";
import {
  FaPassport,
  FaUniversity,
  FaFileAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClipboardList,
  FaStar,
  FaGraduationCap,
  FaCertificate,
  FaIdCard
} from "react-icons/fa";

// Images
import dubai from "../assest/UAE.avif";
import visa from "../assest/visa.jpg";
import blog1 from "../assest/blog1.jpg";
import aboutImg from "../assest/about.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const UnitedArabEmiratesstudentvisa = () => {
  const [activeCategory, setActiveCategory] = useState("WHY UAE");

  // Why Study in UAE Benefits
  const uaeBenefits = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Globally Recognized Degrees",
      description: "International universities with degrees recognized worldwide"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "English-Medium Education",
      description: "Most programs taught in English, making it accessible for Indian students"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Tuition",
      description: "Lower fees compared to USA, UK, Canada, and Australia"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Strong Industry Exposure",
      description: "Internship opportunities and career growth in Middle East markets"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Modern Environment",
      description: "Safe, modern, and multicultural environment for international students"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Easy Travel from India",
      description: "Close proximity to India makes travel convenient"
    }
  ];

  // Courses Available
  const undergraduateCourses = [
    "Business Administration",
    "Engineering (Civil, Mechanical, Electrical, IT)",
    "Computer Science & Artificial Intelligence",
    "Media, Design, Architecture",
    "Hospitality & Tourism Management"
  ];

  const postgraduateCourses = [
    "MBA (Finance, Marketing, HR, Business Analytics)",
    "MSc in Data Science, AI, Cybersecurity",
    "Engineering & Technology",
    "Education & International Relations"
  ];

  const phdPrograms = [
    "Engineering",
    "Management",
    "Science & Technology (limited universities)"
  ];

  // Eligibility Criteria
  const eligibilityCriteria = [
    {
      level: "Bachelor's Degree",
      requirements: ["10+2 from a recognized Indian board", "Minimum 50–60% marks"]
    },
    {
      level: "Master's Degree",
      requirements: ["Bachelor's degree with minimum 55–60%", "Equivalent GPA accepted"]
    },
    {
      level: "PhD",
      requirements: ["Master's degree", "Research proposal"]
    }
  ];

  // English Language Requirements
  const englishRequirements = [
    {
      test: "IELTS Academic",
      score: "5.5 – 6.5"
    },
    {
      test: "TOEFL iBT",
      score: "61 – 90"
    },
    {
      test: "PTE Academic",
      score: "Accepted by selected universities"
    }
  ];

  // Documents Required
  const requiredDocuments = [
    {
      icon: <FaPassport className="w-6 h-6" />,
      title: "Valid Passport",
      description: "Minimum 6 months validity beyond course duration"
    },
    {
      icon: <FaUniversity className="w-6 h-6" />,
      title: "UAE University Offer Letter",
      description: "Official admission letter from UAE university"
    },
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "Academic Transcripts",
      description: "All academic certificates and mark sheets"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Passport-Size Photographs",
      description: "Recent color photographs as per UAE visa specifications"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Statement of Purpose (SOP)",
      description: "Well-written SOP explaining your study plans"
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "Letters of Recommendation",
      description: "For postgraduate and PhD programs"
    },
    {
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      title: "Proof of Tuition Fee Payment",
      description: "Payment receipts and financial documents"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health Insurance",
      description: "Valid health insurance coverage for UAE"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Proof of Accommodation",
      description: "If required by university or visa authorities"
    }
  ];

  // Visa Process Steps
  const visaProcessSteps = [
    {
      number: "01",
      title: "University Admission",
      description: "Choose course and university, submit application, receive admission offer, pay tuition deposit",
      icon: <FaUniversity className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Visa Application",
      description: "University applies for student visa on behalf of the student to UAE immigration authorities",
      icon: <FaClipboardList className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Funding & Financial Proof",
      description: "Show sufficient funds to cover tuition and living expenses (AED 20,000+ recommended)",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Entry Permit & Travel",
      description: "Student entry permit issued (valid for approximately 60 days), student travels to UAE",
      icon: <Plane className="w-8 h-8" />
    },
    {
      number: "05",
      title: "Post-Arrival Formalities",
      description: "Medical fitness test, Emirates ID biometric registration, health insurance activation, residence visa stamping",
      icon: <FaIdCard className="w-8 h-8" />
    }
  ];

  // Financial Requirements
  const financialRequirements = [
    {
      category: "Visa Processing",
      amount: "AED 1,500 – 3,500"
    },
    {
      category: "Medical Test",
      amount: "AED 250 – 700"
    },
    {
      category: "Emirates ID",
      amount: "AED 200 – 600"
    },
    {
      category: "Health Insurance",
      amount: "AED 800 – 2,500"
    },
    {
      category: "Monthly Living Expenses",
      amount: "AED 2,000 – 3,500"
    },
    {
      category: "Annual Living Cost",
      amount: "AED 20,000 – 35,000"
    }
  ];

  // Intake Periods
  const intakes = [
    { period: "September", description: "Major intake - most programs available" },
    { period: "January/February", description: "Secondary intake - limited programs" },
    { period: "May", description: "Limited programs available" }
  ];

  const categories = ["WHY UAE", "COURSES", "ELIGIBILITY", "DOCUMENTS", "VISA PROCESS", "FEES & COSTS"];

  return (
    <section className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.img
          src={dubai}
          alt="Study in UAE"
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
              className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              UAE Student Visa for Indian Students
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Complete Study Abroad Guide 2025
              </span>
            </motion.h1>
            <motion.p
              className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Internationally recognized degrees, affordable tuition, and excellent career opportunities in the UAE
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
        {activeCategory === "WHY UAE" && (
          <div>
              {/* Overview Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why Study in UAE for Indian Students?
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-sm md:text-base">
                      The UAE has become a preferred choice for Indian students due to its global universities, safe environment, and proximity to India. Experience world-class education in one of the most dynamic and modern countries in the Middle East.
                    </p>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20 mt-6">
                      <h3 className="text-base font-bold text-gray-900 mb-4">Quick Facts:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span>Globally recognized degrees from international universities</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span>English-medium education</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span>Lower tuition fees compared to USA, UK, Canada, Australia</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaStar className="text-primary flex-shrink-0" />
                          <span>Strong industry exposure and internship opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={aboutImg} 
                    alt="Study in UAE" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-xl font-bold mb-2">Modern Education Hub</h3>
                    <p className="text-white/90 text-sm">Experience world-class education in a safe and welcoming environment</p>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Key Benefits of Studying in UAE
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-base">
                    Discover why the UAE is one of the top destinations for Indian students
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {uaeBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Ready to Start Your UAE Journey?
                </h3>
                <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
                  Get personalized guidance from our expert counselors and take the first step towards your dream education in the UAE.
                </p>
                <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl transition-colors">
                  Get Free Consultation
                </button>
              </div>
            </div>
          )}

          {activeCategory === "COURSES" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Courses Available in UAE for Indian Students
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base">
                  Explore a wide range of undergraduate, postgraduate, and doctoral programs
                </p>
              </div>

              {/* Undergraduate Courses */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border-2 border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Undergraduate Courses in UAE</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {undergraduateCourses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 font-medium">{course}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Postgraduate Courses */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-8 border-2 border-secondary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Postgraduate Courses in UAE</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {postgraduateCourses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 font-medium">{course}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PhD Programs */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border-2 border-accent/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-gray-900">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">PhD & Research Programs</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {phdPrograms.map((program, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 font-medium">{program}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Intake Periods */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">UAE Intakes</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {intakes.map((intake, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{intake.period}</h4>
                      <p className="text-gray-600 text-sm">{intake.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "ELIGIBILITY" && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Eligibility Criteria for UAE Student Visa
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-base">
                    To study in the UAE, you need to meet specific academic requirements. Here's a comprehensive breakdown:
                  </p>

                  {/* Eligibility Cards */}
                  <div className="space-y-6">
                    {eligibilityCriteria.map((criteria, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <span className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm">
                            {index + 1}
                          </span>
                          {criteria.level}
                        </h3>
                        <ul className="space-y-2">
                          {criteria.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={blog1} 
                    alt="Eligibility Requirements" 
                    className="w-full h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                    <p className="text-white/90">Meeting requirements is your first step to UAE education</p>
                  </div>
                </div>
              </div>

              {/* English Language Requirements */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  English Language Requirements for UAE Universities
                </h2>
                <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto text-base">
                  Most universities in UAE require proof of English proficiency. Some universities may waive English tests if prior education was in English.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {englishRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{req.test}</h3>
                      <p className="text-primary font-bold text-base">{req.score}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "DOCUMENTS" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Documents Required for UAE Student Visa
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base">
                  Complete checklist of documents needed for your UAE student visa application
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                      {doc.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                  </div>
                ))}
              </div>

              {/* Financial Proof Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Funding & Financial Proof Requirements
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  Students must show sufficient funds to cover tuition and living expenses:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Bank statements (last 3–6 months)",
                    "Sponsor letter from parents/guardians",
                    "Recommended funds: 1 year tuition + living costs",
                    "Minimum suggested balance: AED 20,000 or more"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                        <FaCheckCircle className="text-white text-xs" />
                      </div>
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Need Help Preparing Your Documents?
                </h3>
                <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
                  Our expert team will guide you through document preparation, verification, and submission.
                </p>
                <button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl"
                >
                  Get Document Checklist
                </button>
              </div>
            </div>
          )}

          {activeCategory === "VISA PROCESS" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  UAE Student Visa Process – Step by Step
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base">
                  Follow these comprehensive steps to successfully obtain your UAE student visa
                </p>
              </div>

              {/* Visa Process Steps */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {visaProcessSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group"
                  >
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm">
                      {step.number}
                    </div>

                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Visa Validity & Renewal */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  UAE Student Visa Validity & Renewal
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-base font-bold text-gray-900 mb-2">Visa Validity</h3>
                    <p className="text-gray-600">Student visa is usually valid for 1 year</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Calendar className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-base font-bold text-gray-900 mb-2">Renewal</h3>
                    <p className="text-gray-600">Renewable annually until course completion</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Award className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-base font-bold text-gray-900 mb-2">Long-term Visas</h3>
                    <p className="text-gray-600">Available for high-performing students</p>
                  </div>
                </div>
              </div>

              {/* Part-Time Work */}
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="w-12 h-12 text-primary" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Part-Time Work Opportunities in UAE
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-base font-bold text-gray-900 mb-2">Part-Time Work</h3>
                    <p className="text-gray-600">Eligible students can work part-time during studies (subject to regulations)</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-base font-bold text-gray-900 mb-2">Internships</h3>
                    <p className="text-gray-600">Available in business, IT, hospitality, and engineering sectors</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-base font-bold text-gray-900 mb-2">Career Exposure</h3>
                    <p className="text-gray-600">Strong job exposure in Middle East markets</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "FEES & COSTS" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  UAE Student Visa Fees & Cost
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base">
                  Understanding the complete cost structure for studying in the UAE
                </p>
              </div>

              {/* Visa Fees */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Student Visa Fees (Approximate)</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {financialRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      <h3 className="text-base font-bold text-gray-900 mb-2">{req.category}</h3>
                      <p className="text-base font-bold text-primary">{req.amount}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Breakdown Image Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={visa} 
                    alt="UAE Student Visa" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Financial Planning</h3>
                    <p className="text-white/90">Plan your expenses wisely for a stress-free journey</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Cost of Living in UAE
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <Home className="w-10 h-10 text-primary" />
                        <h3 className="text-lg font-bold text-gray-900">Monthly Living Expenses</h3>
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">AED 2,000 – 3,500</p>
                      <p className="text-gray-600">Covers accommodation, food, transportation, and utilities</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <DollarSign className="w-10 h-10 text-secondary" />
                        <h3 className="text-lg font-bold text-gray-900">Annual Living Cost</h3>
                      </div>
                      <p className="text-lg font-bold text-secondary mb-2">AED 20,000 – 35,000</p>
                      <p className="text-gray-600">Total annual expenses for international students</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Why Choose Us for UAE Study Visa?
                </h3>
                <p className="text-white/90 text-base mb-8 max-w-3xl mx-auto">
                  We provide end-to-end study abroad services for UAE, including:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-left">
                  {[
                    "Free profile assessment",
                    "Course & university shortlisting",
                    "Application & admission assistance",
                    "SOP & documentation support",
                    "English test guidance",
                    "UAE student visa processing",
                    "Pre-departure & post-arrival support",
                    "Mock interview preparation"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <FaCheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-white font-medium text-sm">{service}</p>
                    </div>
                  ))}
                </div>
                <button
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl"
                >
                  Book a Free Consultation
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

export default UnitedArabEmiratesstudentvisa;
