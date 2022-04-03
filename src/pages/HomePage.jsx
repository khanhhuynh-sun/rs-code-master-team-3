import React from "react";
import Hero from "../components/Hero/Hero";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import CompanySlider from "../components/Slider/CompanySlider";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <CompanySlider />
      <CompanyInfo />
    </main>
  );
};

export default HomePage;
