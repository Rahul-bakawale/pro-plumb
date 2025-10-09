'use client'
import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Import Next.js Image component for optimization

const Header = ({ handleClick }: any) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Initialize isScrolled based on pathname for initial render
  const [isScrolled, setIsScrolled] = useState(false); 

  const toggleMobileMenu = (section?: string) => { // Made section optional
    if (section) {
        handleClick(section);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Set initial scroll state based on pathname (client-side)
    setIsScrolled(pathname !== '/');

    const handleScroll = () => {
      // Set isScrolled to true if the user has scrolled more than 50px
      // or if it's not the homepage
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        // Only set to false if on homepage and not scrolled
        setIsScrolled(pathname === '/' ? false : true);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Re-run effect if pathname changes

  return (<header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ease-in-out ${(isScrolled) ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
        }`}
    >
      {/* Main Header Container */}
      <div className="container mx-auto px-4 py-3 sm:py-4"> {/* Adjusted vertical padding */}
        <div className="flex justify-between items-center">
          {/* Logo - Always visible, responsive sizing */}
          <div className="flex items-center">
            {/* Using Next.js Image component for optimized loading */}
            <Image
              src="/logo.webp"
              alt="Beaconsfield Plumbing Logo"
              width={160} // Base width for desktop
              height={40} // Base height for desktop
              className="h-9 sm:h-10 w-auto md:h-11 lg:h-10 transition-all duration-300 ease-in-out cursor-pointer" // ADDED cursor-pointer
              priority // Mark as high priority to load quickly
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-lg"> {/* Adjusted spacing */}
            <button onClick={() => handleClick('home')} className="hover:text-gray-300 cursor-pointer"> {/* ADDED cursor-pointer */}
              Home
            </button>
            <button onClick={() => handleClick('about')} className="hover:text-gray-300 cursor-pointer"> {/* ADDED cursor-pointer */}
              About
            </button>
            <button onClick={() => handleClick('service')} className="hover:text-gray-300 cursor-pointer"> {/* ADDED cursor-pointer */}
              Services
            </button>
            <button onClick={() => handleClick('whyus')} className="hover:text-gray-300 cursor-pointer"> {/* ADDED cursor-pointer */}
              Why Us
            </button>
          </nav>

          {/* Contact Me Section - Hidden on small screens, visible on medium screens and up */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3"> {/* Adjusted gap */}
            <a href="tel:+61433151042" className="bg-blue-600 rounded-full p-2 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer"> {/* ADDED cursor-pointer */}
              <Phone className="h-5 w-5 text-white lg:h-6 lg:w-6" /> 
            </a>
            <div className="flex flex-col text-sm">
              <span className="text-gray-300 text-xs lg:text-sm">Contact Us!</span> 
              <a href="tel:+61433151042" className="font-semibold text-white text-sm lg:text-base whitespace-nowrap cursor-pointer"> {/* ADDED cursor-pointer */}
                +61 433 151 042
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Visible on small screens */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none cursor-pointer" // ADDED cursor-pointer
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7 sm:h-8 sm:w-8" /> 
            ) : (
              <Menu className="h-7 w-7 sm:h-8 sm:w-8" /> 
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only appears when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-black bg-opacity-95 transition-all duration-300 ease-in-out pb-4"> 
          <nav className="flex flex-col items-center py-6 space-y-5 text-lg"> 
            <button onClick={() => toggleMobileMenu('home')} className="hover:text-blue-400 text-white text-center w-full py-2 cursor-pointer">Home</button> {/* ADDED cursor-pointer */}
            <button onClick={() => toggleMobileMenu('about')} className="hover:text-blue-400 text-white text-center w-full py-2 cursor-pointer">About</button> {/* ADDED cursor-pointer */}
            <button onClick={() => toggleMobileMenu('service')} className="hover:text-blue-400 text-white text-center w-full py-2 cursor-pointer">Services</button> {/* ADDED cursor-pointer */}
            <button onClick={() => toggleMobileMenu('whyus')} className="hover:text-blue-400 text-white text-center w-full py-2 cursor-pointer">Why Us</button> {/* ADDED cursor-pointer */}
            
            {/* Mobile-specific contact info to be shown in the menu */}
            <div className="flex flex-col items-center mt-6 pt-4 border-t border-gray-700 w-full px-4"> 
              <span className="text-gray-300 text-sm">Contact Us!</span>
              <a href="tel:+61433151042" className="flex items-center mt-2 text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"> {/* ADDED cursor-pointer */}
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold text-base">+61 433 151 042</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;