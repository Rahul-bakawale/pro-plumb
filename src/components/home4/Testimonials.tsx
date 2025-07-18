'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react'


const Testimonial = ({testimonialsSectionRef,isTestimonialsInView }: any) => {
    return (    <section id="testimonials" ref={testimonialsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-700 opacity-0 ${isTestimonialsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            What Our <span className="text-blue-500">Happy Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "Beaconsfield plumbing  fixed our leaky faucet quickly and efficiently. Their commitment to eco-friendly solutions is a huge plus!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/2196F3/FFFFFF?text=EM"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">Emily M.</p>
                  <p className="text-gray-400">Local Resident</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "Professional, knowledgeable, and very tidy. Beaconsfield plumbing  installed our new water heater flawlessly. Highly recommend!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/2196F3/FFFFFF?text=JW"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">John W.</p>
                  <p className="text-gray-400">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)
}

export default Testimonial;