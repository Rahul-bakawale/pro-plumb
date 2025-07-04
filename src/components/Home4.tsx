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
    document.body.style.backgroundColor = '#F8F8F8'; // Light background for the entire page

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
        box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.5); /* green-500 with opacity */
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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
        ${isHeaderScrolled ? 'bg-white bg-opacity-95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex items-center">
          <Wrench className="text-green-600 mr-3 h-8 w-8" />
          <h1 className="text-3xl font-bold text-gray-900">
            <span className="text-green-600">Eco</span>Plumb
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'home' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'about' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'services' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'why-choose-us' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'testimonials' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'faq' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'contact' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Contact Us
          </button>
        </nav>
        {/* Mobile menu button (can be expanded with a sidebar) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-green-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-green-500 to-teal-600">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://placehold.co/1920x1080/FFFFFF/22C55E?text=Abstract+Leaf+Pattern')", backgroundSize: 'cover' }}></div>
        <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto rounded-xl shadow-2xl bg-white bg-opacity-90 border border-green-300">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 opacity-0 animate-fade-in-up">
            Sustainable <span className="text-green-600">Plumbing Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Eco-friendly, efficient, and reliable services for your home and business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up animate-pulse-effect"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Get a Free Estimate
            </button>
            <button
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Call Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutSectionRef} className={`py-20 px-6 md:px-12 bg-white opacity-0 ${isAboutInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isAboutInView ? 'animate-slide-in-left' : ''}`}>
            <img
              src="https://placehold.co/600x400/4CAF50/FFFFFF?text=Eco+Plumbing"
              alt="Eco Plumbing"
              className="rounded-xl shadow-2xl border-4 border-green-400 transform hover:scale-102 transition duration-300 ease-in-out"
            />
          </div>
          <div className={`md:w-1/2 ${isAboutInView ? 'animate-slide-in-right' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-green-600">EcoPlumb</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              EcoPlumb is committed to providing environmentally conscious plumbing services without compromising on quality or efficiency. With over 10 years in the industry, our team of certified professionals uses the latest techniques and sustainable practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on long-term solutions, water conservation, and transparent service. From minor repairs to major green installations, we ensure your plumbing is both functional and sustainable.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`flex items-start bg-green-50 p-4 rounded-lg shadow-sm border border-green-200 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <CheckCircle className="text-green-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Eco-Friendly Solutions</h3>
                  <p className="text-gray-600 text-sm">Sustainable practices for a greener home.</p>
                </div>
              </div>
              <div className={`flex items-start bg-green-50 p-4 rounded-lg shadow-sm border border-green-200 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Clock className="text-green-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Reliable & Timely</h3>
                  <p className="text-gray-600 text-sm">We arrive on time, every time.</p>
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
            Our <span className="text-green-600">Comprehensive Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Wrench className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Water Leak Detection</h3>
              <p className="text-gray-700 leading-relaxed">
                Precise detection and repair to prevent water waste and property damage.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <Lightbulb className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eco-Friendly Drain Cleaning</h3>
              <p className="text-gray-700 leading-relaxed">
                Safe and effective methods for clearing clogs without harsh chemicals.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <CalendarCheck className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Water Heater Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Installation, repair, and maintenance of energy-efficient water heaters.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Home className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pipe Repair & Replacement</h3>
              <p className="text-gray-700 leading-relaxed">
                Durable solutions for all piping needs, including sustainable materials.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Info className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Low-Flow Fixture Installation</h3>
              <p className="text-gray-700 leading-relaxed">
                Upgrade to water-saving faucets, toilets, and showerheads.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Phone className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Emergency Plumbing</h3>
              <p className="text-gray-700 leading-relaxed">
                Rapid response for urgent plumbing issues, minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" ref={whyChooseUsSectionRef} className={`py-20 px-6 md:px-12 bg-white opacity-0 ${isWhyChooseUsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            Why Choose <span className="text-green-600">EcoPlumb?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Headset className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eco-Conscious Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Committed to sustainable plumbing solutions and water conservation.
              </p>
            </div>
            <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <FastForward className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Efficient & Timely</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide prompt and efficient service, respecting your time.
              </p>
            </div>
            <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Award className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Certified Professionals</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team is highly trained, licensed, and dedicated to excellence.
              </p>
            </div>
            <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              <ShieldCheck className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Guaranteed Workmanship</h3>
              <p className="text-gray-700 leading-relaxed">
                We stand by our work with a comprehensive satisfaction guarantee.
              </p>
            </div>
            <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <HeartHandshake className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Clear, upfront pricing with no hidden fees or surprises.
              </p>
            </div>
            <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
              <Star className="text-green-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-700 leading-relaxed">
                Our top priority is ensuring you are completely happy with our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-100 opacity-0 ${isTestimonialsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
            What Our <span className="text-green-600">Happy Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-700 italic mb-6">
                "EcoPlumb fixed our leaky faucet quickly and efficiently. Their commitment to eco-friendly solutions is a huge plus!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/22C55E/FFFFFF?text=EM"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-green-400"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">Emily M.</p>
                  <p className="text-gray-600">Local Resident</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-700 italic mb-6">
                "Professional, knowledgeable, and very tidy. EcoPlumb installed our new water heater flawlessly. Highly recommend!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/22C55E/FFFFFF?text=JW"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-green-400"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">John W.</p>
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
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="group bg-green-50 p-6 rounded-xl shadow-lg border border-green-200">
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 text-xl font-semibold">
                What makes your services eco-friendly?
                <svg className="w-6 h-6 text-green-600 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We prioritize water-saving solutions, use non-toxic drain cleaning methods, and recommend energy-efficient appliances. Our goal is to minimize environmental impact with every service.
              </p>
            </details>
            {/* FAQ Item 2 */}
            <details className="group bg-green-50 p-6 rounded-xl shadow-lg border border-green-200">
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 text-xl font-semibold">
                Do you offer emergency services?
                <svg className="w-6 h-6 text-green-600 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Yes, we provide 24/7 emergency plumbing services. If you have an urgent issue, please call us directly for immediate assistance.
              </p>
            </details>
            {/* FAQ Item 3 */}
            <details className="group bg-green-50 p-6 rounded-xl shadow-lg border border-green-200">
              <summary className="flex justify-between items-center cursor-pointer text-gray-900 text-xl font-semibold">
                What areas do you serve?
                <svg className="w-6 h-6 text-green-600 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We serve the greater Green Valley area and all surrounding communities. Contact us to confirm if we cover your specific location.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-green-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready for Reliable & Green Plumbing?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-10">
            Let EcoPlumb handle your needs with expertise and environmental care.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-gray-200 text-green-800 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 animate-pulse-effect"
          >
            Schedule Your Service
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" ref={contactSectionRef} className={`py-20 px-6 md:px-12 bg-gray-100 opacity-0 ${isContactInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl border-4 border-green-300">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10">
            Get In <span className="text-green-600">Touch With Us</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className={`space-y-6 ${isContactInView ? 'animate-slide-in-left' : ''}`}>
              <div className="flex items-center text-gray-700">
                <MapPin className="text-green-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Office</h3>
                  <p className="text-lg">101 Green Pipeline Rd, EcoCity, CA 90001</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="text-green-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone Support</h3>
                  <p className="text-lg">(123) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="text-green-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="text-lg">contact@ecoplumb.com</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="text-green-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Availability</h3>
                  <p className="text-lg">Mon - Fri: 8:00 AM - 6:00 PM</p>
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
                    className="w-full p-3 pl-10 bg-gray-50 border border-green-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 input-focus-glow"
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
                    className="w-full p-3 pl-10 bg-gray-50 border border-green-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 input-focus-glow"
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
                    className="w-full p-3 pl-10 bg-gray-50 border border-green-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 resize-y input-focus-glow"
                    placeholder="Describe your plumbing issue or query..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
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
            &copy; {new Date().getFullYear()} EcoPlumb. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition duration-300">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage4;
