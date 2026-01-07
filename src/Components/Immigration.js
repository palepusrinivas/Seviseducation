import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  FileText,
  Clock,
  Shield,
  GraduationCap,
  Briefcase,
  Users,
  Plane,
  ArrowRight,
  Award,
  BookOpen,
  Zap,
  Target,
  HelpCircle,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { FaUniversity, FaPassport, FaFileAlt } from 'react-icons/fa';

import visaImg from "../assest/visa.jpg";
import studentImg from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const Immigration = () => {

  const visaStatusChart = [
    {
      currentStatus: "H-4",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Ideal for dependents pursuing full-time study",
      color: "from-blue-500 to-blue-600"
    },
    {
      currentStatus: "H-1B",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Must plan employment end date carefully",
      color: "from-purple-500 to-purple-600"
    },
    {
      currentStatus: "L-1",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Requires status maintenance until approval",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      currentStatus: "L-2",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Common for spouses choosing education",
      color: "from-teal-500 to-teal-600"
    },
    {
      currentStatus: "B-1",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Must prove non-immigrant intent",
      color: "from-green-500 to-green-600"
    },
    {
      currentStatus: "B-2",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Timing and intent are critical",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      currentStatus: "F-2",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Cannot study full-time on F-2",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      currentStatus: "J-2",
      changeType: "Change of Status",
      eligible: true,
      canStay: true,
      notes: "Subject to waiver rules in some cases",
      color: "from-sky-500 to-sky-600"
    },
    {
      currentStatus: "F-1 (Terminated)",
      changeType: "SEVIS Reinstatement",
      eligible: null,
      canStay: true,
      notes: "Must file quickly",
      color: "from-orange-500 to-orange-600"
    },
    {
      currentStatus: "F-1 (Terminated)",
      changeType: "Exit & Re-entry",
      eligible: null,
      canStay: false,
      notes: "Requires new I-20 & visa",
      color: "from-red-500 to-red-600"
    }
  ];

  const visaChangeTypes = [
    {
      title: "H-4 to F-1 Change of Status",
      description: "H-4 dependents often choose F-1 status to gain independent student benefits and pursue higher education.",
      benefits: [
        "Legal full-time study",
        "Independent immigration status",
        "Eligibility for CPT/OPT after approval"
      ],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "H-1B to F-1 Change of Status",
      description: "Professionals on H-1B may return to school to upskill or change careers.",
      considerations: [
        "Proper timing of employment end date",
        "Maintaining valid status during transition",
        "Planning for dependents on H-4"
      ],
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "L-1 / L-2 to F-1 Change of Status",
      description: "L-1 employees and L-2 dependents can change to F-1 to pursue education.",
      benefits: [
        "Full-time academic enrollment",
        "Long-term education planning",
        "Student employment benefits (after approval)"
      ],
      icon: <Plane className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "B-1 / B-2 to F-1 Change of Status",
      description: "Visitors on B-1 or B-2 visas must meet strict intent and timing rules.",
      considerations: [
        "Application must be filed before I-94 expiration",
        "No study before approval",
        "Strong documentation is essential"
      ],
      warning: "Incorrect filing can impact future visas.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "F-2 to F-1 Change of Status",
      description: "F-2 dependents can change to F-1 to pursue their own education.",
      benefits: [
        "Independent student status",
        "Full-time study eligibility",
        "CPT/OPT opportunities"
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "J-2 to F-1 Change of Status",
      description: "J-2 dependents can change to F-1 status for educational purposes.",
      considerations: [
        "Subject to waiver rules in some cases",
        "Timing considerations",
        "Documentation requirements"
      ],
      icon: <Award className="w-8 h-8" />,
      gradient: "from-sky-500 to-indigo-600"
    }
  ];

  const sevisTerminationCauses = [
    "Dropping below full-time enrollment",
    "Unauthorized employment",
    "Failure to report to school",
    "Expired I-20",
    "Medical or personal emergencies"
  ];

  const reinstatementRequirements = [
    "Violation occurred due to circumstances beyond your control",
    "No unauthorized employment",
    "Filing within a reasonable time"
  ];

  const reinstatementServices = [
    "Eligibility assessment",
    "DSO coordination",
    "I-539 filing",
    "Explanation letter preparation",
    "USCIS case tracking"
  ];

  const cosMustKnow = [
    {
      number: "1",
      title: "Timing Matters",
      description: "You must file for COS before your current visa expires to maintain lawful status."
    },
    {
      number: "2",
      title: "Intent Requirement",
      description: "Your current visa must allow a change of intent (e.g., B-1/B-2 is temporary, F-1 is full-time student)."
    },
    {
      number: "3",
      title: "Eligibility Depends on Visa Type",
      description: "Not all visas allow automatic change; some require travel and consular processing."
    },
    {
      number: "4",
      title: "I-539 Filing is Key",
      description: "USCIS Form I-539 is used for most status changes within the U.S."
    },
    {
      number: "5",
      title: "SEVIS I-20 Required",
      description: "For F-1, your school must issue a valid I-20 and you must pay the SEVIS fee."
    },
    {
      number: "6",
      title: "Avoid Studying Early",
      description: "You cannot start full-time classes on F-1 status until your COS is approved."
    },
    {
      number: "7",
      title: "Maintain Status During Processing",
      description: "You must continue complying with the rules of your current visa while COS is pending."
    },
    {
      number: "8",
      title: "Documentation Matters",
      description: "Strong support documents (financials, acceptance letters, intent statements) increase approval chances."
    }
  ];

  const sevisMustKnow = [
    {
      number: "1",
      title: "Immediate Action Required",
      description: "Once SEVIS is terminated, your F-1 status is invalid and you are out of status."
    },
    {
      number: "2",
      title: "Common Causes",
      description: "Dropping below full-time enrollment, failure to report to school, unauthorized employment, or expired I-20."
    },
    {
      number: "3",
      title: "SEVIS Reinstatement Option",
      description: "Eligible students may file for reinstatement without leaving the U.S."
    },
    {
      number: "4",
      title: "Timing is Critical",
      description: "Filing for reinstatement as soon as possible after termination increases chances of approval."
    },
    {
      number: "5",
      title: "Document Explanation",
      description: "USCIS requires a clear explanation why you fell out of status and proof it was unintentional."
    },
    {
      number: "6",
      title: "DSO Coordination",
      description: "Your school's Designated School Official must support your reinstatement request."
    },
    {
      number: "7",
      title: "Consequences of Inaction",
      description: "Ignoring SEVIS termination may lead to unlawful presence, visa denial, or difficulty changing status in the future."
    },
    {
      number: "8",
      title: "Plan Backup Options",
      description: "If reinstatement is not possible, you may need to depart and re-enter on a new F-1 visa."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced in student & dependent visas",
      description: "Years of expertise handling complex immigration cases"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Clear, step-by-step guidance",
      description: "We simplify complex processes for you"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Accurate documentation & filings",
      description: "Precision in every document we prepare"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized case strategies",
      description: "Tailored approach for your unique situation"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Timely communication",
      description: "Stay informed throughout the process"
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={visaImg}
          alt="Immigration Services"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        
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
          <div className="text-center max-w-4xl">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Change of Status & SEVIS Services
              <br />
              <span className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Quick Overview
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-sm md:text-base mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your trusted partner for seamless visa transitions and SEVIS solutions
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <NavLink to="/Contact">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-bold text-sm md:text-base shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
              </NavLink> */}
              {/* <NavLink to="/Contact">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold text-sm md:text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Free Assessment
                </motion.button>
              </NavLink> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visa Status Chart Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Visa Change & SEVIS Solutions Chart
            </h2>
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
              Comprehensive overview of eligibility and requirements for changing your visa status
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                      <th className="px-6 py-4 text-left font-bold text-xs">Current Visa Status</th>
                      <th className="px-6 py-4 text-left font-bold text-xs">Change / Service Type</th>
                      <th className="px-6 py-4 text-center font-bold text-xs">Eligible to Change to F-1</th>
                      <th className="px-6 py-4 text-center font-bold text-xs">Can Stay in the U.S.?</th>
                      <th className="px-6 py-4 text-left font-bold text-xs">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visaStatusChart.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1.5 rounded-lg bg-gradient-to-r ${row.color} text-white font-semibold text-xs`}>
                            {row.currentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700 font-medium text-xs">{row.changeType}</td>
                        <td className="px-6 py-4 text-center">
                          {row.eligible === true ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.eligible === false ? (
                            <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400 text-xs">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.canStay ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-600 text-xs">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {visaStatusChart.map((row, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-2 rounded-lg bg-gradient-to-r ${row.color} text-white font-semibold`}>
                    {row.currentStatus}
                  </span>
                  <span className="text-xs text-gray-500">{row.changeType}</span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Eligible:</span>
                    {row.eligible === true ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : row.eligible === false ? (
                      <XCircle className="w-5 h-5 text-red-500" />
                    ) : (
                      <span className="text-gray-400 text-sm">N/A</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Can Stay:</span>
                    {row.canStay ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-xs">{row.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Change of Status to F-1 Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Change of Status to F-1 Student Visa
            </h2>
            <p className="text-gray-600 text-xs md:text-sm max-w-3xl mx-auto">
              Changing your visa status to F-1 allows you to pursue full-time education in the United States without leaving the country. Immigration USA assists individuals from various visa categories, ensuring compliance with USCIS and SEVIS regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {["H-4 to F-1", "H-1B to F-1", "L-1 / L-2 to F-1", "B-1 / B-2 to F-1", "F-2 to F-1", "J-2 to F-1"].map((change, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900">{change}</h3>
                </div>
                <p className="text-gray-600 text-xs">
                  Professional assistance for seamless status transition
                </p>
              </div>
            ))}
          </div>

          <div
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center"
          >
            <p className="text-xs md:text-sm mb-4">
              Our team evaluates your current status, timeline, and academic plans to determine the safest and most effective filing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Visa Change Types */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Detailed Visa Change Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visaChangeTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {type.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 text-xs mb-6">{type.description}</p>
                
                {type.benefits && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-xs text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {type.considerations && (
                  <div className="space-y-3 mt-4">
                    <h4 className="font-semibold text-xs text-gray-900 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      Important Considerations:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {type.considerations.map((consideration, idx) => (
                        <li key={idx} className="text-gray-600 text-xs flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {type.warning && (
                  <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                    <p className="text-orange-800 font-semibold text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {type.warning}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEVIS Termination & Reinstatement */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              SEVIS Termination & Reinstatement
            </h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-3xl mx-auto">
              Understanding SEVIS termination and your options for reinstatement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* SEVIS Termination */}
            <div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold">SEVIS Termination</h3>
              </div>
              <p className="text-gray-300 text-xs mb-6">
                A terminated SEVIS record means you are no longer maintaining F-1 status. This can occur due to:
              </p>
              <ul className="space-y-3">
                {sevisTerminationCauses.map((cause, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-xs">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-200 font-semibold text-xs">
                  ⚠️ Immediate action is required to avoid unlawful presence.
                </p>
              </div>
            </div>

            {/* SEVIS Reinstatement */}
            <div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold">SEVIS Reinstatement</h3>
              </div>
              <p className="text-gray-300 text-xs mb-6">
                Eligible students may apply for reinstatement without leaving the U.S.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-xs text-white mb-3">Reinstatement Requirements Include:</h4>
                <ul className="space-y-2">
                  {reinstatementRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-xs">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xs text-white mb-3">Immigration USA assists with:</h4>
                <ul className="space-y-2">
                  {reinstatementServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-xs">
                      <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change of Status Must Know */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Change of Status (COS) – Must Know
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Essential information for a successful status change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cosMustKnow.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                    {item.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEVIS Termination Must Know */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              SEVIS Termination – Must Know
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Critical information about SEVIS termination and reinstatement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sevisMustKnow.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {item.number}
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Immigration USA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Immigration USA?
            </h2>
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
              We simplify complex immigration processes so you can focus on your education and future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${studentImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)'
          }} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
              Schedule a Consultation
            </h2>
            <p className="text-white/90 text-xs md:text-sm mb-8">
              Unsure which option is right for you?
            </p>
            <p className="text-white text-xs md:text-sm mb-8 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Immigration USA today for professional guidance and peace of mind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <NavLink to="/Contact">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-sm md:text-base hover:bg-gray-100 shadow-2xl transition-all duration-300">
                  Get Started Today
                </button>
              </NavLink>
              <NavLink to="/FreeConsultation">
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-bold text-sm md:text-base border-2 border-white hover:bg-white/20 shadow-2xl transition-all duration-300">
                  Free Consultation
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <Scrolltotop />
      <GetStarted />
    </section>
  );
};

export default Immigration;
