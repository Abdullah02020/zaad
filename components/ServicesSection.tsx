"use client";
import Aos from "aos";
import { useEffect } from "react";
import { FaCreditCard, FaTools, FaHeadset } from "react-icons/fa";

const ServicesSection = () => {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section className="py-12 bg-[#000] text-textLight text-center overflow-hidden">
      <h2
        className="text-primary text-xl"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <span className="text-primary">//</span>{" "}
        <span className="text-textLight">Who We Are</span>
      </h2>
      <h1
        className="text-[30px] font-bold mb-8 text-textLight"
        data-aos="fade-down"
        data-aos-delay="350"
      >
        Your Trusted Payment Partner
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6">
        {/* Payments Card */}
        <div
          className="relative bg-[#121212] p-8 rounded-lg shadow-lg text-center"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          <FaCreditCard className="text-primary text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-textLight">
            Fast Payments
          </h3>
          <p className="text-gray-400">
            Secure and seamless payment solutions for your business.
          </p>
        </div>

        {/* Management Card */}
        <div
          className="relative bg-[#121212] p-8 rounded-lg shadow-lg text-center"
          data-aos="fade-right"
          data-aos-delay="450"
        >
          <FaTools className="text-primary text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-textLight">
            Simplified Control
          </h3>
          <p className="text-gray-400">
            Manage transactions and operations easily.
          </p>
        </div>

        {/* Support Card */}
        <div
          className="relative bg-[#121212] p-8 rounded-lg shadow-lg text-center"
          data-aos="fade-right"
          data-aos-delay="550"
        >
          <FaHeadset className="text-primary text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-textLight">
            24/7 Support
          </h3>
          <p className="text-gray-400">Get assistance anytime you need it.</p>
        </div>
      </div>

      <p
        className="text-gray-500 mt-12"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Reliable Payment Systems for Your Business{" "}
      </p>
    </section>
  );
};

export default ServicesSection;
