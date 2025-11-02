import React from 'react'

import { FaRocket, FaHandHoldingUsd, FaChartLine, FaBullhorn, FaFileInvoiceDollar, FaHandshake, FaHeart } from 'react-icons/fa';

import about from "../assest/about.jpg";
import aboutpage from "../assest/About2.jpg";

import { FaPlane, FaChalkboardTeacher, FaGraduationCap, FaChartBar, FaGlobe, FaBriefcase } from "react-icons/fa";
 
import Aos from 'aos';



const Advice = () => {


         Aos.init({
              duration :3000
            })
          console.log('Component mounted!');



  return (
    <section> 

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative h-[600px] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${about})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div
className="absolute inset-0 bg-gray-900/75 sm:bg-transparent 
  sm:bg-gradient-to-r sm:from-gray-900/95 sm:to-gray-900/25 
  md:from-gray-900/90 md:to-gray-900/20 
  lg:from-gray-900/85 lg:to-gray-900/15 
  xl:from-gray-900/80 xl:to-gray-900/10 
  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

<div
  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
  <div className="max-w-xl text-left"data-aos="fade-up" data-aos-duration={2000} > {/* Ensures left alignment on all screens */}
    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
       Empowering Future Aviators
      <strong className="block font-extrabold text-rose-500"> Global Students! </strong>
    </h1>

    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
    Sevis Global Education provides world-class pilot training and global education guidance to help you achieve your dreams.
    </p>

    <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start"> 
      <a
        href="#"
        className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-none sm:w-auto"
      >
        Get Started
      </a>

      <a
        href="#"
        className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-none sm:w-auto"
      >
        Learn More
      </a>
    </div>
  </div>
</div>

</section>

<section className='container-fluid p-5 bg-white'>   
  <div className='container p-5'>
    <div className='row'> 
      <div className='col-12 col-md-6 d-flex justify-content-center'> 
        <div>
          {/* Image with reduced size */}
          <img 
            className='rounded-lg ' 
            src={aboutpage} 
            alt='Sevis Global Education' 
          />
        </div>
      </div>

      <div className='col-12 col-md-6'> 
        {/* Bigger Heading */}
        <h1 className='text-blue-700 fw-bold display-5' data-aos="fade-up" data-aos-duration={2000}>
          Sevis Global Education
        </h1>

        {/* Bigger Paragraphs */}
        <p className='text-justify fs-5' data-aos="fade-up" data-aos-duration={2000}>
          Studying abroad can be a very enriching and broadening experience which shapes the career path of an individual. With a plethora of universities and courses to choose from, choosing the right university and the course which is a perfect fit for an individual can be a daunting task. With guidance and assistance from our expert coaches and counselors we help the individual right from choosing a course and university to preparing the applicant for the visa interview.
        </p>

        <p className='text-justify fs-5' data-aos="fade-up" data-aos-duration={2000}>
          We create a personalized experience based on the individual’s educational background and assist the individual through picking the right program while we compile and submit all the necessary documentation involved in the application process. With our expert coaches we also train the applicant with mock interviews to make them more comfortable and confident with the actual interview process.
        </p>

        {/* List with Bigger Text */}
        <ul className="list-unstyled fs-5">
          {[
            "Free Assessment",
            "Documentation Assistance",
            "Book Appointment",
          ].map((text, index) => (
            <li key={index} className="d-flex align-items-center gap-2 my-2">
              <span className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-check-circle-fill text-danger"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </span>
              <span className="fw-medium">{text}</span>
            </li>
          ))}
        </ul>

        {/* Bigger Paragraphs for extra content */}
        <p className='text-justify mt-3' data-aos="fade-up" data-aos-duration={2000}>
          Get a quick evaluation of your profile to explore the best study abroad options. Our experts analyze your academic background and guide you toward the right path.
        </p>
        <p className='text-justify mt-3 ' data-aos="fade-up" data-aos-duration={2000}>
          Discover career opportunities that align with your education and future goals. We help you choose courses and universities that build a strong foundation for success.
        </p>
        <p className='text-justify mt-3 ' data-aos="fade-up" data-aos-duration={2000}>
          Schedule a one-on-one session with our experienced counselors at your convenience. Get personalized advice and answers to all your study abroad queries.
        </p>

      </div>
    </div>
  </div>
</section>


    </section>
  )
}

export default Advice