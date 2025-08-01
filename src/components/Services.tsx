'use-client'
import React from 'react';
// Import icons from lucide-react
import { Wrench, Paintbrush, Sparkles, Hammer } from 'lucide-react';

const ServicesSection = React.forwardRef((props, ref: any) =>  {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-700" />, // Lucide icon for Installations
      title: "Installations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies viverra vel morbi placerat magna arcu. Tellus.",
      isHighlighted: false,
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-blue-700" />, // Lucide icon for Renovations
      title: "Renovations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies viverra vel morbi placerat magna arcu. Tellus.",
      isHighlighted: false,
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-700" />, // Lucide icon for Fixing Issues (highlighted)
      title: "Fixing Issues",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies viverra vel morbi placerat magna arcu. Tellus.",
      isHighlighted: true, // This one is highlighted
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-700" />, // Lucide icon for Repairs
      title: "Repairs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies viverra vel morbi placerat magna arcu. Tellus.",
      isHighlighted: false,
    },
  ];

  return (
    <section  ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Section Header */}
      <div className="text-center md:text-left mb-8 md:mb-12">
        <p className="font-poppins font-medium text-lg md:text-[35px] text-gray-600 mb-2">Services</p>
        <h2 className="font-poppins font-medium text-3xl md:text-[70px] leading-tight text-gray-900 mb-6">
          The Services that <br className="hidden sm:inline" /> we offer
        </h2>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-lg shadow-md transition-all duration-300
                       w-full sm:w-[280px] h-full sm:h-[350px]
                       ${service.isHighlighted ? 'bg-blue-700 text-white' : 'bg-white text-gray-800'}`}
          >
            <div className={`rounded-full w-20 h-20 flex items-center justify-center mb-6
                            ${service.isHighlighted ? 'bg-white' : 'bg-blue-100'}`}>
              {service.icon}
            </div>
            <h3 className={`font-poppins text-xl font-semibold mb-3 ${service.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
              {service.title}
            </h3>
            <p className={`text-sm sm:text-base ${service.isHighlighted ? 'text-blue-100' : 'text-gray-600'}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

ServicesSection.displayName = 'Serivces'
export default ServicesSection;
