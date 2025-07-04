'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Home, Info, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Wrench, CalendarCheck, Lightbulb, User, MessageSquare, Award, ShieldCheck, HeartHandshake, Headset, FastForward, CheckCircle, Star } from 'lucide-react';

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
const Home2 = () => {
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
    document.body.style.backgroundColor = '#f0f4f8'; // Light background for the entire page

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes pulseEffect {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.03);
        }
      }
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      .animate-fade-in-scale {
        animation: fadeInScale 0.8s ease-out forwards;
      }
      .animate-pulse-effect {
        animation: pulseEffect 2s infinite ease-in-out;
      }
      .animate-slide-in-left {
        animation: slideInLeft 0.7s ease-out forwards;
      }
      .animate-slide-in-right {
        animation: slideInRight 0.7s ease-out forwards;
      }
      .input-focus-glow:focus {
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5); /* blue-600 with opacity */
      }
    `;
    document.head.appendChild(styleSheet);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(styleSheet);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
        ${isHeaderScrolled ? 'bg-white bg-opacity-95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex items-center">
          <Wrench className="text-blue-600 mr-3 h-8 w-8" />
          <h1 className="text-3xl font-bold text-gray-900">
            <span className="text-blue-600">Aqua</span>Flow
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'why-choose-us' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'testimonials' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Contact Us
          </button>
        </nav>
        {/* Mobile menu button (can be expanded with a sidebar) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://placehold.co/1920x1080/FFFFFF/000000?text=Abstract+Water+Pattern')", backgroundSize: 'cover' }}></div>
        <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto rounded-xl shadow-2xl bg-white bg-opacity-90 border border-blue-300">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 opacity-0 animate-fade-in-up">
            Solving Your <span className="text-blue-600">Plumbing Challenges</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Reliable, efficient, and friendly plumbing services for your home and business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up animate-pulse-effect"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Request Service
            </button>
            <button
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutSectionRef} className={`py-20 px-6 md:px-12 bg-white opacity-0 ${isAboutInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isAboutInView ? 'animate-slide-in-left' : ''}`}>
            <img
              src="https://placehold.co/600x400/60a5fa/ffffff?text=Professional+Plumber"
              alt="Professional Plumber"
              className="rounded-xl shadow-2xl border-4 border-blue-400 transform hover:scale-102 transition duration-300 ease-in-out"
            />
          </div>
          <div className={`md:w-1/2 ${isAboutInView ? 'animate-slide-in-right' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-blue-600">AquaFlow</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AquaFlow has been serving the community for over a decade, providing exceptional plumbing services with a focus on quality, reliability, and customer satisfaction. Our team of licensed and experienced plumbers is dedicated to resolving your plumbing issues efficiently and effectively.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in transparent communication and honest work. From minor repairs to major installations, we handle every job with the utmost care and professionalism, ensuring your peace of mind.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`flex items-start bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <CheckCircle className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Certified & Insured</h3>
                  <p className="text-gray-600 text-sm">Peace of mind with every service.</p>
                </div>
              </div>
              <div className={`flex items-start bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Clock className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Prompt Service</h3>
                  <p className="text-gray-600 text-sm">We value your time and respond quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesSectionRef} className={`py-20 px-6 md:px-12 bg-gray-100 opacity-0 ${isServicesInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Our <span className="text-blue-600">Expert Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Wrench className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Leak Detection & Repair</h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced techniques to find and fix leaks quickly, preventing further damage.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <Lightbulb className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Drain Cleaning & Unclogging</h3>
              <p className="text-gray-700 leading-relaxed">
                Effective solutions for stubborn clogs, ensuring smooth drainage.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <CalendarCheck className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Water Heater Installation & Repair</h3>
              <p className="text-gray-700 leading-relaxed">
                From new installations to efficient repairs, we keep your hot water flowing.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Home className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pipe Repair & Replacement</h3>
              <p className="text-gray-700 leading-relaxed">
                Durable solutions for damaged pipes, including repiping services.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Info className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fixture Installation</h3>
              <p className="text-gray-700 leading-relaxed">
                Professional installation of faucets, toilets, showers, and more.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Phone className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Plumbing</h3>
              <p className="text-gray-700 leading-relaxed">
                24/7 rapid response for urgent plumbing issues, minimizing damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" ref={whyChooseUsSectionRef} className={`py-20 px-6 md:px-12 bg-white opacity-0 ${isWhyChooseUsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Why <span className="text-blue-600">Choose AquaFlow?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Headset className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                We're always ready to help, day or night, for any plumbing emergency.
              </p>
            </div>
            <div className={`bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <FastForward className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prompt & Punctual</h3>
              <p className="text-gray-700 leading-relaxed">
                We respect your time and arrive promptly, ready to get the job done.
              </p>
            </div>
            <div className={`bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Award className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Technicians</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team comprises highly skilled and certified plumbing professionals.
              </p>
            </div>
            <div className={`bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              <ShieldCheck className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Guaranteed Work</h3>
              <p className="text-gray-700 leading-relaxed">
                We stand by our work with comprehensive warranties for your peace of mind.
              </p>
            </div>
            <div className={`bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <HeartHandshake className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Clear, upfront pricing with no hidden fees, so you know what to expect.
              </p>
            </div>
            <div className={`bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
              <Star className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Recommended</h3>
              <p className="text-gray-700 leading-relaxed">
                High ratings and positive reviews from satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-100 opacity-0 ${isTestimonialsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-700 italic mb-6">
                "AquaFlow provided excellent service! Quick response and fixed our leak perfectly. Highly recommend their professional team."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/3b82f6/ffffff?text=AD"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">Alice D.</p>
                  <p className="text-gray-600">Local Resident</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-blue-200 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-700 italic mb-6">
                "Professional, punctual, and very friendly. They unclogged our drain efficiently. AquaFlow is our go-to for plumbing needs now."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/3b82f6/ffffff?text=BP"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">Bob P.</p>
                  <p className="text-gray-600">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Common <span className="text-blue-600">Questions</span>
          </h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="group bg-blue-50 p-6 rounded-xl shadow-lg border border-blue-200">
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 text-xl font-semibold">
                What areas do you serve?
                <svg className="w-6 h-6 text-blue-600 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We proudly serve the entire Waterflow City area and surrounding counties. Please contact us to confirm service availability in your specific location.
              </p>
            </details>
            {/* FAQ Item 2 */}
            <details className="group bg-blue-50 p-6 rounded-xl shadow-lg border border-blue-200">
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 text-xl font-semibold">
                How quickly can you respond to emergencies?
                <svg className="w-6 h-6 text-blue-600 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                For plumbing emergencies, we aim to provide the fastest possible response. Our 24/7 emergency team is dispatched immediately to minimize damage and resolve urgent issues.
              </p>
            </details>
            {/* FAQ Item 3 */}
            <details className="group bg-blue-50 p-6 rounded-xl shadow-lg border border-blue-200">
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 text-xl font-semibold">
                What payment methods do you accept?
                <svg className="w-6 h-6 text-blue-600 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We accept all major credit cards, debit cards, and bank transfers. Payment plans may be available for larger projects; please discuss with our team.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-blue-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Need Expert Plumbing Help?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10">
            Don't wait for a small drip to become a big problem. Contact AquaFlow today!
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-gray-200 text-blue-800 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 animate-pulse-effect"
          >
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" ref={contactSectionRef} className={`py-20 px-6 md:px-12 bg-gray-100 opacity-0 ${isContactInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl border-4 border-blue-300">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10">
            Reach <span className="text-blue-600">Out To Us</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className={`space-y-6 ${isContactInView ? 'animate-slide-in-left' : ''}`}>
              <div className="flex items-center text-gray-700">
                <MapPin className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                  <p className="text-lg">456 Waterworks Blvd, Aquacity, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone Support</h3>
                  <p className="text-lg">(987) 654-3210</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="text-lg">contact@aquaflow.com</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Availability</h3>
                  <p className="text-lg">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-lg">Emergency: 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className={`space-y-6 ${isContactInView ? 'animate-slide-in-right' : ''}`}>
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 pl-10 bg-gray-50 border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 input-focus-glow"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 pl-10 bg-gray-50 border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 input-focus-glow"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 pl-10 bg-gray-50 border border-blue-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y input-focus-glow"
                    placeholder="Describe your plumbing issue or query..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 px-6 md:px-12 text-gray-300 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-lg">
            &copy; {new Date().getFullYear()} AquaFlow Plumbing. All rights reserved.
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

export default Home2;
