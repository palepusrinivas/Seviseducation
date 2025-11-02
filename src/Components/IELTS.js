import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import {
  Headphones,
  BookOpen,
  Pencil,
  Mic,
  BarChart,
  Clock,
  CheckCircle,
  Award,
  Users,
  Globe,
  Target,
  Zap,
  FileText,
  TrendingUp
} from 'lucide-react';
import { FaUniversity, FaGlobeAmericas, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

import exam from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const IELTS = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const examOverview = {
    fullName: "International English Language Testing System",
    duration: "2 hours 45 minutes",
    fee: "₹15,500 - ₹16,250",
    scoreRange: "0-9 bands",
    validity: "2 years",
    provider: "British Council, IDP"
  };

  const sections = [
    {
      title: "Listening",
      duration: "30 minutes + 10 min transfer",
      questions: "40 questions",
      score: "0-9 bands",
      description: "Four recordings of native English speakers with variety of accents",
      icon: <Headphones className="w-8 h-8" />,
      topics: ["Conversations", "Monologues", "Academic Discussions", "Everyday Situations"]
    },
    {
      title: "Reading",
      duration: "60 minutes",
      questions: "40 questions",
      score: "0-9 bands",
      description: "Three passages from books, journals, magazines, and newspapers",
      icon: <BookOpen className="w-8 h-8" />,
      topics: ["Reading Comprehension", "Matching", "True/False", "Diagram Labeling"]
    },
    {
      title: "Writing",
      duration: "60 minutes",
      questions: "2 tasks",
      score: "0-9 bands",
      description: "Task 1: Describe visual information. Task 2: Essay writing",
      icon: <Pencil className="w-8 h-8" />,
      topics: ["Task 1 (150 words)", "Task 2 (250 words)"]
    },
    {
      title: "Speaking",
      duration: "11-14 minutes",
      questions: "3 parts",
      score: "0-9 bands",
      description: "Face-to-face interview with certified IELTS examiner",
      icon: <Mic className="w-8 h-8" />,
      topics: ["Introduction", "Individual Topic", "Two-way Discussion"]
    }
  ];

  const whyIELTS = [
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Acceptance",
      description: "Recognized by 11,000+ organizations in 140+ countries"
    },
    {
      icon: <FaUniversity className="w-8 h-8" />,
      title: "University Requirements",
      description: "Required by most UK, Australian, Canadian, and NZ universities"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Immigration Purpose",
      description: "Accepted for student visas, work permits, and PR applications"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Fair Assessment",
      description: "Comprehensive evaluation of all four language skills"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multiple Test Dates",
      description: "48 test dates available annually at centers worldwide"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Results",
      description: "Receive your results within 13 days of test date"
    }
  ];

  const bandRequirements = [
    { band: "9.0", level: "Expert", description: "Full operational command" },
    { band: "8.0-8.5", level: "Very Good", description: "Fully operational with infrequent errors" },
    { band: "7.0-7.5", level: "Good", description: "Operational command with occasional errors" },
    { band: "6.0-6.5", level: "Competent", description: "Effective command despite inaccuracies" },
    { band: "5.0-5.5", level: "Modest", description: "Partial command, handles overall meaning" },
    { band: "Below 5.0", level: "Limited", description: "Frequent problems in understanding" }
  ];

  const statistics = [
    { number: "11,000+", label: "Organizations Accept", icon: <FaUniversity className="w-8 h-8" /> },
    { number: "140+", label: "Countries", icon: <Globe className="w-8 h-8" /> },
    { number: "4M+", label: "Annual Test Takers", icon: <Users className="w-8 h-8" /> },
    { number: "6.5", label: "Avg. Required Band", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={exam}
          alt="IELTS Exam"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        
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
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm font-semibold">🌍 English Proficiency Test</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              IELTS Exam
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Academic & General Training
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Most Popular English Test for Study Abroad and Immigration
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <NavLink to="/Contact">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join IELTS Coaching
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Exam Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              IELTS Exam Overview
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Full Name", value: "IELTS", icon: <FileText className="w-6 h-6" /> },
              { label: "Duration", value: examOverview.duration, icon: <Clock className="w-6 h-6" /> },
              { label: "Test Fee", value: examOverview.fee, icon: <FaDollarSign className="w-6 h-6" /> },
              { label: "Score Range", value: examOverview.scoreRange, icon: <BarChart className="w-6 h-6" /> },
              { label: "Validity", value: examOverview.validity, icon: <FaCalendarAlt className="w-6 h-6" /> },
              { label: "Provider", value: examOverview.provider, icon: <Award className="w-6 h-6" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3">
                  {item.icon}
                </div>
                <p className="text-gray-500 text-xs mb-1 uppercase">{item.label}</p>
                <p className="text-gray-900 font-bold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              IELTS Test Sections
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-primary font-semibold">{section.score}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">{section.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-secondary" />
                    <span className="text-gray-700">{section.questions}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {section.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Requirements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IELTS Band Score Explained
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bandRequirements.map((band, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{band.band}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{band.level}</h4>
                <p className="text-gray-600 text-sm">{band.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IELTS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IELTS?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyIELTS.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Achieve Your Target IELTS Band Score
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Expert coaching, practice tests, and personalized guidance
            </p>
            <NavLink to="/Contact">
              <motion.button
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start IELTS Preparation
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </section>

      <Scrolltotop />
      <GetStarted />
    </section>
  );
};

export default IELTS;
