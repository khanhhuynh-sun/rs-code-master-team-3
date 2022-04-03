import React from "react";
import Logo from "../../img/rs-logo.png";
import "./RightInfo.scss";

const RightInfo = () => {
  return (
    <div className="RightInfo">
      <div className="Info">
        <div className="RightInfo__logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="Info">
        <h2 className="Info__title">Service for Asian market</h2>
        <p className="Info__description">
          Working with partners to bring marvellous Japanese web services into
          Asian growing market. Even new idea comes up on internet everyday in
          Japan, it’s still difficult to expand idea into global market since
          difference with language and culture.
        </p>
      </div>
    </div>
  );
};

export default RightInfo;
