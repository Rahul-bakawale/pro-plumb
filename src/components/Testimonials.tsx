'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import TestimonialSlider from './TestimonialSlider';

// TestimonialsSection component implementation
const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      text: "Nathan was incredible! Our hot water system failed late at night, and he arrived within the hour. Professional, friendly, and had it fixed before morning. Highly recommend Beaconsfield Plumbing for any emergency work.",
      name: "Sarah M.",
      title: "Berwick, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "We used Beaconsfield Plumbing during our home renovation. Nathan planned everything perfectly and worked around our builder’s schedule. The new plumbing looks neat, works flawlessly, and came in exactly on budget.",
      name: "Daniel & Emma R.",
      title: "Beaconsfield, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "Fast response, fair pricing, and clean workmanship. Nathan explained every step before starting, and there were no surprises in the bill. Great service from a true local business.",
      name: "James P.",
      title: "Pakenham, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "We had recurring drainage issues for years. Other plumbers just did quick fixes, but Beaconsfield Plumbing found the root cause and installed a proper stormwater solution. Haven’t had a problem since!",
      name: "Olivia C.",
      title: "Narre Warren, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "Highly professional and knowledgeable. Nathan serviced our ducted heating system and even gave maintenance tips to improve performance. It’s rare to find someone so genuine and thorough.",
      name: "Michael H.",
      title: "Clyde North, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "From the first call to completion, everything was handled perfectly. Nathan arrived on time, respected our property, and did a great job fixing our leaking pipes. Exceptional service and communication.",
      name: "Jessica T.",
      title: "Casey, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "We called for an urgent hot water repair on a public holiday, and Nathan showed up the same day! Honest advice, quality parts, and great value for money. Definitely our go-to plumber from now on.",
      name: "Peter L.",
      title: "Officer, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "We’ve used Beaconsfield Plumbing several times for both home and business. Nathan is dependable, skilled, and always keeps the workspace tidy. Couldn’t ask for a better local plumber.",
      name: "Amanda G.",
      title: "Dandenong, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "Very impressed by the professionalism and quality of work. Nathan upgraded our bathroom plumbing and installed new fixtures perfectly. The attention to detail is second to none.",
      name: "Raj S.",
      title: "Hallam, VIC",
      avatar: "/user.jpg" // Placeholder avatar
    },
    {
      text: "Great experience from start to finish. Transparent pricing, prompt service, and fantastic results. Beaconsfield Plumbing truly cares about customer satisfaction — highly recommended!",
      name: "Lisa W.",
      title: "Cranbourne, VIC",
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
          <p className="font-poppins font-small text-base md:text-[20px] text-gray-700 mb-8 max-w-md">
            At <b>Beaconsfield Plumbing</b>, our customers aren’t just clients — they’re neighbours, families, and local businesses we’ve grown alongside for years. Every project we take on, from small repairs to full installations, strengthens our bond with the community.
            Many of our customers first call us during an emergency — and end up keeping us as their <b>trusted plumber for life</b>. Their kind words and ongoing support are the reason we’ve become one of the most recommended plumbing services across <b>Berwick, Pakenham, Narre Warren, and the wider Melbourne east. </b>
            We believe great service is built on trust, and trust is earned — one job, one customer, one handshake at a time.
          </p>

        </div>

        {/* Right Section: Testimonial Cards */}
        <div className="space-y-8 mt-8 lg:mt-0">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
