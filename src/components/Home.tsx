'use client'
import React, { useRef } from 'react'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import RequestQuoteSection from "@/components/RequestQuoteSection";
const HomeContainer = () => {

    const aboutRef = useRef(null);
    const homeRef = useRef(null)
    const serviceRef = useRef(null)
    const contactRef = useRef(null)


    const onScrollTo = (sectionName: string) => {
        let ref;
        switch (sectionName) {
            case 'about':
                ref = aboutRef;
                break;
            case 'service':
                ref = serviceRef;
                break;
            case 'home':
                ref = homeRef;
                break;
            case 'contact':
                ref = contactRef;
                break;
            default:
                return;
        }

        if (ref?.current) {
            (ref.current as HTMLAnchorElement).scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <Header handleClick={onScrollTo} />
            <Hero ref={homeRef} />
            <About ref={aboutRef} />
            <Gallery />
            <Testimonials />
            <RequestQuoteSection ref={contactRef} />
            <Services ref={serviceRef} />
            <Footer handleClick={onScrollTo}  />
        </>
    )
}

export default HomeContainer;