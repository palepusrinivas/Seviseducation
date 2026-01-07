import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import {
  Info,
  FileText,
  BookOpen,
  BarChart,
  Clock,
  CheckCircle,
  Award,
  Users,
  Target,
  Brain,
  Calculator,
  PenTool,
  TrendingUp
} from 'lucide-react';
import { FaUniversity, FaBriefcase, FaCalendarAlt, FaDollarSign, FaChartLine } from 'react-icons/fa';

import exam from "../assest/GMAT.webp";
import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const GMAT = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const examOverview = {
    fullName: "Graduate Management Admission Test",
    duration: "3 hours 30 minutes",
    fee: "$275",
    scoreRange: "200-800",
    validity: "5 years",
    provider: "GMAC"
  };

  const sections = [
    {
      title: "Quantitative Reasoning",
      duration: "75 minutes",
      questions: "36 questions",
      score: "0-60",
      description: "Problem solving and data sufficiency",
      icon: <Calculator className="w-8 h-8" />,
      topics: ["Arithmetic", "Algebra", "Geometry", "Data Sufficiency"]
    },
    {
      title: "Verbal Reasoning",
      duration: "75 minutes",
      questions: "36 questions",
      score: "0-60",
      description: "Critical reasoning and reading comprehension",
      icon: <BookOpen className="w-8 h-8" />,
      topics: ["Reading Comprehension", "Critical Reasoning", "Sentence Correction"]
    },
    {
      title: "Integrated Reasoning",
      duration: "30 minutes",
      questions: "12 questions",
      score: "1-8",
      description: "Multi-format data analysis",
      icon: <BarChart className="w-8 h-8" />,
      topics: ["Multi-Source Reasoning", "Table Analysis", "Graphics Interpretation"]
    },
    {
      title: "Analytical Writing",
      duration: "30 minutes",
      questions: "1 essay",
      score: "0-6",
      description: "Argument analysis essay",
      icon: <PenTool className="w-8 h-8" />,
      topics: ["Argument Analysis"]
    }
  ];

  const whyGMAT = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "MBA Programs",
      description: "Required by top business schools"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Computer Adaptive",
      description: "Difficulty adjusts to your performance"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictive Validity",
      description: "Strong predictor of program success"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Advancement",
      description: "Access to top business schools"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarship Opportunities",
      description: "Higher scores increase scholarship chances"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Network",
      description: "7,000+ business programs worldwide"
    }
  ];

  const scoreRanges = [
    { range: "710-800", level: "Exceptional", description: "Top 10% - Elite programs" },
    { range: "650-710", level: "Excellent", description: "Top 25% - Top tier" },
    { range: "570-650", level: "Good", description: "Above average" },
    { range: "400-570", level: "Average", description: "Competitive" }
  ];

  const statistics = [
    { number: "7,000+", label: "Business Programs", icon: <FaBriefcase className="w-8 h-8" /> },
    { number: "114", label: "Countries", icon: <FaUniversity className="w-8 h-8" /> },
    { number: "200K+", label: "Annual Test Takers", icon: <Users className="w-8 h-8" /> },
    { number: "560", label: "Average Score", icon: <FaChartLine className="w-8 h-8" /> }
  ];

  return (
    <section className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={exam}
          alt="GMAT Exam"
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
            {/* <motion.div
              className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm font-semibold">💼 Business School Test</span>
            </motion.div> */}

            <motion.h1 
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              GMAT Exam
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Graduate Management Admission Test
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Gateway to Top MBA Programs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <NavLink to="/Contact">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join GMAT Coaching
                </motion.button>
              </NavLink> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
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

      {/* Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exam Overview</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Full Name", value: "GMAT", icon: <FileText className="w-6 h-6" /> },
              { label: "Duration", value: examOverview.duration, icon: <Clock className="w-6 h-6" /> },
              { label: "Test Fee", value: examOverview.fee, icon: <FaDollarSign className="w-6 h-6" /> },
              { label: "Score Range", value: examOverview.scoreRange, icon: <BarChart className="w-6 h-6" /> },
              { label: "Validity", value: examOverview.validity, icon: <FaCalendarAlt className="w-6 h-6" /> },
              { label: "Provider", value: examOverview.provider, icon: <Award className="w-6 h-6" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
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

      {/* Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Test Sections</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
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

      {/* Score Levels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Score Ranges</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoreRanges.map((score, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="text-4xl font-bold text-primary mb-2">{score.range}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{score.level}</h4>
                <p className="text-gray-600 text-sm">{score.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GMAT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why GMAT?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyGMAT.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
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
              Score 700+ on GMAT
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Expert coaching for top business schools
            </p>
            <NavLink to="/Contact">
              <motion.button
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start GMAT Preparation
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

export default GMAT;
