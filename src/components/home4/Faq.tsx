'use client'

import React from 'react'


const FAQ = () => {
    return ( <section id="faq" className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                What makes your services eco-friendly?
                <svg className="w-6 h-6 text-blue-500 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We prioritize water-saving solutions, use non-toxic drain cleaning methods, and recommend energy-efficient appliances. Our goal is to minimize environmental impact with every service.
              </p>
            </details>
            {/* FAQ Item 2 */}
            <details className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                Do you offer emergency services?
                <svg className="w-6 h-6 text-blue-500 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Yes, we provide 24/7 emergency plumbing services. If you have an urgent issue, please call us directly for immediate assistance.
              </p>
            </details>
            {/* FAQ Item 3 */}
            <details className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                What areas do you serve?
                <svg className="w-6 h-6 text-blue-500 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                We serve the greater Blue Horizon area and all surrounding communities. Contact us to confirm if we cover your specific location.
              </p>
            </details>
          </div>
        </div>
      </section>)
}

export default FAQ;