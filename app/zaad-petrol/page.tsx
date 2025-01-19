import PetrolHero from "@/components/PetrolHero";
import ZaadPetroBenefits from "@/components/ZaadPetroBenefits";
import ZaadPetroIntro from "@/components/ZaadPetroIntro";

const page = () => {
  return (
    <div>
      <PetrolHero />
      <ZaadPetroIntro />
      <ZaadPetroBenefits />
    </div>
  );
};

export default page;
