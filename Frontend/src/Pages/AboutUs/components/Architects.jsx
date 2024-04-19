import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "react-bootstrap";
import "./Architects.css";

const Architects = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const Images = {
    image1: new URL("../images/shrinivas.jpeg", import.meta.url).href,
    image1Hover: new URL("../images/shrinivas.png", import.meta.url).href,
    image2: new URL("../images/kanishk.jpeg", import.meta.url).href,
    image2Hover: new URL("../images/kanishk.png", import.meta.url).href,
    image3: new URL("../images/aashi.JPG", import.meta.url).href,
    image3Hover: new URL("../images/aashi.png", import.meta.url).href,
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

  return (
    <>
      <div className="container architects-kaash">
        <h1 className="">Introducing the Architects of Imagination</h1>
        <div
          className="d-flex flex-wrap justify-content-between pt-5"
          ref={ref}
        >
          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12   flip-container"
            onMouseEnter={handleImageHover1}
            onMouseLeave={handleImageHover1}
          >
            <div className={`flipper ${isFlipped1 ? "hover" : ""}`}>
              <div className="front">
                <img
                  src={Images.image1}
                  // height={364}
                  // width="100%"
                  alt=""
                  className="img-fluid rounded"
                />
                <h4 className="text-center mt-3">Shrinivas Balwadkar</h4>
                <p
                  style={{ color: "rgba(244, 126, 33, 1)" }}
                  className="text-center"
                >
                  Chief Technology Officer (CTO)
                </p>
              </div>
              <div className="back">
                <img
                  src={Images.image1Hover}
                  // height={364}
                  // width={364}
                  alt=""
                  className="border img-fluid rounded"
                />
                <h4 className="text-center mt-3">Shrinivas Balwadkar</h4>
                <p
                  style={{ color: "rgba(244, 126, 33, 1)" }}
                  className=" text-center"
                >
                  Chief Technology Officer (CTO)
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-12 col-sm-12   flip-container"
            onMouseEnter={handleImageHover2}
            onMouseLeave={handleImageHover2}
          >
            <div className={`flipper ${isFlipped2 ? "hover" : ""}`}>
              <div className="front">
                <img
                  src={Images.image2}
                  // height={364}
                  // width={364}
                  alt=""
                  className="img-fluid rounded"
                />
                <h4 className="text-center mt-3">Kanishk Patel</h4>
                <p
                  style={{ color: "rgba(244, 126, 33, 1)" }}
                  className="text-center"
                >
                  Chief Operating Officer (COO)
                </p>
              </div>
              <div className="back">
                <img
                  src={Images.image2Hover}
                  // height={364}
                  // width={364}
                  alt=""
                  className="border img-fluid rounded"
                />
                <h4 className="text-center mt-3">Kanishk Patel</h4>
                <p
                  style={{ color: "rgba(244, 126, 33, 1)" }}
                  className=" text-center"
                >
                  Chief Operating Officer (COO)
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-sm-12 col-12  flip-container"
            onMouseEnter={handleImageHover3}
            onMouseLeave={handleImageHover3}
          >
            <div className={`flipper ${isFlipped3 ? "hover" : ""}`}>
              <div className="front  ">
                <img
                  src={Images.image3}
                  // height={364}
                  // width={364}
                  alt=""
                  className="img-fluid rounded"
                />
                <h4 className="text-center mt-3">Aashi Jhunjunwala</h4>
                <p
                  style={{ color: "rgba(244, 126, 33, 1)" }}
                  className=" text-center"
                >
                  Chief Marketing Officer (CMO)
                </p>
              </div>
              <div className="back ">
                <img
                  src={Images.image3Hover}
                  // height={364}
                  // width={364}
                  alt=""
                  className="border img-fluid rounded"
                />
                <h4 className="text-center mt-3">Aashi Jhunjunwala</h4>
                <p
                  style={{ color: "rgba(244, 126, 33, 1)" }}
                  className=" text-center"
                >
                  Chief Marketing Officer (CMO)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Architects;
