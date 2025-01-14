"use client";
import HeroSection from "@/components/HeroSection";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
export default function Home() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
