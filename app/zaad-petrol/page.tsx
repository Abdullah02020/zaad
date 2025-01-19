"use client";
import PetrolHero from "@/components/PetrolHero";
import ZaadPetroBenefits from "@/components/ZaadPetroBenefits";
import ZaadPetroIntro from "@/components/ZaadPetroIntro";
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
      <PetrolHero />
      <ZaadPetroIntro />
      <ZaadPetroBenefits />
    </div>
  );
};

export default page;
