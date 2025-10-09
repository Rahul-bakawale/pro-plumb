'use client'
import React, { useRef, useState } from 'react'
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";

import MainLayout from '@/container/MainLayout';
import WhyChooseUsSection from './WhyChooseUsSection';
import BoxSection, { FeatureModal } from './BoxSection';
import FinalCall from './FinalCall';
import FAQSection from './FAQSection';
const HomeContainer = () => {
    const homeRef = useRef(null)
    const serviceRef = useRef(null)
    const whyChooseUsSectionRef = useRef(null)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (boxInfo: any) => {
        setModalContent(boxInfo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <MainLayout homeRef={homeRef} serviceRef={serviceRef} whyChooseUsSectionRef={whyChooseUsSectionRef}>
            <Hero ref={homeRef} />
            <BoxSection openModal={openModal} closeModal={closeModal} />
            <Services ref={serviceRef} />
            <WhyChooseUsSection ref={whyChooseUsSectionRef} />
            <Gallery />
            <Testimonials />
            <FinalCall />
            <FAQSection />
            <FeatureModal
                isOpen={isModalOpen}
                onClose={closeModal}
                data={modalContent}
            />
        </MainLayout>
    )
}

export default HomeContainer;