"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/hero_section.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-textLight px-4 md:px-12">
        <h1
          className="text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] xl:text-[125px] font-bold mb-4 w-[90%] md:w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Master Payment <span className="text-primary">with Zaad</span>
        </h1>
        <p
          className="text-lg md:text-[25px] lg:text-[35px] w-[95%] md:w-[75%] leading-[30px] md:leading-[45px] mb-8 mx-auto pt-1"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Your trusted partner in simplifying payments through secure, fast, and
          reliable transaction services.
        </p>

        <div className="flex justify-center items-center space-x-4">
          <button
            className="bg-primary text-textLight px-6 py-3 rounded hover:bg-red-700 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            More About
          </button>
          <button
            className="bg-textLight text-secondary px-6 py-3 rounded hover:bg-gray-200 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
