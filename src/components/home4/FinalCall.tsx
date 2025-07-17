import React from 'react'


const FinalCall = ({scrollToSection}: any) => {
    return (  <section className="py-20 px-6 md:px-12 bg-blue-700 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready for Reliable & Modern Plumbing?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10">
            Let Beaconsfield plumbing  handle your needs with expertise and cutting-edge care.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-gray-200 text-blue-800 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 animate-pulse-effect"
          >
            Schedule Your Service
          </button>
        </div>
      </section>)
}

export default FinalCall;