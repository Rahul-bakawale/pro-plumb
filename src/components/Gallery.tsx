"use client"; // Essential for Next.js App Router to run client-side code
import React from "react";
import ImageSlider from "./ui/slider";

// Custom Arrow Components - Always visible, with subtle styling.
const CustomArrow = ({ className, style, onClick, isNext }: { className?: string; style?: React.CSSProperties; onClick?: () => void; isNext?: boolean }) => {
  return (
    <div
      className={`${className} absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer 
                   text-white text-2xl bg-black/30 p-2 rounded-full 
                   transition-all duration-300 hover:bg-black/50 
                   flex items-center justify-center w-10 h-10`} // Make circular and always visible
      style={{ ...style, [isNext ? 'right' : 'left']: '10px' }} // Positioned with small offset
      onClick={onClick}
    >
      {isNext ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      )}
    </div>
  );
};




const Gallery = () => {
  const images = [
    { src: '/bathroom.png', alt: "Modern bathroom renovation" },
    { src: '/bathroom.png', alt: "Luxury bathroom design" },
  ];



  return (
    <section className="py-20 bg-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Browse Our Work</h2>
      </div>


      <ImageSlider images={images} />

    </section>
  );
};

export default Gallery;