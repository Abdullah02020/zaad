"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const ZaadPetroIntro = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <section className="py-16 px-6 bg-black text-textLight overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-[40px] font-bold mb-4 text-primary"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Zaad Petro: Smart Solutions for Your Gas Station
          </h2>
          <p
            className="text-gray-400 mb-6 text-lg leading-8"
            data-aos="fade-right"
            data-aos-delay="350"
          >
            Upgrade your gas station without breaking the bank! Zaad Petro
            provides refurbished gas pumps and cutting-edge POS systems to help
            you save money, boost performance, and increase customer
            satisfaction.
          </p>
          <p
            className="text-gray-400 mb-6 text-lg leading-8"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Whether you own a non-branded gas station or an independent service
            station, Zaad Petro offers the perfect solution to streamline your
            operations and drive more sales.
          </p>
          <button
            className="bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-red-500 transition-all duration-300"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
          <Image
            src="/petro.png"
            alt="Zaad Petro Gas Station"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ZaadPetroIntro;
