'use client'
import React from 'react';
import { Button } from "@/components/ui/button";

const About = React.forwardRef((props, ref: any) =>  {
  return (
    <section ref={ref} className="py-5 md:py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="md:col-span-7">
            <p className="font-poppins font-medium text-2xl md:text-[35px] text-gray-600 mb-2">About</p>

            <h2 className="font-poppins font-medium text-4xl md:text-[70px] mb-4 md:mb-6 text-foreground leading-tight">
              Who we are and<br />
              what we do
            </h2>
            <p className="font-poppins font-small text-lg md:text-[25px] text-gray-700 mb-4">
              Beaconsfield Plumbing is your trusted, local plumbing specialist serving the Beaconsfield community and surrounding suburbs. Founded and led by Nathan—an experienced, fully licensed plumber—our one-man team delivers personalized, reliable service on every job, big or small.
            </p>
            <p className="font-poppins font-small text-lg md:text-[25px] text-gray-700 mb-8">
              We love what we do and we are always ready for the next challenge.
              Our team are all fully trained, qualified and experienced.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button className="bg-blue-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 md:py-4 md:px-8 shadow-lg text-lg transition-colors duration-300">
                find out more...
              </Button>
              {/* Testimonial Card */}
              <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md max-w-sm">
                <img
                  src={'/shash.png'}
                  alt="Sasha"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-gray-700 text-sm">
                    &quot;I wish I spoke to Beaconsfield Plumbing, earlier, I would have saved thousands of dollars.&quot;
                  </p>
                  <p className="font-semibold text-gray-900 mt-2 text-sm">Sasha</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative md:col-span-5 mt-8 md:mt-0">
            <img
              src={'/plumber2.png'}
              alt="Professional plumber"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
