'use-client'
import React from 'react';
// Import icons from lucide-react
import { Wrench, Paintbrush, Sparkles, Hammer, Home, Droplet, Thermometer, Fan, Lightbulb, Sprout } from 'lucide-react';

const ServicesSection = React.forwardRef((props, ref: any) =>  {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for New House Plumbing
      title: "New House Plumbing",
      description: "Complete plumbing installations for new residential constructions, built to last.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Renovation Plumbing
      title: "Renovation Plumbing",
      description: "Expert plumbing solutions for home renovations, ensuring seamless integration and efficiency.",
    },
    {
      icon: <Droplet className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Hot Water & Heat Pumps (highlighted)
      title: "Hot Water & Heat Pumps",
      description: "Installation, repair, and maintenance of hot water systems and energy-efficient heat pumps.",
    },
    {
      icon: <Thermometer className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Drainage & Stormwater
      title: "Drainage & Stormwater",
      description: "Effective solutions for drainage issues and comprehensive stormwater management.",
    },
    {
      icon: <Sprout className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for General Maintenance
      title: "General Maintenance",
      description: "Proactive and reactive maintenance services to keep your plumbing systems in top condition.",
    },
    {
      icon: <Fan className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Heating & Cooling
      title: "Heating & Cooling",
      description: "Complete solutions for heating and cooling systems, ensuring year-round comfort.",
    },
  ];

  return (
    <section  ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Section Header */}
      <div className="text-center md:text-left mb-8 md:mb-12">
        <p className="font-poppins font-medium text-lg md:text-[35px] text-gray-600 mb-2">Our Comprehensive Services</p>
        <h2 className="font-poppins font-medium text-3xl md:text-[70px] leading-tight text-gray-900 mb-6">
          The Services that <br className="hidden sm:inline" /> we offer
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
          key={index}
          className={`group flex flex-col items-center text-center p-6 rounded-lg border-3 border-gray-500 shadow-lg 
                      transition-all duration-300 w-full h-full bg-white text-gray-800 
                      hover:bg-blue-700 hover:text-white hover:border-blue-800 hover:shadow-2xl`}
        >
          <div
            className={`rounded-full w-20 h-20 flex items-center justify-center mb-6 bg-blue-100 group-hover:bg-white`}
          >
            {service.icon}
          </div>
          <h3
            className={`font-poppins text-xl font-semibold mb-3 text-gray-900 group-hover:text-white`}
          >
            {service.title}
          </h3>
          <p className={`text-sm sm:text-base text-gray-600 group-hover:text-blue-100`}>
            {service.description}
          </p>
        </div>
        ))}
      </div>
    </section>
  );
});

ServicesSection.displayName = 'Services'
export default ServicesSection;
