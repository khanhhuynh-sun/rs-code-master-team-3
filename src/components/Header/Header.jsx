import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
