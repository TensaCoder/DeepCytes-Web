import React,{useState,useEffect} from "react";
import "./ImageAnimation.css"

export function ImageAnimation() {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="parallax-container">
      <div className="d-flex flex-wrap ">
        <div className="">
          <img
            src={require("../Images/3dimage1.png")}
            class="img-fluid  parallax-image"
            style={{ transform: `translateX(${scrollY * 0.0}px)` }}
            alt=""
          />
        </div>
        <div className="">
          <img src={require("../Images/printing2.png")} alt="" style={{ transform: `translateX(${scrollY * 0.300}px)` }} class="img-fluid parallax-image" />
        </div>
        <div className="">
          <img src={require("../Images/printing3.png")} alt="" style={{ transform: `translateX(${scrollY * 0.150}px)` }} class="img-fluid  parallax-image" />
        </div>
      </div>
      </div>
    </>
  );
}
