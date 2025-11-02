import React from "react";
import { CheckCircle } from "lucide-react";
import {
  FaClipboardCheck,
  FaBuilding,
  FaChalkboardTeacher,
  FaHandshake,
  FaWallet,
  FaGlobe,
  FaUserGraduate,
} from "react-icons/fa";

import carrier from "../assest/careers.jpg";
import admission from "../assest/Admission (1).jpg";
import background1 from "../assest/careers.jpg";
import about from "../assest/about-program.png";
import Scrolltotop from "./Scrolltotop";


const OVERPILOTTRAINING = () => {
  return (
    <section>
      <section className="container-fluid p-5 bg-white  ">
        <div className="container p-5">
          <div className="row">
            <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
              <div className=" "  data-aos="fade-up" data-aos-duration={1200}>
                <h1 className="text-blue-700">About the Program </h1>
                <p className="text-justify">
                  {" "}
                  Sevis Global Education proudly offers a DGCA-approved Flight Training Program in India, designed to equip aspiring pilots with the skills, knowledge, and certifications required to pursue a successful career in aviation. Our comprehensive training curriculum follows Directorate General of Civil Aviation (DGCA) regulations, ensuring high-quality training that meets national and international aviation standards. With an industry-aligned syllabus, cutting-edge technology, and a team of highly qualified instructors, we ensure students receive world-class training to excel in their aviation careers.{" "}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <img src={about} alt=" " />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-fixed min-h-screen"
        style={{ backgroundImage: `url(${background1})` }}fx
      >
        {/* Light overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-20" />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
          {/* Heading Section */}
          <div className="text-center mb-16 text-white" data-aos="fade-up"
              data-aos-duration={1400} >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:text-red-500 transition-colors duration-300">
              Why Choose Sevis Global Education?
            </h2>
            <p className="text-xl max-w-3xl mx-auto hover:text-red-500 transition-colors duration-300">
              We provide world-class aviation and education training to help
              students achieve their dreams.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-white">
            {/* DGCA Approved Training */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  DGCA Approved Training
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  Our curriculum is structured as per DGCA guidelines, ensuring
                  compliance with the latest aviation industry standards.
                </p>
              </div>
            </div>

            {/* State-of-the-Art Facilities */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16  flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaBuilding className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  State-of-the-Art Facilities
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  We provide access to modern training aircraft, simulators, and
                  well-equipped classrooms.
                </p>
              </div>
            </div>

            {/* Experienced Instructors */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16  flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaChalkboardTeacher className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  Experienced Instructors
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  Our team consists of highly qualified and DGCA-certified
                  flight instructors with extensive industry experience.
                </p>
              </div>
            </div>

            {/* 100% Placement Assistance */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16  flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaHandshake className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  100% Placement Assistance
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  We guide students through airline selection processes and
                  provide career support post-certification.
                </p>
              </div>
            </div>

            {/* Affordable Fees & Flexible Payment Plans */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16  flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaWallet className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  Affordable Fees & Flexible Payment Plans
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  Our competitive pricing ensures that aspiring pilots can
                  achieve their dreams without financial burden.
                </p>
              </div>
            </div>

            {/* Global Training Partnerships */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16  flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  Global Training Partnerships
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  We collaborate with international aviation training
                  organizations, giving our students opportunities to experience
                  training in global environments.
                </p>
              </div>
            </div>

            {/* Personalized Mentorship */}
            <div
              className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="w-16 h-16  flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
                <FaUserGraduate className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
                  Personalized Mentorship
                </h3>
                <p className="hover:text-red-500 transition-colors duration-300">
                  Each student is assigned an instructor mentor for personalized
                  coaching and continuous learning support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* First Section: Career Opportunities */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div
            className="flex-1 space-y-6"
            data-aos="fade-up"
            data-aos-duration={1600}
          >
            <h2 className="text-2xl font-bold text-blue-600 hover:text-red-600 transition-colors duration-300">
              Career Opportunities
            </h2>
            <p className="text-gray-600">
              Upon successful completion of the program, candidates can pursue
              careers such as:
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5  rounded-full animate-spin  text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Commercial Airline Pilot:</b> Flying for national and
                  international airlines.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5  rounded-full animate-spin  text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Cargo/Freight Pilot:</b> Operating cargo flights for
                  logistics companies.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5  rounded-full animate-spin  text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Charter Pilot:</b> Flying private and business jets.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5  rounded-full animate-spin  text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Flight Instructor:</b> Training new pilot trainees at
                  aviation academies.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5  rounded-full animate-spin  text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Corporate Aviation Pilot:</b> Flying for corporate and
                  business executives.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 rounded-full animate-spin text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b> Air Ambulance Pilot:</b> Operating medical emergency
                  aircraft for patient transport.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5  rounded-full animate-spin  text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Aerial Survey and Agricultural Pilot:</b> Conducting land
                  surveying and crop spraying missions.
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src={carrier}
                alt="Career options in aviation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Section: Admission Process */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div
            className="flex-1 space-y-6"
            data-aos="fade-up"
            data-aos-duration={1600}
          >
            <h2 className="text-2xl font-bold text-blue-600 hover:text-red-600 transition-colors duration-300">
              Admission Process
            </h2>
            <p className="text-gray-600">
              Begin your journey toward becoming a professional pilot by
              following these steps:
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Application Submission –</b> Fill out our online
                  application form.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Aptitude & Medical Tests –</b> Complete the required DGCA
                  medical examination and aptitude assessment.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Interview & Documentation –</b> Verification of educational
                  documents, ID proofs, and background checks.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>Enrollment & Training Commencement –</b> Secure your seat
                  and begin training with expert instructors.
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                src={admission}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

        <div className=''> 

      <Scrolltotop/>
    </div>

    </section>

    
  );
};

export default OVERPILOTTRAINING;
