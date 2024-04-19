import React from "react";
import "./WaveTwo.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import mobile from "../images/mobile2wave.png";
import { useInView } from "react-intersection-observer";

const WaveTwo = () => {
  const mission = new URL("../images/mission.png", import.meta.url).href;

  const [ref, inView] = useInView({
    // triggerOnce: true,
  });
  return (
    <>
      <div className="main-mission pt-lg-5 pt-2 mt-3 pb-0 ">
        <div className="container-mission d-none d-lg-block d-md-block d-sm-none">
          <img
            src={mission}
            alt=""
            className={`w-100 img-fluid mission ${inView && "fade-in"}`}
          />

          <div
            className={`col-6 col-lg-6 col-md-11 mission ${
              inView && "ease-in ease-in-left"
            }`}
          >
            <div className="col-4 pe-4  px-4 mb-3">
              <div className="orange-text text-center p-1 rounded-5  orange-bg ">
                OUR MISSION
              </div>
            </div>
            <h1 className="px-4 pt-xl-3 pb-2">Pioneering our mission to</h1>
            <div className="mt-2 d-flex flex-wrap justify-content-between">
              <IoIosCheckmarkCircle
                size={22}
                fill="rgba(244, 126, 33, 1)"
                className="col-1 mt-xl-2"
              />
              <p className="para-mission col-11 mt-1 ">
                Revolutionize manufacturing with 3D printing
              </p>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              <IoIosCheckmarkCircle
                size={22}
                fill="rgba(244, 126, 33, 1)"
                className="col-1 mt-xl-2"
              />
              <p className="para-mission col-11 mt-1 ">
                Inspire and educate people about 3D printing's potential
              </p>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              <IoIosCheckmarkCircle
                size={22}
                fill="rgba(244, 126, 33, 1)"
                className="col-1 mt-xl-2"
              />
              <p className="col-11 para-mission mt-1">
                Create exceptional products with innovative 3D printing
              </p>
            </div>
            <div className=" d-flex flex-wrap justify-content-between">
              <IoIosCheckmarkCircle
                size={22}
                fill="rgba(244, 126, 33, 1)"
                className="col-1 mt-xl-2"
              />
              <p className="col-11 para-mission mt-1">
                Foster a community of 3D printing enthusiasts and users
              </p>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="container-mission-mobile d-lg-none  d-md-none ">
          <img
            src={mobile}
            alt=""
            height="auto"
            className="w-100  mission-mobile"
          />
          <div className="mission-mobile">
            <div className="col-lg-4 col-6 px-md-2 px-lg-4 mb-3">
              <div className="orange-text fw-semibold text-center p-1 rounded-5 orange-bg ">
                OUR MISSION
              </div>
            </div>
            <h1 className="px-md-3 col-11">Pioneering our mission to</h1>
            <div className="pt-1 wave-background-color h-75">
              <div className="mt-2  d-flex flex-wrap justify-content-between">
                <IoIosCheckmarkCircle
                  size={18}
                  fill="rgba(244, 126, 33, 1)"
                  className="col-1 mt-md-2 mt-md-0"
                />
                <p
                  style={{ textAlign: "justify" }}
                  className="para-mission col-11 m-0  p-0 "
                >
                  Revolutionize manufacturing with 3D printing
                </p>
              </div>
              <div className="mt-2 d-flex flex-wrap justify-content-between">
                <IoIosCheckmarkCircle
                  size={18}
                  fill="rgba(244, 126, 33, 1)"
                  className="col-1 mt-md-2 mt-md-0"
                />
                <p
                  style={{ textAlign: "justify" }}
                  className="col-11 para-mission  m-0 p-0 "
                >
                  Inspire and educate people about 3D printing's potential
                </p>
              </div>
              <div className="mt-2 d-flex flex-wrap justify-content-between">
                <IoIosCheckmarkCircle
                  size={18}
                  fill="rgba(244, 126, 33, 1)"
                  className="col-1 mt-md-2 mt-md-0"
                />
                <p
                  style={{ textAlign: "justify" }}
                  className=" para-mission col-11 m-0 "
                >
                  Create exceptional products with innovative 3D printing
                </p>
              </div>
              <div className="mt-2 d-flex flex-wrap justify-content-between">
                <IoIosCheckmarkCircle
                  size={18}
                  fill="rgba(244, 126, 33, 1)"
                  className="col-1 mt-md-2 mt-md-0"
                />
                <p
                  style={{ textAlign: "justify" }}
                  className="m-0 p-0  para-mission  col-11  "
                >
                  Foster a community of 3D printing enthusiasts and users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container  d-flex flex-wrap justify-content-between">
          <h2 className="heading-revolution col-lg-8 col-12">
            Be the first to revolutionize your creation process
          </h2>
          <div className="col-lg-8 col-md-8 col-12 ">
            <p
              style={{ textAlign: "justify" }}
              className="fs-lg-5 para-revolution text-muted"
            >
              Click here to get a quote from us and stay in the loop with
              everything you need to know about our 3D printing services that
              can bring your ideas to life!
            </p>
          </div>
          <div className="col-lg-3 col-md-3 px-4 col-12">
            <button className="orange-color  border-0  text-white w-100 p-2 rounded ">
              Get a Quote
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default WaveTwo;
