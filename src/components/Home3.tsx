'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Home, Info, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Wrench, CalendarCheck, Lightbulb, User, MessageSquare, Award, ShieldCheck, HeartHandshake, Headset, FastForward, CheckCircle, Star } from 'lucide-react';
// Custom hook for Intersection Observer to detect when an element is in view
const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  // Use the custom useInView hook for each section
  const [aboutSectionRef, isAboutInView] = useInView({ threshold: 0.2 });
  const [servicesSectionRef, isServicesInView] = useInView({ threshold: 0.2 });
  const [whyChooseUsSectionRef, isWhyChooseUsInView] = useInView({ threshold: 0.2 });
  const [testimonialsSectionRef, isTestimonialsInView] = useInView({ threshold: 0.2 });
  const [contactSectionRef, isContactInView] = useInView({ threshold: 0.2 });

  // Smooth scroll function for navigation
  const scrollToSection = (id) => {
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
    document.body.style.backgroundColor = '#1a1a1a'; // Dark background for the entire page

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
        box-shadow: 0 0 0 3px rgba(252, 211, 38, 0.5); /* yellow-400 with opacity */
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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
        ${isHeaderScrolled ? 'bg-gray-950 bg-opacity-90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex items-center">
          <Wrench className="text-yellow-400 mr-3 h-8 w-8" />
          <h1 className="text-3xl font-bold text-white">
            <span className="text-yellow-400">Golden</span>Flow
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'home' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'about' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'services' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'why-choose-us' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'testimonials' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'faq' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${
              activeSection === 'contact' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-300 hover:text-yellow-400'
            }`}
          >
            Contact Us
          </button>
        </nav>
        {/* Mobile menu button (can be expanded with a sidebar) */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-yellow-400 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/FFD700?text=Abstract+Gold+Pattern')", backgroundSize: 'cover' }}></div>
        <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto rounded-xl shadow-2xl bg-gray-800 bg-opacity-90 border border-yellow-600">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 opacity-0 animate-fade-in-up">
            Your <span className="text-yellow-400">Golden Standard</span> in Plumbing
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Premium, reliable, and efficient plumbing solutions for every need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up animate-pulse-effect"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Request Service
            </button>
            <button
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isAboutInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <div className={`md:w-1/2 mb-10 md:mb-0 ${isAboutInView ? 'animate-slide-in-left' : ''}`}>
            <img
              src="https://placehold.co/600x400/333333/FFD700?text=Expert+Plumber"
              alt="Expert Plumber"
              className="rounded-xl shadow-2xl border-4 border-yellow-600 transform hover:scale-102 transition duration-300 ease-in-out"
            />
          </div>
          <div className={`md:w-1/2 ${isAboutInView ? 'animate-slide-in-right' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About <span className="text-yellow-400">GoldenFlow</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              GoldenFlow sets the gold standard in plumbing services, with over a decade of experience delivering unparalleled quality and customer satisfaction. Our certified technicians are equipped with advanced tools and expertise to handle any plumbing challenge.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are committed to providing transparent, reliable, and efficient solutions, ensuring your plumbing systems operate flawlessly. Your peace of mind is our top priority.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`flex items-start bg-gray-800 p-4 rounded-lg shadow-md border border-yellow-700 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <CheckCircle className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Certified & Insured</h3>
                  <p className="text-gray-400 text-sm">Professional service you can trust.</p>
                </div>
              </div>
              <div className={`flex items-start bg-gray-800 p-4 rounded-lg shadow-md border border-yellow-700 ${isAboutInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Clock className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Prompt Service</h3>
                  <p className="text-gray-400 text-sm">Timely and efficient solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesSectionRef} className={`py-20 px-6 md:px-12 bg-gray-950 opacity-0 ${isServicesInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            Our <span className="text-yellow-400">Premium Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Wrench className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Leak Detection</h3>
              <p className="text-gray-300 leading-relaxed">
                Utilizing cutting-edge technology to pinpoint and repair leaks with precision.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <Lightbulb className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Comprehensive Drain Cleaning</h3>
              <p className="text-gray-300 leading-relaxed">
                Thorough clearing of all types of blockages, ensuring optimal flow.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <CalendarCheck className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Water Heater Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Installation, repair, and maintenance for all water heater models.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Home className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Pipe Repair & Repiping</h3>
              <p className="text-gray-300 leading-relaxed">
                Durable and long-lasting solutions for damaged or aging piping systems.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Info className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Fixture Upgrades & Installation</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert installation of modern and efficient plumbing fixtures.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Phone className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">24/7 Emergency Response</h3>
              <p className="text-gray-300 leading-relaxed">
                Immediate assistance for all your urgent plumbing needs, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" ref={whyChooseUsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isWhyChooseUsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            Why Choose <span className="text-yellow-400">GoldenFlow?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <Headset className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Always Available</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team is on standby 24/7 for any plumbing emergency you may face.
              </p>
            </div>
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <FastForward className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Rapid Response</h3>
              <p className="text-gray-300 leading-relaxed">
                We prioritize quick dispatch and efficient service to minimize disruption.
              </p>
            </div>
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Award className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Certified Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                Our plumbers are highly trained, licensed, and committed to quality.
              </p>
            </div>
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              <ShieldCheck className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Workmanship Guarantee</h3>
              <p className="text-gray-300 leading-relaxed">
                We back our services with a solid guarantee for your complete satisfaction.
              </p>
            </div>
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <HeartHandshake className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Fair & Transparent Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                No surprises, just honest and competitive pricing for all services.
              </p>
            </div>
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
              <Star className="text-yellow-400 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">Highly Recommended</h3>
              <p className="text-gray-300 leading-relaxed">
                Trusted by countless customers for our reliable and effective solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-950 opacity-0 ${isTestimonialsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            What Our <span className="text-yellow-400">Valued Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "GoldenFlow truly delivered! Their prompt service and expert repair saved my day. Highly recommend their professional team."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/FFD700/333333?text=LS"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-yellow-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">Liam S.</p>
                  <p className="text-gray-400">Homeowner</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-700 ${isTestimonialsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-gray-300 italic mb-6">
                "Exceptional service! The plumber was courteous, skilled, and resolved our issue efficiently. GoldenFlow is simply the best."
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/FFD700/333333?text=CM"
                  alt="Customer Avatar"
                  className="w-16 h-16 rounded-full mr-4 border-2 border-yellow-400"
                />
                <div>
                  <p className="text-xl font-semibold text-white">Chloe M.</p>
                  <p className="text-gray-400">Business Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                What are your service hours?
                <svg className="w-6 h-6 text-yellow-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Our standard service hours are Monday to Friday, 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We also provide 24/7 emergency plumbing services.
              </p>
            </details>
            {/* FAQ Item 2 */}
            <details className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                Do you offer free estimates?
                <svg className="w-6 h-6 text-yellow-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Yes, we offer complimentary, no-obligation estimates for most services. Contact us to schedule an assessment and receive a transparent quote.
              </p>
            </details>
            {/* FAQ Item 3 */}
            <details className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-yellow-700">
              <summary className="flex justify-between items-center cursor-pointer text-white text-xl font-semibold">
                Are your plumbers licensed and insured?
                <svg className="w-6 h-6 text-yellow-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Absolutely. All our plumbers are fully licensed, certified, and comprehensively insured, ensuring professional and secure service.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 px-6 md:px-12 bg-yellow-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Experience the Golden Standard in Plumbing!
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-10">
            Don't let plumbing issues linger. Connect with GoldenFlow today for reliable and top-tier service.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                       focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 animate-pulse-effect"
          >
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" ref={contactSectionRef} className={`py-20 px-6 md:px-12 bg-gray-950 opacity-0 ${isContactInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border-4 border-yellow-600">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
            Reach <span className="text-yellow-400">Out To Us</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className={`space-y-6 ${isContactInView ? 'animate-slide-in-left' : ''}`}>
              <div className="flex items-center text-gray-300">
                <MapPin className="text-yellow-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Our Headquarters</h3>
                  <p className="text-lg">789 Golden Pipe Lane, Goldwater City, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="text-yellow-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Direct Line</h3>
                  <p className="text-lg">(987) 654-3210</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="text-yellow-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-lg">info@goldenflow.com</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="text-yellow-400 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Business Hours</h3>
                  <p className="text-lg">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-lg">Emergency: 24/7</p>
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
                    className="w-full p-3 pl-10 bg-gray-800 border border-yellow-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 input-focus-glow"
                    placeholder="Your Full Name"
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
                    className="w-full p-3 pl-10 bg-gray-800 border border-yellow-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 input-focus-glow"
                    placeholder="your.email@example.com"
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
                    rows="5"
                    className="w-full p-3 pl-10 bg-gray-800 border border-yellow-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-y input-focus-glow"
                    placeholder="Describe your plumbing issue or query..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
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
            &copy; {new Date().getFullYear()} GoldenFlow Plumbing. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition duration-300">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
