import React from "react";
import avatar1 from "../../img/nhi.png";
import avatar2 from "../../img/hoang.png";
import avatar3 from "../../img/khanh.png";
import avatar4 from "../../img/sy.png";
import avatar5 from "../../img/nha.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.scss";

const slides = [
  { img: avatar1, name: "Nhi" },
  { img: avatar2, name: "Hoang" },
  { img: avatar3, name: "Khanh" },
  { img: avatar4, name: "Sy" },
  { img: avatar5, name: "Khai" },
];

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {slides.map((slide) => {
          return (
            <div className="slider__item">
              <img src={slide.img} alt={slide.name} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
