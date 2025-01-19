"use client";
import Aos from "aos";
import { useEffect } from "react";

const ZaadPetroBenefits = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <section className="py-16 px-6 bg-black text-textLight">
      <div className="container mx-auto text-center">
        <h2
          className="text-[40px] font-bold mb-6 text-primary"
          data-aos-delay="250"
          data-aos="fade-up"
        >
          Why Choose Zaad Petro?
        </h2>
        <p
          className="text-gray-400 mb-12 text-lg leading-8 mx-auto w-[85%]"
          data-aos-delay="300"
          data-aos="fade-up"
        >
          With Zaad Petro, you get cost-effective and efficient solutions to
          boost your gas station performance. Enjoy seamless integrations,
          enhanced security, and increased revenue potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className="bg-secondary p-6 rounded-lg shadow-lg"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Save Money</h3>
            <p className="text-gray-400">
              Get refurbished gas pumps at a fraction of the cost of new ones,
              saving you thousands in upfront and maintenance expenses.
            </p>
          </div>

          <div
            className="bg-secondary p-6 rounded-lg shadow-lg"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Boost Performance
            </h3>
            <p className="text-gray-400">
              Offer a faster payment process to reduce wait times and enhance
              customer satisfaction.
            </p>
          </div>

          <div
            className="bg-secondary p-6 rounded-lg shadow-lg"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Enhance Security
            </h3>
            <p className="text-gray-400">
              Protect transactions with EMV-compliant and PCI-certified POS
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZaadPetroBenefits;
