import React from 'react'
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"; 
import { Mail, Phone, MapPin } from 'lucide-react';

import logo from "../assest/footerupdate.png";
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import footer from "../assest/image 25.png";




const Footer = () => {


    AOS.init({
          duration :3000
          })
         console.log('Component mounted!');
      

  return (
    <section> 
     
       <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
         {/* Professional Background Image */}
         <div 
           className="absolute inset-0 opacity-5"
           style={{ 
             backgroundImage: `url(${footer})`, 
             backgroundSize: 'cover', 
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed'
           }}
         ></div>
         
         {/* Sophisticated Particle System - 45 Particles */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">
           {[...Array(45)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute rounded-full"
               style={{
                 width: Math.random() * 2.5 + 0.8 + 'px',
                 height: Math.random() * 2.5 + 0.8 + 'px',
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 background: i % 3 === 0 ? 'rgba(255, 255, 255, 0.4)' : i % 3 === 1 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
               }}
               animate={{
                 y: [0, -40, 0],
                 x: [0, Math.random() * 20 - 10, 0],
                 scale: [0.7, 1.3, 0.7],
                 opacity: [0.2, 0.5, 0.2],
               }}
               transition={{
                 duration: 6 + Math.random() * 3,
                 repeat: Infinity,
                 delay: Math.random() * 2,
                 ease: "easeInOut",
               }}
             />
           ))}
         </div>
         
         {/* Professional Subtle Glow Orbs */}
         <div className="absolute inset-0 pointer-events-none opacity-20">
           <motion.div
             className="absolute top-20 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 bg-white/15 rounded-full blur-3xl"
             animate={{
               scale: [1, 1.3, 1],
               opacity: [0.3, 0.5, 0.3],
             }}
             transition={{
               duration: 8,
               repeat: Infinity,
             }}
           />
           <motion.div
             className="absolute bottom-20 right-10 md:right-20 w-56 h-56 md:w-72 md:h-72 bg-white/12 rounded-full blur-3xl"
             animate={{
               scale: [1, 1.4, 1],
               opacity: [0.3, 0.5, 0.3],
             }}
             transition={{
               duration: 9,
               repeat: Infinity,
               delay: 1,
             }}
           />
         </div>
         
         {/* Professional Top Border */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-14 sm:py-16 md:py-18 lg:py-20"   data-aos="fade-up" data-aos-duration={400} >
        {/* Professional Clean 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: About Company */}
          <div className="space-y-6">
            <div className="mb-2">
              <img src={logo} alt="Sevis Global Education" className="w-48 md:w-52 opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted global education partner. Expert counseling, visa support and documentation assistance.
            </p>

            {/* Professional Social Media */}
            <div>
              <h4 className="text-xs font-bold mb-4 text-white uppercase tracking-widest">Connect With Us</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/8 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/12 transition-all duration-300"
                >
                  <FaInstagram size={18} className="text-gray-400 hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://wa.me/919256925645"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/8 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/12 transition-all duration-300"
                >
                  <FaWhatsapp size={18} className="text-gray-400 hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/8 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/12 transition-all duration-300"
                >
                  <FaLinkedin size={18} className="text-gray-400 hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact</h3>
            
            <div className="space-y-3.5">
              <a 
                href="mailto:info@sevisedu.com" 
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 text-white/60 group-hover:text-white flex-shrink-0 transition-colors" />
                <span className="text-sm">info@sevisedu.com</span>
              </a>

              <a 
                href="tel:+919256925645" 
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 text-white/60 group-hover:text-white flex-shrink-0 transition-colors" />
                <span className="text-sm">+91 9256-9256-49</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400 pt-2">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">India</p>
                  <p className="text-sm leading-relaxed">Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">USA</p>
                  <p className="text-sm leading-relaxed">Miami, Florida</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
                <li>
                <NavLink
                    to="/Immigration"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Immigration
                </NavLink>
              </li>
                <li>
                <NavLink
                    to="/DUOLINGO"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                   Duolingo
                </NavLink>
              </li>
                <li>
                <NavLink
                    to="/IELTS"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    IELTS
                </NavLink>
              </li>
                <li>
                <NavLink
                    to="/UnitedStateofAmerica"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    USA University
                </NavLink>
              </li>
                <li>
                <NavLink
                    to="/UnitedArabEmiratesUniversities"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    UAE University
                </NavLink>
                </li>
                {/* <li>
                <NavLink
                    to="/Contact"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Free Assessment
                </NavLink>
                </li> */}
            </ul>
          </div>

          {/* Column 4: Study Destinations */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Destinations</h3>
            <ul className="space-y-2.5">
                <li>
                <NavLink
                    to="/UnitedStateofAmerica"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Study in USA
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Unitedkingdom"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Study in UK
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/UnitedArabEmiratesstudentvisa"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Study in UAE
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/AustraliaUniversities"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Study in Australia
                </NavLink>
                </li>
                {/* <li>
                <NavLink
                    to="/USAUniversities"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    Top Universities
                </NavLink>
                </li> */}
                <li>
                <NavLink
                    to="/about"
                    className="text-sm text-gray-400 no-underline hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                >
                    About Us
                </NavLink>
                </li>
            </ul>
          </div>
        </div>

        {/* Professional Newsletter Section */}
        <div className="mt-14 mb-12 p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Subscribe for study abroad insights</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[400px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-5 py-3 rounded-lg bg-white/5 border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all flex-1"
              />
              <button 
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white text-sm hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Professional Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © 2025 <span className="text-gray-300 font-medium">Sevis Global Education Pvt. Ltd.</span> All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <NavLink to="/PrivacyPolicy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/TermsofService" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </NavLink>
              <a href="/Contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </section>
  )
}

export default Footer

