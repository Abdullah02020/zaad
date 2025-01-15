"use client";
import HeroSection from "@/components/HeroSection";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CounterSection from "@/components/CounterSection";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
export default function Home() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CounterSection />
      <AnimatedTestimonialsDemo />
    </div>
  );
}
