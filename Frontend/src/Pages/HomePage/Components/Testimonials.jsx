import React,{useState} from "react";
import "./Testimonials.css";
import { FaCircleUser } from "react-icons/fa6"




import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode
  

} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow"
import 'swiper/css/free-mode';


export default function Testimonials(props) {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);

  }
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y ,FreeMode]}
        autoplay={{delay: 5000}}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        id="testinomials-web-view"
        className="testimonials mySwiper mt-3 mb-4"
        onActiveIndexChange={handleSlideChange}
      >
        <SwiperSlide className="text-center">
          <div  style={{ backgroundColor: activeIndex === 0 ? 'white' : '#F57F20' }} className="swipper-content-container   p-4 p-sm-3 p-lg-4">
            <div className="text-center mb-3 ">
              {
                activeIndex === 0 ?
                <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              :
              <img
                src={require("../Images/polygon-plain.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              }
            </div>
            <p style={{ textAlign: "justify" }} className={activeIndex === 0 ? "mb-2 text-dark " : "mb-2 text-white  "}>
            Kaash Studio exceeded our expectations with a flawless scaled-down prototype for our coal power plant pipe connector. The attention to detail, precision, and timely delivery showcased their commitment to excellence. The prototype played a crucial role in project discussions, facilitating clear communication and swift decision-making. I highly recommend Kaash Studio for top-tier 3D printing services.
            </p>
           {
            activeIndex === 0 ?
            <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
          :
          <img
            src={require("../Images/Polygon.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
           }
            
            
          </div>
          <div className="text-center mt-5 pb-4">
            
            <FaCircleUser size={35} />
            <h6 className="text-center mt-3">Mandar Rachalwar</h6>
            <div className="d-flex flex-wrap justify-content-center">
            <p className="text-muted">Director at</p>
            <p>&nbsp;SSR Manufacturers Services</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide  className="text-center">
          <div className=" mb-2  pe-1">
            <div style={{ backgroundColor: activeIndex === 0 ? '#F57F20' : 'white'  }} className="swipper-content-container p-4   p-sm-3 p-lg-4">
              <div className="text-center mb-3 ">
              {
                activeIndex === 0 ?
                <img
                src={require("../Images/polygon-plain.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              :
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              }
              </div>
              <p style={{ textAlign: "justify" }} className={activeIndex === 0 ? "mb-2 text-white " : "mb-2 text-dark "}>Kaash Studio has been a lifesaver! When our Schwing Stetter Douwty pump faced downtime due to an unavailable gasket, they came to the rescue. In less than an hour, they not only designed a precise rubber gasket but also 3D printed and delivered it on the spot. Their speed, expertise, and dedication got our plant up and running in record time. We're incredibly grateful for their quick and effective solution!</p>
               {
            activeIndex === 0 ?
            <img
            src={require("../Images/Polygon.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
          :
          <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
           }
            </div>
            <div className="text-center mt-5 pb-4">
            
              <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Pravin Chorghade</h6>
              <div className="d-flex flex-wrap justify-content-center">
              <p className="text-muted">MD at</p>
              <p>&nbsp;Purecrete RMC Pvt. Ltd</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center">
          <div className=" ">
            <div style={{ backgroundColor: activeIndex === 1 ? '#F57F20' : 'white' }}  className="swipper-content-container  p-sm-3  p-4 p-lg-4">
              <div className="text-center mb-3 ">
              {
                activeIndex === 1 ?
                <img
                src={require("../Images/polygon-plain.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              :
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              }
              </div>
              <p style={{ textAlign: "justify" }} className={activeIndex === 1 ? "mb-2 text-white " : "mb-2 text-dark "}>
              I'm immensely grateful to Kaash Studio for their exceptional service in bringing my architecture project to life. As a fourth-year student, precision and presentation are paramount, and their 3D printing expertise exceeded my expectations. The multiple floor plans they printed were not only accurate but also showcased the intricate details of my designs. I highly recommend their services.
              </p>
             { activeIndex === 1 ?
            <img
            src={require("../Images/Polygon.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
          :
          <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
           }
            </div>
            <div className="text-center mt-5 pb-4">
             
              <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Om Kale</h6>
             <div className="d-flex flex-wrap justify-content-center">
             <p className="text-muted">Student at</p>
              <p>&nbsp;MIT ADT University</p>
             </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center black-slide">
          <div className=" ">
            <div style={{ backgroundColor: activeIndex === 3 ? '#F57F20' : 'white' }}  className="datart-container   p-sm-3 p-4 p-lg-4">
              <div className="text-center mb-3 ">
              {
                activeIndex === 3 ?
                <img
                src={require("../Images/polygon-plain.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              :
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              }
              </div>
              <p style={{ textAlign: "justify" }} className={activeIndex === 3 ? "mb-2 text-white " : "mb-2 text-dark "}>
             Kaash Studio has been of great help to us in designing and printing some 3d models we needed with high accuracy and efficiency, and delivered them to us in a prompt manner. It was an urgent requirement and we appreciate their quick assistance. We loved the product and were impressed with the work and quality. We highly recommend them for any 3D printing or designing service.
              </p>
              {activeIndex === 3 ?
            <img
            src={require("../Images/Polygon.png")}
            alt=""
            className="img-fluid polygon-arrow-img-white "
          />
          :
          <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img-white"
          />
           }
            </div>
            <div className="text-center mt-5 pb-4">
              
               <FaCircleUser size={35} />
              <h6 className="text-center mt-3 mb-0">Yash Tatiya</h6>
             <div className="d-flex flex-wrap justify-content-center">
             <p className="text-muted mb-0">Director at</p> 
             <p>&nbsp;Datart Solutions</p>
             </div>
             
            </div>
          </div>
        </SwiperSlide>

        
        </Swiper>
        



        {/* -----mobile-view------- */}

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
     
        zoom
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        id="testinomials-mobile-view"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" mt-3 mb-4"
      >
        <SwiperSlide className="text-center">
          <div className="swipper-content-container  bg-white p-lg-5">
            <div className="text-center mb-2 pt-4 ">
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid mt-3 mt-lg-0"
              />
            </div>
            <p style={{ textAlign: "justify" }} className="mb-2 text-dark p-4 pt-0 p-lg-4">
            Kaash Studio exceeded our expectations with a flawless scaled-down prototype for our coal power plant pipe connector. The attention to detail, precision, and timely delivery showcased their commitment to excellence. The prototype played a crucial role in project discussions, facilitating clear communication and swift decision-making. I highly recommend Kaash Studio for top-tier 3D printing services.
            </p>
            <img
                src={require("../Images/Polygonwhite.png")}
                alt=""
                className="img-fluid polygon-arrow-img "
              />
            
            
          </div>
          <div className="text-center mt-5 pb-4">
            
            <FaCircleUser size={35} />
            <h6 className="text-center mt-3">Mandar Rachalwar</h6>
            <p className="text-muted">Director</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center">
          <div className=" mb-2  pe-1">
            <div className="swipper-content-container bg-white p-4  p-lg-5">
              <div className="text-center mb-2 pt-2 ">
                <img
                  src={require("../Images/doubleqoutes.png")}
                  width={30}
                  alt=""
                  className="img-fluid mt-3 mt-lg-0"
                />
              </div>
              <p style={{ textAlign: "justify" }} className="mb-2 p-lg-4 text-dark ">Kaash Studio is nothing short of a lifesaver! When our Schwing Stetter Douwty pump faced downtime due to an unavailable gasket, they came to the rescue. In less than an hour, they not only designed a precise rubber gasket but also 3D printed and delivered it on the spot. Their speed, expertise, and dedication got our plant up and running in record time. We're incredibly grateful for their quick and effective solution!</p>
              <img
                src={require("../Images/Polygonwhite.png")}
                alt=""
                className="img-fluid polygon-arrow-img "
              />
            </div>
            <div className="text-center mt-5 pb-4">
            
              <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Pravin Chorghade</h6>
              <p className="text-muted">MD</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center">
          <div className=" ">
            <div className="swipper-content-container bg-white p-4 p-lg-5">
              <div className="text-center mb-2 pt-2 ">
                <img
                  src={require("../Images/doubleqoutes.png")}
                  width={30}
                  alt=""
                  className="img-fluid mt-3 mt-lg-0"
                />
              </div>
              <p style={{ textAlign: "justify" }} className="mb-2 text-dark p-lg-4 ">
              I'm immensely grateful to Kaash Studio for their exceptional service in bringing my architecture project to life. As a fourth-year student, precision and presentation are paramount, and their 3D printing expertise exceeded my expectations. The multiple floor plans they printed were not only accurate but also showcased the intricate details of my designs. I highly recommend their services.
              </p>
              <img
                src={require("../Images/Polygonwhite.png")}
                alt=""
                className="img-fluid polygon-arrow-img "
              />
            </div>
            <div className="text-center mt-5 pb-4">
             
              <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Om Kale</h6>
              <p className="text-muted">Student at MIT ADT University</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center">
          <div className="">
            <div className="swipper-content-container  bg-white p-4 p-lg-4">
              <div className="text-center mb-2 pt-2">
                <img
                  src={require("../Images/doubleqoutes.png")}
                  width={30}
                  alt=""
                  className="img-fluid mt-3 mt-lg-0"
                />
              </div>
              <p style={{ textAlign: "justify" }} className="text-dark  p-lg-5">
              They helped us in designing and printing some 3d models we needed with high accuracy and efficiency, and delivered them to us in a prompt manner. It was an urgent requirement and we appreciate their quick assistance. We loved the product and were impressed with the work and quality. We highly recommend them for any 3D printing or designing service.
              </p>
              <img
                src={require("../Images/Polygonwhite.png")}
                alt=""
                className="img-fluid polygon-arrow-img "
              />
            </div>
            <div className="text-center mt-5 pb-4">
              
               <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Yash Tatiya</h6>
              <p className="text-muted">Director</p>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>

          {/*-----------tab-view------------------- */}

       <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y ,FreeMode]}
      
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        id="testinomials-tab-view"
        className="testimonials mySwiper mt-3 mb-4"
        onActiveIndexChange={handleSlideChange}
        
      >
        <SwiperSlide className="text-center">
          <div   className="swipper-content-container bg-white  p-4">
            <div className="text-center mb-3 "> 
                <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              /> 
            </div>
            <p style={{ textAlign: "justify" }} className="text-dark">
            Kaash Studio exceeded our expectations with a flawless scaled-down prototype for our coal power plant pipe connector. The attention to detail, precision, and timely delivery showcased their commitment to excellence. The prototype played a crucial role in project discussions, facilitating clear communication and swift decision-making. I highly recommend Kaash Studio for top-tier 3D printing services.
            </p>
          
            <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
         
            
            
          </div>
          <div className="text-center mt-5 pb-4">
            
            <FaCircleUser size={35} />
            <h6 className="text-center mt-3">Mandar Rachalwar</h6>
            <div className="d-flex flex-wrap justify-content-center">
              <p className="text-muted">Director at</p>
              <p>&nbsp;SSR Manufacturers Services</p>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide  className="text-center">
          <div className=" mb-2  pe-1">
            <div  className="swipper-content-container  bg-white p-4 ">
              <div className="text-center mb-3 ">
              
              
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              
              </div>
              <p style={{ textAlign: "justify" }} className="text-dark">Kaash Studio has been a lifesaver! When our Schwing Stetter Douwty pump faced downtime due to an unavailable gasket, they came to the rescue. In less than an hour, they not only designed a precise rubber gasket but also 3D printed and delivered it on the spot. Their speed, expertise, and dedication got our plant up and running in record time. We're incredibly grateful for their quick and effective solution!</p>
               
           
          <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
           
            </div>
            <div className="text-center mt-5 pb-4">
            
              <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Pravin Chorghade</h6>
              <div className="d-flex flex-wrap justify-content-center">
              <p className="text-muted">MD at</p>
              <p>&nbsp;Purecrete RMC Pvt. Ltd</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center">
          <div className=" ">
            <div  className="swipper-content-container  bg-white p-4">
              <div className="text-center mb-3 ">
              
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              
              </div>
              <p style={{ textAlign: "justify" }} className="text-dark" >
              I'm immensely grateful to Kaash Studio for their exceptional service in bringing my architecture project to life. As a fourth-year student, precision and presentation are paramount, and their 3D printing expertise exceeded my expectations. The multiple floor plans they printed were not only accurate but also showcased the intricate details of my designs. I highly recommend their services.
              </p>
        
          <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img "
          />
          
            </div>
            <div className="text-center mt-5 pb-4">
             
              <FaCircleUser size={35} />
              <h6 className="text-center mt-3">Om Kale</h6>
             <div className="d-flex flex-wrap justify-content-center">
             <p className="text-muted">Student at</p>
              <p>&nbsp;MIT ADT University</p>
             </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center black-slide">
          <div className="">
            <div  className="datart-container bg-white  p-4">
              <div className="text-center  mb-3 ">
             
              <img
                src={require("../Images/doubleqoutes.png")}
                width={30}
                alt=""
                className="img-fluid"
              />
              
              </div>
              <p style={{ textAlign: "justify" }} className="text-dark">
             Kaash Studio has been of great help to us in designing and printing some 3d models we needed with high accuracy and efficiency, and delivered them to us in a prompt manner. It was an urgent requirement and we appreciate their quick assistance. We loved the product and were impressed with the work and quality. We highly recommend them for any 3D printing or designing service.
              </p>
          
          <img
            src={require("../Images/Polygonwhite.png")}
            alt=""
            className="img-fluid polygon-arrow-img-white"
          />
           
            </div>
            <div className="text-center mt-5 pb-4">
              
               <FaCircleUser size={35} />
              <h6 className="text-center mt-3 mb-0">Yash Tatiya</h6>
             <div className="d-flex flex-wrap justify-content-center">
             <p className="text-muted mb-0">Director at</p> 
             <p>&nbsp;Datart Solutions</p>
             </div>
             
            </div>
          </div>
        </SwiperSlide>

        
        </Swiper>
        
    </>
  );
}

