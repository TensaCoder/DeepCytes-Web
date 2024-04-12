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

  // Validation useStates for all inputs
  const [idValidate, setIdValidate] = useState(true);
  const [nameValidate, setNameValidate] = useState(true);
  const [dobValidate, setDobValidate] = useState(true);
  const [involvementValidate, setInvolvementValidate] = useState(true);
  const [coursesValidate, setCoursesValidate] = useState(true);
  const [internshipDurationValidate, setInternshipDurationValidate] =
    useState(true);
  const [internshipDomainsValidate, setInternshipDomainsValidate] =
    useState(true);
  const [employmentDurationValidate, setEmploymentDurationValidate] =
    useState(true);
  const [employmentAreasValidate, setEmploymentAreasValidate] = useState(true);
  const [recommendationsValidate, setRecommendationsValidate] = useState(true);
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

  const checkValidation = () => {
    //Validate ID
    if (id == null || id.length !== 10) {
      setIdValidate(false);
      return false;
    }

    //Validate name
    if (!name || name.trim() === "") {
      setNameValidate(false);
      return false;
    }

    //Validate DOB
    if (dob == null || dob.trim() === "") {
      setDobValidate(false);
      return false;
    }

    //Validate Involvement
    if (!involvement || involvement.length === 0) {
      setInvolvementValidate(false);
      return false;
    }

    // Validate Internship Duration (if not null and is only integer)
    // if (
    //   internshipDuration.trim() !== ""
    // ) {
    //   console.log(isNaN(parseInt(internshipDuration)));
    //   setInternshipDurationValidate(false);
    //   return false;
    // }

    if (internshipDuration === "") {
      setInternshipDurationValidate(false);
      return false;
    }

    // const internshipDurationAsNumber = parseInt(internshipDuration);
    // if (isNaN(internshipDurationAsNumber) || internshipDurationAsNumber <= 0 || !Number.isInteger(internshipDurationAsNumber)) {
    //   setInternshipDurationValidate(false);
    //   return false;
    // }

    // if (isNaN(internshipDuration) || internshipDuration <= 0 || !Number.isInteger(internshipDuration)) {
    //   setInternshipDurationValidate(false);
    //   return false;
    // }

    // Validate Employment Duration (if not null and is only integer)
    if (employmentDuration === "") {
      setEmploymentDurationValidate(false);
      return false;
    }

    // Validate badges
    if (selectedBadges.length === 0) {
      // alert("Please select at least one badge.");
      setBadgesValidation(false);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call checkValidation
    let isValid = checkValidation();
    if (isValid === false) {
      return;
    }

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
                  onChange={(e) => {
                    setId(e.target.value);
                    setIdValidate(true);
                  }}
                />
                {idValidate ? (
                  <p></p>
                ) : (
                  <span className="text-danger">
                    Cannot be blank and must be 10 characters
                  </span>
                )}
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
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameValidate(true);
                  }}
                />
                {nameValidate ? (
                  <p></p>
                ) : (
                  <span className="text-danger">Cannot be blank</span>
                )}
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
                  onChange={(e) => {
                    setDob(e.target.value);
                    setDobValidate(true);
                  }}
                />
                {dobValidate ? (
                  <p></p>
                ) : (
                  <span className="text-danger">Cannot be blank</span>
                )}
              </div>
              <div className="form-group col">
                <label htmlFor="inputInvolvement" className="ms-1">
                  Involvement
                </label>
                <div className="checkbox-grid">
                  <label>
                    <input
                      type="checkbox"
                      value="Course"
                      className="me-1"
                      checked={involvement.includes("Course")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setInvolvement([...involvement, "Course"]);
                        } else {
                          setInvolvement(
                            involvement.filter((item) => item !== "Course")
                          );
                        }
                        setInvolvementValidate(true);
                      }}
                    />
                    Course
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Internship"
                      className="me-1"
                      checked={involvement.includes("Internship")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setInvolvement([...involvement, "Internship"]);
                        } else {
                          setInvolvement(
                            involvement.filter((item) => item !== "Internship")
                          );
                        }
                        setInvolvementValidate(true);
                      }}
                    />
                    Internship
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Employee"
                      className="me-1"
                      checked={involvement.includes("Employee")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setInvolvement([...involvement, "Employee"]);
                        } else {
                          setInvolvement(
                            involvement.filter((item) => item !== "Employee")
                          );
                        }
                        setInvolvementValidate(true);
                      }}
                    />
                    Employee
                  </label>
                </div>
                {!involvementValidate && (
                  <span className="text-danger">Cannot be blank</span>
                )}
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
                <span className="text-danger">
                  At least one badge is needed
                </span>
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
                  onChange={(e) => {
                    let num = parseInt(e.target.value);
                    if (!isNaN(num)) setInternshipDuration(num);
                    setInternshipDurationValidate(true);
                  }}
                />
                {internshipDurationValidate ? (
                  <p></p>
                ) : (
                  <span className="text-danger">Integer number required</span>
                )}
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
                  // onChange={(e) => setEmploymentDuration(e.target.value)}
                  onChange={(e) => {
                    let num = parseInt(e.target.value);
                    if (!isNaN(num)) setEmploymentDuration(num);
                    setEmploymentDurationValidate(true);
                  }}
                  // min="1"
                />
                {employmentDurationValidate ? (
                  <p></p>
                ) : (
                  <span className="text-danger">Integer number required</span>
                )}
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
