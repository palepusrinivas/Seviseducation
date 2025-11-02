import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import AOS from 'aos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

// Import images
import canada from '../assest/Canada.jpg';
import uk from '../assest/UK1.jpg';
import usa from '../assest/USA_City-.jpg';
import australia from '../assest/Australia.jpg';

const carouselImages = [
  {
    id: 1,
    image: canada,
    caption: 'Study in Canada',
    description: 'World-class universities and multicultural experience'
  },
  {
    id: 2,
    image: uk,
    caption: 'Study in United Kingdom',
    description: 'Historic institutions and academic excellence'
  },
  {
    id: 3,
    image: usa,
    caption: 'Study in United States',
    description: 'Innovation hubs and diverse opportunities'
  },
  {
    id: 4,
    image: australia,
    caption: 'Study in Australia',
    description: 'Quality education in a vibrant setting'
  },
];

const ImageCarousel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Top Global Universities We Partner With
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Swiper Carousel */}
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Parallax]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            parallax={true}
            speed={1000}
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
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {carouselImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  {/* Background Image with Parallax */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    data-swiper-parallax="-300"
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    <div data-swiper-parallax="-200">
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {item.caption}
                      </h3>
                    </div>
                    <div data-swiper-parallax="-100">
                      <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <div data-swiper-parallax="-50" className="mt-6">
                      <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                        Explore Programs
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Styling */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: white;
            opacity: 0.5;
            transition: all 0.3s;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            width: 32px;
            border-radius: 6px;
            background: linear-gradient(to right, #0056D2, #00ADEF);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ImageCarousel;

