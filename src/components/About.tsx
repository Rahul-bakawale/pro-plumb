'use client'
import React from 'react';
import { Button } from "@/components/ui/button";

const About = React.forwardRef((props, ref: any) =>  {
  return (
    <section ref={ref} className="py-10 md:py-20 bg-gray-50"> 
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-start mt-5"> 
          
          {/* Text Content Column */}
          <div className="md:col-span-7 ">
            {/* --- 1. WHO WE ARE --- */}
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-blue-700 mb-3 border-l-4 border-blue-700 pl-4">
              Who We Are
            </h3>
            <p className="font-poppins text-lg md:text-[22px] text-gray-700 mb-6 leading-relaxed">
              At Beaconsfield Plumbing, we’re proud to be your trusted, local plumbing specialists serving Beaconsfield, Berwick, Pakenham, Narre Warren, Casey, and the wider eastern suburbs of Melbourne. Founded and led by Nathan, a fully licensed plumber with over 20 years of industry experience, Beaconsfield Plumbing has built its reputation on professionalism, honesty, and workmanship that lasts. From day one, our mission has been simple: deliver plumbing solutions that Melbourne families and businesses can rely on — anytime, anywhere.
            </p>

            {/* --- 2. WHAT WE DO --- */}
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-blue-700 mb-3 border-l-4 border-blue-700 pl-4">
              What We Do
            </h3>
            <p className="font-poppins text-lg md:text-[22px] text-gray-700 mb-4 leading-relaxed">
              We provide a complete range of plumbing, heating, and cooling services across Melbourne’s east, including:
            </p>

            <ul className="list-disc pl-6 text-lg md:text-[20px] text-gray-700 space-y-2 mb-6 ml-4">
              <li><span className='font-semibold'>New House Plumbing Installations</span> – end-to-end solutions for new builds in Beaconsfield, Berwick, and surrounding areas.</li>
              <li><span className='font-semibold'>Renovation Plumbing</span> – modernising existing homes and businesses with updated plumbing systems.</li>
              <li><span className='font-semibold'>Hot Water & Heat Pumps</span> – installation, servicing, and repairs of hot water units and energy-efficient heat pumps.</li>
              <li><span className='font-semibold'>Drainage & Stormwater</span> – effective drainage and stormwater management to protect properties across Narre Warren, Casey, and Pakenham.</li>
              <li><span className='font-semibold'>General Plumbing Maintenance</span> – proactive and emergency plumbing services to keep your home or business running smoothly.</li>
              <li><span className='font-semibold'>Heating & Cooling Systems</span> – ducted, split systems, and evaporative cooling solutions for year-round comfort.</li>
            </ul>
            <p className="font-poppins text-lg md:text-[22px] text-gray-700 mb-8 leading-relaxed italic">
              No matter the job — big or small — we approach it with the same level of care, precision, and dedication.
            </p>

            {/* --- 3. WHY MELBOURNE CHOOSES US (List of USPs) --- */}
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-blue-700 mb-3 border-l-4 border-blue-700 pl-4">
              Why Melbourne Chooses Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <p className="flex items-start text-lg text-gray-800">
                <span className="text-blue-700 font-bold mr-2 text-xl">🚨</span> 24/7 Emergency Plumbing – fast response when you need us most.
              </p>
              <p className="flex items-start text-lg text-gray-800">
                <span className="text-blue-700 font-bold mr-2 text-xl">⚡</span> Same-Day Service – available in Berwick, Narre Warren, Pakenham, and nearby suburbs.
              </p>
              <p className="flex items-start text-lg text-gray-800">
                <span className="text-blue-700 font-bold mr-2 text-xl">💲</span> Transparent Pricing – no hidden fees, just honest quotes upfront.
              </p>
              <p className="flex items-start text-lg text-gray-800">
                <span className="text-blue-700 font-bold mr-2 text-xl">🛠</span> Quality Workmanship – compliant with Australian standards, guaranteed to last.
              </p>
              <p className="flex items-start text-lg text-gray-800">
                <span className="text-blue-700 font-bold mr-2 text-xl">📑</span> Fully Licensed & Insured – peace of mind on every job.
              </p>
              <p className="flex items-start text-lg text-gray-800">
                <span className="text-blue-700 font-bold mr-2 text-xl">⭐</span> Trusted Locally – highly rated on Google and listed on Yellow Pages, Hipages, and ServiceSeeking.
              </p>
            </div>
            
            {/* --- 4. OUR PROMISE TO YOU (New Content Added) --- */}
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-blue-700 mb-3 border-l-4 border-blue-700 pl-4">
                Our Promise to You
            </h3>
            <p className="font-poppins text-lg md:text-[22px] text-gray-700 mb-6 leading-relaxed">
              At Beaconsfield Plumbing, we believe great service is about more than just pipes and drains. It’s about reliability, peace of mind, and local trust. Whether you’re in Beaconsfield, Berwick, Casey, Narre Warren, Pakenham, or anywhere across Melbourne’s eastern suburbs, you’ll get the same professional, on-time, and lasting solutions.
            </p>
            <p className="font-poppins text-lg md:text-[22px] text-gray-700 mb-6 leading-relaxed">
            👉 Looking for a reliable plumber near you? Contact Beaconsfield Plumbing today — Melbourne’s trusted choice for plumbing, heating & cooling.
            </p>
            <p className='font-poppins text-lg md:text-[22px] text-gray-700 mb-6 leading-relaxed'>
              ⚡ This version is now locally targeted (Beaconsfield, Berwick, Narre Warren, Pakenham, Casey, Melbourne eastern suburbs) and blends in SEO keywords while staying natural.
            </p>
            {/* End of New Content */}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Call to Action Button */}
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 md:py-4 md:px-8 shadow-xl text-lg transition-colors duration-300 rounded-lg">
                👉 find out more...
              </Button>
              
              {/* Testimonial Card */}
              <div className="flex items-center space-x-4 p-4 border border-blue-200 rounded-lg shadow-lg bg-white max-w-sm">
                <img
                  src={'/shash.png'}
                  alt="Sasha"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 text-sm">
                    &quot;I wish I spoke to Beaconsfield Plumbing earlier; I would have saved thousands of dollars.&quot;
                  </p>
                  <p className="font-semibold text-gray-900 mt-1 text-sm">Sasha (Verified Customer)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative md:col-span-5 mt-8 md:mt-0">
            <img
              src={'/plumber2.webp'}
              alt="Professional plumber working in Melbourne's eastern suburbs"
              className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-md mx-auto object-cover h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;