'use client'
import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

const Header = ({ handleClick }: any) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(pathname !== '/');

  const toggleMobileMenu = (section: any) => {
    section && handleClick(section)
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if the user has scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(pathname === '/' ? false : true);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ease-in-out ${(isScrolled) ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
        }`}
    >
      {/* Main Header Container */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Beaconsfield Plumbing Logo/Text */}
          <div className="flex items-center">
            <img
              src="/logo.png" // Replace with your logo path (public/logo.png for Next.js or /src/assets/logo.png if React)
              alt="Beaconsfield Plumbing"
              className="sm:h-[15px] sm:w-[40px] h-[32px] w-[140px] lg:h-[50px] lg:w-[250px]"
              />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-lg">
            <button onClick={() => handleClick('home')} className="hover:text-gray-300">
              Home
            </button>
            <button onClick={() => handleClick('about')} className="hover:text-gray-300">
              About
            </button>
            <button onClick={() => handleClick('service')} className="hover:text-gray-300">
              Services
            </button>
            <button onClick={() => handleClick('whyus')} className="hover:text-gray-300">
              Why Us
            </button>

          </nav>

          {/* Contact Me Section - Hidden on small screens, visible on medium screens and up */}
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-blue-600 rounded-full p-2 flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-white">Contact Me!</span>
              <span className="font-semibold text-white">+61 433 151 042</span>
            </div>
          </div>

          {/* Mobile Menu Button - Visible on small screens */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only appears when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-black bg-opacity-90 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center py-8 space-y-6 text-xl">
            <a href="#" onClick={() => toggleMobileMenu('home')} className="hover:text-blue-400">Home</a>
            <a href="#" onClick={() => toggleMobileMenu('about')} className="hover:text-blue-400">About</a>
            <a href="#" onClick={() => toggleMobileMenu('services')} className="hover:text-blue-400">Services</a>
            <a href="#" onClick={() => toggleMobileMenu('whyus')} className="hover:text-blue-400">Why Us</a>
            {/* Mobile-specific contact info to be shown in the menu */}
            <div className="flex flex-col items-center mt-6">
              <span className="text-gray-300">Contact Me!</span>
              <div className="flex items-center mt-2">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">+61 433 151 042</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;