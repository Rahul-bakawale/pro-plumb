'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Wrench, Fan, Lightbulb, User, MessageSquare, CheckCircle, Star, ToolCase, Rocket, DollarSign, Hammer, FileText } from 'lucide-react';
import HomeSection from './Home';
import About from './About';
import Services from './Services';
import WhyChoosen from './WhyChoosen';
import Testimonial from './Testimonials';
import FAQ from './Faq';
import FinalCall from './FinalCall';
import Contact from './contact';

// Custom hook for Intersection Observer to detect when an element is in view
export const useIntersectionObserver = (options: any) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    // Capture the current value of ref.current when the effect runs
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the captured value for cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Also, disconnect the observer to release resources
      observer.disconnect();
    };
  }, [options]); // Depend on options, as it's used in the effect

  return [ref, inView] as any;
};


// Main App component
const HomePage4 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  // Use the custom useInView hook for each section
  const [aboutSectionRef, isAboutInView] = useIntersectionObserver({ threshold: 0.2 });
  const [servicesSectionRef, isServicesInView] = useIntersectionObserver({ threshold: 0.2 });
  const [whyChooseUsSectionRef, isWhyChooseUsInView] = useIntersectionObserver({ threshold: 0.2 });
  const [testimonialsSectionRef, isTestimonialsInView] = useIntersectionObserver({ threshold: 0.2 });
  const [contactSectionRef, isContactInView] = useIntersectionObserver({ threshold: 0.2 });

  // Smooth scroll function for navigation
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Handle header scroll effect and active section highlighting
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsHeaderScrolled(true);
    } else {
      setIsHeaderScrolled(false);
    }

    const sections = ['home', 'about', 'services', 'why-choose-us', 'testimonials', 'faq', 'contact'];
    const currentScrollPos = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= currentScrollPos) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    document.body.style.fontFamily = 'Inter, sans-serif';
    document.body.style.backgroundColor = '#1A202C'; // Dark background for the entire page
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
        ${isHeaderScrolled ? 'bg-gray-800 bg-opacity-95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex items-center">
          <Wrench className={`mr-3 h-8 w-8${isHeaderScrolled ? 'text-blue-500 ' : 'text-gray-200'}`}/>
          <h1 className={`text-3xl font-bold ${isHeaderScrolled ? 'text-white' : 'text-white'}`}>
            <span className={`${isHeaderScrolled ? 'text-blue-500' : 'text-white'}`}>Beaconsfield&nbsp;</span><span className='text-gray-200'>plumbing PTY LTD</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'home'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'about'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'services'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'why-choose-us'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}

            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'testimonials'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'faq'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'contact'
              ? 'text-blue-500 border-b-2 border-blue-500' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-300 hover:text-blue-500' // Scrolled, not active, with hover
                : 'text-white hover:text-blue-400' // Not scrolled, not active, with hover
              }`}
          >
            Contact Us
          </button>
        </nav>
        {/* Mobile menu button (can be expanded with a sidebar) */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-blue-500 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <HomeSection scrollToSection={scrollToSection}/>
      {/* About Us Section */}

      <About aboutSectionRef={aboutSectionRef} isAboutInView={isAboutInView} />

      {/* Services Section */}
      <Services servicesSectionRef={ servicesSectionRef} isServicesInView={isServicesInView } />

      {/* Why Choose Us Section */}
     <WhyChoosen whyChooseUsSectionRef={whyChooseUsSectionRef} isWhyChooseUsInView={isWhyChooseUsInView}/>

      {/* Testimonials Section */}
     <Testimonial isTestimonialsInView={isTestimonialsInView} testimonialsSectionRef={testimonialsSectionRef}/>

      {/* FAQ Section */}
     <FAQ />

      {/* Final Call to Action Section */}
    <FinalCall scrollToSection={scrollToSection} />

      {/* Contact Us Section */}
    <Contact isContactInView={isContactInView} contactSectionRef={contactSectionRef} />

      {/* Footer */}
      <footer className="bg-gray-950 py-10 px-6 md:px-12 text-gray-300 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-lg">
            &copy; {new Date().getFullYear()} Beaconsfield plumbing . All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage4;