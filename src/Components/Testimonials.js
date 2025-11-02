import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import AOS from 'aos';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    name: 'Aditi Rao',
    country: 'Canada',
    university: 'University of Toronto',
    image: 'https://ui-avatars.com/api/?name=Aditi+Rao&background=0056D2&color=fff&size=200',
    text: 'Sevis Global made my entire study abroad process seamless and stress-free! Their expert guidance helped me secure admission to my dream university in Canada.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    country: 'United Kingdom',
    university: 'London School of Economics',
    image: 'https://ui-avatars.com/api/?name=Rohan+Sharma&background=00ADEF&color=fff&size=200',
    text: 'Their visa coaching and documentation guidance were exceptional. I got my UK student visa approved on the first attempt thanks to their thorough preparation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Patel',
    country: 'United States',
    university: 'Stanford University',
    image: 'https://ui-avatars.com/api/?name=Priya+Patel&background=FFD166&color=333&size=200',
    text: 'From university selection to visa interview prep, Sevis was with me every step. Their personalized approach made all the difference in my journey to the USA.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Arjun Mehta',
    country: 'Australia',
    university: 'University of Melbourne',
    image: 'https://ui-avatars.com/api/?name=Arjun+Mehta&background=0056D2&color=fff&size=200',
    text: 'The mock interviews gave me so much confidence! I walked into my visa interview fully prepared and got approved. Highly recommend Sevis Global Education.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    country: 'Canada',
    university: 'McGill University',
    image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=00ADEF&color=fff&size=200',
    text: 'Best consultancy for study abroad! Their team is knowledgeable, responsive, and genuinely cares about your success. Thank you for making my dreams come true!',
    rating: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Real stories from students who achieved their study abroad dreams with us
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials Carousel */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                {/* Glassmorphic Card */}
                <div className="relative h-full p-8 rounded-2xl glassmorphic backdrop-blur-lg bg-white/70 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8">
                    <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full shadow-lg">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="flex flex-col items-center mb-6 mt-4">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Country Flag Indicator */}
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                          {testimonial.country.charAt(0)}
                        </div>
                      </div>
                    </div>

                    {/* Name & University */}
                    <h3 className="text-xl font-bold text-textPrimary text-center">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {testimonial.country}
                    </p>
                    <p className="text-xs text-textSecondary mt-1">
                      {testimonial.university}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-textSecondary text-center leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Styling */}
        <style jsx global>{`
          .testimonials-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #0056D2;
            opacity: 0.3;
            transition: all 0.3s;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            width: 30px;
            border-radius: 5px;
            background: linear-gradient(to right, #0056D2, #00ADEF);
          }
          .swiper-slide {
            height: auto;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;

