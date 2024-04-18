// MostPopular.js
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { BlogsData } from "./BlogData";
import "../Blog.css";

function MostPopular() {
  const { index } = useParams();
  const selectedBlog = BlogsData[parseInt(index)];

  return (
    <>
      <div className="most-popular pt-2">
        <div className="container  mt-4 mb-4 pb-5">
          <Link to="/" className="text-dark border-0 back-btn-most-popular text-decoration-none ">
            <FaArrowLeftLong className="p-1" size={25} />
            back
          </Link>
          <div className="col-8">
            <h1 className="mt-3">{selectedBlog.title}</h1>
            <div className="mt-4">
              <div className="d-flex flex-wrap justify-content-start">
                <span className="text-secondary ">{selectedBlog.date}</span>
              </div>
            </div>
            <img
              src={selectedBlog.img}
              alt=""
              height="370"
              width="100%"
              className=""
            />
            <p style={{ textAlign: "justify" }} className="mt-4">
              {selectedBlog.paragraphA}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MostPopular;
