import React from 'react'
import { CheckCircle } from 'lucide-react';

import {
    FaPlaneDeparture,
    FaChartLine,
    FaUniversity,
    FaRupeeSign,
    FaGlobeAsia,
  } from "react-icons/fa";
  


import carrier from "../assest/careers.jpg";
import admission from "../assest/Admission (1).jpg";
import background1 from "../assest/careers.jpg";



const CourseCurriculum = () => {
  return (
    <section> 
   
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Third Section: Ground School Training */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div
          className="flex-1 space-y-6"
          data-aos="fade-up"
          data-aos-duration={1600}
        >
          <h2 className="text-2xl font-bold text-blue-600 hover:text-red-600 transition-colors duration-300">
            Ground School Training
          </h2>
          <p className="text-gray-600">
            This phase focuses on theoretical knowledge required for aviation. Subjects covered include:
          </p>
          <div className="space-y-4 mt-6">
            {[
              ["Air Navigation", "Understanding maps, instruments, and navigation charts."],
              ["Aviation Meteorology", "Weather patterns, atmospheric conditions, and their impact on flight."],
              ["Air Regulations", "DGCA aviation laws, policies, and flight safety regulations."],
              ["Aircraft Technical General", "In-depth study of aircraft systems, aerodynamics, and mechanics."],
              ["Flight Planning and Performance", "Calculating fuel requirements, route planning, and flight safety analysis."],
              ["Human Performance & Limitations", "Psychological and physiological aspects affecting pilots."],
              ["Radio Telephony & Communication Procedures", "Training on aviation communication and air traffic control interactions."],
              ["Principles of Flight", "Fundamentals of aerodynamics, lift, thrust, and drag principles."]
            ].map(([title, desc], idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>{title}:</b> {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden h-full">
            <img src={carrier} alt="Ground School Training" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Fourth Section: Flight Training */}
      <div className="flex flex-col md:flex-row-reverse gap-8 mb-16">
        <div
          className="flex-1 space-y-6"
          data-aos="fade-up"
          data-aos-duration={1600}
        >
          <h2 className="text-2xl font-bold text-blue-600 hover:text-red-600 transition-colors duration-300">
            Flight Training
          </h2>
          <p className="text-gray-600">
            Practical training is conducted in DGCA-approved flight schools using modern aircraft. The training includes:
          </p>
          <div className="space-y-4 mt-6">
            {[
              ["Private Pilot License (PPL)", "Minimum 40-50 flight hours, covering solo and dual flight training."],
              ["Commercial Pilot License (CPL)", "Minimum 200 flight hours, including cross-country, night flying, and advanced maneuvers."],
              ["Instrument Rating (IR)", "Training on advanced aircraft handling using navigational instruments under low visibility conditions."],
              ["Multi-Engine Endorsement (Optional)", "Training on twin-engine aircraft to enhance job prospects with commercial airlines."],
              ["Crew Resource Management (CRM)", "Emphasizing teamwork, decision-making, and problem-solving in cockpit operations."]
            ].map(([title, desc], idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>{title}:</b> {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden h-full">
            <img src={admission} alt="Flight Training" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Fifth Section: Simulator Training */}
      <div className="flex flex-col md:flex-row gap-8">
        <div
          className="flex-1 space-y-6"
          data-aos="fade-up"
          data-aos-duration={1600}
        >
          <h2 className="text-2xl font-bold text-blue-600 hover:text-red-600 transition-colors duration-300">
            Simulator Training
          </h2>
          <p className="text-gray-600">
            Advanced simulator training ensures students are well-prepared for real-world flight scenarios. Key aspects include:
          </p>
          <div className="space-y-4 mt-6">
            {[
              ["Emergency procedures and troubleshooting", "Handling critical flight situations."],
              ["Night flying operations", "Simulating night-time navigation and landing procedures."],
              ["Crosswind and bad weather handling", "Training to manage turbulence, wind shear, and extreme weather conditions."],
              ["Multi-crew coordination (MCC) training", "Preparing for teamwork in airline operations and multi-pilot environments."]
            ].map(([title, desc], idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <b>{title}:</b> {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden h-full">
            <img src={carrier} alt="Simulator Training" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

   
<section
  className="relative bg-cover bg-center bg-fixed min-h-screen"
  style={{ backgroundImage: `url(${background1})` }}
>
  <div className="absolute inset-0 bg-black opacity-20" />
  <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
    <div
      className="text-center mb-16 text-white"
      data-aos="fade-up"
      data-aos-duration={1400}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:text-red-500 transition-colors duration-300">
        Why Become a Pilot in India?
      </h2>
      <p className="text-xl max-w-3xl mx-auto hover:text-red-500 transition-colors duration-300">
        With rapid expansion in the Indian aviation industry, airlines are
        continuously hiring well-trained pilots. The demand for commercial
        pilots is expected to rise significantly in the coming years.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-white">
      {/* Increased Air Travel Demand */}
      <div
        className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-duration={1400}
      >
        <div className="w-16 h-16 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
          <FaPlaneDeparture className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
            Increased Air Travel Demand
          </h3>
          <p className="hover:text-red-500 transition-colors duration-300">
            Rising passenger traffic is leading to airline fleet expansion and
            a surge in pilot requirements.
          </p>
        </div>
      </div>

      {/* Boeing & Airbus Forecasts */}
      <div
        className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-duration={1400}
      >
        <div className="w-16 h-16 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
          <FaChartLine className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
            Boeing & Airbus Forecasts
          </h3>
          <p className="hover:text-red-500 transition-colors duration-300">
            Leading aircraft manufacturers project a significant increase in
            pilot demand over the next two decades.
          </p>
        </div>
      </div>

      {/* Government Initiatives */}
      <div
        className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-duration={1400}
      >
        <div className="w-16 h-16 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
          <FaUniversity className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
            Government Initiatives
          </h3>
          <p className="hover:text-red-500 transition-colors duration-300">
            Programs like UDAN promote regional connectivity, boosting the need
            for qualified pilots.
          </p>
        </div>
      </div>

      {/* Competitive Salaries */}
      <div
        className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-duration={1400}
      >
        <div className="w-16 h-16 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
          <FaRupeeSign className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
            Competitive Salaries
          </h3>
          <p className="hover:text-red-500 transition-colors duration-300">
            Commercial pilots in India enjoy excellent salaries with long-term
            career growth potential.
          </p>
        </div>
      </div>

      {/* Global Career Opportunities */}
      <div
        className="flex gap-6 items-start hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-duration={1400}
      >
        <div className="w-16 h-16 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 hover:shadow-lg transition">
          <FaGlobeAsia className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors duration-300">
            Global Career Opportunities
          </h3>
          <p className="hover:text-red-500 transition-colors duration-300">
            DGCA-certified pilots are eligible for global aviation jobs after
            acquiring additional certifications.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='cotainer-fluid p-5'> 
   <div className='row'> 
    <div className='col-12 col-md-6'> 
      <div>
         <img src='' alt='' />
      </div>
    </div>
     <div className='col-12 col-md-6'> 
       <div className=''> 
         <h1> </h1>
       </div>
    </div>
   </div>
</section>


    </section>
  )
}

export default CourseCurriculum