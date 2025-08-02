'use client'
import React, { useRef } from 'react'
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";

import MainLayout from '@/container/MainLayout';
import WhyChooseUsSection from './WhyChooseUsSection';
import BoxSection from './BoxSection';
import FinalCall from './FinalCall';
const HomeContainer = () => {
    const homeRef = useRef(null)
    const serviceRef = useRef(null)
    const whyChooseUsSectionRef = useRef(null)
 
    return (
        <MainLayout homeRef={homeRef} serviceRef={serviceRef} whyChooseUsSectionRef={whyChooseUsSectionRef}>
            <Hero ref={homeRef} />
            <BoxSection/>
            <Services ref={serviceRef} />
            <WhyChooseUsSection ref={whyChooseUsSectionRef} />
            <Gallery />
            <Testimonials />
            <FinalCall/>
        </MainLayout>
    )
}

export default HomeContainer;