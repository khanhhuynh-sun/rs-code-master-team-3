import React from "react";
import "./CompanySlider.scss";
import Slider from "react-slick";
import slider1 from "../../img/slide1.jpg";
import slider2 from "../../img/slide2.jpg";
import slider3 from "../../img/slide3.jpg";
import slider4 from "../../img/slide4.jpg";
import slider5 from "../../img/slide5.jpg";
import slider6 from "../../img/slide6.jpg";

const sliderItems = [slider1, slider2, slider3, slider4, slider5, slider6];

const CompanySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="companySlider">
      {console.log(sliderItems)}
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div className="sliderItem">
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanySlider;
