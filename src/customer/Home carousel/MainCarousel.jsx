import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      src={item.image}
      alt=""
      className="cursor-pointer"
      role="presentation"
    />
  ));

  return (
    <>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1200}
        infinite
      />
    </>
  );
};

export default MainCarousel;
