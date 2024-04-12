import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./DataForm.css";

function MultiValueInput({ placeholder, onAdd }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value.trim() !== "") {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button
        type="button"
        className="btn btn-secondary"
        style={{
          "--bs-btn-font-size": " 1.3rem",
          "--bs-btn-padding-x": "0.25rem",
          "--bs-btn-padding-y": "0.20rem",
        }}
        onClick={handleAdd}
      >
        <IoMdAddCircleOutline />
      </button>
    </div>
  );
}

function DataForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [involvement, setInvolvement] = useState("");
  const [courses, setCourses] = useState([]);
  const [internshipDuration, setInternshipDuration] = useState("");
  const [internshipDomains, setInternshipDomains] = useState([]);
  const [employmentDuration, setEmploymentDuration] = useState("");
  const [employmentAreas, setEmploymentAreas] = useState([]);
  const [recommendations, setRecommendations] = useState("");
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [badgesValidation, setBadgesValidation] = useState(true);

  const handleCourseAdd = (course) => {
    setCourses([...courses, course]);
  };

  const handleInternshipDomainAdd = (domain) => {
    setInternshipDomains([...internshipDomains, domain]);
  };

  const handleEmploymentAreaAdd = (area) => {
    setEmploymentAreas([...employmentAreas, area]);
  };

  const handleBadgeAdd = (badge) => {
    setSelectedBadges([...selectedBadges, badge]);
    if (selectedBadges.length === 0) {
      setBadgesValidation(true);
    }
  };

  const checkValidation = () =>{

    

    // Validate badges
    if (selectedBadges.length === 0) {
      // alert("Please select at least one badge.");
      setBadgesValidation(false);
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call checkValidation

    // Handle form submission
    console.log("Form submitted:", {
      id,
      name,
      dob,
      involvement,
      selectedBadges,
      courses,
      internshipDuration,
      internshipDomains,
      employmentDuration,
      employmentAreas,
      recommendations,
    });
  };

  return (
    <>
      <div className="main-cover py-5">
        <div className="container text-light d-flex justify-content-center glass scrollable-div w-50">
          <form onSubmit={handleSubmit} className="w-75">
            <div className="row">
              <div className="form-group my-3 col">
                <label htmlFor="inputID" className="ms-1">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputID"
                  placeholder="ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  maxLength="10"
                  required
                />
              </div>
              <div className="form-group my-3 col">
                <label htmlFor="inputName" className="ms-1">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="form-group col">
                <label htmlFor="inputDOB" className="ms-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDOB"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col">
                <label htmlFor="inputInvolvement" className="ms-1">
                  Involvement
                </label>
                <select
                  id="inputInvolvement"
                  className="form-control"
                  value={involvement}
                  onChange={(e) => setInvolvement(e.target.value)}
                  required
                >
                  <option value="">Choose...</option>
                  <option>Course</option>
                  <option>Internship</option>
                  <option>Employee</option>
                  <option>All of these</option>
                </select>
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="inputBadges" className="ms-1">
                Badges Achieved
              </label>
              <MultiValueInput placeholder="Badge" onAdd={handleBadgeAdd} />
              {badgesValidation ? (
                <p></p>
              ) : (
                <span className="text-danger">At least one badge is needed</span>
              )}
              {selectedBadges.map((badge, index) => (
                <div key={index} className="d-flex align-items-center my-3">
                  <input
                    type="text"
                    className="form-control me-2"
                    value={badge}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      "--bs-btn-font-size": " 1.3rem",
                      "--bs-btn-padding-x": "0.25rem",
                      "--bs-btn-padding-y": "0.20rem",
                    }}
                    onClick={() =>
                      setSelectedBadges(
                        selectedBadges.filter((_, i) => i !== index)
                      )
                    }
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>
            <div className="form-group my-3">
              <label htmlFor="inputCourses" className="ms-1">
                Courses Completed
              </label>
              <MultiValueInput placeholder="Course" onAdd={handleCourseAdd} />
              {courses.map((course, index) => (
                <div key={index} className="d-flex align-items-center my-3">
                  <input
                    type="text"
                    className="form-control me-2"
                    value={course}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      "--bs-btn-font-size": " 1.3rem",
                      "--bs-btn-padding-x": "0.25rem",
                      "--bs-btn-padding-y": "0.20rem",
                    }}
                    onClick={() =>
                      setCourses(courses.filter((_, i) => i !== index))
                    }
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>
            <div className="row mt-4">
              <div className="form-group col-6">
                <label htmlFor="inputInternshipDuration" className="ms-1">
                  Internship Duration (m)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputInternshipDuration"
                  placeholder="Duration"
                  value={internshipDuration}
                  onChange={(e) => setInternshipDuration(e.target.value)}
                  min="1"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="inputInternshipDomains" className="ms-1">
                  Internship Areas / Domains
                </label>

                <MultiValueInput
                  placeholder="Domain"
                  onAdd={handleInternshipDomainAdd}
                />

                {internshipDomains.map((domain, index) => (
                  <div key={index} className="d-flex align-items-center my-2">
                    <input
                      type="text"
                      className="form-control me-2"
                      value={domain}
                      readOnly
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{
                        "--bs-btn-font-size": " 1.3rem",
                        "--bs-btn-padding-x": "0.25rem",
                        "--bs-btn-padding-y": "0.20rem",
                      }}
                      onClick={() =>
                        setInternshipDomains(
                          internshipDomains.filter((_, i) => i !== index)
                        )
                      }
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="row my-3">
              <div className="form-group col">
                <label htmlFor="inputEmploymentDuration" className="ms-1">
                  Employment Duration (m)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputEmploymentDuration"
                  placeholder="Duration"
                  value={employmentDuration}
                  onChange={(e) => setEmploymentDuration(e.target.value)}
                  min="1"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="inputEmploymentAreas" className="ms-1">
                  Employment Areas
                </label>
                <MultiValueInput
                  placeholder="Area"
                  onAdd={handleEmploymentAreaAdd}
                />
                {employmentAreas.map((area, index) => (
                  <div key={index} className="d-flex align-items-center my-2">
                    <input
                      type="text"
                      className="form-control me-2"
                      value={area}
                      readOnly
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{
                        "--bs-btn-font-size": " 1.3rem",
                        "--bs-btn-padding-x": "0.25rem",
                        "--bs-btn-padding-y": "0.15rem",
                      }}
                      onClick={() =>
                        setEmploymentAreas(
                          employmentAreas.filter((_, i) => i !== index)
                        )
                      }
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="inputRecommendations" className="ms-1">
                Recommendations
              </label>
              <textarea
                className="form-control"
                id="inputRecommendations"
                rows="3"
                value={recommendations}
                onChange={(e) => setRecommendations(e.target.value)}
              ></textarea>
            </div>

            <div className="d-flex justify-content-center my-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DataForm;
