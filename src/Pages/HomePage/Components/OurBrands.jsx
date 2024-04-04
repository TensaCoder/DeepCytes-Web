import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "react-bootstrap";
import "./OurBrands.css";
import Aos from "aos";
import "aos/dist/aos.css";

const OurBrands = ({ zoomScaleBrand }) => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  useEffect(() => {
    Aos.init({ duration: "1500" });
  }, []);

  const Images = {
    image1: new URL("../Images/category-am.png", import.meta.url).href,
    image1Hover: new URL("../Images/am.png", import.meta.url).href,
    image2: new URL("../Images/explore-category.png", import.meta.url).href,
    // image2Hover: new URL("../images/kanishk.png", import.meta.url).href,
    image3: new URL("../Images/category-skenn.png", import.meta.url).href,
    image3Hover: new URL("../Images/skenn-flip.png", import.meta.url).href,
    // Add similar hover images for other images if needed
  };

  const handleImageHover1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleImageHover2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleImageHover3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const [ref, inView] = useInView({
    // triggerOnce: true,
  });

  const handleContactClick = () => {
    window.scrollTo(0, 2700);
  };

  return (
    <>
      <div
        // style={{ transform: `scale(${zoomScaleBrand})` }}
        className="container our-brands py-5"
      >
        <h1 className="px-lg-3 ">Our Brands</h1>
        <div
          className="d-flex flex-wrap justify-content-between pt-xl-3"
          ref={ref}
        >
          <div
            data-aos="zoom-in"
            className={`col-lg-4 col-md-4 col-sm-12 col-12   px-lg-3 px-md-2 flip-container mt-3 mt-md-0`}
            onMouseEnter={handleImageHover1}
            onMouseLeave={handleImageHover1}
          >
            <div className={`flipper ${isFlipped1 ? "hover" : ""}`}>
              <div className="front rounded">
                <img src={Images.image1} alt="" className="img-fluid rounded" />
              </div>
              <div className="back rounded">
                <img src={Images.image1Hover} alt="" className=" img-fluid" />
                <div className="text-center visit-button">
                  <a
                    href="https://theadditiveminds.com/"
                    target="_blank"
                    className="text-decoration-none orange-button-kaash border-0 text-white p-md-1  px-xl-5 rounded px-md-3 px-5 p-2"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="col-lg-4 col-md-4 col-12 col-xl-4 col-sm-12 pe-lg-0 px-lg-4 px-md-2 mt-3 mt-md-0"
          >
            <div className={`flipper`}>
              <div className="front rounded">
                <img src={Images.image2} alt="" className="img-fluid rounded" />
                <button
                  style={{ backgroundColor: "#FFFFFF" }}
                  className="contact-button border-0 rounded-4 px-md-3 p-md-1 px-xl-5 px-5 p-2"
                  onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="col-lg-4 col-md-4 col-sm-12 col-12 pe-lg-1 px-lg-5 px-md-2 flip-container mt-3 mt-md-0"
            onMouseEnter={handleImageHover3}
            onMouseLeave={handleImageHover3}
          >
            <div className={`flipper ${isFlipped3 ? "hover" : ""}`}>
              <div className="front rounded ">
                <img
                  src={Images.image3}
                  // height={364}
                  // width={364}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="back rounded ">
                <img
                  src={Images.image3Hover}
                  // height={364}
                  // width={364}
                  alt=""
                  className=" rounded img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurBrands;
