"use client";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import MoreAboutUs from "@/components/MoreAboutUs";
import Aos from "aos";
import React, { useEffect } from "react";

const page = () => {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <MoreAboutUs />
    </div>
  );
};

export default page;
