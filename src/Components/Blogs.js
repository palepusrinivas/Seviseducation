import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen, FileText, Globe, CheckCircle,
  ArrowRight, ArrowLeft, Award, Phone,
  Sparkles, GraduationCap,
  TrendingUp, AlertCircle, Target, Briefcase,
  DollarSign, Shield, Calculator, Clock, Zap,
  Search, Filter, Share2, Eye, Heart,
  User, Tag, Star, TrendingDown, X, Menu, Users, Mail
} from 'lucide-react';

// Images
import blog1 from '../assest/BLOGs1.avif';
import Scrolltotop from './Scrolltotop';
import GetStarted from './GetStrated';

import b1b2 from "../assest/B1B2.avif";
import visap from "../assest/visap.avif";
import visa1 from "../assest/visa1.avif";
import bisiness from "../assest/businessmancity.avif";
import young from "../assest/young.avif";
import group from "../assest/group.webp";
import woman from "../assest/woman-travel.avif";
import woman1 from "../assest/woman-enjoy.avif";
import teamwork from "../assest/teamwork.avif";
import middle  from "../assest/middle.avif";
import american from "../assest/american-.avif";
import young1 from "../assest/young1.avif";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [likedBlogs, setLikedBlogs] = useState(new Set());

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle blog selection with scroll to top
  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
    setActiveTab(0); // Reset to first tab
    // Small delay to ensure state update before scroll
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  // Handle back to blogs with scroll to top
  const handleBackToBlogs = () => {
    setSelectedBlog(null);
    setVisibleSections(new Set());
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const blogs = [
    {
      id: 1,
      title: "B1/B2 Visa Process for Indian Citizens: Travel to the USA",
      category: "Visa Process",
      image: b1b2,
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      excerpt: "The B1/B2 visa is the most common non-immigrant visa for Indians traveling to the USA for business, tourism, or short-term visits.",
      content: {
        introduction: "The B1/B2 visa is the most common non-immigrant visa for Indians traveling to the USA for business, tourism, or short-term visits. Understanding the application process, documentation, and interview preparation is essential to ensure a smooth visa experience.",
        sections: [
          {
            id: 1,
            title: "What is a B1/B2 Visa?",
            points: [
              "B1 Visa (Business): For Indian citizens visiting the USA for business purposes, including meetings, conferences, or consultations.",
              "B2 Visa (Tourist): For tourism, visiting family, or medical treatment in the USA.",
              "The B1/B2 visa is typically issued as a combined visa, allowing both business and tourism activities during the visit."
            ]
          },
          {
            id: 2,
            title: "Eligibility Criteria",
            points: [
              "Have a valid Indian passport",
              "Show proof of strong ties to India (job, property, family)",
              "Demonstrate sufficient funds for travel and stay in the USA",
              "Intend to return to India after the visit"
            ]
          },
          {
            id: 3,
            title: "Step-by-Step B1/B2 Visa Process",
            steps: [
              {
                step: "Step 1: Complete the DS-160 Form",
                details: [
                  "Fill out the online Non-Immigrant Visa Application (DS-160)",
                  "Upload a recent passport-sized photo and review details carefully"
                ]
              },
              {
                step: "Step 2: Pay the Visa Fee",
                details: [
                  "The non-refundable visa application fee is currently $185 for Indian citizens"
                ]
              },
              {
                step: "Step 3: Schedule a Visa Appointment",
                details: [
                  "Book an appointment at the nearest US Embassy or Consulate in India (Delhi, Mumbai, Chennai, Hyderabad, Kolkata)",
                  "Choose interview date based on your travel plans"
                ]
              },
              {
                step: "Step 4: Gather Required Documents",
                details: [
                  "Valid passport with at least 6 months validity",
                  "DS-160 confirmation page",
                  "Visa appointment confirmation",
                  "Financial documents (bank statements, salary slips, tax returns)",
                  "Travel itinerary, hotel bookings, or conference invitations"
                ]
              },
              {
                step: "Step 5: Attend the Visa Interview",
                details: [
                  "Be honest, concise, and confident",
                  "Common questions include:",
                  "  • Purpose of your visit",
                  "  • Duration of stay",
                  "  • Financial capability",
                  "  • Ties to India and intention to return"
                ]
              },
              {
                step: "Step 6: Visa Issuance",
                details: [
                  "If approved, your passport will be stamped with the B1/B2 visa",
                  "Processing typically takes 3–7 business days, but timelines can vary"
                ]
              }
            ]
          },
          {
            id: 4,
            title: "Tips for a Successful B1/B2 Visa Application",
            points: [
              "Be honest and consistent in your application and interview",
              "Provide clear proof of financial stability",
              "Avoid over-explaining; answer only what is asked",
              "Carry supporting documents but do not overwhelm the officer",
              "Plan your application in advance to avoid delays"
            ]
          },
          {
            id: 5,
            title: "Validity & Duration",
            points: [
              "Most B1/B2 visas for Indian citizens are issued for 10 years multiple-entry",
              "Typically, stay is allowed for 6 months per visit, which can sometimes be extended at the discretion of US immigration authorities"
            ]
          }
        ],
        finalThought: "The B1/B2 visa process is straightforward if Indian travelers prepare carefully, provide accurate documentation, and demonstrate clear travel intent. By following the process and preparing for the interview, you can enjoy a smooth entry into the USA for business or tourism."
      }
    },
    {
      id: 2,
      title: "How to Write a Winning SOP for MS & PhD Programs in USA",
      category: "Application Guide",
      image: visap,
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      excerpt: "A Statement of Purpose (SOP) plays a decisive role in admissions to MS and PhD programs in the USA.",
      content: {
        introduction: "A Statement of Purpose (SOP) plays a decisive role in admissions to MS and PhD programs in the USA. While both require clarity, motivation, and alignment with the program, PhD SOPs demand a stronger research focus compared to MS SOPs. Follow these key points to create a compelling SOP:",
        sections: [
          {
            id: 1,
            title: "Begin with Clear Academic Motivation",
            points: [
              "How your interest in the field developed",
              "What academic or research experience influenced your decision",
              "For PhD applicants, highlight your research curiosity early.",
              "For MS applicants, focus on skill development and academic growth."
            ]
          },
          {
            id: 2,
            title: "Present Your Academic Background Strategically",
            points: [
              "Core subjects and coursework",
              "Academic achievements",
              "Projects, thesis, or internships",
              "PhD applicants should emphasize research methodology and outcomes, while MS applicants should focus on technical foundation and readiness."
            ]
          },
          {
            id: 3,
            title: "Highlight Research Experience (Especially for PhD)",
            points: [
              "Research projects or publications",
              "Tools, techniques, or methodologies used",
              "Key learnings and problem-solving approach",
              "For MS applicants, academic projects or industry exposure can demonstrate research potential."
            ]
          },
          {
            id: 4,
            title: "Why This Program & University?",
            points: [
              "This specific program",
              "Curriculum structure, labs, or specializations",
              "Faculty members (mandatory for PhD, optional for MS)",
              "Demonstrate a clear understanding of how the program supports your goals."
            ]
          },
          {
            id: 5,
            title: "Why Study in the USA?",
            points: [
              "Research-driven learning",
              "Interdisciplinary flexibility",
              "Exposure to innovation and global standards",
              "Ensure your explanation is personalized, not generic."
            ]
          },
          {
            id: 6,
            title: "Define Career & Academic Goals",
            points: [
              "MS: Skill acquisition, industry roles, professional growth",
              "PhD: Research goals, academic contributions, long-term research vision",
              "Goals should be realistic and logically connected to the program."
            ]
          },
          {
            id: 7,
            title: "Address Academic Gaps or Transitions (If Any)",
            points: [
              "Gaps in education",
              "Low GPA",
              "Career changes",
              "Explain them honestly, emphasizing growth, learning, and direction."
            ]
          },
          {
            id: 8,
            title: "Demonstrate Your Fit & Contribution",
            points: [
              "Alignment with faculty research (for PhD)",
              "How your background adds value to the program",
              "Participation in academic, research, or campus activities",
              "US universities look for collaborative and motivated learners."
            ]
          },
          {
            id: 9,
            title: "Maintain a Professional & Authentic Tone",
            points: [
              "Be concise and structured",
              "Avoid exaggeration or copied content",
              "Reflect confidence with humility",
              "Your SOP should sound genuine and purposeful."
            ]
          },
          {
            id: 10,
            title: "Edit, Proofread & Follow Guidelines",
            points: [
              "Check clarity and grammar",
              "Maintain word limits",
              "Ensure smooth flow and coherence",
              "A refined SOP reflects strong academic discipline."
            ]
          }
        ],
        finalThought: "A winning SOP for MS or PhD connects your academic past, present strengths, and future vision into a clear and compelling narrative."
      }
    },
    {
      id: 3,
      title: "Recommendation Letters: Who to Choose & What US Universities Expect",
      category: "Application Guide",
      image: visa1,
      icon: <Award className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
      excerpt: "Letters of Recommendation (LORs) are a crucial part of MS and PhD applications to US universities.",
      content: {
        introduction: "Letters of Recommendation (LORs) are a crucial part of MS and PhD applications to US universities. They provide an independent evaluation of your academic ability, research potential, and professional conduct—often carrying as much weight as your SOP. Understanding who to choose and what universities expect can significantly strengthen your application.",
        sections: [
          {
            id: 1,
            title: "Why Recommendation Letters Matter",
            points: [
              "Your academic competence beyond grades",
              "Your research and analytical skills",
              "Your attitude, integrity, and teamwork",
              "Your potential for graduate-level study",
              "A strong LOR validates the claims you make in your SOP."
            ]
          },
          {
            id: 2,
            title: "Who Should Write Your Recommendation Letter?",
            description: "Choose recommenders who know you well academically or professionally, not based on designation alone.",
            subsections: [
              {
                title: "For MS Applicants:",
                points: [
                  "Professors who taught core or advanced subjects",
                  "Project or internship supervisors",
                  "Employers (if you have relevant work experience)"
                ]
              },
              {
                title: "For PhD Applicants:",
                points: [
                  "Research supervisors or thesis guides",
                  "Professors with whom you conducted research",
                  "Principal Investigators or lab mentors",
                  "Research familiarity is critical for PhD recommendations."
                ]
              }
            ]
          },
          {
            id: 3,
            title: "What US Universities Expect in an LOR",
            points: [
              "Be specific and detailed, not generic",
              "Highlight your academic or research strengths",
              "Provide examples of problem-solving, leadership, or innovation",
              "Compare you positively among peers (if possible)",
              "Admissions committees value depth over praise."
            ]
          },
          {
            id: 4,
            title: "Academic vs Professional Recommendations",
            points: [
              "Academic LORs focus on intellectual ability, coursework, and research skills",
              "Professional LORs focus on work ethic, responsibility, and real-world application",
              "Most US universities prefer academic LORs, especially for MS and PhD programs."
            ]
          },
          {
            id: 5,
            title: "How Many LORs Are Required?",
            points: [
              "MS Programs: 2–3 recommendation letters",
              "PhD Programs: 3 strong academic or research-based letters",
              "Always check individual university requirements."
            ]
          },
          {
            id: 6,
            title: "How to Approach Your Recommenders",
            points: [
              "Ask at least 6–8 weeks in advance",
              "Share your SOP, resume, transcripts, and program details",
              "Clearly mention deadlines and submission process",
              "This helps your recommender write a focused and impactful letter."
            ]
          },
          {
            id: 7,
            title: "Common Mistakes to Avoid",
            points: [
              "Choosing recommenders who barely know you",
              "Submitting generic or copied letters",
              "Missing deadlines or incomplete uploads",
              "Mixing weak professional LORs for research programs",
              "Quality matters more than position or seniority."
            ]
          },
          {
            id: 8,
            title: "Confidentiality & Submission Process",
            points: [
              "Online submission directly by the recommender",
              "Waiving your right to view the letter",
              "Confidential LORs are considered more credible."
            ]
          },
          {
            id: 9,
            title: "Difference Between MS & PhD LOR Expectations",
            points: [
              "MS: Academic readiness, learning ability, skill application",
              "PhD: Research aptitude, originality, independence, perseverance",
              "PhD LORs must strongly support your research potential."
            ]
          }
        ],
        finalThought: "Strong recommendation letters come from the right people, with the right perspective, written with clarity and credibility—making your application stand out."
      }
    },
    {
      id: 4,
      title: "Ivy League vs Private Ivies: Which Is Right for You?",
      category: "University Guide",
      image: bisiness,
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-600",
      excerpt: "Understanding the differences between Ivy League and Private Ivies can help you choose the university that best aligns with your goals, profile, and aspirations.",
      content: {
        introduction: "When planning higher education in the USA, many students aim for the Ivy League. However, several Private Ivy–equivalent universities, often called 'Private Ivies,' offer academic excellence, global recognition, and strong career outcomes comparable to Ivy League institutions. Understanding the differences can help you choose the university that best aligns with your goals, profile, and aspirations.",
        sections: [
          {
            id: 1,
            title: "What Are Ivy League Universities?",
            points: [
              "The Ivy League is a group of eight historic private universities known for academic excellence, research leadership, and elite reputation.",
              "Ivy League universities include: Harvard University, Yale University, Princeton University, Columbia University, University of Pennsylvania, Brown University, Dartmouth College, and Cornell University.",
              "These institutions are highly selective and known for strong alumni networks, research output, and global prestige."
            ]
          },
          {
            id: 2,
            title: "What Are Private Ivies?",
            points: [
              "'Private Ivies' is an informal term used for top-tier private universities that offer education and outcomes comparable to Ivy League schools but are not part of the Ivy League athletic conference.",
              "Examples include: Stanford University, Massachusetts Institute of Technology (MIT), California Institute of Technology (Caltech), University of Chicago, Duke University, Northwestern University, and Johns Hopkins University.",
              "Many of these universities often outperform Ivy League schools in specific disciplines such as engineering, technology, medicine, and research."
            ]
          },
          {
            id: 3,
            title: "Academics & Specializations",
            points: [
              "Ivy League: Strong emphasis on liberal arts, humanities, business, law, and social sciences, with solid STEM programs as well.",
              "Private Ivies: Often excel in STEM, innovation, entrepreneurship, and research-intensive fields.",
              "Students should prioritize program strength over brand name."
            ]
          },
          {
            id: 4,
            title: "Admissions Selectivity",
            points: [
              "Both Ivy League and Private Ivies are extremely competitive with holistic admissions processes.",
              "Emphasis on academics, research, leadership, and extracurriculars.",
              "Strong SOPs and recommendation letters are critical.",
              "Private Ivies may offer slightly more flexibility depending on the program and applicant profile."
            ]
          },
          {
            id: 5,
            title: "Campus Culture & Learning Environment",
            points: [
              "Ivy League: Traditional, historic campuses with strong academic traditions.",
              "Private Ivies: Often more modern, innovation-driven, and interdisciplinary.",
              "Your learning style—traditional vs experimental—matters greatly."
            ]
          },
          {
            id: 6,
            title: "Research & Career Outcomes",
            points: [
              "Both groups provide world-class faculty and facilities.",
              "Strong industry connections and high employability.",
              "Global career opportunities for graduates.",
              "Many Private Ivies have stronger industry partnerships, especially in tech, healthcare, and startups."
            ]
          },
          {
            id: 7,
            title: "Cost & Financial Aid",
            points: [
              "Ivy League universities are known for generous need-based financial aid.",
              "Private Ivies also offer scholarships but may vary by institution.",
              "International students should evaluate total cost vs return on investment."
            ]
          },
          {
            id: 8,
            title: "Which One Is Right for You?",
            subsections: [
              {
                title: "Choose an Ivy League university if you value:",
                points: [
                  "Prestige and tradition",
                  "Strong liberal arts focus",
                  "Historic academic legacy"
                ]
              },
              {
                title: "Choose a Private Ivy if you value:",
                points: [
                  "Specialized programs and innovation",
                  "Industry exposure and applied research",
                  "Entrepreneurial ecosystem"
                ]
              }
            ]
          }
        ],
        finalThought: "Success in the USA depends less on the Ivy label and more on program fit, academic preparation, and career strategy. The right university is one that aligns with your strengths and future goals—not just its name."
      }
    },
    {
      id: 5,
      title: "Top Reasons Indian Students Choose the USA for Higher Education",
      category: "Study Abroad Guide",
      image: young,
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      excerpt: "The United States of America remains the most preferred destination for Indian students seeking quality higher education.",
      content: {
        introduction: "The United States of America remains the most preferred destination for Indian students seeking quality higher education. With its world-class universities, cutting-edge research opportunities, and global recognition, the US offers an unmatched academic and career advantage. Here are the top reasons why Indian students choose the USA for study abroad programs.",
        sections: [
          {
            id: 1,
            title: "World-Class Education in USA Universities",
            points: [
              "US universities are globally recognized for their academic excellence, research facilities, and distinguished faculty.",
              "Institutions like MIT, Stanford, Harvard, and UC Berkeley provide Indian students with access to state-of-the-art resources and innovative learning environments.",
              "Ensuring students receive top-tier higher education in the USA."
            ]
          },
          {
            id: 2,
            title: "Flexible Programs & Interdisciplinary Learning",
            points: [
              "The US education system allows flexibility in course selection.",
              "Indian students can explore undergraduate, MS, or PhD programs tailored to their interests.",
              "From engineering, computer science, and business management to arts, social sciences, and emerging technologies like AI and data analytics.",
              "Students can choose programs that align with career goals in the USA or globally."
            ]
          },
          {
            id: 3,
            title: "Research & Innovation Opportunities",
            points: [
              "Many US universities encourage research-oriented learning, offering Indian students opportunities to work on advanced projects, laboratory research, and industry collaborations.",
              "Participation in publications, patents, and innovative research gives students a significant competitive advantage in their MS or PhD journey."
            ]
          },
          {
            id: 4,
            title: "Global Recognition & Career Prospects",
            points: [
              "Degrees from US universities are recognized worldwide, increasing employability and professional credibility.",
              "Indian students graduating from reputed US universities often secure high-paying jobs, internships, and research positions globally."
            ]
          },
          {
            id: 5,
            title: "Work Opportunities During & After Studies",
            points: [
              "Programs like OPT (Optional Practical Training) and CPT (Curricular Practical Training) allow Indian students to gain work experience in the USA while pursuing higher education.",
              "This practical exposure enhances career readiness and provides a pathway to long-term professional growth."
            ]
          },
          {
            id: 6,
            title: "Cultural Diversity & International Exposure",
            points: [
              "Studying in the USA exposes Indian students to a diverse cultural environment, fostering interpersonal skills, global perspectives, and adaptability.",
              "Interaction with peers from different countries enriches learning experiences and personal development."
            ]
          },
          {
            id: 7,
            title: "Scholarships & Financial Support",
            points: [
              "Many US universities offer merit-based scholarships, assistantships, and financial aid to international students.",
              "Indian students can benefit from tuition reductions and research or teaching assistantships, making higher education in the USA more affordable."
            ]
          },
          {
            id: 8,
            title: "Entrepreneurial & Innovation Ecosystem",
            points: [
              "US universities are hubs for startups, innovation labs, and mentorship programs.",
              "Indian students aspiring to launch their own ventures can leverage these resources to transform ideas into successful startups."
            ]
          },
          {
            id: 9,
            title: "Personal Growth & Independence",
            points: [
              "Studying in the USA develops self-reliance, problem-solving skills, and resilience.",
              "Indian students gain critical thinking and leadership abilities that extend beyond the classroom."
            ]
          }
        ],
        finalThought: "For Indian students, the USA offers a combination of academic excellence, research opportunities, and global career prospects. Choosing the right university and program can create a strong foundation for a successful international career."
      }
    },
    {
      id: 6,
      title: "Duolingo vs IELTS for USA: Which One Should You Choose?",
      category: "Test Guide",
      image: group,
      icon: <Target className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-600",
      excerpt: "For Indian students planning to study in the USA, proving English proficiency is a critical part of the application process.",
      content: {
        introduction: "For Indian students planning to study in the USA, proving English proficiency is a critical part of the application process. Traditionally, IELTS has been the standard test, but with the rise of online testing, the Duolingo English Test has emerged as a convenient alternative. Choosing the right test can impact your admissions process, preparation time, and overall application strategy.",
        sections: [
          {
            id: 1,
            title: "Test Format & Duration",
            subsections: [
              {
                title: "IELTS:",
                points: [
                  "Conducted in-person at authorized centers",
                  "Duration: 2 hours 45 minutes",
                  "Sections: Listening, Reading, Writing, Speaking",
                  "Speaking is evaluated face-to-face with an examiner"
                ]
              },
              {
                title: "Duolingo English Test:",
                points: [
                  "Completely online and can be taken from home",
                  "Duration: 45 minutes",
                  "Sections: Reading, Writing, Listening, Speaking (integrated tasks)",
                  "Speaking is recorded and evaluated digitally"
                ]
              }
            ]
          },
          {
            id: 2,
            title: "Acceptance by US Universities",
            points: [
              "Most US universities accept both IELTS and Duolingo, but acceptance may vary by program or department.",
              "During COVID-19, many universities expanded acceptance of Duolingo as a valid alternative.",
              "Always check the specific university requirements before applying."
            ]
          },
          {
            id: 3,
            title: "Test Costs & Accessibility",
            points: [
              "IELTS: Costs around $200–$250, requires travel to a test center, and has fixed dates.",
              "Duolingo: Costs around $49, can be taken from home anytime, and provides quick results (usually within 48 hours).",
              "For Indian students in remote locations or tight schedules, Duolingo may be more convenient."
            ]
          },
          {
            id: 4,
            title: "Preparation & Difficulty",
            subsections: [
              {
                title: "IELTS:",
                points: [
                  "Focus on academic English, grammar, essay writing, and spoken English practice",
                  "Requires structured preparation and often coaching"
                ]
              },
              {
                title: "Duolingo:",
                points: [
                  "Shorter, adaptive test that adjusts question difficulty based on responses",
                  "Emphasizes overall English communication rather than academic essays",
                  "Preparation is generally less intensive and shorter-term"
                ]
              }
            ]
          },
          {
            id: 5,
            title: "Scores & University Requirements",
            points: [
              "IELTS: Scored 0–9 bands, many universities require 6.5–7.5 overall",
              "Duolingo: Scored 10–160, most US universities accept 105–120 as minimum",
              "Some programs may prefer IELTS for higher-level courses, while others accept either"
            ]
          },
          {
            id: 6,
            title: "Which Test Should You Choose?",
            subsections: [
              {
                title: "Choose IELTS if:",
                points: [
                  "You prefer a traditional exam format",
                  "You are comfortable with academic essay writing and speaking in person",
                  "Your target university or program specifically requires IELTS"
                ]
              },
              {
                title: "Choose Duolingo if:",
                points: [
                  "You want flexibility and convenience",
                  "You are looking for quick results",
                  "Travel or test-center access is an issue"
                ]
              }
            ]
          }
        ],
        finalThought: "Both Duolingo and IELTS are recognized by US universities, but the best choice depends on your profile, timeline, and university requirements. Indian students planning for MS, MBA, or PhD programs in the USA should evaluate cost, convenience, and test preparation needs before deciding."
      }
    },
    {
      id: 7,
      title: "Common Mistakes Indian Students Make in US University Applications",
      category: "Application Guide",
      image: woman,
      icon: <AlertCircle className="w-8 h-8" />,
      gradient: "from-amber-500 to-orange-600",
      excerpt: "Applying to US universities can be a rewarding yet challenging experience for Indian students.",
      content: {
        introduction: "Applying to US universities can be a rewarding yet challenging experience for Indian students. While the USA offers world-class education and global career opportunities, mistakes in the application process can significantly impact admission chances. Understanding these common pitfalls helps students strengthen their applications for MS, PhD, or undergraduate programs.",
        sections: [
          {
            id: 1,
            title: "Weak or Generic Statement of Purpose (SOP)",
            points: [
              "Many Indian students submit SOPs that are vague, generic, or overly formal.",
              "Admissions committees look for: Clear academic and career goals, genuine motivation for choosing the program and university, and specific examples of projects, research, or achievements.",
              "Tip: Customize your SOP for each university. Avoid copy-pasting or using generic templates."
            ]
          },
          {
            id: 2,
            title: "Poorly Chosen Recommendation Letters (LORs)",
            points: [
              "A common mistake is selecting recommenders based on seniority rather than familiarity.",
              "Strong LORs should come from professors or supervisors who know your work well, highlight your skills, research potential, and leadership, and provide specific examples rather than generic praise.",
              "For PhD applications, a weak or non-research-focused LOR can hurt your chances significantly."
            ]
          },
          {
            id: 3,
            title: "Ignoring University & Program Fit",
            points: [
              "Many students apply to universities based solely on brand names or rankings.",
              "Admissions committees assess program fit, which includes: Alignment of your academic background with the program, research interests matching faculty or labs, and career objectives suited to program offerings.",
              "Tip: Research faculty, labs, and course structure to demonstrate genuine fit in your SOP and interviews."
            ]
          },
          {
            id: 4,
            title: "Underestimating Standardized Tests & English Proficiency",
            points: [
              "Common issues include: Low GRE/GMAT/SAT scores without proper preparation, not achieving the required IELTS, TOEFL, or Duolingo scores, and poor understanding of test deadlines.",
              "Tip: Plan test preparation months in advance and aim to exceed minimum score requirements."
            ]
          },
          {
            id: 5,
            title: "Procrastination & Missing Deadlines",
            points: [
              "Indian students often underestimate the time required for applications, SOPs, LORs, and visa processes.",
              "Missing deadlines can lead to: Applications being rejected outright, lost scholarship opportunities, and increased stress and rushed documents.",
              "Tip: Create a timeline for each application including test dates, essays, LOR submissions, and visa procedures."
            ]
          },
          {
            id: 6,
            title: "Overlooking Details & Proofreading",
            points: [
              "Even small mistakes—grammar errors, formatting issues, incorrect university names, or inconsistent data—can reflect poorly on the applicant.",
              "Tip: Proofread multiple times and have mentors or consultants review your application."
            ]
          },
          {
            id: 7,
            title: "Lack of Research on Funding & Scholarships",
            points: [
              "Many students ignore financial planning and scholarship opportunities, applying only to programs with high tuition fees.",
              "Understanding funding options can: Reduce financial stress and improve chances of admission (some scholarships are merit-based)."
            ]
          }
        ],
        finalThought: "Indian students can maximize their chances of admission to US universities by avoiding these common mistakes. Focus on strong SOPs, credible LORs, test preparation, university fit, and attention to detail. Early planning and strategic application can make the difference between acceptance and rejection."
      }
    },
    {
      id: 8,
      title: "OPT & CPT Explained: Working in the USA After Graduation",
      category: "Work Authorization",
      image: woman1,
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-blue-600 to-indigo-700",
      excerpt: "For Indian students studying in the USA, gaining practical work experience during or after your program is often a top priority.",
      content: {
        introduction: "For Indian students studying in the USA, gaining practical work experience during or after your program is often a top priority. Two programs—Optional Practical Training (OPT) and Curricular Practical Training (CPT)—allow international students to gain valuable professional experience while staying compliant with F-1 visa regulations. Understanding these programs is critical for MS, PhD, or other graduate students planning to work in the USA.",
        sections: [
          {
            id: 1,
            title: "What is Curricular Practical Training (CPT)?",
            points: [
              "CPT is a temporary work authorization that allows international students to work in a job directly related to their course of study while still enrolled.",
              "Can be part-time (≤20 hours/week) during semesters or full-time during breaks.",
              "Must be integral to your curriculum (internship, co-op, practicum, or research).",
              "Requires approval from your university's International Student Office.",
              "Usually used before graduation."
            ]
          },
          {
            id: 2,
            title: "What is Optional Practical Training (OPT)?",
            points: [
              "OPT allows international students to work in the USA after completing their program in a role related to their field of study.",
              "Duration: 12 months for most programs; STEM graduates can get a 24-month extension.",
              "Can be used before graduation (pre-completion OPT) or after graduation (post-completion OPT).",
              "Requires application to USCIS and can take 3–5 months for approval.",
              "Provides hands-on experience and a pathway to H-1B work visa."
            ]
          },
          {
            id: 3,
            title: "Differences Between CPT and OPT",
            points: [
              "Timing: CPT is during your program; OPT is before or after graduation.",
              "Employer: CPT must be related to coursework; OPT must be related to field of study.",
              "Hours: CPT allows part-time during semesters and full-time in breaks; OPT is full-time only for post-completion.",
              "Authorization: CPT is approved by university; OPT is approved by USCIS.",
              "Duration: CPT varies as part of curriculum; OPT is 12 months (+24-month STEM extension for eligible students)."
            ]
          },
          {
            id: 4,
            title: "Eligibility Requirements",
            points: [
              "Must maintain F-1 visa status.",
              "Must have completed at least one academic year before applying (for most cases).",
              "Employment must be directly related to your degree program.",
              "CPT must be approved and listed by the university; OPT requires USCIS filing."
            ]
          },
          {
            id: 5,
            title: "Benefits for Indian Students",
            points: [
              "Gain professional experience in US companies.",
              "Enhance resume and employability for global careers.",
              "OPT can be a stepping stone to H-1B or permanent employment.",
              "CPT allows practical application of classroom learning."
            ]
          },
          {
            id: 6,
            title: "Common Mistakes to Avoid",
            points: [
              "Working without proper authorization (illegal employment can jeopardize visa).",
              "Confusing CPT and OPT timelines.",
              "Missing USCIS filing deadlines for OPT.",
              "Using more than 12 months of full-time CPT, which can affect OPT eligibility."
            ]
          }
        ],
        finalThought: "Understanding CPT and OPT is essential for Indian students in the USA who want to maximize work opportunities while staying compliant with visa regulations. Proper planning can enhance career prospects, provide practical experience, and create pathways to long-term employment in the USA."
      }
    },
    {
      id: 9,
      title: "STEM Courses in the USA: Benefits, Careers & Visa Advantages",
      category: "Program Guide",
      image: teamwork,
      icon: <Target className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-600",
      excerpt: "The United States is a top destination for Indian students pursuing higher education, particularly in STEM courses.",
      content: {
        introduction: "The United States is a top destination for Indian students pursuing higher education, particularly in STEM (Science, Technology, Engineering, and Mathematics) courses. With cutting-edge programs, high employability, and attractive visa benefits, STEM degrees in the USA offer an unmatched platform for global careers.",
        sections: [
          {
            id: 1,
            title: "Why Choose STEM Courses in the USA?",
            points: [
              "World-Class Education: US universities are recognized for their advanced research facilities, renowned faculty, and innovation-driven curriculum. Institutions like MIT, Stanford, UC Berkeley, and Carnegie Mellon lead in STEM fields.",
              "Interdisciplinary Learning: STEM programs in the USA often encourage cross-disciplinary studies, combining engineering with AI, data science, business analytics, or biotechnology.",
              "Practical Training Opportunities: Internships, co-op programs, and research projects allow students to apply classroom knowledge in real-world scenarios, enhancing employability."
            ]
          },
          {
            id: 2,
            title: "Career Opportunities After STEM Degrees",
            points: [
              "Technology & Software Development: AI, machine learning, cloud computing, and cybersecurity.",
              "Engineering & Robotics: Civil, mechanical, electrical, and aerospace engineering.",
              "Life Sciences & Healthcare: Biotechnology, pharmaceuticals, and healthcare analytics.",
              "Data Science & Analytics: Big data, business intelligence, and predictive modeling.",
              "Many Indian students find high-paying roles in US companies like Google, Microsoft, Amazon, and Tesla, or pursue research opportunities in labs and universities."
            ]
          },
          {
            id: 3,
            title: "Visa Advantages for STEM Students",
            points: [
              "Standard OPT: 12 months of work authorization after graduation.",
              "STEM OPT Extension: Additional 24 months of work authorization for eligible STEM graduates.",
              "This allows students to gain valuable work experience, making them eligible for H-1B visas and long-term employment in the USA.",
              "Eligibility for STEM-related internships during the program (CPT).",
              "Opportunity to build professional networks and gain global exposure."
            ]
          },
          {
            id: 4,
            title: "Financial & Scholarship Opportunities",
            points: [
              "Many US universities offer merit-based scholarships, assistantships, and fellowships for STEM students.",
              "These not only reduce tuition costs but also allow students to gain practical experience as research or teaching assistants."
            ]
          },
          {
            id: 5,
            title: "Personal & Professional Growth",
            points: [
              "Develop problem-solving and analytical thinking skills.",
              "Gain leadership and teamwork experience through projects and labs.",
              "Build global networks with peers, faculty, and industry professionals."
            ]
          },
          {
            id: 6,
            title: "Choosing the Right STEM Program",
            points: [
              "University rankings and faculty expertise in your field.",
              "Availability of research labs and industry partnerships.",
              "Internship opportunities, alumni networks, and STEM OPT support."
            ]
          }
        ],
        finalThought: "For Indian students aiming for global career opportunities in technology, research, or innovation, STEM courses in the USA offer world-class education, high employability, and extended work authorization. Proper program selection, research on career pathways, and strategic planning for OPT/STEM OPT can maximize your professional growth and long-term success."
      }
    },
    {
      id: 10,
      title: "SEVIS Department Explained: Why It's Critical for International Students in the USA",
      category: "Visa Process",
      image: middle,
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-violet-500 to-purple-600",
      excerpt: "For Indian students planning to study in the USA, understanding the Student and Exchange Visitor Information System (SEVIS) is crucial.",
      content: {
        introduction: "For Indian students planning to study in the USA, understanding the Student and Exchange Visitor Information System (SEVIS) is crucial. Managed by the U.S. Department of Homeland Security (DHS), SEVIS is an online system that tracks and monitors international students and exchange visitors in the United States.",
        sections: [
          {
            id: 1,
            title: "What is SEVIS?",
            points: [
              "SEVIS is an electronic tracking system used by the U.S. government to maintain information about F1 and M1 visa students (academic and vocational students) and J1 visa exchange visitors (researchers, scholars, and cultural exchange participants).",
              "It ensures that students maintain legal status in the USA and that universities comply with federal regulations."
            ]
          },
          {
            id: 2,
            title: "The Role of SEVIS for Indian Students",
            points: [
              "Maintains student records: Personal information, visa type, academic program, and enrollment status.",
              "Monitors compliance: Ensures students are full-time enrolled, attending classes, and following visa regulations.",
              "Supports visa issuance: The SEVIS ID appears on your I-20 (for F1/M1) or DS-2019 (for J1), required for visa stamping.",
              "Tracks employment authorization: CPT and OPT work authorizations are linked to SEVIS records.",
              "Without proper SEVIS registration, students cannot legally enter the USA or maintain F1 status."
            ]
          },
          {
            id: 3,
            title: "Understanding the SEVIS Fee",
            points: [
              "F1/M1 students: $350; J1 exchange visitors: $220 (plus possible additional fees).",
              "The SEVIS fee must be paid before visa application.",
              "Payment generates a receipt, which must be presented at the visa interview.",
              "Failure to pay the fee can result in visa denial or entry refusal at the U.S. port of entry."
            ]
          },
          {
            id: 4,
            title: "How SEVIS Impacts Your Student Visa",
            points: [
              "The I-20 form issued by your university contains your SEVIS ID, confirming your enrollment.",
              "Visa officers verify SEVIS records during your F1 visa interview.",
              "On arrival in the USA, Customs and Border Protection (CBP) officers check your SEVIS status to approve entry.",
              "Maintaining an updated SEVIS record is mandatory. Changes in address, program, or employment must be reported to the university's Designated School Official (DSO)."
            ]
          },
          {
            id: 5,
            title: "Tips for Indian Students to Stay SEVIS-Compliant",
            points: [
              "Pay the SEVIS I-901 fee and keep the receipt safely.",
              "Verify all information on your I-20/DS-2019 form before the visa interview.",
              "Maintain full-time enrollment and attend all classes.",
              "Report changes (address, program, or employment) promptly to the DSO.",
              "Keep SEVIS ID handy for travel, visa renewals, and CPT/OPT applications."
            ]
          }
        ],
        finalThought: "The SEVIS department is a cornerstone of the U.S. student visa system. For Indian students, understanding its role, paying the SEVIS fee, and staying compliant is critical to a smooth study abroad experience. Proper SEVIS management ensures legal status, eligibility for work options like CPT and OPT, and hassle-free travel and visa renewals in the USA."
      }
    },
    {
      id: 11,
      title: "Cost of Studying in the USA: Tuition, Living & Hidden Expenses",
      category: "Financial Guide",
      image: american,
      icon: <Calculator className="w-8 h-8" />,
      gradient: "from-rose-500 to-pink-600",
      excerpt: "Studying in the USA is a dream for many Indian students, but understanding the total cost of education is critical for planning.",
      content: {
        introduction: "Studying in the USA is a dream for many Indian students, but understanding the total cost of education is critical for planning. Beyond tuition, students must account for living expenses, insurance, travel, and other hidden costs to make informed decisions about studying abroad.",
        sections: [
          {
            id: 1,
            title: "Tuition Fees in the USA",
            points: [
              "Public Universities: $20,000 – $40,000 per year (MS/PhD programs).",
              "Private Universities: $35,000 – $60,000 per year.",
              "Top-tier Institutions (Ivy League / Private Ivies): $50,000 – $70,000 per year.",
              "Tips for Indian students: Research if your program offers assistantships, fellowships, or scholarships. Consider universities with lower tuition but strong academic outcomes."
            ]
          },
          {
            id: 2,
            title: "Living Expenses in the USA",
            points: [
              "Accommodation: $8,000 – $15,000 per year (on-campus or shared off-campus).",
              "Food & Groceries: $3,000 – $5,000 per year.",
              "Transportation: $500 – $2,000 per year.",
              "Books & Supplies: $500 – $1,500 per year.",
              "Cities like New York, San Francisco, and Boston are more expensive, while Midwestern and Southern cities tend to be more affordable."
            ]
          },
          {
            id: 3,
            title: "Hidden Expenses to Consider",
            points: [
              "Health Insurance: $1,000 – $2,000 per year (mandatory at most universities).",
              "Visa Fees & SEVIS: $350 for F-1 visa + $220 SEVIS fee.",
              "Personal Expenses: Clothing, mobile, internet, and leisure ($1,500 – $2,500 per year).",
              "Travel Costs: Domestic and international flights can add $500 – $2,000 per year.",
              "Tip: Budget for unexpected costs to avoid financial stress during your program."
            ]
          },
          {
            id: 4,
            title: "Strategies to Manage Costs",
            points: [
              "Scholarships & Assistantships: Many universities provide tuition waivers, research or teaching assistantships for MS and PhD students.",
              "Part-time Work: Indian students on F-1 visas can work up to 20 hours per week on-campus. CPT or OPT can provide additional work experience.",
              "City Choice: Opting for universities in smaller cities or college towns can significantly reduce living expenses.",
              "Budgeting: Track daily expenses and choose shared housing and student meal plans to manage costs."
            ]
          },
          {
            id: 5,
            title: "Return on Investment (ROI)",
            points: [
              "While the cost of studying in the USA is high, the career opportunities, global exposure, and potential earnings often outweigh the initial investment.",
              "STEM graduates can benefit from STEM OPT extension, increasing work experience and employability.",
              "Business and tech graduates often secure high-paying roles in leading companies.",
              "PhD graduates have opportunities in academia, research, and industry leadership."
            ]
          }
        ],
        finalThought: "For Indian students, careful financial planning and understanding all costs are essential for a successful study abroad experience. By accounting for tuition, living, and hidden expenses, exploring scholarships, and strategically choosing programs and cities, students can maximize the value of their US education while minimizing financial strain."
      }
    },
    {
      id: 12,
      title: "Preparing for USA Visa Interview: Tips for Indian Students",
      category: "Visa Process",
      image: young1,
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-slate-600 to-gray-700",
      excerpt: "For Indian students planning to study in the USA, the F1 visa interview is a crucial step in the journey to a US university.",
      content: {
        introduction: "For Indian students planning to study in the USA, the F1 visa interview is a crucial step in the journey to a US university. Even after receiving admission letters, many students get anxious about visa approval. With proper preparation, you can approach the interview confidently and increase your chances of success.",
        sections: [
          {
            id: 1,
            title: "Understand the F1 Visa Process",
            points: [
              "The F1 visa is the standard student visa for studying in the USA.",
              "You must pay the SEVIS I-901 fee and schedule an interview at a US Embassy or Consulate.",
              "Bring your I-20 form, passport, DS-160 confirmation, and financial documents.",
              "The visa interview typically lasts 5–10 minutes, but the questions are focused and precise."
            ]
          },
          {
            id: 2,
            title: "Common Questions Asked by Visa Officers",
            points: [
              "Intent to Study: Why did you choose the USA? Why this university? Why this course?",
              "Financial Capability: Can you afford tuition and living expenses? Are funds documented properly?",
              "Ties to India: Will you return after completing your program? Do you have family or job prospects in India?",
              "Other questions may include: Do you have relatives in the USA? How did you choose this program or university? Are you planning to work in the USA after graduation?"
            ]
          },
          {
            id: 3,
            title: "Tips to Prepare for the Visa Interview",
            subsections: [
              {
                title: "Be Clear & Concise:",
                points: [
                  "Answer questions truthfully and confidently.",
                  "Avoid long explanations; stick to key facts about your program and goals."
                ]
              },
              {
                title: "Know Your SOP & LORs:",
                points: [
                  "Visa officers may cross-check details from your SOP or recommendation letters.",
                  "Be prepared to explain your academic background, projects, and career goals."
                ]
              },
              {
                title: "Prepare Financial Documents:",
                points: [
                  "Show bank statements, scholarships, or loan documents to prove financial stability.",
                  "Clearly explain how you will fund tuition and living expenses."
                ]
              },
              {
                title: "Practice Common Questions:",
                points: [
                  "Mock interviews with peers or mentors can help reduce anxiety.",
                  "Practice speaking confidently and politely."
                ]
              },
              {
                title: "Dress Professionally & Be Punctual:",
                points: [
                  "First impressions matter.",
                  "Arrive early and dress neatly and professionally."
                ]
              }
            ]
          },
          {
            id: 4,
            title: "Common Mistakes to Avoid",
            points: [
              "Providing incorrect or inconsistent information.",
              "Appearing overly nervous or unprepared.",
              "Being vague about study plans or financials.",
              "Overloading documents; only carry what is necessary."
            ]
          },
          {
            id: 5,
            title: "Post-Interview Tips",
            points: [
              "Stay calm and wait for the officer's response patiently.",
              "If approved, check visa stamping and document accuracy.",
              "If denied, politely ask for reasons and reapply if applicable."
            ]
          }
        ],
        finalThought: "For Indian students, the USA visa interview can seem intimidating, but careful preparation, understanding of requirements, and confident presentation are key to success. By knowing common questions, preparing documents, and practicing answers, you can approach the F1 visa interview with confidence and move one step closer to your dream of studying in the USA."
      }
    }
  ];

  // Calculate reading time based on content
  const calculateReadingTime = (blog) => {
    const wordsPerMinute = 200;
    let totalWords = 0;
    
    if (blog.content) {
      totalWords += blog.content.introduction?.split(' ').length || 0;
      blog.content.sections?.forEach(section => {
        totalWords += section.title?.split(' ').length || 0;
        totalWords += section.points?.join(' ').split(' ').length || 0;
        totalWords += section.steps?.reduce((acc, step) => {
          return acc + (step.step?.split(' ').length || 0) + (step.details?.join(' ').split(' ').length || 0);
        }, 0) || 0;
        totalWords += section.description?.split(' ').length || 0;
      });
      totalWords += blog.content.finalThought?.split(' ').length || 0;
    }
    
    const minutes = Math.ceil(totalWords / wordsPerMinute);
    return minutes || 5;
  };

  // Get all unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogs.map(blog => blog.category))];
    return cats;
  }, [blogs]);

  // Filter and search blogs
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query)
      );
    }

    // Sort blogs
    if (sortBy === 'latest') {
      filtered = [...filtered].sort((a, b) => (b.id || 0) - (a.id || 0));
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sortBy === 'title') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [blogs, searchQuery, selectedCategory, sortBy]);

  // Get related articles
  const getRelatedArticles = (currentBlog) => {
    return blogs
      .filter(blog => blog.id !== currentBlog.id && blog.category === currentBlog.category)
      .slice(0, 3);
  };

  // Toggle like
  const toggleLike = (blogId, e) => {
    e.stopPropagation();
    setLikedBlogs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(blogId)) {
        newSet.delete(blogId);
      } else {
        newSet.add(blogId);
      }
      return newSet;
    });
  };

  // Share blog
  const handleShare = (blog, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Modern Clean Design */}
      <section className="relative h-[450px] md:h-[530px] lg:h-[600px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <img
          src={blog1}
          alt="Blogs"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="relative flex h-full items-center justify-center px-4 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl w-full"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-white text-xs md:text-sm font-semibold">Expert Insights & Guides</span>
            </div> */}

            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Study Abroad <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Blog</span>
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full" />
            
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Expert guidance, actionable tips, and comprehensive insights to help you succeed in your study abroad journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Listing - Professional Redesign */}
      {!selectedBlog ? (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Articles</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 rounded-full" />
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Comprehensive guides and expert advice to empower your study abroad journey
              </p>
            </motion.div>

            {/* Advanced Search & Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 space-y-4"
            >
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filters Row */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Category Filter */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-700">Category:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-sm font-semibold text-gray-700">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-semibold text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Most Popular</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600">
                Showing <span className="font-bold text-primary">{filteredBlogs.length}</span> of <span className="font-bold">{blogs.length}</span> articles
              </div>
            </motion.div>

            {/* Blog Cards Grid - Enhanced Design */}
            <AnimatePresence mode="wait">
              {filteredBlogs.length > 0 ? (
                <motion.div
                  key="blogs-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {filteredBlogs.map((blog, index) => {
                    const readingTime = calculateReadingTime(blog);
                    const isLiked = likedBlogs.has(blog.id);
                    const views = Math.floor(Math.random() * 50000) + 10000; // Increased views: 10K-60K

                    return (
                      <motion.article
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200/50 hover:border-primary/30"
                        onClick={() => handleBlogSelect(blog)}
                      >
                        {/* Featured Badge */}
                        {index === 0 && (
                          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-lg">
                            <div className="flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 text-white fill-white" />
                              <span className="text-xs font-bold text-white">Featured</span>
                            </div>
                          </div>
                        )}

                        {/* Image Container */}
                        <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-white/50 z-10">
                            <span className="text-xs font-bold text-gray-800">{blog.category}</span>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="absolute top-4 right-4 flex gap-2 z-10">
                            <button
                              onClick={(e) => toggleLike(blog.id, e)}
                              className={`p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                                isLiked
                                  ? 'bg-red-500/90 text-white'
                                  : 'bg-white/90 text-gray-700 hover:bg-white'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              onClick={(e) => handleShare(blog, e)}
                              className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white transition-all duration-300"
                            >
                              <Share2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Icon Badge */}
                          <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${blog.gradient} rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-white/30 group-hover:scale-110 transition-transform duration-300`}>
                            {blog.icon}
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 bg-white">
                          {/* Metadata */}
                          <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{readingTime} min read</span>
                            </div>
                            <div className="flex items-center gap-1.5 ml-auto">
                              <Eye className="w-3.5 h-3.5" />
                              <span>{views.toLocaleString()} views</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                            {blog.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {blog.excerpt}
                          </p>
                          
                          {/* Read More Button */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                              <span>Read More</span>
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <TrendingUp className="w-3.5 h-3.5" />
                              <span>Trending</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Accent Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </motion.article>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: BookOpen, label: 'Total Articles', value: blogs.length, color: 'from-blue-500 to-cyan-500' },
                { icon: Eye, label: 'Total Views', value: '50K+', color: 'from-purple-500 to-pink-500' },
                { icon: Users, label: 'Monthly Readers', value: '10K+', color: 'from-green-500 to-emerald-500' },
                { icon: TrendingUp, label: 'Growth Rate', value: '25%', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-white/90 mb-6 text-base md:text-lg">
                  Subscribe to our newsletter and get the latest study abroad insights, visa updates, and expert tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        /* Blog Detail View - Clean Minimal Design */
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="max-w-5xl mx-auto">
            {/* Back Button with Brand Colors */}
            <motion.button
              whileHover={{ x: -5 }}
              onClick={handleBackToBlogs}
              className="group flex items-center gap-2 sm:gap-3 text-textSecondary hover:text-primary mb-6 sm:mb-8 md:mb-10 font-bold text-sm sm:text-base md:text-lg transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform duration-300 text-primary" />
              <span className="whitespace-nowrap">Back to Blogs</span>
            </motion.button>

            {/* Blog Header - Stunning Parallax Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mb-6 sm:mb-8 md:mb-10 border border-gray-100/80 relative group"
            >
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Parallax Image with Zoom Effect */}
                <motion.img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  style={{ imageRendering: 'high-quality' }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Brand Color Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/70 to-dark/60" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20" />
                
                {/* Animated Floating Particles with Brand Colors */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(12)].map((_, i) => {
                    const colors = ['primary', 'secondary', 'accent'];
                    const color = colors[i % 3];
                    return (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-${color} rounded-full opacity-40`}
                        style={{
                          left: `${10 + i * 8}%`,
                          top: `${15 + (i % 4) * 20}%`,
                        }}
                        animate={{
                          y: [0, -40, 0],
                          x: [0, Math.sin(i) * 25, 0],
                          opacity: [0.2, 0.6, 0.2],
                          scale: [1, 1.8, 1],
                        }}
                        transition={{
                          duration: 3 + i * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8 lg:p-12 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl mb-5 shadow-2xl border-2 border-white/30 backdrop-blur-sm"
                    >
                      <span className="text-white font-bold text-xs md:text-sm flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-accent" />
                        {selectedBlog.category}
                      </span>
                    </motion.div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-2xl leading-tight max-w-4xl mb-6">
                      {selectedBlog.title}
                    </h1>
                    
                    {/* Enhanced Metadata Bar */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-sm">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <User className="w-4 h-4" />
                        <span className="font-semibold">Sevis Global</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4" />
                        <span>{calculateReadingTime(selectedBlog)} min read</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <Eye className="w-4 h-4" />
                        <span>{(Math.floor(Math.random() * 50000) + 10000).toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(selectedBlog.id, e);
                          }}
                          className={`p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                            likedBlogs.has(selectedBlog.id)
                              ? 'bg-red-500/90 text-white'
                              : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedBlogs.has(selectedBlog.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={(e) => handleShare(selectedBlog, e)}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Blog Content - Professional Layout with Parallax */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8 md:mb-10 border border-gray-100/80 relative overflow-hidden"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl -z-0" />
              {/* Introduction - Clean Minimal Design */}
              <div className="mb-8 sm:mb-10 md:mb-12 pb-6 sm:pb-8 md:pb-10 border-b-2 border-gray-200">
                <div className="relative bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200">
                  <div className="flex items-start gap-5">
                    {/* Icon with Brand Gradient */}
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Introduction Text */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold mb-3 text-textPrimary">
                        Overview
                      </h3>
                      <p className="text-textSecondary text-sm md:text-base leading-relaxed">
                        {selectedBlog.content.introduction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation - Clean Minimal Design */}
              <div className="mb-6 sm:mb-8 md:mb-10 sticky top-2 sm:top-4 z-20">
                <div className="bg-gradient-to-b from-gray-100 to-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 overflow-x-auto shadow-md" style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}>
                  <div className="flex gap-1.5 sm:gap-2 min-w-max">
                    {selectedBlog.content.sections.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveTab(index);
                          // Scroll to section on mobile
                          if (window.innerWidth < 768) {
                            setTimeout(() => {
                              const element = document.querySelector(`[data-section-id="${section.id}"]`);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }, 100);
                          }
                        }}
                        className={`relative px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg font-bold text-[10px] sm:text-xs md:text-sm transition-all duration-300 whitespace-nowrap uppercase tracking-wide min-w-fit ${
                          activeTab === index
                            ? 'bg-gradient-to-r from-primary to-secondary text-white border-2 border-secondary shadow-md'
                            : 'bg-white text-textPrimary border border-gray-200 hover:border-primary/30 hover:text-primary'
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                          <span className="hidden sm:inline text-[10px] sm:text-xs">{section.id}.</span>
                          <span className="hidden lg:inline">{section.title}</span>
                          <span className="lg:hidden">{section.title.length > 15 ? `${section.title.substring(0, 15)}...` : section.title}</span>
                        </span>
                        {activeTab === index && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg -z-0"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sections - Stunning Progressive Design */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {selectedBlog.content.sections.map((section, index) => {
                  const isActive = activeTab === index;
                  
                  return (
                    <motion.div
                      key={section.id}
                      data-section-id={section.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`relative ${isActive ? 'block' : 'hidden'}`}
                    >
                      {/* Section Card - Clean Minimal Design */}
                      <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 relative group">
                        {/* Section Header - Clean Minimal Design */}
                        <div className="relative bg-white p-4 sm:p-6 md:p-8 lg:p-10 border-b-2 border-gray-200">
                          <div className="relative z-10 flex items-center gap-3 sm:gap-4 md:gap-6">
                            {/* Number Badge - Minimal with Brand Gradient */}
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-primary to-secondary rounded-lg sm:rounded-xl flex items-center justify-center text-white font-extrabold text-sm sm:text-base md:text-lg shadow-md flex-shrink-0">
                              {section.id}
                            </div>
                            
                            {/* Title - Clean Typography */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-textPrimary mb-2 leading-tight break-words">
                                {section.title}
                              </h3>
                              <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                            </div>
                          </div>
                        </div>

                        {/* Section Content - Clean White Background */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
                          {/* Steps - Stunning Timeline Design */}
                          {section.steps && (
                            <div className="relative">
                              {/* Vertical Timeline Line */}
                              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full hidden md:block" />
                              
                              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                                {section.steps.map((stepItem, stepIndex) => (
                                  <motion.div
                                    key={stepIndex}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: stepIndex * 0.15, duration: 0.6, ease: "easeOut" }}
                                    className="relative pl-0 sm:pl-12 md:pl-20"
                                  >
                                    {/* Timeline Node - Clean Design */}
                                    <div className="absolute left-0 sm:left-6 md:left-8 top-6 sm:top-8 w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center z-10">
                                      <div className="relative w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-md border-2 border-white">
                                        <span className="text-white font-extrabold text-lg md:text-base">{stepIndex + 1}</span>
                                      </div>
                                    </div>
                                    
                                    {/* Step Content Card - Clean Design */}
                                    <div className="group relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden ml-0 sm:ml-2 md:ml-4">
                                      {/* Step Title */}
                                      <div className="mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
                                        <h4 className="font-bold text-textPrimary text-base sm:text-lg md:text-xl leading-tight break-words">
                                          {stepItem.step}
                                        </h4>
                                      </div>
                                      
                                      {/* Step Details List */}
                                      <ul className="space-y-3 relative z-10">
                                        {stepItem.details.map((detail, detailIndex) => (
                                          <motion.li
                                            key={detailIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (stepIndex * 0.15) + (detailIndex * 0.08), duration: 0.4 }}
                                            className="flex items-start gap-2 sm:gap-3 text-textPrimary leading-relaxed group/item"
                                          >
                                            {/* Icon Badge - Clean Design */}
                                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-primary to-secondary rounded-md sm:rounded-lg flex items-center justify-center shadow-sm mt-0.5">
                                              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                            </div>
                                            <span className="text-textSecondary text-xs sm:text-sm md:text-base flex-1 break-words">{detail}</span>
                                          </motion.li>
                                        ))}
                                      </ul>
                                      
                                      {/* Bottom Accent Gradient */}
                                      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedBlog.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl`} />
                                    </div>
                                    
                                    {/* Connecting Line to Next Step */}
                                    {stepIndex < section.steps.length - 1 && (
                                      <div className="absolute left-10 top-24 md:top-20 w-1 h-12 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-full hidden md:block" />
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Points - Stunning Grid Design */}
                          {section.points && (
                            <div className="grid md:grid-cols-1 gap-4">
                              {section.points.map((point, pointIndex) => (
                                <motion.div
                                  key={pointIndex}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: pointIndex * 0.1, duration: 0.5 }}
                                  className="group relative bg-white rounded-lg p-5 md:p-6 border border-gray-200 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                                >
                                  <div className="flex items-start gap-3 sm:gap-4">
                                    {/* Icon Badge - Clean Design */}
                                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-md sm:rounded-lg flex items-center justify-center shadow-sm">
                                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    
                                    {/* Point Text */}
                                    <div className="flex-1 pt-0.5">
                                      <span className="text-textSecondary leading-relaxed text-xs sm:text-sm md:text-base block break-words">{point}</span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Sub-sections (for Recommendation Letters) - Stunning Design */}
                          {section.subsections && (
                            <div className="space-y-6">
                              {section.subsections.map((subsection, subIndex) => (
                                <motion.div
                                  key={subIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.1, duration: 0.5 }}
                                  className="bg-white rounded-lg p-4 sm:p-5 md:p-6 lg:p-7 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                                >
                                  <h4 className="font-bold text-textPrimary mb-4 sm:mb-5 text-base sm:text-lg md:text-xl pb-2 sm:pb-3 border-b border-gray-200 break-words">
                                    {subsection.title}
                                  </h4>
                                  <ul className="space-y-3">
                                    {subsection.points.map((point, pointIndex) => (
                                      <motion.li
                                        key={pointIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (subIndex * 0.08) + (pointIndex * 0.04), duration: 0.3 }}
                                        className="flex items-start gap-2 sm:gap-3 text-textSecondary leading-relaxed"
                                      >
                                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-secondary rounded-md sm:rounded-lg flex items-center justify-center shadow-sm mt-0.5">
                                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                        </div>
                                        <span className="text-xs sm:text-sm md:text-base flex-1 break-words">{point}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Description */}
                          {section.description && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                              className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200"
                            >
                              <p className="text-textSecondary leading-relaxed text-sm md:text-base">
                                {section.description}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Final Thought - Clean Minimal Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 rounded-lg sm:rounded-xl border-l-4 border-primary shadow-sm"
              >
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-secondary rounded-md sm:rounded-lg flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl text-textPrimary">
                      Final Thought
                    </h4>
                    <p className="text-textSecondary leading-relaxed text-xs sm:text-sm md:text-base break-words">
                      {selectedBlog.content.finalThought}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Related Articles Section */}
            {getRelatedArticles(selectedBlog).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-12"
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Related <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Articles</span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getRelatedArticles(selectedBlog).map((relatedBlog, index) => {
                    const readingTime = calculateReadingTime(relatedBlog);
                    return (
                      <motion.article
                        key={relatedBlog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        onClick={() => handleBlogSelect(relatedBlog)}
                        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-primary/30"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                            <span className="text-xs font-bold text-gray-800">{relatedBlog.category}</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedBlog.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{readingTime} min</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* CTA Section - Stunning Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white text-center shadow-2xl relative overflow-hidden group"
            >
              {/* Animated Decorative Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 sm:mb-4"
                >
                  Need Help with Your Application?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-white/95 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2"
                >
                  Our expert counselors are here to guide you through every step of your study abroad journey.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 border-2 border-white/20 hover:border-accent/50 w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base border-2 border-white/50 hover:bg-white/30 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(255,209,102,0.4)] transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Contact Us
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Scrolltotop />
      <GetStarted />
    </div>
  );
};

export default Blogs;
