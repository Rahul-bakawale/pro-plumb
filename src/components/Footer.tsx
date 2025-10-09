'use-client'
import React from 'react';

const Footer = ({ handleClick }: any) => {
  return (
    <footer className="bg-[#1A202C] text-white"> {/* Darker background color for the main footer section */}
      {/* Top section of the footer */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 border-b border-gray-200">
        {/* Increased vertical gap for mobile/tablet (gap-y-8) to separate sections clearly */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-y-0 items-center text-center md:text-left">
          {/* Logo Text - Styled to look like the image logo */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <span className="text-4xl font-extrabold text-white leading-none">BEACONSFIELD</span>
            <span className="text-2xl font-bold text-white relative leading-none">
              PLUMBING
            </span>
          </div>

          {/* Navigation Links - Centered on mobile and desktop */}
          {/* Increased space-y for better mobile separation */}
          <div className="flex flex-col md:flex-row md:justify-center items-center h-full space-y-6 md:space-y-0 md:space-x-18 text-lg md:col-span-3">
            {/* Vertical dividers hidden on mobile */}
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
            {/* Vertical dividers hidden on mobile */}
            <div className="hidden md:block h-full w-[1px] bg-white bg-opacity-20"></div>
          </div>

          {/* Ratings & Stats Section */}
          {/* Changed items-start to items-center for mobile centering, removed mb-8 (now handled by gap-y-8 on parent) */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 md:col-span-1">
            {/* Google Rating Block - Centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col items-center md:items-start">
              <img src="/google.png" alt="Google Logo" className="h-8 md:h-10 mb-1 md:mb-2" />
              <div className="flex items-center">
                {/* 4 Full Stars */}
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {/* Standard full star path */}
                    <path d="M12 2.163l3.351 6.64 7.425 1.077-5.378 5.234 1.272 7.408L12 18.283l-6.67 3.239 1.273-7.408-5.378-5.234 7.425-1.077L12 2.163z" />
                  </svg>
                ))}

                {/* 1 Star (90% Filled) */}
                <div className="relative h-5 w-5 md:h-6 md:w-6">
                  {/* Background (Empty/Gray) Star */}
                  <svg
                    className="absolute top-0 left-0 h-full w-full fill-gray-300 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163l3.351 6.64 7.425 1.077-5.378 5.234 1.272 7.408L12 18.283l-6.67 3.239 1.273-7.408-5.378-5.234 7.425-1.077L12 2.163z" />
                  </svg>

                  {/* Foreground (90% Filled) Star */}
                  <svg
                    className="absolute top-0 left-0 h-full w-full fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    // Clips the right 10% (leaving 90% filled)
                    style={{ clipPath: 'inset(0 35% 0 0)' }}
                  >
                    <path d="M12 2.163l3.351 6.64 7.425 1.077-5.378 5.234 1.272 7.408L12 18.283l-6.67 3.239 1.273-7.408-5.378-5.234 7.425-1.077L12 2.163z" />
                  </svg>
                </div>
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-300 mt-1">4.9 STAR</span>
            </div>

            {/* Happy Customer & Work Completed */}
            {/* Increased gap between stats on mobile and centered content */}
            <div className="flex gap-6 md:gap-5">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-xl md:text-2xl font-bold">1200+</span>
                <span className="text-sm opacity-75">Happy Customer</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
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
        {/* Changed from md:flex-row to flex-col on mobile for stacking, ensured center justification */}
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
