import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./HomePage.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaArrowDown } from "react-icons/fa6";
import Testimonials from "./Components/Testimonials";
import { useNavigate, Link } from "react-router-dom";
import { BlogsData } from "../Blogs/Components/BlogData";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
// import { Link } from "react-scroll";
// import Aos from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Mousewheel,
} from "swiper/modules";

import UniqueOfferings from "./Components/UniqueOfferings";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import CardsImage from "./Components/CardsImage";
import ContactForm from "../../components/ContactForm";
import { useInView } from "react-intersection-observer";
import OurBrands from "./Components/OurBrands";

export default function HomePage() {
  let width = window.innerWidth;

  const navigate = useNavigate();

  const handleClickGetQuoate = () => {
    // navigate("/contact");
    window.scroll(0, 2520);
  };

  const handleScrollClick = () => {
    window.scroll(0, 700);
  };

  const imgd = useRef(null);

  const handleViewClick = () => {
    navigate("/blogs");
    window.scrollTo(0, 0);
  };

  const handleKnowClick = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
  };

  const [popUp, setPopUp] = useState(false);

  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null); // State to store the index of the selected blog

  const handleReadMoreClick = (index) => {
    setSelectedBlogIndex(index); // Set the index of the clicked blog
    setPopUp(true); // Open the popup
  };

  // For animations
  const [ref, inView] = useInView();

  const { scrollYProgress } = useScroll();

  const [refBlogs, inViewBlogs] = useInView({
    triggerOnce: true,
  });

  const [refHighLights, inViewHighLights] = useInView({
    triggerOnce: true,
  });

  // scroll effect //

  // const sections = useRef([]);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "ArrowDown") {
  //       scrollToNextSection();
  //     } else if (event.key === "ArrowUp") {
  //       scrollToPreviousSection();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  // let currentIndex = 0;

  // function scrollToNextSection() {
  //   if (currentIndex < sections.current.length - 1) {
  //     currentIndex++;
  //     sections.current[currentIndex].scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // function scrollToPreviousSection() {
  //   if (currentIndex > 1) {
  //     currentIndex--;
  //     sections.current[currentIndex].scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // const sections = useRef([]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const sectionPositions = sections.current.map(
  //       (section) => section.getBoundingClientRect().top + window.pageYOffset
  //     );

  //     let targetSectionIndex = 0;
  //     for (let i = 0; i < sectionPositions.length; i++) {
  //       if (currentScrollPos >= sectionPositions[i]) {
  //         targetSectionIndex = i;
  //       }
  //     }

  //     // Scroll to the target section
  //     sections.current[targetSectionIndex].scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <section
      // ref={(element) => {
      //   if (element) {
      //     sections.current.push(element);
      //   }
      // }}
      >
        <div className="">
          <div className="home-banner-kaash position-relative">
            <div>
              <video
                //id="background-video"
                className="w-100 inline video-wrapper video-player hero-video-design"
                //playsInline
                //controls={false}
                //muted
                //autoPlay
                //loop
              >
                <source
                  src={require("./Images/video-new.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <h1
              id="text-overlay"
              className="col-11 col-md-10 col-lg-8 mx-auto home-heading-title fade-in"
            >
              Deepcytes Cybersec World  <br />
              
            </h1>
          </div>
        </div>
      </section>

      <section id="ourstory" className="ourstory-background nav-link">
        <div className="scroll-animation pb-xl-5 pt-3 pb-5  ">
          <div
            className={`container pt-xl-5 pb-xl-5  mt-lg-1 mt-2 zoom-content `}
            // style={{ transform: `scale(${zoomScale})` }}
          >
            <div className="d-flex flex-wrap  align-items-center">
              <div
                className={`col-lg-12 col-xl-6 col-12 mt-md-4 rounded ${
                  inView && "fade-in"
                }`}
              >
                <img
                  src={require("./Images/a.webp")}
                  alt=""
                  className="img-fluid our-story-image-group d-none d-md-block rounded"
                />
              </div>
              <div
                className={`col-xl-6 col-12 px-xl-5 ${
                  inView && "ease-in ease-in-right"
                }`}
              >
                <p
                  className="text-heading-orange mt-2 mb-1 mt-lg-4 mt-md-4"
                  ref={ref}
                >
                  Deepcytes
                </p>
                <h1 id="section-id">Our Story Unfolded</h1>
                <img
                  src={require("./Images/groupimg.png")}
                  alt=""
                  className="img-fluid d-md-none rounded my-2"
                />
                <p style={{ textAlign: "justify" }}>
                  At Deepcytes, our journey is a testament to the power of
                  passion and innovation. 
                </p>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  At our core, we are more than a company; we are creators,
                  innovators, and visionaries. 
                </p>
                <button
                  className="text-dark p-2 px-4 rounded border-muted text-secondary knowmore-btn bg-white"
                  onClick={handleKnowClick}
                >
                  Know more <FaArrowRightLong fill="grey" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ourbrands">
        <div
          // style={{ height: "800px" }}
          className="unique-offerings  scroll-animation"
        >
          <OurBrands
            className={` mt-lg-1 mt-2 zoom-content `}
            // style={{ transform: `scale(${zoomScale})` }}
          />
        </div>
      </section>

      <section
        id="blogs"

        // style={{
        //   height: "600px",

        // }}
      >
        <div className="container pt-lg-5">
          <div className="d-flex flex-wrap pt-5 pt-xl-0 justify-content-between mb-lg-0 mb-2 mb-xl-1">
            <h1 className="px-lg-3 px-md-3">Blogs & News</h1>
            <div className="col-xl-3 col-lg-4 pe-xl-4 pe-md-3">
              <button
                className="text-dark w-100 p-2 bg-white shadow border-muted border rounded fw-semibold  "
                onClick={handleViewClick}
              >
                {" "}
                View All <FaArrowRightLong />
              </button>
            </div>
          </div>

          <div className="d-flex flex-wrap  justify-content-between">
            {BlogsData.slice(0, 3).map((data, index) => (
              <div className="col-12 mb-lg-0 mb-4 mb-lg-5 mt-md-0  mb-md-4 pe-md-3 px-md-3 col-xl-4 mt-xl-0 col-lg-6 px-xl-4  col-md-6 pe-lg-4 px-lg-4">
                <div
                  onClick={() => handleReadMoreClick(index)}
                  className="text-dark cursor-pointer card card-view-height "
                >
                  <div className=" ">
                    <img
                      src={data.img}
                      alt=""
                      height={200}
                      width="100%"
                      className="rounded-top"
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f5f7fa",
                      height: "100%",
                    }}
                    className="card-body rounded-bottom  "
                  >
                    <h4 className="h-50 ">{data.title}</h4>
                    <div className="d-flex flex-wrap justify-content-between">
                      <span className="text-secondary mt-3 mt-xl-4 mt-xxl-4  mt-md-3">
                        {data.date}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#f5f7fa" }}
                    className="card-footer border-0 mt-0 pt-0"
                  >
                    <button
                      onClick={() => handleReadMoreClick(index)}
                      className={` rounded  w-100 p-2 border-0 bg-white shadow-on-hover`}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section

      // style={
      //   {
      //      height: "600px",

      //   }
      // }
      >
        <div className="container mt-lg-5 mt-3 mb-3 pb-lg-1 pt-lg-3">
          <h6
            className={`text-center client-higlights-heading ${
              inViewHighLights && "fade-in"
            }`}
            ref={refHighLights}
          >
            CLIENT HIGHLIGHTS
          </h6>
          <hr />
          <Swiper
            modules={[
              Navigation,
              Autoplay,
              Pagination,
              Scrollbar,
              A11y,
              FreeMode,
            ]}
            autoplay={{ delay: 0.00001 }}
            // spaceBetween={50}
            // slidesPerView={3}
            // pagination={{ clickable: true }}
            // onActiveIndexChange={handleSlideChange}
            // centeredSlides
            className="my-md-4"
            // navigation
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              576: { slidesPerView: 4 },
              // 1200: { slidesPerView: 3 },
            }}
            loop
            speed={2500}
          >
            {HighlightsItems.map((data, i) => (
              <SwiperSlide className="text-center" key={i}>
                <div className="mx-md-4 mx-2">
                  <img
                    src={data}
                    alt="Company Logo"
                    className="img-fluid w-100 px-3"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <hr />
        </div>
      </section>

      <section
      id="/contact"
      >
        <div className="p-xl-5 px-0 pt-0 pt-lg-5  contact-form mt-5">
          <ContactForm />

        </div>
      </section>

      {/* <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        nav
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section
            className={scrollDirection === "down" ? "hidden" : "visible"}
            id="element-to-animate"
            // ref={refSection1}
            // style={{ overflowY: "auto" }}
          >
            <div className="">
              <div
                style={{ height: "850px" }}
                className="home-banner-kaash position-relative"
              >
                <div>
                  <video
                    id="background-video"
                    className="w-100 inline video-wrapper video-player hero-video-design"
                    playsInline
                    controls={false}
                    muted
                    autoPlay
                    loop
                  >
                    <source
                      src={require("./Images/video-new.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h1
                  id="text-overlay"
                  className="col-11 col-md-6 col-lg-7 mx-auto home-heading-title fade-in"
                >
                  Create anything you can imagine{" "}
                  <span className="orange-color">with 3D Printing</span>
                </h1>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className={scrollDirection === "down" ? "hidden" : "visible"}
            // ref={refSection2}
            id="element-to-animate2"
            style={{
              height: "750px",
              // overflowY: "auto"
            }}
          >
            <div className="scroll-animation pt-xl-5 mt-xl-5 ">
              <div
                className={`container pt-xl-5 mt-xl-4 mt-lg-1 mt-2 zoom-content `}
                // style={{ transform: `scale(${zoomScale})` }}
              >
                <div className="d-flex flex-wrap  align-items-center">
                  <div
                    className={`col-lg-12 col-xl-6 col-12 mt-md-4 rounded ${
                      inView && "fade-in"
                    }`}
                  >
                    <img
                      src={require("./Images/groupimg.png")}
                      alt=""
                      className="img-fluid d-none d-md-block rounded"
                    />
                  </div>
                  <div
                    className={`col-xl-6 col-12 px-xl-5 ${
                      inView && "ease-in ease-in-right"
                    }`}
                  >
                    <p
                      className="text-heading-orange mt-2 mb-1 mt-lg-4 mt-md-4"
                      ref={ref}
                    >
                      Deepcytes
                    </p>
                    <h1 id="section-id">Our Story Unfolded</h1>
                    <img
                      src={require("./Images/groupimg.png")}
                      alt=""
                      className="img-fluid d-md-none rounded my-2"
                    />
                    <p style={{ textAlign: "justify" }}>
                      At Deepcytes, our journey is a testament to the power
                      of passion and innovation. Founded with a vision to
                      redefine the possibilities of 3D printing and design, our
                      story began in ’23 as a humble endeavor.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      {" "}
                      At our core, we are more than a company; we are creators,
                      innovators, and visionaries. The narrative that defines us
                      – from humble beginnings to becoming a driving force in 3D
                      printing and designing. Every project, every
                      collaboration, contributes to a legacy built on excellence
                      and creativity.
                    </p>
                    <button
                      className="text-dark p-2 px-4 rounded border-muted text-secondary knowmore-btn bg-white"
                      onClick={handleKnowClick}
                    >
                      Know more <FaArrowRightLong fill="grey" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            // ref={refSection3}
            id="animatedElement"
            style={{
              height: "600px",
              // overflowY: "auto"
            }}
          >
            <div
              // style={{ height: "800px" }}
              className="unique-offerings mt-5 scroll-animation"
            >
              <OurBrands
                className={` mt-lg-1 mt-2 zoom-content `}
                // style={{ transform: `scale(${zoomScale})` }}
              />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            //  ref={refSection4}
            style={{
              height: "600px",
              // overflowY: "auto"
            }}
          >
            <div className="container">
              <div className="d-flex flex-wrap justify-content-between mb-lg-0 mb-2 mb-xl-1">
                <h1 className="px-lg-3">Blogs & News</h1>
                <div className="col-3 pe-xl-4">
                  <button
                    style={{ backgroundColor: "#FFFAF7" }}
                    className="text-dark w-100 p-2 rounded fw-bold border-0 "
                    onClick={handleViewClick}
                  >
                    {" "}
                    View All <FaArrowRightLong />
                  </button>
                </div>
              </div>

              <div className="d-flex flex-wrap  justify-content-between">
                {BlogsData.slice(0, 3).map((data, index) => (
                  <div className="col-12 mb-lg-0 mb-4 mt-lg-5 mt-md-0 mb-md-4 px-md-3 col-xl-4 mt-xl-0 col-lg-6 px-xl-4  col-md-6 pe-lg-4 px-lg-4">
                    <div
                      onClick={() => handleReadMoreClick(index)}
                      className="text-dark cursor-pointer card card-view-height "
                    >
                      <div className=" ">
                        <img
                          src={data.img}
                          alt=""
                          height={200}
                          width="100%"
                          className="rounded-top"
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "#f5f7fa",
                          height: "100%",
                        }}
                        className="card-body rounded-bottom  "
                      >
                        <h4 className="h-50">{data.title}</h4>
                        <div className="d-flex flex-wrap justify-content-between">
                          <span className="text-secondary mt-2 mt-xl-3 mt-xxl-3  mt-md-3">
                            {data.date}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#f5f7fa" }}
                        className="card-footer border-0 mt-0 pt-0"
                      >
                        <button
                          onClick={() => handleReadMoreClick(index)}
                          className={` rounded  w-100 p-2 border-0 bg-white shadow-on-hover`}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            // ref={refSection5}
            style={
              {
                //  height: "600px",
                // overflowY: "auto"
              }
            }
          >
            <div className="container mt-lg-5 mt-3 mb-3 pb-lg-1 pt-lg-3">
              <h6
                className={`text-center client-higlights-heading ${
                  inViewHighLights && "fade-in"
                }`}
                ref={refHighLights}
              >
                CLIENT HIGHLIGHTS
              </h6>
              <hr />

              <Swiper
                id="slider-medium-size"
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoPlay={{ delay: 5000 }}
                slidesPerView={4}
                // navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className={`mt-3 mb-3 ${inViewHighLights && "fade-in"}`}
              >
                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/logojohndeere.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>

                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/datart2.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>

                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/Logos Grayscale.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>

                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/logossr.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>
                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/mizani.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>
                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/prayosha.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>
                <SwiperSlide className="col-3 text-center">
                  <img
                    src={require("./Images/prayosha2.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>
              </Swiper>

              <Swiper
                id="slider-mobile-size"
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                autoplay={{ delay: 5000 }}
                spaceBetween={50}
                slidesPerView={2}
                // navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className=" mt-3 mb-3 "
              >
                <SwiperSlide className="text-center ">
                  <img
                    src={require("./Images/logojohndeere.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>

                <SwiperSlide className="text-center mb-4">
                  <img
                    src={require("./Images/datart2.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <img
                    src={require("./Images/Logos Grayscale.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>

                <SwiperSlide className="text-center">
                  <img
                    src={require("./Images/logossr.png")}
                    alt=""
                    className="img-fluid "
                  />
                </SwiperSlide>
              </Swiper>

              <hr />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            //  ref={refSection6}
            style={
              {
                // height: "600px",
                // overflowY: "auto"
              }
            }
          >
            <div className="p-xl-5 px-0 pt-0 pt-lg-5  contact-form mt-5">
              <ContactForm />
            </div>
          </section>
        </SwiperSlide>
      </Swiper> */}

      {BlogsData.map((data, index) => (
        <Modal
          show={popUp && selectedBlogIndex === index}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          key={index}
          className=""
        >
          <Modal.Header className=" border-bottom-0">
            <Modal.Title className="" id="contained-modal-title-vcenter">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="orange-color text-center fw-normal px-5 p-1 fs-6 rounded-5 orange-bg ">
                  BLOGS
                </div>
              </div>
            </Modal.Title>
            <IoClose
              size={25}
              className="cursor-pointer"
              onClick={() => setPopUp(false)}
            />
          </Modal.Header>
          <Modal.Body className=" p-3">
            <img src={data.img} className="img-fluid rounded" />
            <div className="pt-3">
              <h4>{data.title}</h4>
              <div>
                <p style={{ textAlign: "justify" }} className="">
                  {data.paragraphA}
                </p>
                <h6>
                  {data.linkHeading}{" "}
                  <a className="" target="_blank" href={data.link}>
                    {data.linkName}
                  </a>
                </h6>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ))}
    </>
  );
}

const HighlightsItems = [
  require("./Images/logojohndeere.png"),
  require("./Images/datart2.png"),
  require("./Images/Logos Grayscale.png"),
  require("./Images/logossr.png"),
  require("./Images/mizani.png"),
  require("./Images/prayosha.png"),
  require("./Images/prayosha2.png"),
];
