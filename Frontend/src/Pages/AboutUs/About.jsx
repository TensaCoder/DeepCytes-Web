import React from "react";
import "./AboutUs.css";
import { useInView } from "react-intersection-observer";
import WaveOne from "./components/WaveOne";
import Architects from "./components/Architects";
import WaveTwo from "./components/WaveTwo";
// import Technologies from "./components/Technologies";

const AboutUs = () => {
  const HeadNumbers = [
    {
      title: "MODELS 3D PRINTED",
      number: "300+",
    },
    {
      title: "COLLABORATION",
      number: "10+",
    },
    {
      title: "CLIENTS",
      number: "20+",
    },
    {
      title: "MACHINES",
      number: "15+",
    },
  ];

  // For animation
  // const [refWorks, inViewWorks] = useInView({
  //   triggerOnce: true,
  // });

  const [refHeading, inViewHeading] = useInView({
    // triggerOnce: true,
  });

  const [refNumbers, inViewNumbers] = useInView({
    // triggerOnce: true,
  });

  return (
    <>
      <div className="about-us-container">
        <div className="about-us-head-bg">
          <div className="d-flex flex-wrap h-100">
            <div className="col-md-8 am-banner-text-b">
              <div
                className={`d-flex about-text-banner flex-wrap justify-content-md-start justify-content-center py-md-5  
                  ${inViewHeading ? "fade-in" : ""}`}
                ref={refHeading}
              >
                <div className="col-md-1"></div>
                <div className="col-md-11 col-11 col-xl-7 pt-xl-5 mt-xl-3 pt-md-5 py-md-0 py-4 pt-xxl-5 mt-xxl-5">
                  <h1>
                    Kaash Studio - Crafting Tomorrow's Innovations with Every
                    Layer
                  </h1>
                  <hr className="heading-up-hr " />
                  <p
                    style={{ textAlign: "justify" }}
                    className="text-justify para-hero-image "
                  >
                    Welcome to Kaash Studio, a pinnacle of excellence in 3D
                    printing innovation. Our seamless integration of 3D printing
                    with conventional manufacturing techniques ensures
                    heightened production efficiency. Whether catering to
                    engineering specifications, consumer product demands, or
                    assisting startups with prototype development, we offer
                    bespoke solutions marked by unparalleled quality and
                    unwavering commitment to precision and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="container our-numbers-kaash border-lg-none border-block  border-top-0 border-bottom-0  py-md-4 py-4 mb-md-5 mb-4">
        <div className="col-6 col-lg-2 col-md-4   mb-3">
          {/* <div className="orange-color text-center p-1 rounded-5 orange-bg ">
            OUR NUMBERS
          </div> */}
        </div>
        <div
          className="d-flex flex-wrap border border-end border-top-0 border-bottom-0 "
          ref={refNumbers}
        >
          {HeadNumbers.map((data, i) => (
            <div
              className="col-md-6 col-lg-3 col-12 border-top-0 border border-bottom-0 text-center mb-md-0 mb-3"
              key={i}
            >
              <div
                className={`col-8 mx-auto py-md-4 py-3 ${
                  inViewNumbers && `fade-in-${i + 1}`
                }`}
              >
                <span className="h2 bg-secondary-color rounded rounded-5 px-md-5 px-4 py-2">
                  {data.number}
                </span>
                <br />
                <br />
                <div className="home-numbers-height d-flex flex-wrap justify-content-center align-items-center">
                  <h5 className="text-uppercase  fw-light text-medium align-middle">
                    {data.title}
                  </h5>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave 1 */}
      <WaveOne />

      {/* Archtects of Imagination */}
      <div className="ms-xl-5">
        <Architects />
      </div>

      {/* <Technologies  /> */}

      {/* Wave 2 */}
      <WaveTwo />
    </>
  );
};

export default AboutUs;
