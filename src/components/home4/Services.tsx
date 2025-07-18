'use client'

import { Home, ShowerHead, CloudRain, Wrench, ThermometerSnowflake, ToolCase } from 'lucide-react'; // Import new icons
import React from 'react'


const Services = ({servicesSectionRef,isServicesInView }: any) => {
    return ( <section id="services" ref={servicesSectionRef} className={`py-20 px-6 md:px-12 bg-gray-700 opacity-0 ${isServicesInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            Our <span className="text-blue-500">Comprehensive Services</span>
          </h2>
          {/* Adjusted grid to 2 columns for larger screens to fit 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: New House */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Home className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">New House Plumbing</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete plumbing installations for new residential constructions, built to last.
              </p>
            </div>

            {/* Service Card 2: Renovations */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <Wrench className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Renovation Plumbing</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert plumbing solutions for home renovations, ensuring seamless integration and efficiency.
              </p>
            </div>

            {/* Service Card 3: Hot Water and Heat Pumps */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <ShowerHead className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Hot Water & Heat Pumps</h3>
              <p className="text-gray-300 leading-relaxed">
                Installation, repair, and maintenance of hot water systems and energy-efficient heat pumps.
              </p>
            </div>

            {/* Service Card 4: Drainage and Stormwater */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <CloudRain className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Drainage & Stormwater</h3>
              <p className="text-gray-300 leading-relaxed">
                Effective solutions for drainage issues and comprehensive stormwater management.
              </p>
            </div>

            {/* Service Card 5: Maintenance */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <ToolCase className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">General Maintenance</h3>
              <p className="text-gray-300 leading-relaxed">
                Proactive and reactive maintenance services to keep your plumbing systems in top condition.
              </p>
            </div>

            {/* Service Card 6: Heating and Cooling */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <ThermometerSnowflake className="text-blue-500 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Heating & Cooling</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete solutions for heating and cooling systems, ensuring year-round comfort.
              </p>
            </div>
          </div>
        </div>
      </section>)
}

export default Services;