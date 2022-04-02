import React from "react";
import "./Hero.scss";
import HeroInfo from "./HeroInfo";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <HeroInfo />
        {/* <HeroSlider /> */}
      </div>
    </div>
  );
};

export default Hero;
