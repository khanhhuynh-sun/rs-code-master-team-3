import React from "react";
import "./HeroInfo.scss";
import logo from "../../img/rs-no-text-logo.png";

const HeroInfo = () => {
  return (
    <div className="hero-info">
      <div className="hero-info__container">
        <p className="hero-info__text">
          Home where young and enthusiastic engineers gather and work in Da
          Nang, Vietnam.
        </p>
        <h1 className="hero-info__meet">Meet</h1>
        <h1 className="hero-info__rising-stars">Rising Stars</h1>
      </div>

      <div className="hero-info__img">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default HeroInfo;
