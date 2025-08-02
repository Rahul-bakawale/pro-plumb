'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { useRouter } from 'next/navigation';


// TestimonialsSection component implementation
const MainLayout = (props: any) => {
  const router = useRouter();
  const { children, serviceRef, homeRef, whyChooseUsSectionRef} = props;
  // Dummy data for testimonials
  const onScrollTo = (sectionName: string) => {
    let ref, path;
    switch (sectionName) {
      case 'service':
        ref = serviceRef;
        path = '/'
        break;
      case 'whyus':
        ref = whyChooseUsSectionRef;
        path = '/'
        break;
      case 'home':
        ref = homeRef;
        path = '/'
        break;
      default:
        path = `/${sectionName}`
        break;
    }

    if (ref?.current) {
      (ref.current as HTMLAnchorElement).scrollIntoView({ behavior: 'smooth' });
    }else{
      router.push(path);
    }
  }


  return (
    <>
      <Header handleClick={onScrollTo} />
      {children}
      <Footer handleClick={onScrollTo} />
    </>
  );
};


export default MainLayout;
