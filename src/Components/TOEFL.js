import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import {
  Headphones,
  BookOpen,
  Mic,
  Edit,
  BarChart,
  Clock,
  CheckCircle,
  Award,
  Users,
  Globe,
  Target,
  FileText,
  Brain
} from 'lucide-react';
import { FaUniversity, FaGlobeAmericas, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

import exam from "../assest/student-doing-the-test-exam-2022-12-15-23-22-34-utc-min-scaled.jpg";
import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

const TOEFL = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const examOverview = {
    fullName: "Test of English as a Foreign Language",
    duration: "3 hours",
    fee: "$185-$200",
    scoreRange: "0-120",
    validity: "2 years",
    provider: "ETS"
  };

  const sections = [
    {
      title: "Reading",
      duration: "54-72 minutes",
      questions: "30-40 questions",
      score: "0-30",
      description: "3-4 passages from academic texts with comprehension questions",
      icon: <BookOpen className="w-8 h-8" />,
      topics: ["Academic passages", "Multiple choice", "Inference questions"]
    },
    {
      title: "Listening",
      duration: "41-57 minutes",
      questions: "28-39 questions",
      score: "0-30",
      description: "Lectures and conversations from university settings",
      icon: <Headphones className="w-8 h-8" />,
      topics: ["Lectures", "Conversations", "Note-taking"]
    },
    {
      title: "Speaking",
      duration: "17 minutes",
      questions: "4 tasks",
      score: "0-30",
      description: "Express opinions and summarize information verbally",
      icon: <Mic className="w-8 h-8" />,
      topics: ["Independent tasks", "Integrated tasks"]
    },
    {
      title: "Writing",
      duration: "50 minutes",
      questions: "2 tasks",
      score: "0-30",
      description: "Integrated task and independent essay writing",
      icon: <Edit className="w-8 h-8" />,
      topics: ["Integrated writing", "Independent essay"]
    }
  ];

  const whyTOEFL = [
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "USA Preference",
      description: "Preferred by 90% of US universities and colleges"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Academic Focus",
      description: "Designed specifically for academic English proficiency"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fair Assessment",
      description: "AI and human raters ensure objective scoring"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Accepted by 11,500+ institutions in 160+ countries"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "iBT Format",
      description: "Internet-based test available at home or test centers"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Score Reporting",
      description: "Send unlimited score reports to institutions"
    }
  ];

  const scoreRanges = [
    { range: "110-120", level: "Advanced", description: "Excellent English proficiency" },
    { range: "95-109", level: "High Intermediate", description: "Good command of English" },
    { range: "80-94", level: "Intermediate", description: "Acceptable for many programs" },
    { range: "60-79", level: "Low Intermediate", description: "Basic understanding" }
  ];

  const statistics = [
    { number: "11,500+", label: "Institutions Accept", icon: <FaUniversity className="w-8 h-8" /> },
    { number: "160+", label: "Countries", icon: <Globe className="w-8 h-8" /> },
    { number: "2M+", label: "Annual Test Takers", icon: <Users className="w-8 h-8" /> },
    { number: "90", label: "Avg. Score Required", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <section className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={exam}
          alt="TOEFL Exam"
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
              <span className="text-white text-sm font-semibold">🇺🇸 USA's Top English Test</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              TOEFL iBT
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Test of English as a Foreign Language
              </span>
            </motion.h1>
            
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Preferred by 90% of US Universities for Graduate Admissions
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
                  Join TOEFL Coaching
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TOEFL Exam Overview</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Full Name", value: "TOEFL iBT", icon: <FileText className="w-6 h-6" /> },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TOEFL Test Sections</h2>
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

      {/* Score Ranges */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TOEFL Score Levels</h2>
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

      {/* Why TOEFL */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TOEFL?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTOEFL.map((benefit, index) => (
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
              Achieve 100+ on TOEFL iBT
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Expert coaching for all four sections with proven strategies
            </p>
            <NavLink to="/Contact">
              <motion.button
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start TOEFL Preparation
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

export default TOEFL;
