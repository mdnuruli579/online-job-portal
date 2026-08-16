import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getJobs } from "../../services/job.service";

const CandidateJobs = () => {
  const [jobs,setJobs]=useState([]);
  const [total,setTotal]=useState(0);


  const formatSalary = (job) => {
    const min = job.salary_min / 100000;
    const max = job.salary_max / 100000;

    return `₹${min} - ₹${max} LPA`;
  };

  const formatEmploymentType = (type) => {
    return type
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatWorkMode = (mode) => {
    return mode.charAt(0) + mode.slice(1).toLowerCase();
  };
  const getAllJobs=async()=>{
    try {
      const response=await getJobs();
      console.log(response);
      if(response.data?.statusCode===200){
        setJobs(response.data?.data?.jobs);
        setTotal(response.data?.data?.total);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    getAllJobs();
  },[])
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
              CAREER OPPORTUNITIES
            </p>

            <h2 className="fw-bold mb-1">
              Find your next job
            </h2>

            <p className="text-secondary mb-0">
              Explore opportunities that match your skills and experience.
            </p>
          </div>

          <div className="text-md-end">
            <span className="text-secondary">
              <strong className="text-dark">
                {total}
              </strong>{" "}
              jobs available
            </span>
          </div>

        </div>

      </div>


      {/* ================= SEARCH ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4">

          <div className="row g-3">

            <div className="col-lg-5">

              <label className="form-label fw-semibold">
                Search Jobs
              </label>

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  ⌕
                </span>

                <input
                  type="text"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="Job title, skills or keywords"
                />

              </div>

            </div>


            <div className="col-lg-3">

              <label className="form-label fw-semibold">
                Location
              </label>

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  📍
                </span>

                <input
                  type="text"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="City or location"
                />

              </div>

            </div>


            <div className="col-lg-2">

              <label className="form-label fw-semibold">
                Work Mode
              </label>

              <select className="form-select form-select-lg bg-light border-0">

                <option>All</option>
                <option>ONSITE</option>
                <option>REMOTE</option>
                <option>HYBRID</option>

              </select>

            </div>


            <div className="col-lg-2 d-flex align-items-end">

              <button
                className="btn btn-lg w-100 text-white fw-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #7f1d3f, #9f3157)",
                }}
              >
                Search
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FILTER + JOBS ================= */}
      <div className="row g-4">

        {/* ================= FILTER SIDEBAR ================= */}
        <div className="col-lg-3">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h5 className="fw-bold mb-0">
                  Filters
                </h5>

                <button
                  className="btn btn-sm p-0"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  Clear
                </button>

              </div>


              {/* CATEGORY */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Job Category
                </label>

                <select className="form-select bg-light border-0">

                  <option>All Categories</option>
                  <option>Software Development</option>
                  <option>Data Science</option>
                  <option>UI/UX Design</option>
                  <option>Marketing</option>

                </select>

              </div>


              {/* EMPLOYMENT */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Employment Type
                </label>

                <div>

                  <div className="form-check mb-2">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="fulltime"
                    />

                    <label
                      className="form-check-label text-secondary"
                      htmlFor="fulltime"
                    >
                      Full Time
                    </label>

                  </div>


                  <div className="form-check mb-2">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="parttime"
                    />

                    <label
                      className="form-check-label text-secondary"
                      htmlFor="parttime"
                    >
                      Part Time
                    </label>

                  </div>


                  <div className="form-check mb-2">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="contract"
                    />

                    <label
                      className="form-check-label text-secondary"
                      htmlFor="contract"
                    >
                      Contract
                    </label>

                  </div>


                  <div className="form-check">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="internship"
                    />

                    <label
                      className="form-check-label text-secondary"
                      htmlFor="internship"
                    >
                      Internship
                    </label>

                  </div>

                </div>

              </div>


              {/* EXPERIENCE */}
              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Experience
                </label>

                <select className="form-select bg-light border-0">

                  <option>Any Experience</option>
                  <option>0 - 2 Years</option>
                  <option>2 - 4 Years</option>
                  <option>4 - 6 Years</option>
                  <option>6+ Years</option>

                </select>

              </div>


              {/* SALARY */}
              <div>

                <label className="form-label fw-semibold">
                  Salary
                </label>

                <select className="form-select bg-light border-0">

                  <option>Any Salary</option>
                  <option>₹0 - ₹5 LPA</option>
                  <option>₹5 - ₹10 LPA</option>
                  <option>₹10 - ₹15 LPA</option>
                  <option>₹15+ LPA</option>

                </select>

              </div>

            </div>

          </div>

        </div>


        {/* ================= JOB LIST ================= */}
        <div className="col-lg-9">

          {/* SORT */}
          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>
              <span className="text-secondary">
                Showing{" "}
                <strong className="text-dark">
                  {total}
                </strong>{" "}
                jobs
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">

              <small className="text-secondary">
                Sort by
              </small>

              <select
                className="form-select form-select-sm"
                style={{ width: "160px" }}
              >
                <option>Newest</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Experience</option>
              </select>

            </div>

          </div>


          {/* JOB CARDS */}
          {jobs.map((job) => (

            <div
              className="card border-0 shadow-sm rounded-4 mb-3"
              key={job.job_id}
            >

              <div className="card-body p-4">

                <div className="row">

                  {/* COMPANY LOGO */}
                  <div className="col-auto">

                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                        fontSize: "23px",
                        fontWeight: "700",
                      }}
                    >
                      <img 
                      height={40}
                      width={40}
                      src={job.Company.company_logo}/>
                    </div>

                  </div>


                  {/* JOB INFORMATION */}
                  <div className="col">

                    <div className="d-flex justify-content-between">

                      <div>

                        <Link
                          to={`/candidate/jobs/${job.job_id}`}
                          className="text-decoration-none"
                        >
                          <h5
                            className="fw-bold mb-1"
                            style={{
                              color: "#292524",
                            }}
                          >
                            {job.title}
                          </h5>
                        </Link>

                        <p className="text-secondary mb-2">
                          {job?.Company?.company_name}
                        </p>

                      </div>


                      <button
                        className="btn border-0 fs-4"
                        style={{
                          color: "#7f1d3f",
                        }}
                      >
                        ♡
                      </button>

                    </div>


                    {/* JOB META */}
                    <div className="d-flex flex-wrap gap-2 mb-3">

                      <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                        📍 {job?.location}
                      </span>

                      <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                        ◉ {formatWorkMode(job.work_mode)}
                      </span>

                      <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                        💼 {formatEmploymentType(job.employment_type)}
                      </span>

                      <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                        ₹ {job.salary_min / 100000} -{" "}
                        {job.salary_max / 100000} LPA
                      </span>

                    </div>


                    {/* SKILLS */}
                    <div className="d-flex flex-wrap gap-2 mb-3">

                      {job.skills.split(",").map((skill) => (

                        <span
                          key={skill}
                          className="badge rounded-pill"
                          style={{
                            backgroundColor: "#f8eef2",
                            color: "#7f1d3f",
                            fontWeight: "500",
                          }}
                        >
                          {skill.trim()}
                        </span>

                      ))}

                    </div>


                    {/* BOTTOM */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">

                      <div>

                        <small className="text-secondary">
                          Experience:{" "}
                          <strong className="text-dark">
                            {job.experience_min} -{" "}
                            {job.experience_max} years
                          </strong>
                        </small>

                        <span className="mx-2 text-secondary">
                          •
                        </span>

                        <small className="text-secondary">
                          {job.vacancies}{" "}
                          {job.vacancies === 1
                            ? "vacancy"
                            : "vacancies"}
                        </small>

                      </div>


                      <div className="d-flex gap-2">

                        <Link
                          to={`/candidate/jobs/${job.job_id}`}
                          className="btn btn-sm px-3"
                          style={{
                            border: "1px solid #7f1d3f",
                            color: "#7f1d3f",
                          }}
                        >
                          View Details
                        </Link>

                        <button
                          className="btn btn-sm text-white px-3"
                          style={{
                            backgroundColor: "#7f1d3f",
                          }}
                        >
                          Apply Now
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}


          {/* ================= PAGINATION ================= */}
          <div className="d-flex justify-content-center mt-4">

            <nav>

              <ul className="pagination">

                <li className="page-item disabled">
                  <button className="page-link">
                    Previous
                  </button>
                </li>

                <li className="page-item active">
                  <button
                    className="page-link"
                    style={{
                      backgroundColor: "#7f1d3f",
                      borderColor: "#7f1d3f",
                    }}
                  >
                    1
                  </button>
                </li>

                <li className="page-item">
                  <button className="page-link">
                    2
                  </button>
                </li>

                <li className="page-item">
                  <button className="page-link">
                    3
                  </button>
                </li>

                <li className="page-item">
                  <button className="page-link">
                    Next
                  </button>
                </li>

              </ul>

            </nav>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CandidateJobs;