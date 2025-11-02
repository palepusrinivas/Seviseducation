import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Sevis Global Education | Study Abroad Consultancy",
  description = "Expert study abroad consultancy for USA, UK, Canada with 99% visa success rate",
  keywords = "study abroad, visa consultancy, international education",
  canonical = "",
  ogImage = "https://sevisedu.com/sevis1.png",
  ogType = "website",
  noindex = false
}) => {
  const siteUrl = "https://sevisedu.com";
  const fullTitle = title.includes('|') ? title : `${title} | Sevis Global Education`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Sevis Global Education" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;

// Predefined SEO configurations for each page
export const PAGE_SEO = {
  home: {
    title: "Sevis Global Education | #1 Study Abroad Consultancy - 99% Visa Success",
    description: "🎓 Top-rated study abroad consultancy in Hyderabad with 99% visa success rate. Expert counseling for USA, UK, Canada. 10,000+ students placed | 500+ universities | Book FREE consultation!",
    keywords: "study abroad consultants, USA student visa, UK student visa, Canada student visa, study abroad consultancy Hyderabad, overseas education, international education",
    canonical: "/"
  },
  about: {
    title: "About Sevis Global | 15+ Years of Study Abroad Excellence",
    description: "Learn about Sevis Global Education - Leading study abroad consultancy since 2008. 99% visa success, 10,000+ students placed, 500+ partner universities. Meet our expert team!",
    keywords: "about sevis global, study abroad consultants team, education consultancy history, visa experts, study abroad experience",
    canonical: "/About"
  },
  contact: {
    title: "Contact Sevis Global | Book FREE Study Abroad Consultation",
    description: "Get in touch with Sevis Global Education. Book your FREE consultation today! Call +91-9256-9256-45 | Email: info@sevisedu.com | Visit our Hyderabad office.",
    keywords: "contact sevis global, study abroad consultation, free consultation, visa consultancy contact, education consultants Hyderabad",
    canonical: "/Contact"
  },
  freeConsultation: {
    title: "FREE Study Abroad Consultation | Expert Visa Guidance - Sevis Global",
    description: "Book your 100% FREE consultation with certified counselors. Get personalized guidance for USA, UK, Canada universities. No hidden charges | 99% success rate | 24-hour response!",
    keywords: "free study abroad consultation, free visa consultation, education counseling, university selection help, study abroad guidance",
    canonical: "/FreeConsultation"
  },
  usaVisa: {
    title: "USA Student Visa F1 | Complete Guide & Support - Sevis Global",
    description: "Expert USA F1 visa guidance with 99% success rate. Complete documentation, SEVIS fee, interview preparation, required documents. Get your US student visa approved!",
    keywords: "USA student visa, F1 visa, SEVIS fee, US visa interview, student visa USA, America study visa, US visa documentation",
    canonical: "/UnitedStateofAmerica"
  },
  ukVisa: {
    title: "UK Student Visa | Tier 4 Complete Guide & Support - Sevis Global",
    description: "Get your UK student visa with expert guidance. Tier 4 visa support, CAS requirements, financial proof, English proficiency. 99% UK visa success rate!",
    keywords: "UK student visa, Tier 4 visa, UK visa requirements, CAS letter, UK study visa, England student visa, Britain visa",
    canonical: "/Unitedkingdom"
  },
  australiaVisa: {
    title: "Australia Student Visa | Subclass 500 Guide - Sevis Global",
    description: "Australia student visa Subclass 500 complete support. CoE requirements, GTE statement, financial proof. Expert guidance for studying in Australia!",
    keywords: "Australia student visa, subclass 500, CoE, GTE statement, Australia study visa, Australian visa requirements",
    canonical: "/Australiastudentvisa"
  },
  usaUniversities: {
    title: "Top USA Universities | 150+ Partner Institutions - Sevis Global",
    description: "Explore 150+ top USA universities. Ivy League to state universities. Computer Science, Engineering, Business programs. Expert admission support. Apply now!",
    keywords: "USA universities, American universities, Ivy League, US colleges, study in USA, top universities USA",
    canonical: "/USAUniversities"
  },
  ukUniversities: {
    title: "Top UK Universities | Russell Group & More - Sevis Global",
    description: "120+ UK universities including Russell Group. Oxbridge to modern universities. Expert guidance for UK university admissions. Apply to top British universities!",
    keywords: "UK universities, British universities, Russell Group, Oxbridge, study in UK, top universities UK",
    canonical: "/Ukuniversities"
  },
  australiaUniversities: {
    title: "Top Australia Universities | Group of Eight & More - Sevis Global",
    description: "80+ Australian universities including Group of Eight. Expert admission guidance for top Australian universities. Study in Australia with Sevis Global!",
    keywords: "Australia universities, Australian universities, Group of Eight, study in Australia, top universities Australia",
    canonical: "/AustraliaUniversities"
  },
  gre: {
    title: "GRE Exam Preparation & Guidance - Sevis Global",
    description: "Complete GRE preparation guide. Test format, scoring, preparation tips. Expert coaching for GRE exam. Achieve your target score!",
    keywords: "GRE exam, GRE preparation, GRE coaching, GRE test, graduate record examination",
    canonical: "/GRE"
  },
  gmat: {
    title: "GMAT Exam Preparation & Coaching - Sevis Global",
    description: "Comprehensive GMAT preparation support. Test sections, scoring guide, preparation strategies. Expert GMAT coaching for MBA admissions!",
    keywords: "GMAT exam, GMAT preparation, GMAT coaching, MBA entrance, business school test",
    canonical: "/GMAT"
  },
  ielts: {
    title: "IELTS Exam Preparation & Coaching - Sevis Global",
    description: "IELTS preparation with expert guidance. Listening, Reading, Writing, Speaking sections. Band score improvement strategies. Achieve your target band!",
    keywords: "IELTS exam, IELTS preparation, IELTS coaching, English proficiency test, IELTS band score",
    canonical: "/IELTS"
  },
  toefl: {
    title: "TOEFL iBT Preparation & Coaching - Sevis Global",
    description: "TOEFL iBT preparation guide. Reading, Listening, Speaking, Writing sections. Expert coaching for US university admissions. Score 100+!",
    keywords: "TOEFL exam, TOEFL iBT, TOEFL preparation, TOEFL coaching, English test USA",
    canonical: "/TOEFL"
  },
  pte: {
    title: "PTE Academic Preparation & Coaching - Sevis Global",
    description: "PTE Academic preparation with expert support. Computer-based English test. Speaking, Writing, Reading, Listening. Fast results, globally recognized!",
    keywords: "PTE exam, PTE Academic, PTE preparation, PTE coaching, computer based English test",
    canonical: "/PTE"
  },
  duolingo: {
    title: "Duolingo English Test Preparation - Sevis Global",
    description: "Duolingo English Test preparation guide. Online test from home, fast results, affordable. Accepted by 4000+ universities worldwide!",
    keywords: "Duolingo English Test, DET exam, online English test, Duolingo preparation",
    canonical: "/DUOLINGO"
  },
  sat: {
    title: "SAT Exam Preparation & Coaching - Sevis Global",
    description: "SAT preparation for US university admissions. Math, Reading, Writing sections. Expert coaching to achieve 1500+ scores!",
    keywords: "SAT exam, SAT preparation, SAT coaching, college entrance test, SAT score",
    canonical: "/SATEXAM"
  }
};


