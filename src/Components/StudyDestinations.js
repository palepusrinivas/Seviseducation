import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

// Import country images
import canada from '../assest/Canada.jpg';
import uk from '../assest/UK1.jpg';
import usa from '../assest/USA_City-.jpg';
import australia from '../assest/Australia.jpg';

const destinations = [
  {
    id: 1,
    country: 'Canada',
    image: canada,
    description: 'World-class education with post-graduation work opportunities',
    highlights: ['High quality of life', 'Affordable tuition', 'PR pathways'],
    link: '/Australiastudentvisa',
  },
  {
    id: 2,
    country: 'United Kingdom',
    image: uk,
    description: 'Historic universities with globally recognized degrees',
    highlights: ['Shorter courses', 'Rich heritage', 'Global network'],
    link: '/Unitedkingdom',
  },
  {
    id: 3,
    country: 'United States',
    image: usa,
    description: 'Innovation hubs and diverse academic programs',
    highlights: ['Top universities', 'Research opportunities', 'Career growth'],
    link: '/UnitedStateofAmerica',
  },
  {
    id: 4,
    country: 'Australia',
    image: australia,
    description: 'Quality education in a vibrant, multicultural environment',
    highlights: ['Work while studying', 'Beautiful lifestyle', 'Welcoming culture'],
    link: '/Australiastudentvisa',
  },
];

const StudyDestinations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Popular Study Destinations
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Explore top destinations and find your perfect study abroad experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Card Inner Container with 3D Effect */}
              <div className="relative h-full transition-transform duration-500 transform-gpu group-hover:rotateY-3 group-hover:scale-105">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-primary/90 group-hover:via-primary/60 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  {/* Country Name */}
                  <h3 className="text-3xl font-bold mb-3 transform transition-transform duration-500 group-hover:translate-y-0">
                    {destination.country}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {destination.description}
                  </p>

                  {/* Highlights - Hidden by default, shown on hover */}
                  <div className="space-y-2 mb-4 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    {destination.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <NavLink to={destination.link}>
                    <button className="w-full bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                      Explore Programs
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </NavLink>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl transform translate-y-2 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-textSecondary text-lg">
            Not sure which destination is right for you?{' '}
            <NavLink to="/Contact" className="text-primary font-semibold hover:underline">
              Get a free consultation
            </NavLink>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyDestinations;

