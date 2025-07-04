'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Home, Info, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Wrench, CalendarCheck, Lightbulb, User, MessageSquare, Award, ShieldCheck, HeartHandshake, Headset, FastForward } from 'lucide-react'; // Added Headset and FastForward for new features

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
const HomePage = () => {
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
      // Update active section immediately for navigation highlighting
      setActiveSection(id);
    }
  };

  // Handle header scroll effect and active section highlighting
  const handleScroll = useCallback(() => {
    // Header scroll effect
    if (window.scrollY > 50) {
      setIsHeaderScrolled(true);
    } else {
      setIsHeaderScrolled(false);
    }

    // Update active section based on scroll position
    const sections = ['home', 'about', 'services', 'why-choose-us', 'testimonials', 'contact']; // Updated sections
    const currentScrollPos = window.scrollY + window.innerHeight / 2; // Check position at mid-viewport

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= currentScrollPos) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    // Set Inter font globally and inject custom animations
    document.body.style.fontFamily = 'Inter, sans-serif';
    document.body.style.backgroundColor = '#1a202c'; // Dark background for the entire page

    // Inject custom keyframes for animations
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
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* blue-500 with opacity */
      }
    `;
    document.head.appendChild(styleSheet);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(styleSheet); // Clean up on unmount
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
        ${isHeaderScrolled ? 'bg-gray-950 bg-opacity-90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex items-center">
          <Wrench className="text-blue-500 mr-3 h-8 w-8" />
          <h1 className="text-3xl font-bold text-white">
            <span className="text-blue-500">Pro</span>Plumb
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'home' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'services' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'why-choose-us' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'testimonials' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'faq' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'contact' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300 hover:text-blue-400'
            }`}
          >
            Contact Us
          </button>
        </nav>
        {/* Mobile menu button (can be expanded with a sidebar) */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-blue-400 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/FFFFFF?text=Plumbing+Hero+Image')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto rounded-xl shadow-2xl bg-gray-900 bg-opacity-70 border border-blue-600">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 opacity-0 animate-fade-in-up">
            WE SOLVE YOUR <span className="text-blue-400">PLUMBING PROBLEMS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            EASY WITH EASE, so that you can focus on your most valuable task desperately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up animate-pulse-effect"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => window.location.href = 'tel:+1234567890'} // Example phone number
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutSectionRef} className={`py-20 px-6 md:px-12 bg-gray-800 opacity-0 ${isAboutInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isAboutInView ? 'animate-slide-in-left' : ''}`}>
            <img
              src="https://placehold.co/600x400/1e3a8a/ffffff?text=About+Us+Image"
              alt="Plumber working"
              className="rounded-xl shadow-2xl border-4 border-blue-600 transform hover:scale-102 transition duration-300 ease-in-out"
            />
          </div>
          <div className={`md:w-1/2 ${isAboutInView ? 'animate-slide-in-right' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About <span className="text-blue-400">ProPlumb</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At ProPlumb, we are dedicated to providing top-notch plumbing services with integrity and professionalism.
              With over 15 years of experience, our certified plumbers are equipped to handle any plumbing challenge,
              big or small. We pride ourselves on our prompt response times, transparent pricing, and commitment to
              customer satisfaction.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to ensure your plumbing systems run smoothly, providing peace of mind for your home or business.
              We use the latest tools and techniques to deliver efficient and lasting solutions.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`flex items-start bg-gray-900 p-4 rounded-lg shadow-md border border-blue-700 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <CalendarCheck className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Experienced Team</h3>
                  <p className="text-gray-400 text-sm">Over 15 years in the industry.</p>
                </div>
              </div>
              <div className={`flex items-start bg-gray-900 p-4 rounded-lg shadow-md border border-blue-700 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Lightbulb className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Innovative Solutions</h3>
                  <p className="text-gray-400 text-sm">Modern techniques for lasting repairs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isServicesInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Wrench className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Emergency Repairs</h3>
              <p className="text-gray-300 leading-relaxed">
                24/7 rapid response for burst pipes, severe leaks, and drain blockages. We're here when you need us most.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <Lightbulb className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Drain Cleaning</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert removal of stubborn clogs and blockages using advanced hydro-jetting and snaking techniques.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <CalendarCheck className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Water Heater Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Installation, repair, and maintenance for tankless and traditional water heaters. Get hot water reliably.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Home className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Leak Detection & Repair</h3>
              <p className="text-gray-300 leading-relaxed">
                Precise identification and repair of hidden leaks to prevent water damage and high utility bills.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Info className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Fixture Installation</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional installation of faucets, toilets, showers, and other plumbing fixtures.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Phone className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Pipe Repair & Repiping</h3>
              <p className="text-gray-300 leading-relaxed">
                From minor pipe repairs to full home repiping, we ensure your water lines are secure and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" ref={whyChooseUsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-800 opacity-0 ${isWhyChooseUsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            Why <span className="text-blue-400">Choose Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Headset className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">24/7 Plumbing</h3>
              <p className="text-gray-300 leading-relaxed">
                We're available around the clock for all your emergency plumbing needs, day or night.
              </p>
            </div>
            <div className={`bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <FastForward className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Same Day Response</h3>
              <p className="text-gray-300 leading-relaxed">
                For non-emergencies, we strive to provide same-day service to get your plumbing fixed fast.
              </p>
            </div>
            <div className={`bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Award className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Certified Professionals</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team consists of highly trained and certified plumbers, ensuring quality workmanship every time.
              </p>
            </div>
            <div className={`bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              <ShieldCheck className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Guaranteed Satisfaction</h3>
              <p className="text-gray-300 leading-relaxed">
                We stand behind our work with a satisfaction guarantee, ensuring peace of mind for our clients.
              </p>
            </div>
            <div className={`bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <HeartHandshake className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Transparent Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                No hidden fees or surprises. We provide clear, upfront pricing before any work begins.
              </p>
            </div>
            <div className={`bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
              <Info className="text-blue-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Google Reviewed</h3>
              <p className="text-gray-300 leading-relaxed">
                Proud of our high ratings and positive feedback on Google and other platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isTestimonialsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            What Our <span className="text-blue-400">Customers Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "Good service! Very quick and efficient. Fixed my issue right away."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/3b82f6/ffffff?text=JD"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">John D.</p>
                  <p className="text-gray-400">Happy Client</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "Nice behavior and professional work. They did a great job with my plumbing repair."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/3b82f6/ffffff?text=SM"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">Sarah M.</p>
                  <p className="text-gray-400">Satisfied Customer</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 (Added based on sketch) */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-xl border border-blue-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "Good, great job! My pipes are working perfectly now. Highly recommend ProPlumb."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/3b82f6/ffffff?text=RD"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-blue-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">Robert D.</p>
                  <p className="text-gray-400">Happy Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (New) */}
      <section id="faq" className="py-20 px-6 md:px-12 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="group bg-gray-900 p-6 rounded-xl shadow-lg border border-blue-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                What are your service hours?
                <svg className="w-6 h-6 text-blue-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Our standard business hours are Monday to Friday, 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We also offer 24/7 emergency plumbing services for urgent issues.
              </p>
            </details>
            {/* FAQ Item 2 */}
            <details className="group bg-gray-900 p-6 rounded-xl shadow-lg border border-blue-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                Do you offer free estimates?
                <svg className="w-6 h-6 text-blue-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Yes, we provide free, no-obligation estimates for most of our plumbing services. Contact us to schedule an appointment, and we'll assess your needs and provide a transparent quote.
              </p>
            </details>
            {/* FAQ Item 3 */}
            <details className="group bg-gray-900 p-6 rounded-xl shadow-lg border border-blue-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                Are your plumbers licensed and insured?
                <svg className="w-6 h-6 text-blue-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Absolutely. All our plumbers are fully licensed, certified, and insured professionals. You can rest assured that you're receiving service from qualified and trustworthy experts.
              </p>
            </details>
          </div>
        </div>
      </section>


      {/* Final Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-blue-700 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready for Reliable Plumbing Service?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10">
            Don't let plumbing problems disrupt your life. Contact ProPlumb today for fast, friendly, and effective solutions.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-gray-200 text-blue-800 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 animate-pulse-effect"
          >
            Schedule Your Service Now
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" ref={contactSectionRef} className={`py-20 px-6 md:px-12 bg-gray-800 opacity-0 ${isContactInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border-4 border-blue-600">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className={`space-y-6 ${isContactInView ? 'animate-slide-in-left' : ''}`}>
              <div className="flex items-center text-gray-300">
                <MapPin className="text-blue-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Our Location</h3>
                  <p className="text-lg">123 Plumbing Lane, Waterflow City, PC 12345</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="text-blue-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  <p className="text-lg">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="text-blue-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-lg">info@proplumb.com</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="text-blue-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Business Hours</h3>
                  <p className="text-lg">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-lg">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-lg">Sun: Closed (Emergency services available)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className={`space-y-6 ${isContactInView ? 'animate-slide-in-right' : ''}`}>
              <div>
                <label htmlFor="name" className="block text-gray-200 text-lg font-medium mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 pl-10 bg-gray-700 border border-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 input-focus-glow"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 text-lg font-medium mb-2">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 pl-10 bg-gray-700 border border-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 input-focus-glow"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-200 text-lg font-medium mb-2">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 pl-10 bg-gray-700 border border-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y input-focus-glow"
                    placeholder="Tell us about your plumbing issue..."
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
      <footer className="bg-gray-950 py-10 px-6 md:px-12 text-gray-400 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-lg">
            &copy; {new Date().getFullYear()} ProPlumb. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
