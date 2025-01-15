import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" overflow-hidden bg-black text-textLight py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div data-aos="fade-right" data-aos-delay="300">
          <div>
            <Link href="/">
              <Image
                src="/Zaad Logo White.png"
                alt="Zaad Logo"
                width={150}
                height={40}
                className="h-10 w-auto mb-4"
              />
            </Link>
          </div>{" "}
          <p className="text-gray-400 mb-4">
            Zaad offers secure, fast, and reliable payment solutions tailored to
            your business needs.
          </p>
          <p className="text-lg font-semibold">contact@zaad.com</p>
          <div className="flex items-center space-x-4 mt-4">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span>123, Business Street, New York, USA</span>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <FaPhoneAlt className="text-primary text-xl" />
            <span>+88 23 456 789</span>
          </div>
        </div>

        {/* Our Services */}
        <div data-aos="fade-right" data-aos-delay="400">
          <h4 className="text-xl font-bold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services/zaad-petrol" className="hover:text-primary">
                Zaad Petrol
              </Link>
            </li>
            <li>
              <Link href="/services/pos-line-up" className="hover:text-primary">
                POS Line Up
              </Link>
            </li>
            <li>
              <Link
                href="/services/standalone-terminal"
                className="hover:text-primary"
              >
                Standalone Terminal
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div data-aos="fade-left" data-aos-delay="300">
          <h4 className="text-xl font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/partnership" className="hover:text-primary">
                Partnership
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-left" data-aos-delay="400">
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Don&apos;t miss any updates or offers! Subscribe to our mailing
            list.
          </p>

          <div className="flex items-center bg-white text-secondary rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-primary px-4 py-2">
              <FaEnvelope className="text-white" />
            </button>
          </div>
          <div className="flex space-x-4 mt-6">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-primary text-xl" />
            </Link>
            <Link href="https://dribbble.com" target="_blank">
              <FaDribbble className="text-primary text-xl" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-primary text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        <p>Copyright © 2025 Zaad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
