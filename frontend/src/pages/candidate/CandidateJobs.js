import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getJobs } from "../../services/job.service";
import { useAuth } from '../../context/AuthProvider';
import Loader from "../../common/Loader";
import { applyjob } from "../../services/application.service";

const CandidateJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState([]);
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
  const clearFilter = () => {
    setFilters([]);
  }
  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      // Employment allows multiple selections
      if (type === "employment") {
        const exists = prev.some(
          (item) =>
            item.type === "employment" &&
            item.value === value
        );

        if (exists) {
          return prev.filter(
            (item) =>
              !(item.type === "employment" &&
                item.value === value)
          );
        }

        return [...prev, { type, value }];
      }

      // Category, experience and salary
      // allow only one selection
      const filtered = prev.filter(
        (item) => item.type !== type
      );

      if (!value) {
        return filtered;
      }

      return [
        ...filtered,
        {
          type,
          value
        }
      ];
    });
  };
  const applythisJob = async (id) => {
    try {
      const response = await applyjob(id);
      if (response.data && response.data.statusCode === 200) {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  const getAllJobs = async (limit, offset, filters) => {
    try {
      const response = await getJobs(limit, offset, filters);
      console.log(response);
      if (response.data?.statusCode === 200) {
        setJobs(response.data?.data?.jobs);
        setTotal(response.data?.data?.total);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  const PAGE_NUMBER = Math.ceil(total / 5);
  const offset = currentPage * 5;
  useEffect(() => {
    getAllJobs(5, offset, filters);
  }, [currentPage, filters])
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
                  onClick={clearFilter}
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

                <select
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  className="form-select bg-light border-0">

                  <option value="">All Categories</option>
                  <option value="1">Software Development</option>
                  <option value="2">Data Science</option>
                  <option value="3">UI/UX Design</option>
                  <option value="4">Marketing</option>

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
                      value="FULL_TIME"
                      onChange={(e) =>
                        handleFilterChange(
                          "employment",
                          e.target.value
                        )
                      }
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
                      value="PART_TIME"
                      onChange={(e) =>
                        handleFilterChange(
                          "employment",
                          e.target.value
                        )
                      }
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
                      value="CONTRACT"
                      onChange={(e) =>
                        handleFilterChange(
                          "employment",
                          e.target.value
                        )
                      }
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
                      value="INTERNSHIP"
                      onChange={(e) =>
                        handleFilterChange(
                          "employment",
                          e.target.value
                        )
                      }
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

                <select
                  onChange={(e) =>
                    handleFilterChange(
                      "experience",
                      e.target.value
                    )
                  }
                  className="form-select bg-light border-0">

                  <option value="">Any Experience</option>
                  <option value="0-2">0 - 2 Years</option>
                  <option value="2-4">2 - 4 Years</option>
                  <option value="4-6">4 - 6 Years</option>
                  <option value="6+">6+ Years</option>

                </select>

              </div>


              {/* SALARY */}
              <div>

                <label className="form-label fw-semibold">
                  Salary
                </label>

                <select
                  onChange={(e) =>
                    handleFilterChange(
                      "salary",
                      e.target.value
                    )
                  }
                  className="form-select bg-light border-0">

                  <option value="">Any Salary</option>
                  <option value="0-5">₹0 - ₹5 LPA</option>
                  <option value="5-10">₹5 - ₹10 LPA</option>
                  <option value="10-15">₹10 - ₹15 LPA</option>
                  <option value="15+">₹15+ LPA</option>

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
          {jobs.length > 0 ? (jobs.map((job) => (

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
                        src={job?.company?.company_logo} />
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
                          {job?.company?.company_name}
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

                      {job?.skills?.split(",").map((skill) => (

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
                          onClick={()=>applythisJob(job.job_id)}
                          className={`btn btn-sm text-white px-3 ${job?.Applications?.length > 0 ? 'disabled':''}`}
                          style={{
                            backgroundColor: job?.Applications?.length > 0 ? "#aea8a8d6" : "#7f1d3f"
                          }}
                        >
                          {job?.Applications?.length > 0 ? job?.Applications[0]?.status : 'Apply Now'}
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))
          ) : (
            <p className="text-center">Job not found</p>
          )
          }


          {/* ================= PAGINATION ================= */}
          <div className="d-flex justify-content-center mt-4">

            <nav>

              <ul className="pagination">

                <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="page-link">
                    Previous
                  </button>
                </li>
                {
                  [...Array(PAGE_NUMBER)].map((_, index) => (
                    <li className={`page-item ${currentPage === index ? 'active' : ''}`} key={index}>
                      <button
                        onClick={() => setCurrentPage(index)}
                        className="page-link">
                        {index + 1}
                      </button>
                    </li>
                  ))
                }
                <li className={`page-item ${currentPage + 1 === PAGE_NUMBER ? 'disabled' : ''}`}>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="page-link">
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