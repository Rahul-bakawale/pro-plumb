'use client'
import React, { useState, useRef, useEffect } from 'react';
// Import icons from lucide-react
import { Clock, Rocket, DollarSign, Hammer, FileText, Star, ChevronDown, ChevronUp } from 'lucide-react';

// Simple helper to check if text needs truncation (for cleaner rendering logic)
const isTextTruncatable = (description: string) => description.length > 150; 

const WhyChooseUsSection = React.forwardRef((props, ref: any) =>  {
  // State to manage which item's panel is currently open (by index)
  const [openPanelIndex, setOpenPanelIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: <Clock className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "24/7 Emergency Plumbing",
      description: "Plumbing problems never wait for the right time. A burst pipe at 2am, a leaking hot water tank on a Sunday, or a flooded bathroom before work can throw your life into chaos. Most businesses and families feel helpless in these moments. That’s where we step in. Our licensed team is on-call 24/7, ready to respond fast and fix problems before they spiral into bigger disasters. When plumbing emergencies strike, don’t wait. Call us anytime, day or night, and we’ll be there for quick and reliable service. We handle everything from minor leaks to major pipe bursts, ensuring your home or business is protected 24 hours a day, 7 days a week.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Same Day Response",
      description: "Delays in plumbing can mean damaged floors, rising water bills, or even lost business if you’re a commercial property. Waiting for “the next available booking” isn’t an option when the issue is urgent. We prioritise same-day service wherever possible. Our scheduling system and local team structure mean we can often be at your door within hours, not days. 👉 Stop waiting for help — book today and we’ll solve your problem before it gets worse."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Price That Fits",
      description: "Hidden costs, vague estimates, or inflated hourly rates are every customer’s nightmare. Too many people are left with surprise bills after the work is already done. We take a different approach: transparent, upfront quotes with no hidden fees. You’ll know exactly what the job costs before we start. That way, you can plan your budget without nasty surprises. 👉 Get clarity and confidence with every quote — request your upfront price today.",
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Quality Workmanship",
      description: "Sloppy plumbing work often shows up months later as leaks, blockages, or system failures — costing you double. Businesses and homeowners shouldn’t have to pay for the same job twice. Our team takes pride in doing it right the first time. Every installation and repair is completed to strict Australian standards, tested, and signed off. We use quality materials and proven methods to guarantee long-term reliability. 👉 Choose workmanship that lasts — book your plumbing with us today."
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Licensed Plumbers",
      description: "Hiring an unlicensed plumber might feel cheaper upfront, but it can invalidate warranties, break compliance laws, and leave you liable for damages. For businesses, it can even shut down operations if inspections fail.At Beaconsfield Plumbing, all of our plumbers are fully licensed, insured, and trained in the latest industry standards. You get peace of mind knowing your work is safe, compliant, and covered.👉 Protect your home and business — work only with licensed professionals you can trust."   
    },
    {
      icon: <Star className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />,
      title: "Google Review 4.7+",
      description: "When it comes to choosing a plumber, trust matters. Customers want reassurance that they’re hiring a reliable, professional team who delivers on promises. That’s why we’re proud of our strong Google Ratings and the positive feedback we’ve earned from Melbourne homeowners and businesses.But it doesn’t stop there — Beaconsfield Plumbing is also listed on major business directories including Yellow Pages, Highpages, SeviceSeeking These platforms showcase genuine reviews, local recognition, and verified business details, giving you confidence that you’re dealing with a trusted, established service provider.👉 See what others already know — check out our reviews and listings, then book your service with confidence today.",
    },
  ];

  // Ref to hold the elements for outside click detection
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  // Assign ref to each card
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  // Click handler to close the open panel if the click is outside it
  const handleOutsideClick = (event: MouseEvent) => {
    if (openPanelIndex !== null) {
        const currentCard = cardRefs.current[openPanelIndex];
        
        // Check if the click occurred outside the currently open card
        if (currentCard && !(currentCard as HTMLElement).contains(event.target as Node)) {
            // Also ensure the click is not on a "Read more" button of another card
            const target = event.target as HTMLElement;
            if (!target.classList.contains('toggle-button') && !target.closest('.toggle-button')) {
                setOpenPanelIndex(null);
            }
        }
    }
  };

  useEffect(() => {
    // Add event listener to the document only when a panel is open
    if (openPanelIndex !== null) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openPanelIndex]);


  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Section Header */}
      <div className="text-center md:text-left mb-8 md:mb-12">
        <h2 className="font-poppins font-medium text-3xl md:text-[70px] leading-tight text-gray-900 mb-6">
          Why Choose Us?
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const isPanelOpen = openPanelIndex === index;
          const showReadMore = isTextTruncatable(reason.description);

          return (
            // Attach a ref to each card for outside click detection
            <div
              key={index}
              ref={(el) => setCardRef(el, index)}
              className={`group flex flex-col items-center text-center p-6 rounded-lg border-3 border-blue-900 shadow-lg 
                        transition-all duration-300 w-full bg-white text-gray-800 
                        hover:bg-blue-700 hover:text-white hover:border-blue-800 hover:shadow-2xl 
                        ${isPanelOpen ? 'bg-blue-700 text-white shadow-2xl scale-[1.02]' : ''}`} // Added scale/shadow for better active feedback
            >
              <div className={`rounded-full w-20 h-20 flex items-center justify-center mb-6 bg-blue-100 ${isPanelOpen ? 'bg-white' : 'group-hover:bg-white'}`}>
                {/* Ensure icon color updates correctly */}
                {React.cloneElement(reason.icon, { 
                    className: `w-12 h-12 ${isPanelOpen ? 'text-blue-700' : 'text-blue-700 group-hover:text-blue-700'}`
                })}
              </div>
              
              <h3 className={`font-poppins text-xl font-semibold mb-3 text-gray-900 group-hover:text-white`}>
                {reason.title}
              </h3>

              {/* ************************************** */}
              {/* UPDATED: Toggle Content Area with Smooth Transition */}
              {/* ************************************** */}
              <div 
                className="w-full overflow-hidden transition-all duration-500 ease-in-out" 
                style={{ maxHeight: isPanelOpen ? '500px' : '90px' }} // 90px is approximated height for 4 lines of text
              >
                
                <p className={`text-sm sm:text-base text-left transition-colors duration-300 text-gray-600 group-hover:text-blue-100
                              ${isPanelOpen 
                                ? 'mb-4' // Full text color when open
                                : '' // Truncated text color when closed
                              }
                              ${!isPanelOpen && showReadMore ? 'line-clamp-4' : ''}
                            `}>
                    {reason.description}
                </p>
              </div>

              {/* Toggle Button */}
              {showReadMore && (
                <button
                  className={`toggle-button flex items-center justify-center mt-3 font-medium transition-colors duration-200 text-blue-700 group-hover:text-white`}
                  onClick={(e) => {
                      e.stopPropagation(); // Prevent external click from closing if clicked on button
                      setOpenPanelIndex(isPanelOpen ? null : index);
                  }}
                >
                  {isPanelOpen ? (
                    <>
                      Read less <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Read more... <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection'
export default WhyChooseUsSection;