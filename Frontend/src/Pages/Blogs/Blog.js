// Blogs.js
import React, { useState } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { BlogsData } from "./Components/BlogData";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";

function Blogs() {
  const navigate = useNavigate();
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  const [popUp, setPopUp] = useState(false);
  const handleReadMoreClick = (index) => {
    setSelectedBlogIndex(index); // Set the index of the clicked blog
    setPopUp(true); // Open the popup
  };

  return (
    <>
      {BlogsData.length > 0 ? (
        <div className="blog pt-5 ">
          <div className="container mt-md-5 pb-5">
            <h2 className="px-lg-2 pt-5">Latest from our blog</h2>
            {/* <div className="d-flex flex-wrap justify-content-between pb-5 ">
              {BlogsData.map((data, index) => (
                <div
                  key={index}
                  className="col-12 mb-lg-0 mb-4 col-lg-4 pe-lg-4 px-lg-4 pt-5"
                >
                  <div className="text-dark card">
                    <div className=" ">
                      <img
                        src={data.img}
                        alt=""
                        height={200}
                        width="100%"
                        className="card-img"
                      />
                    </div>
                    <div
                      style={{ backgroundColor: "#f5f7fa" }}
                      className="p-3 rounded-bottom card-body"
                    >
                      <h5 style={{ lineHeight: "30px" }} className="fw-normal">
                        {data.title}
                      </h5>
                      <div className="d-flex flex-wrap justify-content-between">
                        <span className="text-secondary mt-2">{data.date}</span>
                      </div>
                      <div className="mt-3">
                        <div
                          onClick={() => handleReadMoreClick(index)}
                          className={`text-decoration-none btn w-100 bg-white border-0 p-2`}
                        >
                          Read More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="d-flex flex-wrap justify-content-between">
              {BlogsData.map(
                (
                  data,
                  index // Limiting to only three items using slice
                ) => (
                  <div className="col-12 col-md-6 col-xl-4 pe-md-3 px-md-3 mt-lg-4  mt-xl-5 mt-2 mb-lg-0 mb-4  pe-xl-4 px-xl-4">
                    <div
                      onClick={() => handleReadMoreClick(index)}
                      className="text-dark card cursor-pointer card-view-height"
                    >
                      <div className=" ">
                        <img
                          src={data.img}
                          alt=""
                          height="auto"
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
                        <h5 className="h-75">{data.title}</h5>
                        <div className="d-flex flex-wrap justify-content-between">
                          <span className="text-secondary  ">{data.date}</span>
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#f5f7fa" }}
                        className="card-footer border-0 mt-0 pt-0"
                      >
                        <div
                          onClick={() => handleReadMoreClick(index)}
                          className={`text-decoration-none shadow-on-hover cursor-pointer btn w-100 bg-white border-0 p-2`}
                        >
                          Read More
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div
            className="container"
            style={{ marginTop: "18rem", marginBottom: "12.3rem" }}
          >
            <div className=" text-center px-2 ">
              <div className="border py-2 px-5 rounded-4">
                <p className="fs-3">
                  No blogs yet, stay tuned ! <br />
                  We have some great content coming your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {BlogsData.map((data, index) => (
        <Modal
          show={popUp && selectedBlogIndex === index}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          key={index}
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
          <Modal.Body className="p-3">
            <img src={data.img} className="img-fluid rounded" />
            <div className="pt-3">
              <h4>{data.title}</h4>
              <p style={{ textAlign: "justify" }}>{data.paragraphA}</p>
              <h6>
                {data.linkHeading}{" "}
                <a className="" target="_blank" href={data.link}>
                  {data.linkName}
                </a>
              </h6>
            </div>
          </Modal.Body>
        </Modal>
      ))}
    </>
  );
}

export default Blogs;
