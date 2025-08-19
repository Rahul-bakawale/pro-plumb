"use client"; // Essential for Next.js App Router to run client-side code
import React from "react";
import ImageSlider from "./ui/slider";

// Custom Arrow Components - Always visible, with subtle styling.





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