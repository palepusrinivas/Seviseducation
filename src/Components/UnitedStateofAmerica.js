import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Send, 
  CheckCircle, 
  BookOpen, 
  GraduationCap, 
  Search,
  PenTool,
  ClipboardCheck,
  Mail,
  DollarSign,
  Plane,
  Award,
  Globe,
  Users,
  Camera,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import {
  FaPassport,
  FaUniversity,
  FaFileAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaCheckCircle,
  FaClipboardList
} from "react-icons/fa";

// Images
import USA1 from "../assest/us-bridge-scaled.jpg";
import usaCity from "../assest/USA_City-.jpg";
import visaImg from "../assest/visa.jpg";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import admissionImg from "../assest/Admission.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const UnitedStateofAmerica = () => {
  const [activeCategory, setActiveCategory] = useState("F1 VISA");

  // 9-Step Application Process
  const applicationSteps = [
    {
      number: "01",
      title: "Course Selection",
      description: "Choose your ideal program based on your career goals and interests",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Select Right University",
      description: "Research and shortlist universities that match your profile",
      icon: <FaUniversity className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Check Admission Criteria",
      description: "Review and ensure you meet all admission requirements",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Take Entrance Test",
      description: "Prepare and excel in GRE, GMAT, SAT, or other required tests",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      number: "05",
      title: "Prepare SOP's & LOR's",
      description: "Craft compelling Statement of Purpose and Letter of Recommendations",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "06",
      title: "Fill up Application Form",
      description: "Complete university application with accurate information",
      icon: <FaClipboardList className="w-8 h-8" />
    },
    {
      number: "07",
      title: "Wait for the Acceptance Letter",
      description: "Receive I-20 form from your chosen university",
      icon: <Mail className="w-8 h-8" />
    },
    {
      number: "08",
      title: "Fee Payment",
      description: "Pay SEVIS I-901 fee and visa application fee",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      number: "09",
      title: "Apply for the US Visa",
      description: "Schedule and attend your visa interview",
      icon: <Plane className="w-8 h-8" />
    }
  ];

  // Required Documents Details
  const requiredDocuments = [
    {
      icon: <FaPassport className="w-6 h-6" />,
      title: "Valid Passport",
      description: "Valid passport with minimum 6 months validity beyond your course end date"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Digital Photograph",
      description: "Digital photo taken in last 6 months according to U.S. visa photo standards"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Travel History",
      description: "Information regarding previous 5 trips to US and international travel in last 5 years"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume/CV",
      description: "Outlining educational details, current and previous work history"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Travel Itinerary",
      description: "Details regarding travel itinerary if planned"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Additional Information",
      description: "Any additional information regarding intended purpose of visit"
    }
  ];

  // Supporting Documents
  const supportingDocuments = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educational Documents",
      description: "Official transcripts and educational certificates submitted while enrolling in the program"
    },
    {
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      title: "Financial Documents",
      description: "Bank statements, tax records, and proof of funding provided while enrolling"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Standardized Test Scores",
      description: "GRE, IELTS, TOEFL, SAT, or GMAT scores as required by the university"
    }
  ];

  // I-20 Form Requirements
  const i20Requirements = [
    "SEVIS ID/Number of the applicant",
    "Start and end date of the course",
    "Financial sources to support during stay",
    "Details regarding the intended program of study",
    "Tuition fee/cost of attendance",
    "Personal details of the applicant"
  ];

  // Financial Documents List
  const financialDocuments = [
    "Payslips of current and past employment, if any",
    "Bank statements of the last 3 years",
    "Tax records of the previous 3 years",
    "Information regarding scholarships granted",
    "Form I-134 with Affidavit and sponsor's bank statements (if sponsored)",
    "Year's worth or semester fee payment proof (optional but recommended)",
    "Letter of Approval for education loan from bank (if applicable)"
  ];

  const categories = ["F1 VISA", "REQUIRED DOCUMENTS", "SEVIS-1901 FEE", "VISA INTERVIEW"];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.img
        src={USA1}
          alt="United States Student Visa"
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
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              United States of America
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Student Visa</span>
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Gateway to World-Class Education in the USA
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
        {activeCategory === "F1 VISA" && (
          <div>
              {/* F1 Visa Overview */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    F1 Student Visa Overview
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>
                      F1 visas are the most popular nonimmigrant student visas that allow foreigners to study in U.S. universities or colleges certified by the Student and Exchange Visitor Program (SEVP). Students are enrolled in a full-time course that culminates in a degree, diploma, or certificate from accredited institutions.
                    </p>
                    <p>
                      The duration of F1 visa is dependent on the length of the course. Students are expected to complete the course specified in their I-20 form (Certificate of Eligibility issued by accredited colleges or universities for international students). Once their course is completed, students have up to 60 days to apply for work authorization Optional Practical Training (OPT).
                    </p>
                    <p>
                      Outside the United States, F1 visas are granted by U.S. embassies and consulates, while changes to the status and extension of the stay may be possible within the United States.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={usaCity} 
                    alt="USA Student Life" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Study in the USA</h3>
                    <p className="text-white/90">Access world-class universities and diverse opportunities</p>
                  </div>
                </div>
              </div>

              {/* 9-Step Process */}
              <div className="mb-16">
                <style>{`
                  .usa-application-steps-card,
                  .usa-application-steps-card *,
                  .usa-application-steps-card:hover,
                  .usa-application-steps-card:hover * {
                    transform: translateY(0) !important;
                    transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
                    animation: none !important;
                    top: auto !important;
                    margin-top: 0 !important;
                    position: relative !important;
                  }
                `}</style>
                <div className="text-center mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    9-Step Application Process
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                    Follow this comprehensive step-by-step guide to successfully apply for your U.S. student visa
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applicationSteps.map((step, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100"
                    >
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {step.icon}
        </div>

        {/* Content */}
                      <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeCategory === "REQUIRED DOCUMENTS" && (
            <div>
              {/* Main Required Documents Section */}
              <div className="mb-16">
                <style>{`
                  .usa-f1-documents-card,
                  .usa-f1-documents-card *,
                  .usa-f1-documents-card:hover,
                  .usa-f1-documents-card:hover * {
                    transform: translateY(0) !important;
                    transition: box-shadow 0.3s ease, border-color 0.3s ease !important;
                    animation: none !important;
                    top: auto !important;
                    margin-top: 0 !important;
                    position: relative !important;
                  }
                `}</style>
                <div className="text-center mb-12">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Required Documents for F1 Visa
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                    Comprehensive list of documents needed for your U.S. student visa application
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

              {/* Supporting Documents Section */}
              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
                  Supporting Documents
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {supportingDocuments.map((doc, index) => (
                    <div
              key={index}
                      className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary mb-4">
                        {doc.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-3">{doc.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* I-20 Form Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                      I-20 Form Requirements
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      The I-20, Certificate of Eligibility for Nonimmigrant Students, outlines the course of study along with students' details and financial modes through which students will be supported during their stay in the U.S.
                    </p>
                    <div className="space-y-3">
                      {i20Requirements.map((req, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <p className="text-gray-700 text-sm">{req}</p>
                        </div>
                      ))}
                    </div>
              </div>

                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={visaImg} 
                      alt="Visa Documentation" 
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
              </div>
            </div>

              {/* Financial Documents Section */}
              <div className="mt-16">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Financial Documents Required
                  </h2>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                    You must submit documents outlining your source of funding to attend the program. The cost of tuition will be mentioned in the I-20 form. Various documents can be shown as proof of financing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {financialDocuments.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
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

              {/* Expert Assistance CTA */}
              <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Help with Documentation?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our expert guides assist you in filling out all necessary documents, making payments, and compiling all required materials for the visa interview. We provide personalized support with timely updates throughout the process.
                </p>
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-xl transition-colors">
                  Get Expert Assistance
                </button>
              </div>
            </div>
          )}

          {activeCategory === "SEVIS-1901 FEE" && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div 
                  className="order-2 md:order-1"
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    SEVIS I-901 Fee Payment
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-sm">
                      The information provided in the I-20 will be registered in the Student and Exchange Visitor Information System (SEVIS). The applicant must pay the SEVIS I-901 (SEVP processing and maintenance charge) fee as part of the visa application process.
                    </p>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Fee Amount</h3>
                      <p className="text-3xl font-bold text-primary mb-2">USD 350</p>
                      <p className="text-xs text-gray-600">SEVIS I-901 Processing Fee</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-6 border-2 border-secondary/20 mt-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Visa Application Fee</h3>
                      <p className="text-3xl font-bold text-secondary mb-2">USD 185</p>
                      <p className="text-xs text-gray-600">DS-160 Visa Application Cost</p>
                    </div>
                    <p className="pt-4 text-sm">
                      The payment receipt of the I-901 fee is required to be produced during the visa interview. The costs can be paid through the official SEVP payment portal.
                    </p>
                  </div>
                </div>

                <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={admissionImg} 
                    alt="Fee Payment" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Payment Process</h3>
                    <p className="text-white/90">Secure online payment through official portals</p>
                  </div>
                </div>
      </div>

              {/* DS-160 Form Section */}
              <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  DS-160 Visa Application Form
                </h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  DS-160 is a visa application that must be filled out while applying for a nonimmigrant student visa (F1). The DS-160 form requires information related to:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: <FaUserTie />, title: "Personal Details" },
                    { icon: <GraduationCap />, title: "Educational Background" },
                    { icon: <Users />, title: "Employment History" },
                    { icon: <FileText />, title: "Security Questions" }
                  ].map((item, index) => (
                    <div
        key={index}
                      className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                        {item.icon}
      </div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    </div>
    ))}
  </div>
                <div className="mt-8 bg-white rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-gray-700 text-sm">
                    <strong>Important:</strong> Applicants are required to provide biometric fingerprints and a photograph at the U.S. Consulate or Embassy in their home country after submitting the DS-160 form.

                  </p>
                </div>
              </div>
            </div>
          )}

          {activeCategory === "VISA INTERVIEW" && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Visa Interview Process
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>
                      Once the necessary payments are made and all required documents are compiled, the next step is to locate the U.S. embassy nearest to you or of your choice and schedule an interview.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">Important Timeline:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>New students can apply for F1 visa <strong>120 days before</strong> the course start date</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>Students are allowed to enter the U.S. only <strong>30 days before</strong> the course begins</span>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Applicants will be interviewed by a consular officer designated by the U.S. government. Through the interview and examining details provided in the DS-160, the officer will determine whether the student is eligible for a visa.
                    </p>
                    <p>
                      The applicant must show strong ties to the home country using financial resources with intent to return once the course is finished. The F1 visa is usually valid up to 60 days beyond the course's end date.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={studentImg} 
                    alt="Visa Interview Preparation" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Interview Preparation</h3>
                    <p className="text-white/90">Professional mock interviews and guidance</p>
                  </div>
                </div>
              </div>

              {/* Interview Preparation Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-primary/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    What to Bring
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Valid passport",
                      "DS-160 confirmation page with barcode",
                      "I-20 form from university",
                      "SEVIS I-901 payment receipt",
                      "Visa appointment confirmation",
                      "Financial documents",
                      "Academic transcripts and test scores"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 border-2 border-secondary/20">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Interview Tips
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Be honest and confident",
                      "Demonstrate intent to return home",
                      "Explain your study plans clearly",
                      "Show proof of financial capability",
                      "Dress professionally",
                      "Arrive 30 minutes early",
                      "Answer questions directly and concisely"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    </div>

              {/* Expert Coaching Section */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      Expert Mock Interview Coaching
                    </h3>
                    <p className="text-white/90 text-sm mb-6">
                      We provide comprehensive mock interview sessions conducted by expert coaches who help you:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Build confidence for the actual interview",
                        "Improve communication and social skills",
                        "Practice common visa interview questions",
                        "Learn proper body language and presentation",
                        "Understand what visa officers look for"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 shadow-2xl transition-colors">
                      Schedule Mock Interview
                    </button>
                  </div>
                </div>
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

export default UnitedStateofAmerica;
