import React from "react";
import mobile from "../images/mobileWave.png";
import vision from "../images/vision.png";
import "./WaveOne.css";
import { useInView } from "react-intersection-observer";

const WaveOne = () => {
  const [ref, inView] = useInView({
    // triggerOnce: true,
  });

  return (
    <>
      <div className="d-none d-lg-block d-md-block d-sm-none d-md-block  ">
        <div className="container-vision">
          <img src={vision} alt="" className="w-100 img-fluid vision" />
          <h2
            style={{ textAlign: "justify" }}
            className="col-4 vision fw-light "
          >
            <div className="col-6 col-lg-6 col-md-11 pe-3 mb-3">
              <div className="orange-color text-center fw-normal p-1 fs-6 rounded-5 orange-bg ">
                OUR VISION
              </div>
            </div>
            To be one of the world’s leading producers and providers of 3D
            printing technology and transform the way we create, build and live.
          </h2>
        </div>
      </div>

      {/* mobile */}

      <div className="container-vision-mobile d-lg-none d-sm-block d-md-none ">
        <img src={mobile} alt="" className="w-100 img-fluid vision-mobile" />
        <p
          style={{ textAlign: "justify", lineHeight: "30px" }}
          className="vision-mobile p-3  "
        >
          <div className="col-6  mb-3">
            <div className="orange-color text-center  fw-semibold rounded-5 orange-bg ">
              OUR VISION
            </div>
          </div>
          To be one of the world’s leading producers and providers of 3D
          printing technology and transform the way we create, build and live.
        </p>
      </div>
    </>
  );
};
export default WaveOne;
