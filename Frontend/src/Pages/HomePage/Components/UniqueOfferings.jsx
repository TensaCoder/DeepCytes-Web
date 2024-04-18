import { useState } from "react";
import "./UniqueOfferings.css";

import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function UniqueOfferings() {
  const [isSkenn, setIsSkenn] = useState(false);

  const [ref, inView] = useInView({
    // triggerOnce: true,
  });

  // Navigate
  const navigate = useNavigate();

  return (
    <div className="mt-lg-5 pt-4  container pb-md-5" ref={ref}>
      <h1 className={` ${inView && "fade-in"}`}>Our Brands</h1>
      <div className="d-flex flex-wrap mt-lg-4">
        <div
          className={`col-md-4 col-12 mx-auto my-md-0 my-3 ${
            inView && "ease-in ease-in-left"
          }`}
        >
          <img
            src={require("../Images/category-am.png")}
            alt="Studios"
            className="img-fluid w-100 px-md-4 px-lg-3"
            onMouseEnter={() => setIsSkenn(false)}
          />
        </div>
        <div
          className={`col-md-4 col-12 rounded-4 our-category-bg-middle my-md-0 my-3 px-lg-3 py-md-0 py-5 text-center ${
            inView && "fade-in"
          }`}
        >
          {isSkenn ? (
            <div className="d-flex flex-column justify-content-around pt-5 ease-out ease-out-right">
              <div>
                <h1 className="fw-semibold pt-3 pt-xl-4">SKENN</h1>
                <p
                  style={{ textAlign: "center" }}
                  className="pt-2 pt-xl-3 text-center  "
                >
                  We revolutionize the world of interior decor through advanced
                  3D printing technology. Our mission is to redefine the way
                  people envision and personalize their living spaces by
                  offering unique,high-quality.
                </p>
              </div>
              {/* <div className="col-6 mx-auto"> */}
              {/* <button className="btn  py-2 w-100">
                  Discover Skenn
                </button> */}
              <h2 className="text-muted pt-2 pt-xl-3">Coming Soon...</h2>
              {/* </div> */}
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-around pt-4 ease-out ease-out-left">
              <div className="text-center">
                <h1 className="col-11 ms-3  fw-semibold pt-xl-5">
                  The Additive Minds
                </h1>
                <p className="pt-3 text-center p-2">
                  We offer a comprehensive suite of custom 3D printing services,
                  covering prototyping, product development, and end-use
                  production to bring your designs to life with precision and
                  efficiency.
                </p>
              </div>
              <div className="pt-3">
                {/* <a
                  className="text-white  text-decoration-none  rounded-4 border-0 py-2 w-100"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 2500);
                  }}
                >
                  Visit Website
                </a> */}
                <a
                  style={{ backgroundColor: "#F57F20" }}
                  className=" btn w-75 mx-auto  text-decoration-none text-white"
                >
                  Visit Website
                </a>
              </div>
            </div>
          )}
        </div>
        <div
          className={`col-md-4 col-12 mx-auto my-md-0 my-3 ${
            inView && "ease-in ease-in-right"
          }`}
        >
          <img
            src={require("../Images/category-skenn.png")}
            alt="Studios"
            className="img-fluid w-100 px-md-4 px-lg-3"
            onMouseEnter={() => setIsSkenn(true)}
          />
        </div>
      </div>
    </div>
  );
}
