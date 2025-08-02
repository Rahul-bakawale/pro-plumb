'use-client'
import React from 'react';

const Footer = ({ handleClick}: any) => {
  return (
    <footer className="bg-[#1A202C] text-white"> {/* Darker background color for the main footer section */}
      {/* Top section of the footer */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-8 md:gap-y-0 items-center text-center md:text-left">
          {/* Logo Text - Styled to look like the image logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-4xl font-extrabold text-white leading-none">DC</span>
            <span className="text-2xl font-bold text-white relative leading-none">
              PLUMBING
            </span>
          </div>

          {/* Navigation Links - Centered on desktop */}
          <div className="flex flex-col md:flex-row md:justify-center items-center h-full space-y-4 md:space-y-0 md:space-x-8 text-lg">
            <div className="hidden md:block h-full w-[1px] bg-white bg-opacity-20 mx-4"></div>
            <button onClick={() => handleClick('whyus')} className="hover:text-gray-300 transition duration-300">
              Why Us
            </button>
            <button onClick={() => handleClick('service')} className="hover:text-gray-300 transition duration-300">
              Services
            </button>
            <div className="hidden md:block h-full w-[1px] bg-white bg-opacity-20 mx-4"></div>
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
