import React from "react";

import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <ChiefsSection />
    </div>
  );
}
