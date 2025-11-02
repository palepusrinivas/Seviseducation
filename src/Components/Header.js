import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import sevislogo from "../assest/sevis logo.jpg";

// Route Mapping Object
const routePaths = {
  "AUSTRALIA STUDENT VISA": "/Australiastudentvisa",
  "UNITED KINGDOM": "/Unitedkingdom",
  "UNITED STATES OF AMERICA": "/UnitedStateofAmerica",
  "UK University": "/Ukuniversities",
  "USA University": "/USAUniversities",
  "AUSTRALIA University": "/AustraliaUniversities",
  "GRE": "/GRE",
  "GMAT": "/GMAT",
  "IELTS": "/IELTS",
  "TOEFL": "/TOEFL",
  "PTE": "/PTE",
  "SAT EXAM": "/SATEXAM",
  "DUOLINGO": "/DUOLINGO",
  "OVERVIEW PILOT TRAINING": "/OVERPIOLTTRAINING",
  "COURSE CURRICULUM": "/CourseCurriculum",
};

const menuItems = [
  {
    title: "STUDENT VISA",
    links: ["AUSTRALIA STUDENT VISA", "UNITED KINGDOM", "UNITED STATES OF AMERICA"],
  },
  {
    title: "UNIVERSITIES",
    links: ["UK University", "USA University", "AUSTRALIA University"],
  },
  {
    title: "EXAMS",
    links: ["GRE", "GMAT", "IELTS", "TOEFL", "PTE", "SAT EXAM", "DUOLINGO"],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for glassmorphic effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setDropdownOpen(null);
    if (dropdownOpen !== null) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  // Close mobile menu and reset dropdowns when menu closes
  useEffect(() => {
    if (!menuOpen) {
      setMobileDropdownOpen(null);
    }
  }, [menuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-2xl border-b border-gray-200' 
          : 'bg-white shadow-lg'
      }`}
      style={{ 
        textDecoration: 'none',
        position: 'fixed',
        backgroundColor: 'white',
        willChange: 'transform'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center py-2.5 lg:py-3">
          {/* Logo with Hover Effect */}
          <NavLink to="/" className="flex-shrink-0 no-underline" style={{ textDecoration: 'none' }}>
            <motion.img 
              src={sevislogo} 
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain" 
              alt="Sevis Global Education"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {/* Home Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-3 xl:px-4 py-2 font-semibold text-xs xl:text-sm transition-all duration-300 rounded-lg no-underline group ${
                isActive
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`
              }
              style={{ textDecoration: 'none' }}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">HOME</span>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      layoutId="underline"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* About Link */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-3 xl:px-4 py-2 font-semibold text-xs xl:text-sm transition-all duration-300 rounded-lg no-underline group ${
                isActive
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`
              }
              style={{ textDecoration: 'none' }}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">ABOUT US</span>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      layoutId="underline"
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* Dropdown Menus */}
            {menuItems.map((menu, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <motion.button
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 font-semibold text-xs xl:text-sm transition-all duration-300 rounded-lg ${
                    dropdownOpen === index 
                      ? 'text-primary bg-gradient-to-r from-primary/5 to-secondary/5' 
                      : 'text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5'
                  }`}
                  style={{ textDecoration: 'none' }}
                  whileHover={{ scale: 1.02 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(dropdownOpen === index ? null : index);
                  }}
                >
                  <span className="whitespace-nowrap">{menu.title}</span>
                  <motion.div
                    animate={{ rotate: dropdownOpen === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={14} className="xl:w-4 xl:h-4" />
                  </motion.div>
                </motion.button>

                {/* Dropdown Menu with Animation - Professional */}
                <AnimatePresence>
                  {dropdownOpen === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className={`absolute mt-3 w-[360px] bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-2xl shadow-2xl rounded-2xl border-2 border-primary/40 overflow-hidden ${
                        index === menuItems.length - 1 ? 'right-0' : 'left-0'
                      }`}
                      style={{
                        boxShadow: '0 30px 60px -15px rgba(255, 0, 19, 0.3), 0 0 0 1px rgba(255, 0, 19, 0.2), 0 8px 30px rgba(0, 0, 0, 0.3)',
                        left: index === 1 ? '50%' : (index === menuItems.length - 1 ? 'auto' : '0'),
                        right: index === menuItems.length - 1 ? '0' : 'auto',
                        transform: index === 1 ? 'translateX(-50%)' : 'none'
                      }}
                      onMouseEnter={() => setDropdownOpen(index)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {/* Animated gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-60 animate-pulse pointer-events-none" />
                      
                      {/* Dropdown Header - Compact */}
                      <div className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary px-5 py-3 border-b border-white/20">
                        <div className="flex items-center gap-2.5">
                          <div className="w-1 h-4 bg-white rounded-full shadow-lg" />
                          <p className="text-sm font-bold text-white uppercase tracking-wide">
                            {menu.title}
                          </p>
                        </div>
                      </div>

                      {/* Links - Compact with Block Effect */}
                      <ul className="py-2 px-2.5">
                    {menu.links.map((link, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            className="mb-1.5"
                          >
                        <NavLink
                          to={routePaths[link] || "/"}
                          className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 no-underline group relative overflow-hidden shadow-sm ${
                            isActive
                                    ? "bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg border border-white/20"
                                    : "bg-white/5 text-gray-100 hover:bg-white/15 hover:text-white font-medium hover:shadow-md border border-white/5 hover:border-white/20"
                                }`
                          }
                              style={{ textDecoration: 'none' }}
                          onClick={() => setDropdownOpen(null)}
                        >
                              {({ isActive }) => (
                                <>
                                  {/* Hover glow effect */}
                                  {!isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/15 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  )}
                                  
                                  <motion.div
                                    className={`w-2.5 h-2.5 rounded-full relative z-10 flex-shrink-0 ${
                                      isActive 
                                        ? 'bg-white shadow-xl shadow-white/60' 
                                        : 'bg-gray-400 group-hover:bg-white group-hover:shadow-lg'
                                    }`}
                                    animate={{ 
                                      scale: isActive ? [1, 1.5, 1] : 1,
                                      boxShadow: isActive 
                                        ? ['0 0 0 0 rgba(255,255,255,0.8)', '0 0 0 12px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0)']
                                        : '0 0 0 0 rgba(255,255,255,0)'
                                    }}
                                    transition={{ duration: 0.9, repeat: isActive ? Infinity : 0 }}
                                  />
                                  <span className="text-sm flex-1 relative z-10 font-semibold leading-relaxed tracking-wide">{link}</span>
                                  {isActive && (
                                    <motion.div
                                      initial={{ scale: 0, rotate: -180 }}
                                      animate={{ scale: 1, rotate: 0 }}
                                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0 shadow-xl"
                                    >
                                      <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                                    </motion.div>
                                  )}
                                </>
                              )}
                        </NavLink>
                          </motion.li>
                    ))}
                  </ul>

                      {/* Dropdown Footer - Compact */}
                      <div className="bg-gradient-to-r from-primary/25 via-secondary/25 to-primary/25 px-5 py-2.5 border-t border-white/20 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] text-gray-200 font-semibold tracking-wide">
                            {menu.links.length} Options Available
                          </p>
                          <div className="flex gap-1.5">
                            {[...Array(3)].map((_, i) => (
                              <div 
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-sm"
                                style={{
                                  animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Contact Link */}
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `relative px-3 xl:px-4 py-2 font-semibold text-xs xl:text-sm transition-all duration-300 rounded-lg no-underline group ${
                isActive
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`
              }
              style={{ textDecoration: 'none' }}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">CONTACT US</span>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      layoutId="underline"
                    />
                  )}
                </>
              )}
            </NavLink>
          </div>

          {/* "Let's Connect" Button - Desktop */}
          <NavLink to="/FreeConsultation" className="no-underline hidden lg:block" style={{ textDecoration: 'none' }}>
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary text-white px-5 xl:px-6 py-2 xl:py-2.5 font-bold text-xs xl:text-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 whitespace-nowrap">Let's Connect</span>
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-3 rounded-lg active:bg-gray-200 transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[90vw] max-w-[400px] h-screen bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
              style={{ 
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain',
                maxHeight: '100vh'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary p-5 text-white z-20 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Menu</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                    }}
                    className="p-2.5 hover:bg-white/20 active:bg-white/30 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-white/90 text-sm">
                  Explore our services and offerings
                </p>
              </div>

              <div className="p-4">
                {/* Home Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                    `flex items-center gap-3 py-3 sm:py-3.5 px-3 sm:px-4 mb-2 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 no-underline active:scale-95 ${
                isActive
                        ? "bg-gradient-to-r from-primary/15 to-secondary/15 text-primary"
                        : "text-gray-800 hover:bg-gray-50 active:bg-gray-100 hover:text-primary"
                    }`
              }
                  style={{ textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
                  {({ isActive }) => (
                    <>
                      <div className={`w-2 h-2 flex-shrink-0 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-400'}`} />
                      <span>Home</span>
                    </>
                  )}
            </NavLink>

                {/* About Link */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                    `flex items-center gap-3 py-3 sm:py-3.5 px-3 sm:px-4 mb-2 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 no-underline active:scale-95 ${
                isActive
                        ? "bg-gradient-to-r from-primary/15 to-secondary/15 text-primary"
                        : "text-gray-800 hover:bg-gray-50 active:bg-gray-100 hover:text-primary"
                    }`
              }
                  style={{ textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
                  {({ isActive }) => (
                    <>
                      <div className={`w-2 h-2 flex-shrink-0 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-400'}`} />
                      <span>About Us</span>
                    </>
                  )}
            </NavLink>

                {/* Dropdown Menus - Mobile Fully Responsive */}
            {menuItems.map((menu, index) => (
                  <div key={`mobile-menu-${index}`} className="mb-3">
                    {/* Dropdown Button */}
                <button
                      type="button"
                      className={`w-full flex items-center justify-between py-4 px-4 rounded-xl font-bold text-base transition-all duration-200 shadow-md min-h-[56px] touch-manipulation ${
                        mobileDropdownOpen === index
                          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-[0.98]"
                          : "bg-gray-100 text-gray-800 active:bg-gray-200 hover:bg-gray-200"
                      }`}
                      style={{ 
                        textDecoration: 'none',
                        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                        touchAction: 'manipulation',
                        userSelect: 'none',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const newValue = mobileDropdownOpen === index ? null : index;
                        console.log('Mobile dropdown clicked:', index, '→', newValue);
                        setMobileDropdownOpen(newValue);
                      }}
                      aria-expanded={mobileDropdownOpen === index}
                      aria-label={`Toggle ${menu.title} menu`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-3 h-3 flex-shrink-0 rounded-full transition-all duration-200 ${
                          mobileDropdownOpen === index ? 'bg-white shadow-xl' : 'bg-primary shadow-md'
                        }`} />
                        <span className="text-left font-bold tracking-wide flex-1">{menu.title}</span>
                      </div>
                  <ChevronDown
                        size={22} 
                        className={`flex-shrink-0 transition-transform duration-300 ${
                          mobileDropdownOpen === index ? 'rotate-180' : 'rotate-0'
                        }`}
                  />
                </button>

                    {/* Submenu - Block Effect with Slide Animation */}
                    <AnimatePresence>
                      {mobileDropdownOpen === index && (
                        <motion.div 
                          key={`submenu-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-2"
                        >
                          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl p-2.5 border-2 border-primary/30 shadow-xl">
                  {menu.links.map((link, i) => (
                    <NavLink
                                key={`mobile-link-${index}-${i}`}
                      to={routePaths[link] || "/"}
                      className={({ isActive }) =>
                                  `flex items-center gap-3 py-3 px-4 mb-1.5 last:mb-0 rounded-lg text-sm transition-all duration-200 no-underline shadow-sm min-h-[48px] ${
                        isActive
                                      ? "bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg"
                                      : "bg-white/10 text-gray-100 active:bg-white/20 hover:bg-white/15 font-medium"
                                  }`
                                }
                                style={{ 
                                  textDecoration: 'none',
                                  WebkitTapHighlightColor: 'transparent',
                                  display: 'flex',
                                  width: '100%'
                                }}
                                onClick={() => {
                                  console.log('Mobile link clicked:', link);
                                  // Close menu and dropdown immediately for smooth navigation
                        setMenuOpen(false);
                                    setMobileDropdownOpen(null);
                                }}
                              >
                                {({ isActive }) => (
                                  <>
                                    <div className={`w-2.5 h-2.5 flex-shrink-0 rounded-full ${
                                      isActive ? 'bg-white shadow-lg' : 'bg-gray-400'
                                    }`} />
                                    <span className="flex-1 text-left break-words leading-snug">{link}</span>
                                    {isActive && (
                                      <div className="w-6 h-6 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                                      </div>
                                    )}
                                  </>
                                )}
                    </NavLink>
                  ))}
                </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
              </div>
            ))}

                {/* Contact Link */}
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                    `flex items-center gap-3 py-3 sm:py-3.5 px-3 sm:px-4 mb-2 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 no-underline active:scale-95 ${
                isActive
                        ? "bg-gradient-to-r from-primary/15 to-secondary/15 text-primary"
                        : "text-gray-800 hover:bg-gray-50 active:bg-gray-100 hover:text-primary"
                    }`
              }
                  style={{ textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
                  {({ isActive }) => (
                    <>
                      <div className={`w-2 h-2 flex-shrink-0 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-400'}`} />
                      <span>Contact Us</span>
                    </>
                  )}
            </NavLink>

                {/* Mobile CTA Button */}
            <NavLink
              to="/FreeConsultation"
                  className="block mt-6 no-underline"
                  style={{ textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 sm:py-4 font-bold text-sm sm:text-base rounded-xl shadow-lg relative overflow-hidden active:scale-95"
                    style={{ textDecoration: 'none' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Let's Connect</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </motion.button>
            </NavLink>
          </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
