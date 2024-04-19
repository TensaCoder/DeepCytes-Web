import React, { useEffect, useRef } from "react";
import "./CardsImage.css";
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";

const CardsImage = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      console.log(scrollY);
      const threshold = 1700; 

      
      if (scrollY > threshold) {
        
        imgRef1.current.classList.add("zoom-in");
        imgRef2.current.classList.add("zoom-in");
      } else {
        
        imgRef1.current.classList.remove("zoom-in");
        imgRef2.current.classList.remove("zoom-in");
      }
    };

   
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <>
     <div className="d-none d-md-none d-lg-block">
     <div className="d-flex flex-wrap justify-content-between">
        <div className="col-lg-6 col-12 pe-lg-5">
          <h1 className="">Witness ideas evolve into reality with 3D printing</h1>
          <p style={{ textAlign: "justify" }} className="mb-md-5">
            At Kaash Studio, we redefine possibilities through cutting-edge 3D
            printing technology. Our commitment to innovation extends beyond
            boundaries, allowing us to transform digital designs into tangible
            realities. Using state-of-the-art 3D printers, we bring your ideas
            to life with precision and detail. Whether it's rapid prototyping,
            intricate models, or functional components, Kaash Studio ensures
            that your visions materialize seamlessly. Our dedication to
            excellence in 3D printing is the cornerstone of Kaash Studio's
            identity, empowering creators to shape the future.
          </p>
        </div>
        <div className="ZoomOutImage col-lg-6 col-12">
          <div className="app">
            <div className="img-container">
             <ParallaxProvider>
              <ParallaxBanner style={{aspectRatio:"2/1"}}>
                <ParallaxBannerLayer speed={-10}>
                <img
                ref={imgRef1}
                src={require("../Images/printing1.png")}
                alt="meditation"
                className="img-fluid"
              />
                </ParallaxBannerLayer>
              </ParallaxBanner>
             </ParallaxProvider>
            </div>
          </div>
        </div>
    
      </div>
      <div className="d-flex flex-wrap justify-content-between mt-3">
      <div className="ZoomOutImage col-lg-6 col-12 ">
          <div className="app">
            <div className="img-container2">
             <ParallaxProvider  >
              <ParallaxBanner  style={{aspectRatio:"2/1"}}>
                <ParallaxBannerLayer  speed={-8}>
                <img
                ref={imgRef2}
                src={require("../Images/printing3.png")}
                alt="meditation"
                className="img-fluid"
              />
                </ParallaxBannerLayer>
              </ParallaxBanner>
             </ParallaxProvider>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 px-lg-5">
          <h1>Designing Excellence with Kaash Studio</h1>
          <p style={{ textAlign: "justify" }} className="mb-md-5">
          In the realm of 3D design, Kaash Studio stands as a beacon of creativity. Our design process marries artistic expression with functional brilliance. Collaborate with our expert designers to craft digital models that transcend imagination. With a focus on detail and innovation, Kaash Studio's design prowess spans various industries. From intricate product designs to immersive virtual experiences, we bring digital concepts to life. Kaash Studio is not just a service; it's a journey where ideas evolve into captivating designs that leave a lasting impact.
          </p>
        </div>
    
      </div>

     </div>
      {/* ------------mobile view---------- */}
      <div className="d-md-block d-lg-none">
      <div className="cards-mobie-view d-flex flex-wrap justify-content-between">
        <div className="col-lg-6 col-12 pe-lg-5">
          <h1 className="mb-3">Witness ideas evolve into reality with 3D printing</h1>
          <div className="ZoomOutImage col-lg-6 col-12 my-2">
          <div className="app">
            <div className="img-container">
             
                <img
                  ref={imgRef1}
                  src={require("../Images/printing1.png")}
                  alt="meditation"
                  className="img-fluid"
                />
            
            </div>
          </div>
        </div>
          <p style={{ textAlign: "justify" }} className="mb-md-5 mt-3">
            At Kaash Studio, we redefine possibilities through cutting-edge 3D
            printing technology. Our commitment to innovation extends beyond
            boundaries, allowing us to transform digital designs into tangible
            realities. Using state-of-the-art 3D printers, we bring your ideas
            to life with precision and detail. Whether it's rapid prototyping,
            intricate models, or functional components, Kaash Studio ensures
            that your visions materialize seamlessly. Our dedication to
            excellence in 3D printing is the cornerstone of Kaash Studio's
            identity, empowering creators to shape the future.
          </p>
        </div>
        
    
      </div>
      <div className="d-flex flex-wrap justify-content-between mt-3">
      
        <div className="col-lg-6 col-12 px-lg-5">
          <h1 className="mb-3">Designing Excellence with Kaash Studio</h1>
          <div className="ZoomOutImage col-lg-6 col-12 my-2">
          <div className="app">
            <div className="img-container2">
             
                <img
                ref={imgRef2}
                src={require("../Images/printing3.png")}
                alt="meditation"
                className="img-fluid"
              />
           
            </div>
          </div>
        </div>
          <p style={{ textAlign: "justify" }} className="mb-md-5 mt-3">
          In the realm of 3D design, Kaash Studio stands as a beacon of creativity. Our design process marries artistic expression with functional brilliance. Collaborate with our expert designers to craft digital models that transcend imagination. With a focus on detail and innovation, Kaash Studio's design prowess spans various industries. From intricate product designs to immersive virtual experiences, we bring digital concepts to life. Kaash Studio is not just a service; it's a journey where ideas evolve into captivating designs that leave a lasting impact.
          </p>
        </div>
    
      </div>
      </div>
    </>
  );
};

export default CardsImage;
