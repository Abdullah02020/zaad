import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Aos from "aos";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle dropdown function
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div data-aos="fade-down" data-aos-delay="300">
        <Link href="/">
          <img
            src="/Zaad Logo White.png"
            alt="Zaad Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-textLight">
        <li data-aos="fade-down" data-aos-delay="400">
          <Link href="/">Home</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="450">
          <Link href="/about">About</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="500" className="relative">
          <button
            className="flex items-center space-x-1"
            onClick={toggleDropdown}
          >
            <span>Services</span>
            <span
              className={`transform ${
                dropdownOpen ? "rotate-180" : ""
              } transition-transform duration-300`}
            >
              ▼
            </span>
          </button>
          <div
            className={`absolute left-0 mt-2 bg-textLight shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
              dropdownOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
            }`}
          >
            <ul className="p-4 space-y-2 text-secondary">
              <li>
                <Link
                  href="/services/web-design"
                  className="hover:text-primary"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-primary">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="hover:text-primary">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li data-aos="fade-down" data-aos-delay="450">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="500">
          <Link href="/blog">Blog</Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="550">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Contact Info */}
      <div className="hidden md:flex items-center space-x-4 text-textLight">
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="flex items-center space-x-2"
        >
          <FaPhoneAlt className="text-primary" />
          <span>+88 23 456 789</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="650"
          className="flex items-center space-x-2"
        >
          <FaEnvelope className="text-primary" />
          <span>contact@zaad.com</span>
        </div>
        <button
          data-aos="fade-down"
          data-aos-delay="700"
          className="bg-primary text-textLight px-4 py-2 rounded hover:bg-red-600"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-textLight" />
          ) : (
            <FaBars className="text-2xl text-textLight" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-secondary bg-opacity-90 z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <div className="text-2xl font-bold text-textLight">Vexel</div>
          <button onClick={toggleMenu}>
            <FaTimes className="text-2xl text-textLight" />
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-8 mt-8 text-textLight">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1"
            >
              <span>Services</span>
              <span
                className={`transform ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform duration-300`}
              >
                ▼
              </span>
            </button>
            <div
              className={`absolute left-0 mt-2 bg-textLight shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
                dropdownOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
              }`}
            >
              <ul className="p-4 space-y-2 text-secondary">
                <li>
                  <Link
                    href="/services/web-design"
                    className="hover:text-primary"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-primary">
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/marketing"
                    className="hover:text-primary"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
