'use client'

import { DollarSign, FileText, Hammer, Rocket } from 'lucide-react'
import React from 'react'


const BoxSection = () => {



  return <section className='w-full mt-5'>

    <div className='w-full grid grid-cols-2 lg:flex justify-center items-center gap-4 p-4 z-20'> {/* Modified for a responsive grid */}
      {/* Item 1 */}
      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer 
                hover:bg-gray-300 transition duration-200 w-full text-center sm:text-left">
        <FileText className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Licensed Plumber</span>
      </div>
      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer 
                hover:bg-gray-300 transition duration-200 w-full text-center sm:text-left">
        <Rocket className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">
          Same Day Response
        </span>      </div>

      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer 
                hover:bg-gray-300 transition duration-200 w-full text-center sm:text-left">
        <DollarSign className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Price That Fits</span>
      </div>

      <div className="bg-gray-200 text-blue-700 font-bold py-3 
                flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer 
                hover:bg-gray-300 transition duration-200 w-full text-center sm:text-left">
        <Hammer className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
        <span className="md:text-[15px] lg:text-[15px] text-[14px]">Happy Customer</span>
      </div>
    </div>
  </section>
}

export default BoxSection
