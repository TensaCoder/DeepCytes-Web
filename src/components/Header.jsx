import React, { useState, useEffect } from "react";
import "./Header.css";
// import Button from "react-bootstrap/Button";
import { IoIosArrowBack } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MdHistoryEdu } from "react-icons/md";
import { TbBrandSnowflake } from "react-icons/tb";
import { FaBloggerB } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";

// import { HiBars3BottomRight } from "react-icons/hi2";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // const handleClickGetQuoate = () => {
  //   navigate("/contact");
  //   window.scroll(0, 0);
  // };

  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // // const [minutes, setMinutes] = useState(0);
  // // const [seconds, setSeconds] = useState(0);

  // const deadline = new Date();
  // deadline.setDate(deadline.getDate() + 1); // Add 1 day
  // deadline.setHours(deadline.getHours() + 4); // Add 4 hours

  // const getTime = () => {
  //   const time = deadline - Date.now();

  //   setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  //   setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  //   // setMinutes(Math.floor((time / 1000 / 60) % 60));
  //   // setSeconds(Math.floor((time / 1000) % 60));
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => getTime(deadline), 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than or equal to 480px
    const checkIsMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    // Call the function initially and on window resize
    checkIsMobileView();
    window.addEventListener("resize", checkIsMobileView);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", checkIsMobileView);
    };
  }, []);

  const [showOffcanvas, setShowOffcanvas] = useState();

  const handleStoryClick = () => {
    window.scrollTo(0, 830);
    setShowOffcanvas(false);
  };

  const handleBrandClick = () => {
    window.scrollTo(0, 1400);
    setShowOffcanvas(false);
  };

  const handleDeepcytesClick = () => {
    window.scrollTo(0, 2000);
    setShowOffcanvas(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    // setShowOffcanvas(false);
    // window.scrollTo(0, 4000);
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setShowOffcanvas(false);
  };

  const handleStoryCanvasClick = () => {
    setShowOffcanvas(false);
    window.scrollTo(0, 800);
  };

  const handleHomeCanvasClick = () => {
    setShowOffcanvas(false);
    navigate("/");
  };

  const handleBarandCanvasClick = () => {
    setShowOffcanvas(false);
    window.scrollTo(0, 1500);
  };

  const handleBlogCanvasClick = () => {
    setShowOffcanvas(false);
    window.scrollTo(0, 2100);
  };

  const handleContactCanvasClick = () => {
    setShowOffcanvas(false);
    window.scrollTo(0, 3200);
  };

  // Location
  const location = useLocation();

  // hide header //

  const handleOurStoryHideClick = () => {
    setShowOffcanvas(false);
    navigate("/");
    window.scrollTo(0, 800);
  };
  const handleOurBrandsHideClick = () => {
    setShowOffcanvas(false);
    navigate("/");
    window.scrollTo(0, 1250);
  };
  const handleDeepcytesHideClick = () => {
    setShowOffcanvas(false);
    navigate("/");
    window.scrollTo(0, 1900);
  };
  // const handleContactHideClick = () => {
  //   navigate("/#contact");
  //   window.scrollTo(0, 2800);
  // };

  // pages navigations //
  const handlePageStoryClick = () => {
    setShowOffcanvas(false);
    navigate("/");
    window.scrollTo(0, 800);
  };

  const handlePageBrandsClick = () => {
    setShowOffcanvas(false);
    navigate("/");
    window.scrollTo(0, 800);
  };

  const handlePageDeepcytesClick = () => {
    setShowOffcanvas(false);
    navigate("/");
    window.scrollTo(0, 800);
  };

  const handlePageContactClick = () => {
    navigate("/");
    window.scrollTo(0, 2900);
  };

  const path = location.pathname;

  return (
    <>
      <div
        className={
          path === "/Deepcytes" && path === "/about-us"
            ? "header-Deepcytes w-100"
            : "header w-100 "
        }
      >
        <div className="container-fluid">
          <Navbar expand="xl ">
            {/* <Container fluid> */}
            <Link to="/" className="header-logo py-2 navbar-brand me-4">
              <div className="col-5">
                {path === "/Deepcytes" || path === "/about-us" ? (
                  <img
                    src={require("../images/a.webp")}
                    alt="Logo"
                    className="img-fluid w-100"
                  />
                ) : (
                  <img
                    src={require("../images/a.webp")}
                    alt="Logo"
                    className="img-fluid w-100"
                  />
                )}
              </div>
            </Link>

            {path === "/Deepcytes" || path === "/about-us" ? (
              <MdOutlineMenu
                fill="black"
                size={30}
                className="d-xl-none d-xxl-none"
                onClick={() => setShowOffcanvas(true)}
              />
            ) : (
              <MdOutlineMenu
                fill="white"
                size={30}
                className="d-xl-none d-xxl-none"
                onClick={() => setShowOffcanvas(true)}
              />
            )}

            <Navbar.Offcanvas
              show={!!showOffcanvas} // Ensure showOffcanvas is a boolean
              onHide={() => setShowOffcanvas(false)}
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className={!isMobileView ? "" : " shadow rounded"}
              style={isMobileView ? undefined : { height: "950px" }}
            >
              <Offcanvas.Header
                className="justify-content-start align-items-center  pt-4 "
                // closeButton
              >
                <h5
                  onClick={() => setShowOffcanvas(false)}
                  className={` border-0  fw-semibold  cursor-pointer px-lg-4 text-muted  `}
                >
                  <IoIosArrowBack size={25} />
                  &nbsp; Back
                </h5>
              </Offcanvas.Header>
              <Offcanvas.Body className="xyz p-2  rounded-5 align-self-xl-end">
                <Nav className="w-100 px-3  align-items-xl-center ">
                  <a
                    href="/"
                    onClick={() => setShowOffcanvas(false)}
                    className={
                      path === "/Deepcytes" || path === "/about-us"
                        ? "nav-links-text-black  text-decoration-none border-0  fw-semibold cursor-pointer  px-lg-4 me-4 me-lg-0"
                        : ` border-0  fw-semibold text-decoration-none nav-links-text  cursor-pointer  px-lg-4 me-4 me-lg-0 `
                    }
                  >
                    {showOffcanvas ? <RiHome2Line size={25} /> : ""}
                    &nbsp; Home
                  </a>

                  <hr className="d-block d-xl-none d-md-block d-lg-block" />

                  {location.pathname === "/Deepcytes" ||
                  location.pathname === "/about-us" ? (
                    <>
                      <a
                        href="/#ourstory"
                        // onClick={handleStoryClick}
                        onClick={
                          path === "/Deepcytes"
                            ? handlePageStoryClick
                            : handleOurStoryHideClick
                        }
                        className={
                          path === "/Deepcytes" || path === "/about-us"
                            ? "nav-links-text-black text-decoration-none border-0  fw-semibold cursor-pointer  px-lg-4 me-4 me-lg-0"
                            : ` border-0  fw-semibold  nav-links-text  cursor-pointer  px-lg-4 me-4 me-lg-0 `
                        }
                      >
                        {showOffcanvas ? <MdHistoryEdu size={25} /> : ""} &nbsp;
                        Serach page
                      </a>
                      <hr className="d-block d-xl-none d-md-block d-lg-block" />
                      <a
                        href="/#ourbrands"
                        className={
                          path === "/Deepcytes" || path === "/about-us"
                            ? "nav-links-text-black border-0 text-decoration-none  fw-semibold cursor-pointer  px-lg-4 me-4 me-lg-0"
                            : ` border-0  fw-semibold  nav-links-text  cursor-pointer  px-lg-4 me-4 me-lg-0 `
                        }
                        onClick={
                          path === "/Deepcytes"
                            ? handlePageBrandsClick
                            : handleOurBrandsHideClick
                        }
                      >
                        {showOffcanvas ? <TbBrandSnowflake size={25} /> : ""}{" "}
                        &nbsp; Form
                      </a>
                      <hr className="d-block d-xl-none d-md-block d-lg-block" />
                      <a
                        href="/#Deepcytes"
                        className={
                          path === "/Deepcytes" || path === "/about-us"
                            ? "nav-links-text-black border-0 text-decoration-none  fw-semibold cursor-pointer  px-lg-4 me-4 me-lg-0"
                            : ` border-0  fw-semibold  nav-links-text  cursor-pointer  px-lg-4 me-4 me-lg-0 `
                        }
                        onClick={
                          path === "/Deepcytes"
                            ? handlePageDeepcytesClick
                            : handleDeepcytesHideClick
                        }
                      >
                        {showOffcanvas ? <FaBloggerB size={25} /> : ""} &nbsp;
                        Deepcytes
                      </a>
                      <hr className="d-block d-xl-none d-md-block d-lg-block" />
                      <h6
                        className={` border-0  fw-semibold d-xl-none  bg-white  d-xxl-none  nav-links-text  cursor-pointer   px-lg-4  me-lg-0`}
                        onClick={handleContactClick}
                      >
                        {showOffcanvas ? <FaPhone size={25} /> : ""} &nbsp;
                        Contact Us
                      </h6>

                      <button
                        onClick={handleContactClick}
                        className=" p-2 text-decoration-none fw-semibold cursor-pointer d-none d-md-none d-lg-none d-xl-block d-xxl-block ms-4  blue-button-kaash border-0 text-white  px-xl-5 rounded px-md-3 px-5 mt-0"
                      >
                        Contact Us
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href="/#ourstory"
                        onClick={() => setShowOffcanvas(false)}
                        className={` border-0  text-decoration-none fw-semibold  nav-links-text cursor-pointer   px-lg-4  me-4 me-lg-0`}
                      >
                        {showOffcanvas ? <MdHistoryEdu size={25} /> : ""} &nbsp;
                        Serach page
                      </a>
                      <hr className="d-block d-xl-none d-md-block d-lg-block" />

                      <a
                        href="/#ourbrands"
                        onClick={() => setShowOffcanvas(false)}
                        className={` border-0  fw-semibold text-decoration-none  nav-links-text  cursor-pointer  px-lg-4 me-4 me-lg-0 `}
                      >
                        {showOffcanvas ? <TbBrandSnowflake size={25} /> : ""}{" "}
                        &nbsp; Form
                      </a>
                      <hr className="d-block d-xl-none d-md-block d-lg-block" />

                      <a
                        href="/#Deepcytes"
                        onClick={() => setShowOffcanvas(false)}
                        className={` border-0  fw-semibold text-decoration-none  nav-links-text  cursor-pointer  px-lg-4 me-4 me-lg-0`}
                        // onClick={handleDeepcytesClick}
                        // onClick={
                        //   !isMobileView
                        //     ? handleDeepcytesClick
                        //     : handleBlogCanvasClick
                        // }
                      >
                        {showOffcanvas ? <FaBloggerB size={25} /> : ""} &nbsp;
                        Deepcytes
                      </a>
                      <hr className="d-block d-xl-none d-md-block d-lg-block" />
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-none  d-lg-none d-xl-block mt-md-0 mt-4 mt-xl-0">
              {/* {location.pathname !== "/Deepcytes" &&
                location.pathname !== "/about-us" && (
                  
                )} */}

              <>
                <button
                  onClick={handleContactClick}
                  className=" p-2  fw-semibold cursor-pointer d-none d-md-none d-lg-none d-xl-block d-xxl-block  blue-button-kaash border-0 text-blue  px-xl-5 rounded px-md-3 px-5 mt-0"
                >
                  Contact Us
                </button>
              </>
            </div>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Header;
