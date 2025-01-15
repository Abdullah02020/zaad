/* eslint-disable react/jsx-no-comment-textnodes */

import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

function AboutSection() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <div className="flex overflow-hidden flex-col lg:flex-row items-center bg-black text-textLight px-6 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center lg:justify-center"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <Image
          src="/about-img.png" // Correct the image path
          alt="Business Team"
          width={500} // Adjust width and height as needed
          height={500}
          className="rounded-lg shadow-lg w-[80%] sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[60%] h-auto"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
        <p
          className="font-semibold mb-2"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <span className="text-primary">//</span>
          <span className="text-textLight uppercase"> About Us</span>
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
          data-aos-delay="350"
          data-aos="fade-down"
        >
          Discover the Zaad Difference
        </h2>
        <p
          className="text-gray-400 mb-6 text-[18px] sm:text-[20px] w-full lg:w-[90%] mx-auto lg:mx-0"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Welcome to Zaad Merchant Services! Founded in 2019 by native New
          Yorkers, Zaad aims to revolutionize how you handle payments in a
          competitive market. Our mission is to exceed your expectations in
          credit card processing and customer satisfaction.
        </p>

        <ul className="space-y-4">
          <li
            className="flex items-center"
            data-aos="fade-left"
            data-aos-delay="350"
          >
            <div className="border-2 border-primary rounded-full p-2 mr-3">
              <FaCheck className="text-primary text-sm" />
            </div>
            <span className="font-bold text-textLight">
              Low-rate processing and top credit card machines
            </span>
          </li>
          <li
            className="flex items-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="border-2 border-primary rounded-full p-2 mr-3">
              <FaCheck className="text-primary text-sm" />
            </div>
            <span className="font-bold text-textLight">
              Flexible dual pricing and cash discount programs
            </span>
          </li>
          <li
            className="flex items-center"
            data-aos="fade-left"
            data-aos-delay="450"
          >
            <div className="border-2 border-primary rounded-full p-2 mr-3">
              <FaCheck className="text-primary text-sm" />
            </div>
            <span className="font-bold text-textLight">
              Partnerships with PAX, Dejavoo, NRS, Clover, and Valor
            </span>
          </li>
          <li
            className="flex items-center"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="border-2 border-primary rounded-full p-2 mr-3">
              <FaCheck className="text-primary text-sm" />
            </div>
            <span className="font-bold text-textLight">
              24/7 technical support and seamless integrations
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
