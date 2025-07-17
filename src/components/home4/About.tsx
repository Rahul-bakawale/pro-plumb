import { CheckCircle, Clock } from 'lucide-react';
import React from 'react'


const About = ({aboutSectionRef, isAboutInView }: any) => {
    return (     <section id="about" ref={aboutSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isAboutInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isAboutInView ? 'animate-slide-in-left' : ''}`}>
            <img
              src="https://placehold.co/600x400/2196F3/FFFFFF?text=Beaconsfield+plumbing"
              alt="Eco Plumbing"
              className="rounded-xl shadow-2xl border-4 border-blue-400 transform hover:scale-102 transition duration-300 ease-in-out"
            />
          </div>
          <div className={`md:w-1/2 ${isAboutInView ? 'animate-slide-in-right' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About <span className="text-blue-500">Beaconsfield plumbing </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Beaconsfield plumbing  is committed to providing environmentally conscious plumbing services without compromising on quality or efficiency. With over 20+ years Local family business 
              , our team of certified professionals uses the latest techniques and sustainable practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We focus on long-term solutions, water conservation, and transparent service. From minor repairs to major green installations, we ensure your plumbing is both functional and sustainable.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`flex items-start bg-gray-800 p-4 rounded-lg shadow-sm border border-blue-700 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <CheckCircle className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Eco-Friendly Solutions</h3>
                  <p className="text-gray-400 text-sm">Sustainable practices for a greener home.</p>
                </div>
              </div>
              <div className={`flex items-start bg-gray-800 p-4 rounded-lg shadow-sm border border-blue-700 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Clock className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Reliable & Timely</h3>
                  <p className="text-gray-400 text-sm">We arrive on time, every time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)
}

export default About;20