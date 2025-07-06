'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Wrench,Fan, Lightbulb, User, MessageSquare, CheckCircle, Star, ToolCase, Rocket, DollarSign, Hammer, FileText } from 'lucide-react';

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out
        ${isHeaderScrolled ? 'bg-white bg-opacity-95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="flex items-center">
          <Wrench className="text-green-600 mr-3 h-8 w-8" />
          <h1 className={`text-3xl font-bold ${isHeaderScrolled ? 'text-gray-900' : 'text-white'}`}>
            <span className={`${isHeaderScrolled ? 'text-green-600' : 'text-green-950'}`}>Beconsfield&nbsp;</span>Plumbing
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'home'
              ? 'text-green-950 border-b-2 border-green-950' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
              }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'about'
              ? 'text-green-600 border-b-2 border-green-600' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
              }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'services'
              ? 'text-green-600 border-b-2 border-green-600' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
              }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-choose-us')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'why-choose-us'
              ? 'text-green-600 border-b-2 border-green-600' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
              }`}
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}

            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'testimonials'
              ? 'text-green-600 border-b-2 border-green-600' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
              }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'faq'
              ? 'text-green-600 border-b-2 border-green-600' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
              }`}
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium transition duration-300 ease-in-out ${activeSection === 'contact'
              ? 'text-green-600 border-b-2 border-green-600' // Active section styles
              : isHeaderScrolled // If header is scrolled AND not active section
                ? 'text-gray-700 hover:text-green-600' // Scrolled, not active, with hover
                : 'text-white hover:text-green-950' // Not scrolled, not active, with hover
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
        {/* Updated Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('./cover2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Center the image
            filter: 'grayscale(50%)', // Optional: Desaturate slightly to blend better
          }}
        ></div>
        <div className="relative z-10 p-6 md:p-12 max-w-5xl mx-auto rounded-xl shadow-2xl bg-white bg-opacity-90 border border-green-300
              flex flex-col md:flex-row md:items-stretch md:text-left text-center
              flex-grow-0 md:flex-grow w-11/12 md:w-auto overflow-hidden">
          {/* Left Half: Text Content */}
          <div className="md:w-1/2 p-4 md:pr-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 opacity-0 animate-fade-in-up">
              We Solve Your
              <span className="text-green-600"> Plumbing Problems With Ease</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              So that you can focus on your most valuable tasks desperately.
            </p>
            {/* "Get a Free Estimate" button remains on the left with text */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up animate-pulse-effect"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Right Half: Image and Call Now Button */}
          <div
            className="md:w-1/2 p-4 mt-8 md:mt-0 flex flex-col items-center justify-center h-full w-full .rightContainer"
            style={{
              backgroundImage: "url('/cover.png')", /* Assuming cover.png is in your public folder */
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Center the image
              filter: 'grayscale(50%)', // Optional: Desaturate slightly to blend better
              height: 450
            }}
          >
            {/* The image (if applicable) would go inside here if you want it on top of the background image */}
            {/* And the button */}
            <button
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call Our Experts Now
              </span>
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
          {/* Adjusted grid to 2 columns for larger screens to fit 4 items better, adjust if you add more */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Service Card 1: Hot Water Services */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              {/* Changed icon for hot water */}
              <Lightbulb className="text-green-600 mx-auto mb-6" size={48} /> {/* Using Lightbulb, could be Thermometer or other */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hot Water Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Expert installation, repair, and maintenance for all types of hot water systems.
              </p>
            </div>

            {/* Service Card 2: Air Conditioning */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              {/* Changed icon for AC */}
              <Fan className="text-green-600 mx-auto mb-6" size={48} /> {/* Assuming 'Fan' icon is available, adjust if not */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Air Conditioning</h3>
              <p className="text-gray-700 leading-relaxed">
                Full-service AC solutions, from installation to efficient repairs and servicing.
              </p>
            </div>

            {/* Service Card 3: Repairing */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {/* Changed icon for repairing */}
              <ToolCase className="text-green-600 mx-auto mb-6" size={48} /> {/* Assuming 'Tools' icon is available, or 'Wrench' */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">General Repairing</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive repair services for various plumbing and HVAC issues.
              </p>
            </div>

            {/* Service Card 4: Blocked Drain */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isServicesInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              {/* Changed icon for blocked drain */}
              <Wrench className="text-green-600 mx-auto mb-6" size={48} /> {/* Assuming 'PipeWrench' icon, or 'Faucet' with a 'Ban' symbol, or 'Liquid' */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Blocked Drain</h3>
              <p className="text-gray-700 leading-relaxed">
                Fast and effective solutions to clear blockages and restore proper drainage.
              </p>
            </div>

            {/* Removed Service Card 5 and 6 as you only listed 4 services */}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" ref={whyChooseUsSectionRef} className={`py-20 px-6 md:px-12 bg-white opacity-0 ${isWhyChooseUsInView ? 'animate-fade-in-up' : ''}`}>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
      Why Choose <span className="text-green-600">Us?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature Card 1: 24/7 Plumbing */}
      <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
        {/* Changed icon to represent 24/7 or emergency */}
        <Clock className="text-green-600 mx-auto mb-6" size={48} /> {/* Using Clock, or Phone, or Emergency */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Emergency Plumbing</h3>
        <p className="text-gray-700 leading-relaxed">
          Ready to assist you any time, day or night, for all urgent plumbing needs.
        </p>
      </div>

      {/* Feature Card 2: Same Day Response */}
      <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
        {/* Changed icon for speed/response */}
        <Rocket className="text-green-600 mx-auto mb-6" size={48} /> {/* Using Rocket, or FastForward */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Same Day Response</h3>
        <p className="text-gray-700 leading-relaxed">
          We prioritize your urgent requests with prompt service and quick turnarounds.
        </p>
      </div>

      {/* Feature Card 3: Price that fits */}
      <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        {/* Changed icon for pricing */}
        <DollarSign className="text-green-600 mx-auto mb-6" size={48} /> {/* Using DollarSign, or Tag */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Price That Fits</h3>
        <p className="text-gray-700 leading-relaxed">
          Transparent and competitive pricing tailored to your budget, no hidden fees.
        </p>
      </div>

      {/* Feature Card 4: Quality Workmanship */}
      <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
        {/* Changed icon for quality */}
        <Hammer className="text-green-600 mx-auto mb-6" size={48} /> {/* Using Hammer, or Award, or ShieldCheck */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Workmanship</h3>
        <p className="text-gray-700 leading-relaxed">
          Dedicated to providing durable, reliable solutions with exceptional skill.
        </p>
      </div>

      {/* Feature Card 5: Licensed Plumbers */}
      <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        {/* Changed icon for licensed/certified */}
        <FileText className="text-green-600 mx-auto mb-6" size={48} /> {/* Using FileText, or IdCard, or Certificate */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Licensed Plumbers</h3>
        <p className="text-gray-700 leading-relaxed">
          Our team comprises fully licensed and highly skilled plumbing professionals.
        </p>
      </div>

      {/* Feature Card 6: Google Review 4.7 */}
      <div className={`bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
        {/* Changed icon for reviews/rating */}
        <Star className="text-green-600 mx-auto mb-6" size={48} /> {/* Using Star, or Google, or ThumbsUp */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Google Review 4.7+</h3>
        <p className="text-gray-700 leading-relaxed">
          Proudly maintaining a high customer satisfaction rating based on your feedback.
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
