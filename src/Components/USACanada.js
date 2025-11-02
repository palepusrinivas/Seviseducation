import React from "react";
import Australia2 from "../assest/aus-scaled 1.png";
import { DollarSign, Trophy, Clock, Shield, Briefcase, FileText } from "lucide-react";
import usacanda from "../assest/usa-canda.jpg"

const USACanada = () => {
  return (
    <section>
      {/* Hero Image Section */}
      <section>
        <div className="relative h-96 w-full overflow-hidden">
          <img
            src={Australia2}
            alt="Sydney Harbor at night"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex h-full items-center justify-center">
            <h1
              className="text-4xl font-bold text-white md:text-4xl"
              data-aos="fade-up"
              data-aos-duration={1800}
            >
              Australia Student Visa
            </h1>
          </div>
        </div>
      </section>

      

      <article className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
              📘 Study Abroad Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              USA vs Canada: Which is the Better Study Destination?
            </h1>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-gray-100 h-64 md:h-80 flex items-center justify-center">
            <img
              src={usacanda}
              alt="USA vs Canada study destinations comparison"
              className=""
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none px-4 md:px-0">
          <p className="text-xl text-gray-700 leading-relaxed">
            Choosing the right country to pursue higher education is one of the most important decisions for international
            students. The USA and Canada consistently rank as top destinations, each offering world-class universities,
            research opportunities, and diverse cultural experiences. But which one is the right fit for you? Let's break
            it down.
          </p>
        </section>

        {/* Comparison Cards */}
        <section className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
          {/* USA Card */}
          <div className="border-2 rounded-xl hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-blue-50 p-4">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-2xl">🇺🇸</span> Why Choose the USA?
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Trophy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Academic Excellence</h4>
                  <p className="text-gray-700 text-sm">
                    With over 5,000 universities, including the Ivy League, the USA sets global standards for education.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Flexibility in Courses</h4>
                  <p className="text-gray-700 text-sm">
                    Students can choose from a wide range of majors and switch fields easily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Industry Exposure</h4>
                  <p className="text-gray-700 text-sm">
                    The USA hosts global innovation hubs like Silicon Valley, offering unmatched networking
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Canada Card */}
          <div className="border-2 rounded-xl hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-red-50 p-4">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-2xl">🇨🇦</span> Why Choose Canada?
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Affordable Education</h4>
                  <p className="text-gray-700 text-sm">
                    Tuition fees and living costs are comparatively lower than in the USA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Post-Graduate Work Permit (PGWP)</h4>
                  <p className="text-gray-700 text-sm">Students can work up to three years after graduation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Safe & Welcoming</h4>
                  <p className="text-gray-700 text-sm">
                    Canada is consistently ranked as one of the safest countries for international students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Factors Section */}
        <section className="space-y-8 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-center">Key Factors to Consider</h2>

          <div className="grid gap-6">
            <div className="border p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Budget</h3>
                  <p className="text-gray-700">
                    Canada is budget-friendly, while the USA is more expensive but offers higher global visibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="border p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work Opportunities</h3>
                  <p className="text-gray-700">
                    USA = internships with Fortune 500 companies; Canada = easier PR and work-life balance.
                  </p>
                </div>
              </div>
            </div>

            <div className="border p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
                  <p className="text-gray-700">Canada has a quicker, smoother visa system.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gray-100 rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center">Conclusion</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            If your dream is to study at world-class institutions with unmatched career exposure, the USA may be the
            right choice. If you're looking for affordability, safety, and permanent residency options, Canada could be
            your ideal destination.
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 rounded-xl p-8 text-center space-y-6 text-white">
          <h2 className="text-3xl font-bold">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90">
            Get personalized guidance from our expert counselors to make the best decision for your future.
          </p>
          <button className="text-lg px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition">
            Book a Free Assessment
          </button>
        </section>
      </article>
    </section>
  );
};

export default USACanada;
