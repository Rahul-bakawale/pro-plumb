'use-client'
import React from 'react';
// Import icons from lucide-react
import { Clock, Rocket, DollarSign, Hammer, FileText, Star } from 'lucide-react';

const WhyChooseUsSection = React.forwardRef((props, ref: any) =>  {
  const reasons = [
    {
      icon: <Clock className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "24/7 Emergency Plumbing",
      description: "Ready to assist you any time, day or night, for all urgent plumbing needs.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Same Day Response",
      description: "We prioritize your urgent requests with prompt service and quick turnarounds.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Price That Fits",
      description: "Transparent and competitive pricing tailored to your budget, no hidden fees.",
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Quality Workmanship",
      description: "Dedicated to providing durable, reliable solutions with exceptional skill.",
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Licensed Plumbers",
      description: "Our team comprises fully licensed and highly skilled plumbing professionals.",
    },
    {
      icon: <Star className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Google Review 4.7+",
      description: "Proudly maintaining a high customer satisfaction rating based on your feedback.",
    },
  ];

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Section Header */}
      <div className="text-center md:text-left mb-8 md:mb-12">
        {/* <p className="font-poppins font-medium text-lg md:text-[35px] text-gray-600 mb-2">Our Comprehensive Services</p> */}
        <h2 className="font-poppins font-medium text-3xl md:text-[70px] leading-tight text-gray-900 mb-6">
          Why Choose Us?
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center text-center p-6 rounded-lg border-3 border-blue-900 shadow-lg 
                      transition-all duration-300 w-full h-full bg-white text-gray-800 
                      hover:bg-blue-700 hover:text-white hover:border-blue-800 hover:shadow-2xl`}
          >
            <div className={`rounded-full w-20 h-20 flex items-center justify-center mb-6 bg-blue-100 group-hover:bg-white`}>
              {reason.icon}
            </div>
            <h3 className={`font-poppins text-xl font-semibold mb-3 text-gray-900 group-hover:text-white`}>
              {reason.title}
            </h3>
            <p className={`text-sm sm:text-base text-gray-600 group-hover:text-blue-100`}>
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection'
export default WhyChooseUsSection;