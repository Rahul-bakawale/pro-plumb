'use client'
import React, { useState, useRef, useEffect } from 'react';
// Import icons from lucide-react
import { Wrench, Paintbrush, Sparkles, Hammer, Home, Droplet, Thermometer, Fan, Lightbulb, Sprout, ChevronDown, ChevronUp } from 'lucide-react';

// Simple helper to check if text needs truncation (for cleaner rendering logic)
const isTextTruncatable = (description: string) => description.length > 150;

const ServicesSection = React.forwardRef((props, ref: any) => {
  // State to manage which item's panel is currently open (by index)
  const [openPanelIndex, setOpenPanelIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: <Home className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for New House Plumbing
      title: "New House Plumbing",
      description: "From the ground up, we deliver plumbing systems that last. For new home builds, Beaconsfield Plumbing handles every step—design, supply, installation and testing—according to strict industry standards. We coordinate with architects, builders, and compliance inspectors to make sure everything aligns with local building codes, pressure tolerances and water flow requirements. Each joint, pipe run, and fixture is double-checked and pressure-tested before handover. We document every stage to ensure warranty integrity. ✨ Let us help build your new home’s plumbing with precision and care — start the journey today!",
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Renovation Plumbing
      title: "Renovation Plumbing",
      description: "Renovations come with unique challenges—hidden walls, existing pipework, tight spaces. We approach renovation plumbing with a diagnostic mindset: first inspect existing infrastructure using cameras and leak-detection tools, then plan routes that minimize disruption and avoid structural damage. As we work, we protect surfaces with coverings, manage dust and debris, and keep the worksite clean. All new installations are tied seamlessly into existing systems, pressure tested, flushed, and certified. You’ll get a detailed before/after plan and photos for transparency. ✨ Upgrade your plumbing without the hassle — let us take care of the details!",
    },
    {
      icon: <Droplet className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Hot Water & Heat Pumps (highlighted)
      title: "Hot Water & Heat Pumps",
      description: "A reliable hot water system is essential. We begin by assessing your household’s hot water demand and energy goals, then recommend appropriately sized systems (gas, electric or heat pump). Installations are done with strict adherence to code: secure mounting, correct pipe insulation, protective valve fittings, proper venting, and backflow prevention. After installation, we commission the system, run performance tests, provide you with operating training, and leave written documentation. We also carry out regular maintenance to extend efficiency and lifespan. ✨ Say goodbye to cold showers — let us install or repair your hot water system with confidence!",
    },
    {
      icon: <Thermometer className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Drainage & Stormwater
      title: "Drainage & Stormwater",
      description: "Proper drainage and stormwater management protect your property from flooding and soil movement. We conduct site surveys—checking slope, soil type and existing runoff paths—then engineer systems with adequate fall, traps, sizing, and overflow paths. Depending on the need, we install underground pipes, soakaways, channel drains or pit systems. During work, we shoring trenches safely, compact backfill, and ensure no damage to landscaping. Finally, we test flows under simulated rain conditions and provide maintenance plans. ✨ Protect your home from water damage — get your drainage sorted by professionals!",
    },
    {
      icon: <Sprout className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for General Maintenance
      title: "General Maintenance",
      description: "Preventive care is the backbone of a healthy plumbing system. We offer scheduled inspections where we check valves, pipes, joints, pressure, and hidden leaks using thermal imaging or moisture sensors. We clean drains, descale fixtures, test backflow devices, and spot-weld weak segments before they fail. All maintenance visits come with a detailed report, photos, recommendations and priority scheduling if issues arise. We aim to catch small issues before they become emergencies. ✨ Stay worry-free all year — let us look after your plumbing with care!",
    },
    {
      icon: <Fan className="w-12 h-12 text-blue-700 group-hover:text-blue-700" />, // Lucide icon for Heating & Cooling
      title: "Heating & Cooling",
      description: "Comfort depends on balance. Our heating & cooling services start with a full system audit of your existing ducting, vents, insulation, and airflow. We size new systems correctly, install quality units (ducted, split or evaporative), handle refrigerant piping to standards, and program smart controls. After installation, we balance airflows, test zones, and show you how to use and maintain your system. We also schedule seasonal servicing to keep your system efficient and reliable. ✨ Create the ideal climate in your home — talk to us about heating & cooling!",
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
          Services we offer <br className="hidden sm:inline" /> 
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((service, index) => {
          const isPanelOpen = openPanelIndex === index;
          const showReadMore = isTextTruncatable(service.description);

          return (
            <div
              key={index}
              ref={(el) => setCardRef(el, index)}
              className={`group flex flex-col items-center text-center p-6 rounded-lg border-3 border-blue-900 shadow-lg 
                        transition-all duration-300 w-full bg-white text-gray-800 
                        hover:bg-blue-700 hover:text-white hover:border-blue-800 hover:shadow-2xl 
                        ${isPanelOpen ? 'bg-blue-700 text-white shadow-2xl scale-[1.02]' : ''}`}
            >
              <div
                className={`rounded-full w-20 h-20 flex items-center justify-center mb-6 bg-blue-100 ${isPanelOpen ? 'bg-white' : 'group-hover:bg-white'}`}
              >
                {/* Ensure icon color updates correctly */}
                {React.cloneElement(service.icon, {
                  className: `w-12 h-12 ${isPanelOpen ? 'text-blue-700' : 'text-blue-700 group-hover:text-blue-700'}`
                })}
              </div>

              <h3
                className={`font-poppins text-xl font-semibold mb-3 text-gray-900 group-hover:text-white`}
              >
                {service.title}
              </h3>

              {/* Toggle Content Area with Smooth Transition */}
              <div
                className="w-full overflow-hidden transition-all duration-500 ease-in-out"
                // Set max-height for smooth transition: 90px for 4 lines, 500px for expansion
                style={{ maxHeight: isPanelOpen ? '500px' : '90px' }}
              >
                <p
                  className={`text-sm sm:text-base text-left transition-colors duration-300 text-gray-600 group-hover:text-blue-100
                              ${isPanelOpen
                      ? 'mb-4'
                      : ''
                    }
                              ${!isPanelOpen && showReadMore ? 'line-clamp-4' : ''}
                            `}
                >
                  {service.description}
                </p>
              </div>

              {/* Toggle Button */}
              {showReadMore && (
                <button
                  className={`toggle-button flex items-center justify-center mt-3 font-medium transition-colors duration-200 text-blue-700 group-hover:text-white
                            `}
                  onClick={(e) => {
                    e.stopPropagation();
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

ServicesSection.displayName = 'Services'
export default ServicesSection;