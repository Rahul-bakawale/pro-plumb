'use client'
import React from 'react';
import { Button } from "@/components/ui/button";

// TestimonialsSection component implementation
const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus arcu at nunc imperdiet. Erat enim integer tempus ipsum amet. Ullamcorper praesent felis arcu.",
      name: "Thomas Moore",
      title: "Unemployed",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus arcu at nunc imperdiet. Erat enim integer tempus ipsum amet. Ullamcorper praesent felis arcu.",
      name: "Kirsty Watson",
      title: "Professional",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus arcu at nunc imperdiet. Erat enim integer tempus ipsum amet. Ullamcorper praesent felis arcu.",
      name: "John Doe",
      title: "Freelancer",
      avatar: "/user.jpg" // Placeholder avatar
    },
  ];

  return (
    <section id='testimonials-section' className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
        {/* Left Section: Introduction and Call to Action */}
        <div className="flex flex-col">
          <p className="font-poppins font-medium text-2xl md:text-[35px] text-gray-600 mb-2">Testimonials</p>
          <h2 className="font-poppins font-medium text-4xl md:text-[70px] leading-tight text-gray-900 mb-6"> {/* Applied Poppins font, 70px size, and medium weight */}
            What our clients <br className="hidden sm:inline" /> say about us
          </h2>
          <p className="font-poppins font-small text-base md:text-[25px] text-gray-700 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper praesent dictumst id ornare lorem enim. Vitae, viverra dui sed cras nibh ornare.
          </p>
          <button className="self-start px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75">
            View More...
          </button>
        </div>

        {/* Right Section: Testimonial Cards */}
        <div className="space-y-8 mt-8 lg:mt-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-gray-800 font-poppins font-small text-sm md:text-[16px] mb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                  onError={(e: any) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `https://placehold.co/40x40/CCCCCC/000000?text=User`; // Fallback image
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
