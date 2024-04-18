import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { FaWhatsapp } from 'react-icons/fa';

// import { FaInstagram } from "react-icons/fa";

// import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";


// import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeScroll = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleStoryClick = () => {
    window.scrollTo(0, 800);
  };

  // const handleBrandClick = () => {
  //   window.scrollTo(0, 1170);
  // };

  const handleFormsClick = () => {
    window.scrollTo(0, 1900);
  };

  const handleContactClick = () => {
    window.scrollTo(0, 2900);
  };

  const location = useLocation();

  const handleTopScroll = () => {
    window.scrollTo(0, 0);
  };

  const handleStoryHideClick = () => {
    navigate("/");
    window.scrollTo(0, 800);
  };

  const handlesFormHideClick = () => {
    navigate("/");
    window.scrollTo(0, 1900);
  };

  const handleContactHideClick = () => {
    navigate("/");
    window.scrollTo(0, 2800);
  };
   
  return (
    <>
    <section style={{backgroundColor:"white",color: "white"}}>
      <div className="footer-bg d-none d-lg-block  d-md-block d-xl-block shadow">
        <div className="container-fluid ">
          <div className=" pt-3 pb-xl-0 ">
            <div className="d-lg-flex  flex-lg-wrap d-md-flex d-md-wrap justify-content-centre  pb-lg-0 ">
              <div className="d-lg-flex flex-lg-wrap  d-md-flex d-md-wrap justify-content-between col-lg-5 col-xl-4 col-md-5">
                {/* <div className="col-lg-4  text-center mt-xl-1  mt-lg-0 pe-xl-0 pe-md-2 ">
                  <img
                    src={require("../images/a.webp")}
                    alt=""
                    className="img-fluid  col-lg-12 col-xl-30   col-sm-2 col-md-9 col-3 footerlogo "
                  />
                </div> */}
                {/* <div className="border-0  border-height  border-warning border-end"></div>
                <p
                  style={{ textAlign: "justify",color:"white" }}
                  className=" text-center  text-lg-start col-lg-6 mt-3 mt-md-0 col-md-9  mt-lg-1 "
                >
                  Create anything and explore Cybersec world
                </p> */}
              </div>
              <div className="d-flex flex-wrap  justify-content-centre fw-semibold ms-4  ms-lg-none mt-md-0   mt-lg-0" >
                <h6
                  onClick={handleHomeScroll}
                  className={`text-decoration-none fw-semibold cursor-pointer nav-links-text-footer nav-link-style me-3 me-lg-0 px-lg-4`}
                >
                  Home
                </h6>
                {location.pathname === "/Forms" ||
                location.pathname === "/about-us" ? (
                  <>
                    <h6
                      onClick={handleStoryHideClick}
                      className={`text-decoration-none fw-bold cursor-pointer nav-links-text-footer nav-link-style me-3 me-lg-0 px-lg-4`}
                    >
                      Search page
                    </h6>

                    <h6
                      onClick={handlesFormHideClick}
                      className={`text-decoration-none fw-semibold cursor-pointer nav-links-text-footer nav-link-style me-3 me-lg-0 px-lg-4`}
                    >
                      Forms
                    </h6>
                    <h6
                      onClick={handleContactHideClick}
                      className={`text-decoration-none fw-semibold cursor-pointer nav-links-text-footer  nav-link-style me-3 me-lg-0 px-lg-4`}
                    >
                      Contact Us
                    </h6>
                  </>
                ) : (
                  <>
                    <h6
                      onClick={handleStoryClick}
                      className={`text-decoration-none fw-semibold cursor-pointer nav-links-text-footer nav-link-style me-3 me-lg-0 px-lg-4`}
                    >
                      Search page
                    </h6>
                    <h6
                      onClick={handleFormsClick}
                      className={`text-decoration-none fw-semibold cursor-pointer nav-links-text-footer  nav-link-style me-3 me-lg-0 px-lg-4`}
                    >
                      Forms
                    </h6>
                    <h6
                      onClick={handleContactClick}
                      className={`text-decoration-none fw-semibold cursor-pointer nav-links-text-footer  nav-link-style me-3 me-lg-0 px-lg-4`}
                    >
                      Contact Us
                    </h6>
                  </>
                )}
              </div>
            </div>
            <div className="Deepcytes-certification  pb-5" >

            <p style={{color:"#00FFEF",marginBottom: '-40px',marginTop: '2px',maxWidth:'2000px',textAlign: "center"}}>
              Digital badges are the best tool to highlight your Deepcytes certifications and achievements
              on your online profiles, resumes and more..
            </p>
            </div>
            
            
            <div  className="d-flex flex-wrap justify-content-between mb-md-3  mt-lg-1 mb-2 px-5 ">
            
            
              {/* <div className="mx-2  ">
                <a
                  href="https://www.instagram.com/kaashstudio/?igsh=MXl3bDNjaHNuYmxw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E4405F' }}
                >
                  <div className=" ">
                    <FaInstagram
                      size={50}
                      className="shadow p-2 rounded-circle icon-style"
                    />
                  </div>
                </a>
              </div>
              <div className="mx-2">
               <a
                 href="https://wa.me/your-phonenumber" // Replace "your-phonenumber" with your actual WhatsApp phone number
                 target="_blank"
                 rel="noopener noreferrer"
                 style={ { color: '#25D366' } }
               >
                 <div className="">
                   <FaWhatsapp
                     size={50}
                     className="icon-style shadow p-2 rounded-circle"
                   />
                 </div>
               </a>
               </div>

              <div className="mx-2 ">
                <a
                  href="https://www.linkedin.com/company/kaash-studio/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"#0077b5"}}
                >
                
                  <div className=" ">
                    <AiOutlineLinkedin
                      size={50}
                      className="icon-style shadow p-2 rounded-circle"
                    />
                  </div>
                </a>
              </div> */}
              
              
            </div>
          
          </div>


          
          

          <div className="d-flex flex-wrap justify-content-between ">
            <small className="px-lg-3 mt-md-2  ">
              Deepcytes LLP &nbsp;
              <FaRegCopyright size={16} /> &nbsp; 2024 All Rights Reserved
            </small>
            <section className="d-flex  custom-padding">
            <div className="mx-2  ">
                <a
                  href="https://www.instagram.com/deepcytes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#E4405F' }}
                >
                  <div className=" ">
                    <FaInstagram
                      size={50}
                      className="shadow p-2 rounded-circle icon-style"
                    />
                  </div>
                </a>
              </div>
              <div className="mx-2">
               <a
                 href="https://wa.me/your-phonenumber" // Replace "your-phonenumber" with your actual WhatsApp phone number
                 target="_blank"
                 rel="noopener noreferrer"
                 style={ { color: '#25D366' } }
               >
                 <div className="">
                   <FaWhatsapp
                     size={50}
                     className="icon-style shadow p-2 rounded-circle"
                   />
                 </div>
               </a>
               </div>

              <div className="mx-2 ">
                <a
                  href="https://www.linkedin.com/company/deepcytes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color:"#0077b5"}}
                >
                
                  <div className=" ">
                    <AiOutlineLinkedin
                      size={50}
                      className="icon-style shadow p-2 rounded-circle"
                    />
                  </div>
                </a>
              </div>
              </section>
            <div className="pe-lg-3 pb-2  ">
              {" "}
              <IoIosArrowDropup
                className=" cursor-pointer mb-md-0"
                size={33}
                onClick={handleTopScroll}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}

      <div className="footer-mobile mt-xl-5 d-lg-none  d-md-none d-block d-xl-none">
        <img
          src={require("../images/Footer.png")}
          className="shadow footer-banner-mobile "
          height={400}
          width="100%"
          alt=""
        />
        
        <div className="footer-mobile-section">
          <div className="text-center">
            <img src={require("../images/a.webp")} className="col-3" />
          </div>
          <p className="mt-4 text-center px-4 " style={{color:"#00FFEF"}}>
              Digital badges are the best tool to highlight your Deepcytes certifications and achievements
              on your online profiles, resumes and more..
          </p>
          <section className="cutom-padding text-start">
          <div className="d-flex fw-semibold flex-wrap">
            <h6
              onClick={handleHomeScroll}
              className={`text-decoration-none  cursor-pointer nav-links-text-footer on-hover fw-semibold  nav-link-style `}
            >
              Home
            </h6>
            {location.pathname === "/Forms" ||
            location.pathname === "/about-us" ? (
              <>
                <a
                  href="/#ourstory"
                  // onClick={handleStoryHideClick}
                  className={`text-decoration-none cursor-pointer nav-links-text-footer fw-semibold  on-hover nav-link-style `}
                >
                  Search page
                </a>
                <h6
                  onClick={handlesFormHideClick}
                  className={`text-decoration-none cursor-pointer nav-links-text-footer on-hover fw-semibold  nav-link-style `}
                >
                  Forms
                </h6>
                <h6
                  onClick={handleContactHideClick}
                  className={`text-decoration-none cursor-pointer nav-links-text-footer on-hover fw-semibold  nav-link-style `}
                >
                  Contact Us
                </h6>
              </>
            ) : (
              <>
                <a
                  href="/#ourstory"
                  // onClick={handleStoryClick}
                  className={`text-decoration-none cursor-pointer nav-links-text-footer fw-semibold on-hover nav-link-style `}
                >
                  Search page
                </a>
                <a
                  href="/#Forms"
                  // onClick={handleFormsClick}
                  className={`text-decoration-none cursor-pointer nav-links-text-footer on-hover fw-semibold nav-link-style `}
                >
                  Forms
                </a>
                <a
                  href="/#contact-form"
                  // onClick={handleContactClick}
                  className={`text-decoration-none cursor-pointer nav-links-text-footer on-hover fw-semibold  nav-link-style `}
                >
                  Contact Us
                </a>
              </>
            )}
          </div>
          </section>
          <div className="d-flex flex-wrap justify-content-center mt-4">
            {/* <div className="mx-2">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <div className="bg-social-media p-2 pt-1 pb-1">
                    <SlSocialFacebook size={25} className="icon-style" />
                  </div>
                </a>
              </div> */}
            {/* <div className="mx-2">
              <a
                href="https://www.instagram.com/kaashstudio/?igsh=MXl3bDNjaHNuYmxw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#00FFEF"
              >
                <div className="">
                  <FaInstagram
                    size={45}
                    className="shadow p-2 rounded-circle icon-style"
                  />
                </div>
              </a>
            </div> */}
            {/* <div className="mx-2">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <div className="bg-social-media p-2 pt-1 pb-1">
                    <FaXTwitter size={25} className="icon-style" />
                  </div>
                </a>
              </div> */}
            {/* <div className="mx-2 ">
              <a
                href="https://www.linkedin.com/company/kaash-studio/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#00FFEF "
              >
                <div className=" ">
                  <AiOutlineLinkedin
                    size={45}
                    className="icon-style shadow p-2 rounded-circle"
                  />
                </div>
              </a>
            </div> */}
          </div>
          <div className="d-flex px-2 copyright-footer-mobile flex-wrap justify-content-between mt-3  ">
            <small className="px-lg-3 fw-semibold pt-3">
              Deepcytes LLP &nbsp;
              <FaRegCopyright size={16} /> &nbsp; 2024 All Rights Reserved
              {/* &nbsp; | &nbsp; Privacy Policy Terms & Condition */}
            </small>
            <div className="pe-lg-3 ">
              <IoIosArrowDropup
                className="d-block cursor-pointer d-lg-none mt-2 "
                size={30}
                onClick={handleTopScroll}
              />
            </div>

            
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
export default Footer;
