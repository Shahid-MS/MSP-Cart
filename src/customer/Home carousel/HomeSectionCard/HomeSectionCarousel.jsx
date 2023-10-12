import React from "react";
import AliceCarousel from "react-alice-carousel";
import Homesectioncard from "./Homesectioncard";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <Homesectioncard />);

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%)rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>

        <Button
          className="z-50 bg-white"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%)rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
