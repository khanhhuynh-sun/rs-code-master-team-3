import React from "react";
import rsLogo from "../../img/rs-logo.png";

import "./HeaderLogo.scss";

const HeaderLogo = () => {
  return (
    <div className="logo">
      <img src={rsLogo} alt="rising stars logo" />
    </div>
  );
};

export default HeaderLogo;
