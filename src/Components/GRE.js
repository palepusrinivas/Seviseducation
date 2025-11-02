import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  PenTool,
  FileText,
  Clock,
  DollarSign,
  CheckCircle,
  Target,
  Award,
  TrendingUp,
  Zap,
  Calendar,
  Users,
  Brain,
  Calculator
} from 'lucide-react';
import { FaChartLine, FaUniversity, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

import exam from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const GRE = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const examOverview = {
    fullName: "Graduate Record Examination",
    duration: "3 hours 45 minutes",
    fee: "$205",
    scoreRange: "260-340",
    validity: "5 years",
    provider: "ETS (Educational Testing Service)"
  };

  const sections = [
    {
      title: "Analytical Writing",
      duration: "60 minutes",
      questions: "2 tasks",
      score: "0-6",
      description: "Assess critical thinking and analytical writing skills",
      icon: <PenTool className="w-8 h-8" />,
      topics: ["Analyze an Issue", "Analyze an Argument"]
    },
    {
      title: "Verbal Reasoning",
      duration: "60 minutes",
      questions: "40 questions (2 sections)",
      score: "130-170",
      description: "Evaluate reading comprehension and vocabulary",
      icon: <BookOpen className="w-8 h-8" />,
      topics: ["Reading Comprehension", "Text Completion", "Sentence Equivalence"]
    },
    {
      title: "Quantitative Reasoning",
      duration: "70 minutes",
      questions: "40 questions (2 sections)",
      score: "130-170",
      description: "Test mathematical and problem-solving abilities",
      icon: <Calculator className="w-8 h-8" />,
      topics: ["Arithmetic", "Algebra", "Geometry", "Data Analysis"]
    }
  ];

  const whyGRE = [
    {
      icon: <FaUniversity className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Accepted by 1,300+ business schools and thousands of graduate programs worldwide"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Flexible Programs",
      description: "Required for Master's, PhD, MBA, and specialized graduate programs"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Comprehensive Assessment",
      description: "Evaluates critical thinking, analytical writing, and reasoning skills"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Computer-Adaptive",
      description: "Section-adaptive format adjusts to your performance level"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Year-Round Testing",
      description: "Available throughout the year at Prometric test centers"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Score Select",
      description: "Send only your best scores to institutions with ScoreSelect option"
    }
  ];

  const prepTips = [
    {
      title: "Start Early",
      description: "Begin preparation 2-3 months before test date",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Official Materials",
      description: "Use ETS official GRE guides and practice tests",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Practice Tests",
      description: "Take full-length timed practice tests regularly",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Build Vocabulary",
      description: "Study 300-500 high-frequency GRE words",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Math Fundamentals",
      description: "Review basic arithmetic, algebra, and geometry",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Time Management",
      description: "Practice pacing yourself within time limits",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const statistics = [
    { number: "500K+", label: "Annual Test Takers", icon: <Users className="w-8 h-8" /> },
    { number: "1,300+", label: "Business Schools", icon: <FaUniversity className="w-8 h-8" /> },
    { number: "160+", label: "Countries", icon: <Award className="w-8 h-8" /> },
    { number: "315", label: "Avg. Score", icon: <FaChartLine className="w-8 h-8" /> }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={exam}
          alt="GRE Exam"
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
              <span className="text-white text-sm font-semibold">📚 Graduate Admissions Test</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              GRE Exam
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Graduate Record Examination
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Gateway to Top Graduate Programs Worldwide
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
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
                  Enroll in GRE Coaching
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
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              GRE Exam Overview
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive information about the Graduate Record Examination
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Full Name", value: examOverview.fullName, icon: <FileText className="w-6 h-6" /> },
              { label: "Duration", value: examOverview.duration, icon: <Clock className="w-6 h-6" /> },
              { label: "Test Fee", value: examOverview.fee, icon: <FaDollarSign className="w-6 h-6" /> },
              { label: "Score Range", value: examOverview.scoreRange, icon: <FaChartLine className="w-6 h-6" /> },
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

      {/* GRE Sections */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              GRE Test Sections
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding the three main sections of the GRE exam
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                        <p className="text-primary font-semibold">{section.score} score range</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{section.description}</p>
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
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Topics Covered:</h4>
                    <div className="space-y-2">
                      {section.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Take GRE */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Take the GRE?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover the benefits and opportunities the GRE opens for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyGRE.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              GRE Preparation Tips
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Expert strategies to achieve your target GRE score
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prepTips.map((tip, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary">
                  {tip.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{tip.title}</h4>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Ace Your GRE?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join Sevis Global's expert GRE coaching program and achieve your dream score
            </p>
            <NavLink to="/Contact">
              <motion.button
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start GRE Preparation Now
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

export default GRE;
