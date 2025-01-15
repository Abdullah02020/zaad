"use client";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[80vh] bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/hero_section.jpg"
          alt="About Us Background"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">About us</h1>
        <div className="flex items-center justify-center space-x-4 text-lg">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span>About us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
