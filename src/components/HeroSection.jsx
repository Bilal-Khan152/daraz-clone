import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows";
import { sliderImages } from "../Data/index";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow isHovered={isHovered} />,
    prevArrow: <PrevArrow isHovered={isHovered} />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="flex flex-col ">
        <div
          className="relative w-[80%] mx-auto flex gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Slider
            className="relative mx-auto  2xl:w-[82%] w-[100%]  "
            {...settings}
          >
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="w-[18%]">
            <img
              src="https://icms-image.slatic.net/images/ims-web/ebdd82a7-7b7e-48b9-95e0-0ceea57f2ac6.jpeg"
              className="hidden ml-[-15px] 2xl:block h-full  "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-[15px] container relative mx-auto w-[79%] 3xl:w-auto">
        <img
          src="https://img.lazcdn.com/us/domino/efbd46c5-7e2a-4339-b82e-5b705902d1d9_PK-1188-140.gif_2200x2200q80.gif_.webp"
          alt=""
        />
      </div>
    </>
  );
};

export default HeroSection;
