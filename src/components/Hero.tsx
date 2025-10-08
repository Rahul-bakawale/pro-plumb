
import React from 'react';

const Hero = React.forwardRef((props, ref: any) => {
  return (
    <>
      <section
        ref={ref}
        // ADDED pt-20 (or similar padding) to push content down below the fixed header
        className="relative pt-20 md:pt-32 text-white overflow-hidden"
        style={{
          backgroundImage: `url('/plumber1.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'auto',
          minHeight: '700px',
        }}
      >
        {/* Overlay to darken the background image and make text more readable */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-10 md:gap-10 items-center w-full">
            {/* Left Column: Heading, Description, Google Reviews */}
            <div className="mt-16 w-full overflow-visible">
              <img
                src="/logo.png"
                alt="Beaconsfield Plumbing"
                className="mx-auto h-auto w-11/12 max-w-md md:w-[950px] md:max-w-none"
              />
              <h5 className="font-poppins font-medium text-2xl md:text-[28px] le  ading-tight mt-6">
               
                 We do plumbing repairs across East Melbourne suburbs. <br className="hidden inline" /> 
                  24/7 callouts, upfront pricing, and 15+ years keeping local homes dry. 
              </h5>
            </div>
            {/* Right Column: Button */}
            <div className="flex flex-col items-start md:items-end gap-6 mt-0">
              {/* Get Free Quote Button */}
              <button className="bg-blue-700 md:w-auto hover:bg-purple-800 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg text-base md:text-lg transition-colors duration-300 w-full md:w-auto">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

      </section>


      {/* Emergency Contact Box - Placed outside the section for positioning */}
      {/*<div className="container mx-auto px-4">
        <div className="em-card-container">
          <div className="bg-blue-700 p-6 rounded-lg text-center max-w-full md:max-w-xs em-card">
            <p className="text-white text-base mb-2">Have an emergency?</p>
            <p className="text-white text-sm mb-4">Call this number and our 24/7 team will assist you</p>
            <p className="text-white text-xl md:text-2xl font-bold">+61 423558080</p>
          </div>
        </div>
      </div>*/}
    </>
  );
});
Hero.displayName = 'Hero';

export default Hero;