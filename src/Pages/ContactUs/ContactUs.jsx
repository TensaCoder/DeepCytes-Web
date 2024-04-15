import React from "react";
import "./ContactUs.css";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({});
  const [submitValidation, setSubmitValidation] = useState({
    forName: true,
    forContact: true,
    forEmail: true,
    forMessage: true,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    let nameValue = name;
    let valueValue = value;
    setFormData({ ...formData, [nameValue]: valueValue });

    /// ------------------FOR VALIDATION----------------------
    if (name === "fullName") {
      const errorElement = document.getElementById("nameError");
      errorElement.innerHTML =
        valueValue.trim() === "" ? "Name is required" : "";
      setSubmitValidation({
        ...submitValidation,
        forName: valueValue.trim() === "" ? true : false,
      });
    } else if (nameValue === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errorElement = document.getElementById("emailError");
      errorElement.innerHTML = !emailPattern.test(valueValue)
        ? "Invalid email address"
        : "";
      setSubmitValidation({
        ...submitValidation,
        forEmail: !emailPattern.test(valueValue) ? true : false,
      });
    } else if (nameValue === "contactNo") {
      const contactNoPattern = /^\d{10}$/;
      const errorElement = document.getElementById("contactNoError");
      errorElement.innerHTML = !contactNoPattern.test(valueValue)
        ? "Invalid contact number"
        : "";
      setSubmitValidation({
        ...submitValidation,
        forContact: !contactNoPattern.test(valueValue) ? true : false,
      });
    } else if (nameValue === "message") {
      const errorElement = document.getElementById("messageError");
      errorElement.innerHTML =
        valueValue.trim() === "" ? "Message is required" : "";
      setSubmitValidation({
        ...submitValidation,
        forMessage: valueValue.trim() === "" ? true : false,
      });
    }
    console.log(submitValidation);
  };
  //-------------------------------------------------------------------------------------------------------

  const submitForm = async (e) => {
    console.log(formData);
    const config = {
      SecureToken: process.env.REACT_APP_SECURITY_TOKEN,
      To: "kaashstudio@gmail.com",
      From: formData.email,
      Subject: `New enquiry received form ${formData.fullName}`,
      Body: `
        Full Name : ${formData.fullName} <br />
        Email Id : ${formData.email} <br />
        Phone Number : ${formData.contactNo} <br />
        Message : ${formData.message}
      `,
    };

    if (window.Email) {
      await window.Email.send(config)
        .then((res) => {
          document.getElementById("contactForm").reset();
          toast.success(
            "Thank you for contacting us. Our team will get back to you shortly.",
            {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        })
        .catch((err) => {
          console.log("email js failed ");
          toast.error("Opps! Something went wrong.", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  //------------------------------------------------------------------------------------------------//

  return (
    <>
      <div className="forBackground ">
        <div className="container pt-lg-5 pt-4 pb-lg-5">
          <div className=" d-flex flex-wrap  justify-content-between height">
            {/* --------------------DETAILS SECTION-------------------- */}
            <div className="col-lg-6 mt-md-4 col-12 pe-lg-4 mb-4">
              <div className="rounded-4 backgroundImage p-5 h-100 text-light">
                <h3 className="mt-3">Get in touch</h3>
                <p className="mt-3">
                  We are here to help you design and print anything you can
                  imagine. Drop us a line below and let’s start the journey
                  together.
                </p>

                <div className="d-flex flex-wrap justify-content-between">
                  <div className="col-md-1 col-sm-1 col-2">
                    <div className="mt-3">
                      <FiPhone className="" size={25} />
                    </div>
                    <div className="pt-4 pb-4">
                      <MdOutlineMailOutline className="" size={25} />
                    </div>
                    <div className="">
                      <IoLocationOutline className="" size={25} />
                    </div>
                  </div>
                  <div className="col-md-11 col-sm-11 col-10 ">
                    <div className="mt-3">
                      <a
                        href="tel:+91 8983349963"
                        className="text-light text-decoration-none cursor-pointer"
                      >
                        +91 8983349963
                      </a>
                    </div>
                    <div className="pt-4 cursor-pointer">
                      <a
                        href="mailto:kaashstudio@gmail.com"
                        className="text-light text-decoration-none "
                      >
                        kaashstudio@gmail.com
                      </a>
                    </div>
                    <div className="pt-4">
                      <p style={{ textDecoration: "none" }} className="">
                        Megacentre, Office no: N409,3rd Floor,Magarpatta{" "}
                        <br className="d-md-block d-none" />
                        Hadapsar,Pune solapur road,411013.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------FORM SECTION--------------------- */}

            <div className="col-lg-6 col-12 mt-md-4 mb-4 px-lg-4">
              <div className="text-white contact-form-bg border rounded-4 p-5 height">
                <h5>Please enter your details below</h5>
                <form
                  onSubmit={(e) => {
                    submitForm(e);
                    e.preventDefault();
                  }}
                  id="contactForm"
                >
                  <div className="inputBox">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName || ""}
                      onChange={handleChange}
                      
                    />
                    <label htmlFor="fullName" className="labeLine">
                      Full Name
                    </label>
                    <small className="error text-danger" id="nameError"></small>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      name="contactNo"
                      maxLength="10"
                      value={formData.contactNo || ""}
                      onChange={handleChange}
                    />
                    <label htmlFor="contactNo" className="labeLine">
                      Phone Number
                    </label>
                    <small
                      className="error text-danger"
                      id="contactNoError"
                    ></small>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      name="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      
                    />
                    <label htmlFor="email" className="labeLine">
                      Email Address
                    </label>
                    <small
                      className="error text-danger"
                      id="emailError"
                    ></small>
                  </div>

                  <div className="inputBox">
                    <textarea
                      type="text"
                      name="message"
                      value={formData.message || ""}
                      onChange={handleChange}
                      rows={3}
                    />
                    <label htmlFor="message" className="labeLine">
                      Message
                    </label>
                    <small
                      className="error text-danger"
                      id="messageError"
                    ></small>
                  </div>

                  {/* <div className="main-form">
                    <div className="d-flex flex-wrap justify-content-between">
                      <div className="col-md-6 col-12 pe-md-2">
                        <div
                          className={`entryArea ${
                            formData.fullName ? "filled" : ""
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control bg-white"
                            name="fullName"
                            value={formData.fullName || ""}
                            onChange={handleChange}
                          />
                          <label htmlFor="fullName" className="mb-2 labelLine">
                            Full Name
                          </label>
                        </div>
                        <small
                          className="error text-danger"
                          id="nameError"
                        ></small>
                      </div>
                      <div className="col-md-6 col-12 px-md-2 pe-md-0">
                        <div
                          className={`entryArea ${
                            formData.contactNo ? "filled" : ""
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control"
                            maxLength="10"
                            name="contactNo"
                            value={formData.contactNo || ""}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="contactNo"
                            className="mb-2 mt-3 mt-md-0 labelLine"
                          >
                            Phone Number
                          </label>
                        </div>
                        <small
                          className="error text-danger"
                          id="contactNoError"
                        ></small>
                      </div>
                    </div>
                  </div>
                  <div className="main-form mt-2">
                    <div>
                      <label htmlFor="email" className="col col-form-label">
                        Email Address
                      </label>
                    </div>
                    <div
                      className={`entryArea ${formData.email ? "filled" : ""}`}
                    >
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                      />
                      <small
                        className="error text-danger"
                        id="emailError"
                      ></small>
                    </div>
                  </div>
                  <div className="main-form mt-2">
                    <div>
                      <label htmlFor="message" className="col-form-label">
                        Message
                      </label>
                    </div>
                    <div
                      className={`entryArea ${
                        formData.message ? "filled" : ""
                      }`}
                    >
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        name="message"
                        value={formData.message || ""}
                        rows="3"
                        onChange={handleChange}
                      ></textarea>
                      <small
                        className="error text-danger"
                        id="messageError"
                      ></small>
                    </div>
                  </div> */}

                  <button
                    type="submit"
                    disabled={
                      submitValidation.forContact ||
                      submitValidation.forName ||
                      submitValidation.forEmail ||
                      submitValidation.forMessage
                    }
                    className="btn px-4 mt-3 px-sm-5 px-lg-3 text-white px-md-5 backgroundButton"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/*-----------------------------------------------------------------------  */}
        </div>
      </div>
    </>
  );
};
export default ContactUs;
