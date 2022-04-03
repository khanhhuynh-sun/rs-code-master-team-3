import React from "react";
import "./HeaderNav.scss";

const navList = [
  {
    navText: "Our mission",
    path: "#mission",
  },
  {
    navText: "Profile",
    path: "#profile",
  },
  {
    navText: "Related companies",
    path: "#related",
  },
  {
    navText: "Service",
    path: "#service",
  },
];

const HeaderNav = () => {
  return (
    <div className="navBar">
      <ul className="navBar__list">
        {navList.map((navItem, index) => {
          return (
            <li className="navBar__item" key={index} href={navItem.path}>
              <a href={navItem.path}>{navItem.navText}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderNav;
