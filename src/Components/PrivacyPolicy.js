import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Shield, 
  CheckCircle, 
  Lock,
  Globe,
  FileText,
  Database,
  Users,
  Key,
  Cookie,
  Baby,
  Mail,
  Info,
  Building2,
  Gavel,
  Server
} from "lucide-react";

// Images
import aboutImg from "../assest/about.jpg";
import Scrolltotop from "./Scrolltotop";
import GetStarted from "./GetStrated";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const privacySections = [
    {
      id: 1,
      title: "APPLICABLE LAWS",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-primary to-secondary",
      description: "This Privacy Policy complies with:",
      items: [
        "Information Technology Act, 2000 (India)",
        "GDPR (European Union)",
        "US data protection principles",
        "Australian Privacy Act",
        "UAE Data Protection Regulations"
      ]
    },
    {
      id: 2,
      title: "INFORMATION COLLECTED",
      icon: <Database className="w-8 h-8" />,
      color: "from-secondary to-primary",
      description: "Personal Data may include:",
      items: [
        "Name, date of birth, contact details",
        "Passport and identity details",
        "Academic and test records",
        "Financial and sponsorship documents",
        "Visa and immigration-related information"
      ]
    },
    {
      id: 3,
      title: "PURPOSE OF DATA PROCESSING",
      icon: <FileText className="w-8 h-8" />,
      color: "from-accent to-primary",
      description: "Personal data is processed for:",
      items: [
        "Education and visa applications",
        "Immigration advisory services",
        "Legal and regulatory compliance",
        "Communication and record management"
      ]
    },
    {
      id: 4,
      title: "LEGAL BASIS FOR PROCESSING (GDPR)",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-primary to-accent",
      description: "For EU residents, processing is based on:",
      items: [
        "Consent",
        "Contractual necessity",
        "Legal obligation",
        "Legitimate business interests"
      ]
    },
    {
      id: 5,
      title: "DATA SHARING",
      icon: <Users className="w-8 h-8" />,
      color: "from-secondary to-accent",
      description: "Data may be shared with:",
      items: [
        "Universities and educational institutions",
        "Embassies and immigration authorities",
        "Government agencies",
        "Authorized service providers"
      ],
      note: "Data is shared strictly on a need-to-know basis."
    },
    {
      id: 6,
      title: "INTERNATIONAL DATA TRANSFER",
      icon: <Globe className="w-8 h-8" />,
      color: "from-accent to-secondary",
      description: "Personal data may be transferred across borders including:",
      items: [
        "India",
        "USA",
        "EU",
        "Australia",
        "UAE"
      ],
      note: "The Company ensures reasonable safeguards for international transfers."
    },
    {
      id: 7,
      title: "DATA SECURITY",
      icon: <Lock className="w-8 h-8" />,
      color: "from-primary to-secondary",
      description: "Security Measures:",
      items: [
        "The Company employs reasonable technical and organizational measures to protect personal data",
        "Absolute security cannot be guaranteed for online transmissions"
      ]
    },
    {
      id: 8,
      title: "DATA RETENTION",
      icon: <Server className="w-8 h-8" />,
      color: "from-secondary to-primary",
      description: "Data shall be retained:",
      items: [
        "As long as required for services",
        "As mandated by law",
        "Until deletion is requested, subject to legal obligations"
      ]
    },
    {
      id: 9,
      title: "USER RIGHTS",
      icon: <Key className="w-8 h-8" />,
      color: "from-accent to-primary",
      description: "Subject to applicable law, Users may:",
      items: [
        "Access their personal data",
        "Request correction or deletion",
        "Withdraw consent",
        "Object to or restrict processing",
        "Request data portability (GDPR)"
      ]
    },
    {
      id: 10,
      title: "COOKIES",
      icon: <Cookie className="w-8 h-8" />,
      color: "from-primary to-accent",
      description: "Cookie Usage:",
      items: [
        "The Website may use cookies to improve user experience",
        "Users may disable cookies through browser settings"
      ]
    },
    {
      id: 11,
      title: "CHILDREN'S DATA",
      icon: <Baby className="w-8 h-8" />,
      color: "from-secondary to-accent",
      description: "Age Restrictions:",
      items: [
        "Services are intended for individuals 18 years and above",
        "Data of minors is processed only with parental or guardian consent"
      ]
    },
    {
      id: 12,
      title: "POLICY UPDATES",
      icon: <FileText className="w-8 h-8" />,
      color: "from-accent to-secondary",
      description: "Policy Changes:",
      items: [
        "This Privacy Policy may be updated periodically",
        "Updates will be posted on the Website"
      ]
    },
    {
      id: 13,
      title: "CONTACT DETAILS",
      icon: <Mail className="w-8 h-8" />,
      color: "from-primary to-secondary",
      description: "For legal or privacy-related queries:",
      contact: {
        company: "SEVIS Global Education Private Limited",
        email: "media@sevisedu.com"
      }
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <motion.img
          src={aboutImg}
          alt="Privacy Policy"
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
                <Shield className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Privacy Policy
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
            <Lock className="w-6 h-6 text-primary" />
            <span className="text-gray-700 font-semibold">Your Privacy Matters</span>
          </div> */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are committed to protecting your personal information and ensuring transparency 
            in how we collect, use, and safeguard your data. This Privacy Policy explains our practices 
            in compliance with international data protection laws.
          </p>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {privacySections.map((section, index) => (
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
                  {section.description && (
                    <p className="text-gray-700 font-semibold text-lg mb-4">{section.description}</p>
                  )}

                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <motion.div
                      className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-l-4 border-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 font-medium">{section.note}</p>
                      </div>
                    </motion.div>
                  )}

                  {section.contact && (
                    <motion.div
                      className="mt-6 space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border-2 border-primary/20">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Building2 className="w-6 h-6 text-primary" />
                          {section.contact.company}
                        </h3>
                        <div className="flex items-center gap-3 text-gray-700">
                          <Mail className="w-5 h-5 text-primary" />
                          <a 
                            href={`mailto:${section.contact.email}`}
                            className="text-primary font-semibold hover:underline"
                          >
                            {section.contact.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, 
                please contact us at <a href="mailto:media@sevisedu.com" className="text-primary font-semibold hover:underline">media@sevisedu.com</a>.
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

export default PrivacyPolicy;

