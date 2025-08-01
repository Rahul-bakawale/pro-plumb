import React from 'react';

// RequestQuoteSection component implementation
const RequestQuoteSection = React.forwardRef((props, ref: any) => {
  return (
    <section ref={ref} className="w-full relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background Image - now only top half with responsive height */}
      <div
        className="absolute top-0 left-0 w-full h-[300px] md:h-[700px] bg-cover bg-top"
        style={{ backgroundImage: `url('/quote-sec.png')`, backgroundPositionX: 'top' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div> {/* Dark transparent overlay */}
      </div>

      {/* Content container for text and form - positioned to allow overlap */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-32 pb-8">
        {/* Top Section: Send a Quote */}
        <div className="text-white text-center md:text-left mb-8 md:mb-16">
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            SEND A QUOTE
          </h2>
          <p className="text-sm md:text-lg max-w-2xl mx-auto md:mx-0 leading-tight md:w-[460px] w-[320px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sed natoque mattis rhoncus. Arcu at aenean consectetur massa. Eget ac erat tincidunt vitae. Tortor, diam feugiat urna, lorem dolor.
          </p>
        </div>

        {/* Form Container - positioned to overlap */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden md:p-5 max-w-4xl mx-auto mt-35 md:mt-35 lg:mt-50 relative z-20">
          {/* Left Column: Location & Contact Info */}
          <div className='bg-white flex flex-col lg:flex-row'>
            <div className="bg-blue-700 text-white p-6 md:p-8 lg:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Our Location</h3>
                <p className="text-sm md:text-base mb-4 md:mb-6">Edinburgh</p>

                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Contact Us</h3>
                <p className="text-sm md:text-base mb-1 md:mb-2">Email: plumberboy@gmail.com</p>
                <p className="text-sm md:text-base mb-4 md:mb-6">Phone: 0789898989</p>
              </div>
              <p className="text-xs md:text-sm opacity-80 mt-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas facilisis vestibulum enim semper quis augue. Nibh luctus lacinia in libero faucibus eu. Erat netus.
              </p>
            </div>

            {/* Right Column: Form Fields */}
            <div className="p-6 md:p-8 lg:w-2/3 bg-white">
              <h3 className="font-poppins text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                Request a Quote from us
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas facilisis vestibulum enim semper quis augue. Nibh luctus lacinia in libero faucibus eu. Erat netus.
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="col-span-1 md:col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="col-span-1 md:col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="col-span-1 md:col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  className="col-span-1 md:col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="col-span-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
                ></textarea>
                <button
                  type="submit"
                  className="col-span-full self-start px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

RequestQuoteSection.displayName = 'RequestQuoteSection'

export default RequestQuoteSection;
