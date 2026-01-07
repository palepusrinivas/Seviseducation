import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Scale,
  Lock,
  Globe,
  Building2,
  Users,
  DollarSign,
  BookOpen,
  XCircle,
  ArrowRight,
  Info,
  FileCheck,
  Gavel
} from "lucide-react";
// Images
import aboutImg from "../assest/about.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const termsSections = [
    {
      id: 1,
      title: "DEFINITIONS",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-primary to-secondary",
      items: [
        { term: "Company", definition: "SEVIS Global Education Private Limited, a company incorporated under the laws of India." },
        { term: "User / Client", definition: "Any person accessing the website or availing services of the Company." },
        { term: "Services", definition: "Education counseling, student visa guidance, immigration advisory services (including USA immigration), application assistance, and related consultancy services." },
        { term: "Website", definition: "The official website operated by the Company." }
      ]
    },
    {
      id: 2,
      title: "ACCEPTANCE OF TERMS",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-secondary to-primary",
      items: [
        { text: "By accessing or using the Website or Services, the User agrees to be legally bound by these Terms and Conditions." },
        { text: "If the User does not agree with any part of these Terms, the User must discontinue use of the Website and Services immediately." }
      ]
    },
    {
      id: 3,
      title: "NATURE OF SERVICES",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-accent to-primary",
      items: [
        { text: "The Company acts solely as a consultant and facilitator." },
        { text: "The Company does not represent:", subItems: [
          "Any foreign government",
          "Any embassy or consulate",
          "Any immigration authority"
        ]},
        { text: "Final decisions regarding admissions, visas, immigration approvals, or rejections are taken exclusively by:", subItems: [
          "Universities",
          "Immigration departments",
          "Embassies or consulates"
        ]}
      ]
    },
    {
      id: 4,
      title: "NO GUARANTEE OR ASSURANCE",
      icon: <AlertCircle className="w-8 h-8" />,
      color: "from-primary to-accent",
      items: [
        { text: "The Company does not guarantee:", subItems: [
          "Admission to any institution",
          "Grant of any visa or immigration benefit",
          "Approval timelines"
        ]},
        { text: "Outcomes depend on factors including but not limited to:", subItems: [
          "Academic merit",
          "Financial sufficiency",
          "Background checks",
          "Immigration and embassy discretion",
          "Changes in laws or policies"
        ]}
      ]
    },
    {
      id: 5,
      title: "USER OBLIGATIONS",
      icon: <Users className="w-8 h-8" />,
      color: "from-secondary to-accent",
      items: [
        { text: "The User shall provide:", subItems: [
          "True, complete, and accurate information",
          "Genuine and verifiable documents"
        ]},
        { text: "The User shall not submit forged, altered, or misleading documents." },
        { text: "The Company shall not be liable for any consequences arising from incorrect or false information supplied by the User." }
      ]
    },
    {
      id: 6,
      title: "FEES, PAYMENTS & REFUNDS",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-accent to-secondary",
      items: [
        { text: "Consultancy fees shall be communicated separately in writing." },
        { text: "Fees paid to the Company are non-refundable, unless expressly agreed in writing." },
        { text: "Government, university, visa, biometric, medical, and third-party charges are separate and not controlled by the Company." }
      ]
    },
    {
      id: 7,
      title: "INTELLECTUAL PROPERTY RIGHTS",
      icon: <Lock className="w-8 h-8" />,
      color: "from-primary to-secondary",
      items: [
        { text: "All content on the Website, including text, logos, graphics, and design, is the intellectual property of the Company." },
        { text: "No content may be copied, reproduced, or distributed without prior written consent." }
      ]
    },
    {
      id: 8,
      title: "LIMITATION OF LIABILITY",
      icon: <Shield className="w-8 h-8" />,
      color: "from-secondary to-primary",
      items: [
        { text: "The Company shall not be liable for:", subItems: [
          "Visa refusals or delays",
          "Policy or regulation changes",
          "Actions or omissions of third parties",
          "Loss of documents submitted to external authorities"
        ]},
        { text: "In no event shall the Company's liability exceed the professional fees paid by the User." }
      ]
    },
    {
      id: 9,
      title: "THIRD-PARTY WEBSITES",
      icon: <Globe className="w-8 h-8" />,
      color: "from-accent to-primary",
      items: [
        { text: "The Website may contain links to third-party websites." },
        { text: "The Company does not control or endorse such websites and is not responsible for their content or privacy practices." }
      ]
    },
    {
      id: 10,
      title: "TERMINATION",
      icon: <XCircle className="w-8 h-8" />,
      color: "from-primary to-accent",
      items: [
        { text: "The Company reserves the right to terminate services if:", subItems: [
          "The User breaches these Terms",
          "Fraud or misrepresentation is detected",
          "Legal or regulatory compliance requires termination"
        ]}
      ]
    },
    {
      id: 11,
      title: "GOVERNING LAW & JURISDICTION",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-secondary to-accent",
      items: [
        { text: "These Terms shall be governed by the laws of India." },
        { text: "Courts in India shall have exclusive jurisdiction, subject to mandatory local laws applicable in other jurisdictions." }
      ]
    },
    {
      id: 12,
      title: "AMENDMENTS",
      icon: <FileCheck className="w-8 h-8" />,
      color: "from-accent to-secondary",
      items: [
        { text: "The Company may revise these Terms at any time." },
        { text: "Continued use of the Website constitutes acceptance of revised Terms." }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.img
          src={aboutImg}
          alt="Terms and Conditions"
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
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-2xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SEVIS Global Education Private Limited
            </motion.p>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6">
            <Scale className="w-6 h-6 text-primary" />
            <span className="text-gray-700 font-semibold">Legal Information</span>
          </div> */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Please read these Terms and Conditions carefully before using our services. 
            By accessing our website or availing our services, you agree to be bound by these terms.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {termsSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Header */}
                <div className={`bg-gradient-to-r ${section.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg">
                      {section.icon}
                    </div>
                    <div>
                      <div className="text-white/80 text-sm font-medium mb-1">Section {section.id}</div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="mb-6 last:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      {item.term ? (
                        // Definition style
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mt-1">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.term}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                          </div>
                        </div>
                      ) : (
                        // Regular text style
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full mt-2" />
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed mb-3">{item.text}</p>
                            {item.subItems && (
                              <ul className="space-y-2 ml-4">
                                {item.subItems.map((subItem, subIndex) => (
                                  <li key={subIndex} className="flex items-start gap-2 text-gray-600">
                                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                    <span>{subItem}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${section.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions constitute a legally binding agreement between you and SEVIS Global Education Private Limited. 
                We recommend that you read these terms carefully and keep a copy for your records.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions regarding these Terms, please contact us through our 
                <a href="/Contact" className="text-primary font-semibold hover:underline ml-1">Contact page</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Components */}
      <Scrolltotop />
      <GetStarted />
    </section>
  );
};

export default TermsOfService;

