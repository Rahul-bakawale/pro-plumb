'use client'

import { DollarSign, FileText, Hammer, Rocket } from 'lucide-react'
import React from 'react'


const BoxSection = () => {



  return <section className='w-full mt-5'>

    <div className='w-full grid grid-cols-2 lg:flex justify-center items-center gap-4 p-4 z-20'> {/* Modified for a responsive grid */}
      {/* Item 1 */}
      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                  flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                  px-6 rounded-lg shadow-md border-2 border-blue-700 cursor-pointer 
                  hover:bg-gray-300 transition duration-200 
                  w-full h-full min-h-[80px] text-center sm:text-left"
                  style={{border: '1px solid blue'}}
                  >
        <FileText className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Licensed Plumber</span>
      </div>

      {/* Item 2 */}
      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                  flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                  px-6 rounded-lg shadow-md border-2 border-blue-700 cursor-pointer 
                  hover:bg-gray-300 transition duration-200 
                  w-full h-full min-h-[80px] text-center sm:text-left"
                  style={{border: '1px solid blue'}}
                  >
        <Rocket className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Same Day Response</span>
      </div>

      {/* Item 3 */}
      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                  flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                  px-6 rounded-lg shadow-md border-2 border-blue-700 cursor-pointer 
                  hover:bg-gray-300 transition duration-200 
                  w-full h-full min-h-[80px] text-center sm:text-left"
                  style={{border: '1px solid blue'}}
                  >
        <DollarSign className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Price That Fits</span>
      </div>

      {/* Item 4 */}
      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                  flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                  px-6 rounded-lg shadow-md border-2 border-blue-700 cursor-pointer 
                  hover:bg-gray-300 transition duration-200 
                  w-full h-full min-h-[80px] text-center sm:text-left"
                  style={{border: '1px solid blue'}}
                  >
        <Hammer className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Happy Customer</span>
      </div>

    </div>
  </section>
}

export default BoxSection
