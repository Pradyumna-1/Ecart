import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
const Carousell = () => {
  return (
    <>
      <div data-aos="fade-up-right" className="carousel-container">
        <Carousel
          autoPlay={true}
          showArrows={false}
          interval={2000}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div>
            <img src={img1} alt="imgae not found" className="h-[90vh]" />
          </div>
          <div>
            <img src={img4} alt="imgae not found" className="h-[90vh]" />
          </div>

          <div>
            <img src={img2} alt="imgae not found" className="h-[90vh]" />
          </div>
          <div>
            <img src={img3} alt="imgae not found" className="h-[90vh]" />
          </div>
          <div>
            <img src={img5} alt="imgae not found" className="h-[90vh]" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carousell;
