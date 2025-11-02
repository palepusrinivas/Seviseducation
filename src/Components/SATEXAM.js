import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import {
  Clock,
  Calculator,
  BookOpen,
  PenTool,
  Award,
  Users,
  Target,
  CheckCircle,
  FileText,
  BarChart,
  TrendingUp,
  Zap
} from 'lucide-react';
import { FaUniversity, FaGraduationCap, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

import exam from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const SATEXAM = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const examOverview = {
    fullName: "Scholastic Assessment Test",
    duration: "3 hours (3h 50min with essay)",
    fee: "$60 ($68 with essay)",
    scoreRange: "400-1600",
    validity: "5 years",
    provider: "College Board"
  };

  const sections = [
    {
      title: "Evidence-Based Reading",
      duration: "65 minutes",
      questions: "52 questions",
      score: "200-800",
      description: "Reading comprehension and analysis",
      icon: <BookOpen className="w-8 h-8" />,
      topics: ["Reading passages", "Vocabulary in context", "Command of evidence"]
    },
    {
      title: "Writing and Language",
      duration: "35 minutes",
      questions: "44 questions",
      score: "Combined with Reading",
      description: "Grammar, punctuation, and rhetorical skills",
      icon: <PenTool className="w-8 h-8" />,
      topics: ["Standard English", "Expression of ideas", "Words in context"]
    },
    {
      title: "Mathematics",
      duration: "80 minutes",
      questions: "58 questions",
      score: "200-800",
      description: "Problem solving and data analysis",
      icon: <Calculator className="w-8 h-8" />,
      topics: ["Algebra", "Problem Solving", "Data Analysis", "Advanced Math"]
    },
    {
      title: "Essay (Optional)",
      duration: "50 minutes",
      questions: "1 essay",
      score: "Separate score",
      description: "Analytical writing on given passage",
      icon: <FileText className="w-8 h-8" />,
      topics: ["Source analysis"]
    }
  ];

  const whySAT = [
    {
      icon: <FaUniversity className="w-8 h-8" />,
      title: "College Admissions",
      description: "Required by most US colleges for undergraduate admissions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Standardized Measure",
      description: "Fair comparison of students from different backgrounds"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarship Opportunities",
      description: "Higher scores unlock merit-based scholarships"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Score Choice",
      description: "Send your best scores to colleges"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Multiple Attempts",
      description: "Take the test multiple times to improve score"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Test Dates",
      description: "7 test dates annually at centers worldwide"
    }
  ];

  const scoreRanges = [
    { range: "1400-1600", level: "Excellent", description: "Top tier universities" },
    { range: "1200-1390", level: "Good", description: "Competitive colleges" },
    { range: "1000-1190", level: "Average", description: "Many good options" },
    { range: "400-990", level: "Below Average", description: "Consider retaking" }
  ];

  const statistics = [
    { number: "2M+", label: "Annual Test Takers", icon: <Users className="w-8 h-8" /> },
    { number: "3,800+", label: "US Colleges", icon: <FaUniversity className="w-8 h-8" /> },
    { number: "1060", label: "Average Score", icon: <BarChart className="w-8 h-8" /> },
    { number: "1500+", label: "Top School Score", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <section className="bg-white">
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={exam}
          alt="SAT Exam"
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
              <span className="text-white text-sm font-semibold">🎓 Undergraduate Admissions</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SAT Exam
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Scholastic Assessment Test
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Gateway to Top US Undergraduate Programs
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
                  Join SAT Coaching
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SAT Exam Overview</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Full Name", value: "SAT", icon: <FileText className="w-6 h-6" /> },
              { label: "Duration", value: "3 hours", icon: <Clock className="w-6 h-6" /> },
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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SAT Test Sections</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100"
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SAT Score Ranges</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoreRanges.map((score, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{score.range}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{score.level}</h4>
                <p className="text-gray-600 text-sm">{score.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Take the SAT?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySAT.map((benefit, index) => (
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

      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Achieve 1500+ on SAT
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Expert coaching for top college admissions
            </p>
            <NavLink to="/Contact">
              <motion.button
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start SAT Preparation
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

export default SATEXAM;
