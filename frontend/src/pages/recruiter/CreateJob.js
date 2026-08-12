import React from "react";
import { Link } from "react-router-dom";

const CreateJob = () => {
  const categories = [
    {
      category_id: 1,
      category_name: "Software Development",
    },
    {
      category_id: 2,
      category_name: "Data Science",
    },
    {
      category_id: 3,
      category_name: "UI/UX Design",
    },
    {
      category_id: 4,
      category_name: "DevOps",
    },
    {
      category_id: 5,
      category_name: "Digital Marketing",
    },
  ];

  return (
    <div>

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-4">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

          <div>

            <p
              className="fw-semibold mb-1"
              style={{
                color: "#7f1d3f",
                letterSpacing: "1px",
              }}
            >
              RECRUITER WORKSPACE
            </p>

            <h2 className="fw-bold mb-1">
              Post a New Job
            </h2>

            <p className="text-secondary mb-0">
              Create a job posting and find the right candidate for your
              organization.
            </p>

          </div>


          <Link
            to="/recruiter/jobs"
            className="btn btn-light px-4 py-2 rounded-3"
          >
            ← Back to My Jobs
          </Link>

        </div>

      </div>


      {/* ================= PROGRESS ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4">

          <div className="row g-3">

            <div className="col-md-4">

              <div className="d-flex align-items-center">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#7f1d3f",
                  }}
                >
                  1
                </div>

                <div>

                  <small className="text-secondary">
                    Step 1
                  </small>

                  <div className="fw-semibold">
                    Job Information
                  </div>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="d-flex align-items-center">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  2
                </div>

                <div>

                  <small className="text-secondary">
                    Step 2
                  </small>

                  <div className="fw-semibold">
                    Requirements
                  </div>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="d-flex align-items-center">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  3
                </div>

                <div>

                  <small className="text-secondary">
                    Step 3
                  </small>

                  <div className="fw-semibold">
                    Compensation & Details
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= JOB BASIC INFORMATION ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Job Information
            </h5>

            <p className="text-secondary small mb-0">
              Provide the basic information about the position.
            </p>

          </div>


          <div className="row g-4">

            {/* TITLE */}
            <div className="col-12">

              <label className="form-label fw-semibold">
                Job Title
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="e.g. Senior React Developer"
              />

              <small className="text-secondary">
                Use a clear and specific job title.
              </small>

            </div>


            {/* CATEGORY */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Job Category
              </label>

              <select className="form-select form-select-lg">

                <option value="">
                  Select category
                </option>

                {categories.map((category) => (

                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.category_name}
                  </option>

                ))}

              </select>

            </div>


            {/* LOCATION */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Location
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="e.g. Noida, India"
              />

            </div>


            {/* WORK MODE */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Work Mode
              </label>

              <select className="form-select form-select-lg">

                <option value="">
                  Select work mode
                </option>

                <option value="ONSITE">
                  Onsite
                </option>

                <option value="REMOTE">
                  Remote
                </option>

                <option value="HYBRID">
                  Hybrid
                </option>

              </select>

            </div>


            {/* EMPLOYMENT TYPE */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Employment Type
              </label>

              <select className="form-select form-select-lg">

                <option value="">
                  Select employment type
                </option>

                <option value="FULL_TIME">
                  Full Time
                </option>

                <option value="PART_TIME">
                  Part Time
                </option>

                <option value="CONTRACT">
                  Contract
                </option>

                <option value="INTERNSHIP">
                  Internship
                </option>

              </select>

            </div>

          </div>

        </div>

      </div>


      {/* ================= DESCRIPTION ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Job Description
            </h5>

            <p className="text-secondary small mb-0">
              Explain what the candidate will do in this role.
            </p>

          </div>


          <label className="form-label fw-semibold">
            Job Description
          </label>

          <textarea
            className="form-control"
            rows="7"
            placeholder="Describe the role, responsibilities, day-to-day work and what the candidate will be working on..."
          />

          <small className="text-secondary">
            Give candidates enough information to understand the role.
          </small>

        </div>

      </div>


      {/* ================= REQUIREMENTS ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Candidate Requirements
            </h5>

            <p className="text-secondary small mb-0">
              Define the experience and qualifications required.
            </p>

          </div>


          {/* REQUIREMENTS */}
          <div className="mb-4">

            <label className="form-label fw-semibold">
              Requirements
            </label>

            <textarea
              className="form-control"
              rows="6"
              placeholder="Example: Bachelor's degree in Computer Science, strong problem-solving skills, experience with React..."
            />

          </div>


          {/* SKILLS */}
          <div>

            <label className="form-label fw-semibold">
              Skills
            </label>

            <textarea
              className="form-control"
              rows="3"
              placeholder="React, JavaScript, Node.js, MySQL, Git"
            />

            <small className="text-secondary">
              Enter skills separated by commas.
            </small>

          </div>

        </div>

      </div>


      {/* ================= EXPERIENCE ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Experience
            </h5>

            <p className="text-secondary small mb-0">
              Specify the experience range required for this position.
            </p>

          </div>


          <div className="row g-4">

            {/* MIN */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Minimum Experience
              </label>

              <div className="input-group">

                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="0"
                  min="0"
                />

                <span className="input-group-text">
                  Years
                </span>

              </div>

            </div>


            {/* MAX */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Maximum Experience
              </label>

              <div className="input-group">

                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="5"
                  min="0"
                />

                <span className="input-group-text">
                  Years
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SALARY ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Compensation
            </h5>

            <p className="text-secondary small mb-0">
              Define the salary range offered for this position.
            </p>

          </div>


          <div className="row g-4">

            {/* CURRENCY */}
            <div className="col-md-4">

              <label className="form-label fw-semibold">
                Currency
              </label>

              <select className="form-select form-select-lg">

                <option value="INR">
                  INR - Indian Rupee
                </option>

              </select>

            </div>


            {/* MIN SALARY */}
            <div className="col-md-4">

              <label className="form-label fw-semibold">
                Minimum Salary
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  ₹
                </span>

                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="1000000"
                  min="0"
                />

              </div>

            </div>


            {/* MAX SALARY */}
            <div className="col-md-4">

              <label className="form-label fw-semibold">
                Maximum Salary
              </label>

              <div className="input-group">

                <span className="input-group-text">
                  ₹
                </span>

                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="1500000"
                  min="0"
                />

              </div>

            </div>

          </div>

          <div
            className="mt-4 p-3 rounded-3"
            style={{
              backgroundColor: "#faf5e8",
            }}
          >

            <small className="text-secondary">
              Example: ₹10,00,000 - ₹15,00,000 per year
            </small>

          </div>

        </div>

      </div>


      {/* ================= VACANCY & DEADLINE ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Hiring Details
            </h5>

            <p className="text-secondary small mb-0">
              Set the number of openings and application deadline.
            </p>

          </div>


          <div className="row g-4">

            {/* VACANCIES */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Number of Vacancies
              </label>

              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="1"
                min="1"
              />

            </div>


            {/* DEADLINE */}
            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Application Deadline
              </label>

              <input
                type="date"
                className="form-control form-control-lg"
              />

            </div>

          </div>

        </div>

      </div>


      {/* ================= PUBLISH SETTINGS ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <h5 className="fw-bold mb-1">
              Publishing Settings
            </h5>

            <p className="text-secondary small mb-0">
              Choose how you want to save this job posting.
            </p>

          </div>


          <div className="row g-3">

            {/* ACTIVE */}
            <div className="col-md-6">

              <label
                className="border rounded-4 p-4 d-block"
                style={{
                  cursor: "pointer",
                  borderColor: "#7f1d3f",
                }}
              >

                <div className="d-flex">

                  <input
                    type="radio"
                    name="status"
                    value="ACTIVE"
                    className="form-check-input mt-1 me-3"
                    defaultChecked
                  />

                  <div>

                    <h6 className="fw-bold mb-1">
                      Publish Job
                    </h6>

                    <p className="small text-secondary mb-0">
                      Make this job visible to candidates immediately.
                    </p>

                  </div>

                </div>

              </label>

            </div>


            {/* DRAFT */}
            <div className="col-md-6">

              <label
                className="border rounded-4 p-4 d-block"
                style={{
                  cursor: "pointer",
                }}
              >

                <div className="d-flex">

                  <input
                    type="radio"
                    name="status"
                    value="DRAFT"
                    className="form-check-input mt-1 me-3"
                  />

                  <div>

                    <h6 className="fw-bold mb-1">
                      Save as Draft
                    </h6>

                    <p className="small text-secondary mb-0">
                      Save the job and publish it later.
                    </p>

                  </div>

                </div>

              </label>

            </div>

          </div>

        </div>

      </div>


      {/* ================= ACTIONS ================= */}
      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-body p-4">

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

            <div>

              <small className="text-secondary">
                Make sure all job information is accurate before
                publishing.
              </small>

            </div>


            <div className="d-flex gap-2">

              <Link
                to="/recruiter/jobs"
                className="btn btn-light px-4"
              >
                Cancel
              </Link>

              <button
                className="btn text-white px-4 fw-semibold"
                style={{
                  backgroundColor: "#7f1d3f",
                }}
              >
                Publish Job
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateJob;