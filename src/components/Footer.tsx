'use-client'
import React from 'react';

const Footer = ({ handleClick }: any) => {
  return (
    <footer className="bg-[#1A202C] text-white"> {/* Darker background color for the main footer section */}
      {/* Top section of the footer */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-y-0 items-center text-center md:text-left">
          {/* Logo Text - Styled to look like the image logo */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <span className="text-4xl font-extrabold text-white leading-none">BEACONSFIELD</span>
            <span className="text-2xl font-bold text-white relative leading-none">
              PLUMBING
            </span>
          </div>

          {/* Navigation Links - Centered on desktop */}
     <div className="flex flex-col md:flex-row md:justify-center items-center h-full space-y-4 md:space-y-0 md:space-x-18 text-lg md:col-span-3">
    <div className="hidden md:block h-full w-[1px] bg-white bg-opacity-20"></div>
    <button onClick={() => handleClick('home')} className="hover:text-gray-300 transition duration-300">
        Home
    </button>
    <button onClick={() => handleClick('whyus')} className="hover:text-gray-300 transition duration-300">
        Why Us
    </button>
    <button onClick={() => handleClick('service')} className="hover:text-gray-300 transition duration-300">
        Services
    </button>
    <div className="hidden md:block h-full w-[1px] bg-white bg-opacity-20"></div>
</div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8 md:col-span-1">
            <div className="flex flex-col items-start">
              <img src="/google.png" alt="Google Logo" className="h-8 md:h-10 mb-1 md:mb-2" />
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.816 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25l-2.83 5.81-6.42.88 4.65 4.5L6.18 21.75 12 18.896l5.82 2.854-1.02-5.69 4.65-4.5-6.42-.88L12 2.25zm0 2.25v14.646l-4.41-2.16 1.02-5.69-4.65-4.5 6.42-.88L12 4.5z" />
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

          {/* This empty div is for spacing and alignment on the grid */}
          <div className="hidden md:block"></div>
        </div>
      </div>


      {/* Bottom section of the footer */}
      <div className="bg-[#141822] py-4"> {/* Even darker background for the very bottom bar */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p className="mb-2 md:mb-0">© 2022 - DC PLUMBING</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Support</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Cookie Policy</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
