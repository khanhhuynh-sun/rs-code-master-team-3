import React from "react";
import "./HeaderNav.scss";

const navList = [
  {
    navText: "Product",
    path: "#",
  },
  {
    navText: "Use Case",
    path: "#",
  },
  {
    navText: "Why RisingStars",
    path: "#",
  },
  {
    navText: "Learn",
    path: "#",
  },
  {
    navText: "Demo",
    path: "#",
  },
];

const HeaderNav = () => {
  return (
    <div className="navBar">
      <ul className="navBar__list">
        {navList.map((navItem, index) => {
          return (
            <li className="navBar__item" key={index}>
              <a href={navItem.path}>{navItem.navText}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderNav;
