
import React from 'react';

const Hero = React.forwardRef((props, ref:any)  => {
  return (
    <>
      <section 
         ref={ref}
        // ADDED pt-20 (or similar padding) to push content down below the fixed header
        className="relative pt-20 md:pt-32 text-white overflow-hidden" 
        style={{
          backgroundImage: `url('/plumber1.png')`,
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
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
            {/* Left Column: Heading, Description, Google Reviews */}
            <div>
              <h1 className="font-poppins font-medium text-4xl md:text-[60px] mb-2 md:mb-4 leading-tight">
                We Solve Your<br className="hidden md:inline" />
                Plumbing Problems
              </h1>
              <h2 className='font-poppins font-small text-2xl md:text-[45px] mb-4 md:mb-6'>
                Quickly and Expertly you deserve
              </h2>
              <p className="text-sm md:text-xl mb-6 opacity-90 leading-relaxed max-w-lg">
                Providing Reliable Plumbing Services for your home or business so that you can focus on more important tasks in your life
              </p>
              
              {/* Google Reviews Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8">
                <div className="flex flex-col items-start">
                  <img src="/google.png" alt="Google Logo" className="h-8 md:h-10 mb-1 md:mb-2" /> 
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.816 1.48-8.279L.001 9.306l8.332-1.151L12 .587z"/>
                      </svg>
                    ))}
                    <svg className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.25l-2.83 5.81-6.42.88 4.65 4.5L6.18 21.75 12 18.896l5.82 2.854-1.02-5.69 4.65-4.5-6.42-.88L12 2.25zm0 2.25v14.646l-4.41-2.16 1.02-5.69-4.65-4.5 6.42-.88L12 4.5z"/>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-300 mt-1">4.9 STAR</span>
                </div>
                
                {/* Happy Customer & Work Completed */}
                <div className="flex gap-4 md:gap-5">
                  <div className="flex flex-col items-start">
                    <span className="text-xl md:text-2xl font-bold">1200+</span>
                    <span className="text-sm opacity-75">Happy Customer</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xl md:text-2xl font-bold">600+</span>
                    <span className="text-sm opacity-75">Work Completed</span>
                  </div>
                </div>
              </div>
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