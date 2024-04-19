import React, { useState } from "react";
import "./ContactForm.css";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Contact Number is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    return { isValid, errors };
  };

  console.log("formadata", formData);
  console.log("error", errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validateForm();

    if (isValid) {
      const config = {
        SecureToken: process.env.REACT_APP_SECURITY_TOKEN,
        To: "hello@kaashstudio.com",
        From: formData.email,
        Subject: `New enquiry received form ${formData.fullName}`,
        Body: `
          Full Name : ${formData.fullName} <br />
          Email Id : ${formData.email} <br />
          Phone Number : ${formData.contactNumber} <br />
          Message : ${formData.message}
        `,
      };

      console.log("config", config);

      if (window.Email) {
        window.Email.send(config)
          .then(() => {
            toast.success(
              "Thank you for contacting us. Our team will get back to you shortly."
            );
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 3000);

            // Clear the form after successful submission
            setFormData({
              fullName: "",
              email: "",
              contactNumber: "",
              message: "",
            });
          })
          .catch((err) => {
            toast.error("Opps! Something went wrong.");
            console.error(err);
          });
      }
    } else {
      setErrors(errors);
      console.log("Form validation failed");
    }
  };

  // ___________mobile-view________________//

  const [formDataMobile, setFormDataMobile] = useState({
    fullNameMobile: "",
    emailMobile: "",
    contactNumberMobile: "",
    messageMobile: "",
  });

  const [errorsMobile, setErrorsMobile] = useState({});

  const handleChangeMobile = (event) => {
    const { name, value } = event.target;
    setFormDataMobile({ ...formDataMobile, [name]: value });
    setErrorsMobile({ ...errorsMobile, [name]: "" });
  };

  const validateFormMobile = () => {
    const errorsMobile = {};
    let isValid = true;

    if (!formDataMobile.fullNameMobile.trim()) {
      errorsMobile.fullNameMobile = "Full Name is required";
      isValid = false;
    }

    if (!formDataMobile.emailMobile.trim()) {
      errorsMobile.emailMobile = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formDataMobile.emailMobile)) {
      errorsMobile.emailMobile = "Email is invalid";
      isValid = false;
    }

    if (!formDataMobile.contactNumberMobile.trim()) {
      errorsMobile.contactNumberMobile = "Contact Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formDataMobile.contactNumberMobile)) {
      errorsMobile.contactNumberMobile = "Contact Number is invalid";
      isValid = false;
    }

    if (!formDataMobile.messageMobile.trim()) {
      errorsMobile.messageMobile = "Message is required";
      isValid = false;
    }

    return { isValid, errorsMobile };
  };

  const handleSubmitMobile = (e) => {
    e.preventDefault();
    const { isValid, errorsMobile } = validateFormMobile();
    if (isValid) {
      const configMobile = {
        SecureToken: process.env.REACT_APP_SECURITY_TOKEN,
        To: "hello@kaashstudio.com",
        From: formDataMobile.emailMobile,
        Subject: `New enquiry received form ${formDataMobile.fullNameMobile}`,
        Body: `
          Full Name : ${formDataMobile.fullNameMobile} <br />
          Email Id : ${formDataMobile.emailMobile} <br />
          Phone Number : ${formDataMobile.contactNumberMobile} <br />
          Message : ${formDataMobile.messageMobile}
        `,
      };

      console.log("config", configMobile);

      if (window.Email) {
        window.Email.send(configMobile)
          .then(() => {
            toast.success(
              "Thank you for contacting us. Our team will get back to you shortly."
            );
            setTimeout(() => {
              window.scrollTo(0, 0);
              window.location.reload();
            }, 3000);

            // Clear the form after successful submission
            setFormDataMobile({
              // <-- Use setFormDataMobile instead of setFormData
              fullNameMobile: "",
              emailMobile: "",
              contactNumberMobile: "",
              messageMobile: "",
            });
          })
          .catch((err) => {
            toast.error("Opps! Something went wrong.");
            console.error(err);
          });
      }
    } else {
      setErrorsMobile(errorsMobile);
      console.log("Form validation failed");
    }
  };

  // Animations
  const [ref, inView] = useInView({
    // triggerOnce: true,
  });

  return (
    <>
      <div className="p-xl-1 mt-xl-1 pt-lg-1 pb-lg-1 ">
        <div className="container  rounded-5 contact-form-banner p-lg-5 pt-lg-3 d-md-none   d-xl-block d-none d-lg-none">
          <div className="d-flex flex-wrap justify-content-between" ref={ref}>
            <div
              className={`col-6 pt-lg-3 ${inView && "ease-in ease-in-left"}`}
            >
              <h1 className="">
                Get in{" "}
                <span style={{ color: "#010b79" }} className="">
                  Touch
                </span>
              </h1>
              <p className="">
                We are here to help you design and print anything you can
                imagine. Drop us a line below and let’s start the journey
                together.
              </p>
              <div className="">
                <div className="">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                      e.preventDefault();
                    }}
                    id="contactForm"
                    className=""
                  >
                    <div className="d-flex flex-wrap justify-conent-between">
                      <div className="col-6 pe-2">
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Name"
                          value={formData.fullName}
                          name="fullName"
                          onChange={handleChange}
                        />
                        {errors.fullName ? (
                          <small className="error text-danger">
                            {errors.fullName}
                          </small>
                        ) : (
                          <div className="pb-4"></div>
                        )}
                      </div>
                      <div className="col-6 px-2 phone-number-arrows">
                        <input
                          className="form-control shadow-none"
                          name="contactNumber"
                          placeholder="Phone Number"
                          value={formData.contactNumber}
                          type="number"
                          maxLength={10}
                          minLength={10}
                          onChange={handleChange}
                        />
                        {errors.contactNumber ? (
                          <small className="error text-danger">
                            {errors.contactNumber}
                          </small>
                        ) : (
                          <div className="pb-4"></div>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 col-12 pe-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control shadow-none w-100"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                      />
                      {errors.email ? (
                        <small className="error text-danger">
                          {errors.email}
                        </small>
                      ) : (
                        <div className="pb-4"></div>
                      )}
                    </div>
                    <div className="mt-4 pe-2">
                      <textarea
                        type="text"
                        placeholder="Message"
                        className="form-control shadow-none"
                        rows={2}
                        id="exampleFormControlTextarea1"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message ? (
                        <small className="error text-danger">
                          {errors.message}
                        </small>
                      ) : (
                        <div className="pb-4"></div>
                      )}
                    </div>
                    <button
                      style={{ backgroundColor: "#010b79" }}
                      className=" border-0 text-white mt-3 p-2 px-5 rounded "
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              className={`contact-links-banner  mt-2 rounded-5  col-6 p-4  mt-4 ${
                inView && "fade-in"
              }`}
            >
              <div className="blur-img-contact-form p-3">
                <h2 className="text-white ">Reach Us at</h2>
                <p style={{ textAlign: "justify" }} className="text-white">
                  Reach out to us with the details below and let's bring your
                  ideas to life through design and printing.
                </p>

                <div className="d-flex flex-wrap justify-content-between text-white">
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
                      {" "}
                      <a
                        href="tel:+91 8983349962"
                        className="text-white text-decoration-none cursor-pointer"
                      >
                        +91 8983349962
                      </a>
                      &nbsp;/&nbsp;
                      <a
                        href="tel:+91 8983349963"
                        className="text-white text-decoration-none cursor-pointer"
                      >
                        8983349963
                      </a>
                    </div>
                    <div className="pt-4 cursor-pointer mt-1">
                      <a
                        href="mailto:hello@kaashstudio.com"
                        className="text-white text-decoration-none  "
                      >
                        hello@kaashstudio.com
                      </a>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://www.google.com/maps/place/Mega+Center/@18.5040956,73.9081988,15z/data=!4m10!1m2!2m1!1sMegacentre,+Office+no:+N409,3rd+Floor,Magarpatta+Hadapsar,Pune+solapur+road,411028!3m6!1s0x3bc2c1f04ad56839:0x4726498619ac6d1c!8m2!3d18.5040956!4d73.9257083!15sClJNZWdhIENlbnRlciwgT2ZmaWNlIG5vOiA0MDksM3JkIEZsb29yLE1hZ2FycGF0dGEgSGFkYXBzYXIsUHVuZSBzb2xhcHVyIHJvYWQsNDExMDI4WlIiUG1lZ2EgY2VudGVyIG9mZmljZSBubyA0MDkgM3JkIGZsb29yIG1hZ2FycGF0dGEgaGFkYXBzYXIgcHVuZSBzb2xhcHVyIHJvYWQgNDExMDI4kgEQY29ycG9yYXRlX29mZmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSd2FXSlRSVlpSRUFF4AEA!16s%2Fg%2F11h6nkgcxd?entry=ttu"
                        className="cursor-pointer text-decoration-none text-white "
                        target="_blank"
                      >
                        Megacentre, Office no: N409, 3rd Floor, Magarpatta{" "}
                        <br className="d-md-block d-xl-none d-xxl-none d-none" />
                        Hadapsar, Pune-Solapur Road, 411028.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div
        id="contact-form"
        className=" d-block d-md-block d-sm-block d-lg-block d-xl-none contact-mobile-form   p-3 "
      >
        <div className="contact-links-banner  rounded-5 mx-auto col-6  pt-4 mb-4 mt-4 ">
          <div className="blur-img-contact-form p-3 p-md-5 pt-md-3 pt-0">
            <h2 className="text-white pt-2">Reach Us at</h2>
            <p style={{ textAlign: "justify" }} className="text-white">
              Reach out to us with the details below and let's bring your ideas
              to life through design and printing.
            </p>

            <div className="d-flex flex-wrap justify-content-between text-white">
              <div className="col-md-1 col-sm-1 col-2">
                <div className="mt-3">
                  <FiPhone className="icon" size={25} />
                </div>
                <div className="pt-4 pb-4">
                  <MdOutlineMailOutline className="icon" size={25} />
                </div>
                <div className="">
                  <IoLocationOutline className="icon" size={25} />
                </div>
              </div>
              <div className="col-md-11 col-sm-11 col-10 ">
                <div className="mt-3">
                  <a
                    href="tel:+91 8983349962"
                    className="text-white text-decoration-none cursor-pointer"
                  >
                    +91 8983349962
                  </a>
                  &nbsp;/&nbsp;
                  <a
                    href="tel:+91 8983349963"
                    className="text-white text-decoration-none cursor-pointer"
                  >
                    8983349963
                  </a>
                  {/* <a
                        href="tel:+91 8983349963"
                        className="text-white text-decoration-none cursor-pointer"
                      >
                        8983349963
                      </a> */}
                </div>
                <div className="pt-4 cursor-pointer">
                  <a
                    href="mailto:hello@kaashstudio.com"
                    className="text-white text-decoration-none "
                  >
                    hello@kaashstudio.com
                  </a>
                </div>
                <div className="pt-4">
                  {/* <p style={{ textDecoration: "none" }} className="">
                    Megacentre, Office no: N409,3rd Floor,Magarpatta{" "}
                    <br className="d-md-block d-none" />
                    Hadapsar,Pune solapur road,411028.
                  </p> */}
                  <a
                    href="https://www.google.com/maps/place/Mega+Center/@18.5040956,73.9081988,15z/data=!4m10!1m2!2m1!1sMegacentre,+Office+no:+N409,3rd+Floor,Magarpatta+Hadapsar,Pune+solapur+road,411028!3m6!1s0x3bc2c1f04ad56839:0x4726498619ac6d1c!8m2!3d18.5040956!4d73.9257083!15sClJNZWdhIENlbnRlciwgT2ZmaWNlIG5vOiA0MDksM3JkIEZsb29yLE1hZ2FycGF0dGEgSGFkYXBzYXIsUHVuZSBzb2xhcHVyIHJvYWQsNDExMDI4WlIiUG1lZ2EgY2VudGVyIG9mZmljZSBubyA0MDkgM3JkIGZsb29yIG1hZ2FycGF0dGEgaGFkYXBzYXIgcHVuZSBzb2xhcHVyIHJvYWQgNDExMDI4kgEQY29ycG9yYXRlX29mZmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSd2FXSlRSVlpSRUFF4AEA!16s%2Fg%2F11h6nkgcxd?entry=ttu"
                    className="cursor-pointer text-decoration-none text-white "
                    target="_blank"
                  >
                    Megacentre, Office no: N409, 3rd Floor, Magarpatta{" "}
                    <br className="d-md-block d-none" />
                    Hadapsar, Pune-Solapur Road, 411028.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-block d-sm-block d-lg-block d-xl-none d-block pt-lg-5 mt-5">
        <div className="p-md-5 pt-md-0">
          <h1 className="mt-2">
            Get in <span style={{ color: "#010b79" }}>Touch</span>
          </h1>
          <p style={{ textAlign: "justify" }} className="">
            We are here to help you design and print anything you can imagine.
            Drop us a line below and let’s start the journey together.
          </p>
          <div className="">
            <div className="">
              <form
                onSubmit={(e) => {
                  handleSubmitMobile(e);
                  e.preventDefault();
                }}
                // id="contactForm"
                className=""
              >
                <div className="">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="fullNameMobile"
                      onChange={handleChangeMobile}
                    />
                    {errorsMobile.fullNameMobile && (
                      <small className="error text-danger">
                        {errorsMobile.fullNameMobile}
                      </small>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      maxLength="10"
                      name="contactNumberMobile"
                      onChange={handleChangeMobile}
                    />
                    {errorsMobile.contactNumberMobile && (
                      <small className="error text-danger">
                        {errorsMobile.contactNumberMobile}
                      </small>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="emailMobile"
                    onChange={handleChangeMobile}
                  />
                  {errorsMobile.emailMobile && (
                    <small className="error text-danger">
                      {errorsMobile.emailMobile}
                    </small>
                  )}
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Message"
                    className="form-control"
                    // id="exampleFormControlTextarea1"
                    name="messageMobile"
                    onChange={handleChangeMobile}
                  />
                  {errorsMobile.messageMobile && (
                    <small className="error text-danger">
                      {errorsMobile.messageMobile}
                    </small>
                  )}
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#010b79" }}
                  className="border-0 text-white mt-3 p-2 px-5 rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
