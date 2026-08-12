import React from "react";
import { Link } from "react-router-dom";

const RecruiterJobs = () => {
  const jobs = [
    {
      job_id: 1,
      title: "Senior React Developer",
      job_description:
        "Develop and maintain modern web applications using React.",
      requirements:
        "3+ years of frontend development experience with strong React knowledge.",
      skills: "React, JavaScript, HTML, CSS, Bootstrap",
      category_id: 1,
      company_id: 1,
      recruiter_id: 5,
      location: "Noida, India",
      work_mode: "HYBRID",
      employment_type: "FULL_TIME",
      experience_min: 3,
      experience_max: 6,
      salary_min: 1000000,
      salary_max: 1500000,
      salary_currency: "INR",
      vacancies: 2,
      posted_on: "2026-08-10",
      application_deadline: "2026-09-10",
      status: "ACTIVE",

      company: {
        company_id: 1,
        company_name: "TechNova Solutions",
        industry: "Information Technology",
        company_size: 500,
        company_logo: "",
        company_website: "https://technova.example.com",
        about_company:
          "Technology company building modern software solutions.",
      },
    },

    {
      job_id: 2,
      title: "Node.js Developer",
      job_description:
        "Build scalable backend services and REST APIs using Node.js.",
      requirements:
        "2+ years of Node.js and Express development experience.",
      skills: "Node.js, Express, Sequelize, MySQL",
      category_id: 1,
      company_id: 1,
      recruiter_id: 5,
      location: "Delhi, India",
      work_mode: "ONSITE",
      employment_type: "FULL_TIME",
      experience_min: 2,
      experience_max: 5,
      salary_min: 700000,
      salary_max: 1200000,
      salary_currency: "INR",
      vacancies: 3,
      posted_on: "2026-08-08",
      application_deadline: "2026-09-05",
      status: "ACTIVE",

      company: {
        company_id: 1,
        company_name: "TechNova Solutions",
        industry: "Information Technology",
        company_size: 500,
        company_logo: "",
        company_website: "https://technova.example.com",
        about_company:
          "Technology company building modern software solutions.",
      },
    },

    {
      job_id: 3,
      title: "Frontend Engineer",
      job_description:
        "Create responsive and accessible user interfaces for web applications.",
      requirements:
        "Strong JavaScript fundamentals and experience with modern frontend frameworks.",
      skills: "React, JavaScript, TypeScript, CSS",
      category_id: 1,
      company_id: 1,
      recruiter_id: 5,
      location: "Remote",
      work_mode: "REMOTE",
      employment_type: "FULL_TIME",
      experience_min: 2,
      experience_max: 4,
      salary_min: 800000,
      salary_max: 1400000,
      salary_currency: "INR",
      vacancies: 2,
      posted_on: "2026-08-06",
      application_deadline: "2026-09-15",
      status: "CLOSED",

      company: {
        company_id: 1,
        company_name: "TechNova Solutions",
        industry: "Information Technology",
        company_size: 500,
        company_logo: "",
        company_website: "https://technova.example.com",
        about_company:
          "Technology company building modern software solutions.",
      },
    },

    {
      job_id: 4,
      title: "Full Stack Developer",
      job_description:
        "Work across frontend and backend systems to build scalable applications.",
      requirements:
        "Experience with React, Node.js and relational databases.",
      skills: "React, Node.js, Express, MySQL, Sequelize",
      category_id: 1,
      company_id: 1,
      recruiter_id: 5,
      location: "Gurugram, India",
      work_mode: "HYBRID",
      employment_type: "CONTRACT",
      experience_min: 3,
      experience_max: 7,
      salary_min: 1200000,
      salary_max: 1800000,
      salary_currency: "INR",
      vacancies: 1,
      posted_on: "2026-07-25",
      application_deadline: "2026-08-25",
      status: "EXPIRED",

      company: {
        company_id: 1,
        company_name: "TechNova Solutions",
        industry: "Information Technology",
        company_size: 500,
        company_logo: "",
        company_website: "https://technova.example.com",
        about_company:
          "Technology company building modern software solutions.",
      },
    },

    {
      job_id: 5,
      title: "React Intern",
      job_description:
        "Assist the development team in building React-based applications.",
      requirements:
        "Basic knowledge of JavaScript and React.",
      skills: "React, JavaScript, HTML, CSS",
      category_id: 1,
      company_id: 1,
      recruiter_id: 5,
      location: "Noida, India",
      work_mode: "ONSITE",
      employment_type: "INTERNSHIP",
      experience_min: 0,
      experience_max: 1,
      salary_min: 150000,
      salary_max: 250000,
      salary_currency: "INR",
      vacancies: 4,
      posted_on: "2026-08-11",
      application_deadline: "2026-09-20",
      status: "DRAFT",

      company: {
        company_id: 1,
        company_name: "TechNova Solutions",
        industry: "Information Technology",
        company_size: 500,
        company_logo: "",
        company_website: "https://technova.example.com",
        about_company:
          "Technology company building modern software solutions.",
      },
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "ACTIVE":
        return {
          backgroundColor: "#f8eef2",
          color: "#7f1d3f",
        };

      case "DRAFT":
        return {
          backgroundColor: "#faf5e8",
          color: "#8a681f",
        };

      case "CLOSED":
        return {
          backgroundColor: "#f4f4f5",
          color: "#52525b",
        };

      case "EXPIRED":
        return {
          backgroundColor: "#fef2f2",
          color: "#b91c1c",
        };

      default:
        return {
          backgroundColor: "#f5f5f4",
          color: "#57534e",
        };
    }
  };

  const formatStatus = (status) => {
    return status
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatEmploymentType = (type) => {
    return type
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatSalary = (job) => {
    const min = job.salary_min / 100000;
    const max = job.salary_max / 100000;

    return `₹${min} - ₹${max} LPA`;
  };

  const activeJobs = jobs.filter(
    (job) => job.status === "ACTIVE"
  ).length;

  const draftJobs = jobs.filter(
    (job) => job.status === "DRAFT"
  ).length;

  const closedJobs = jobs.filter(
    (job) => job.status === "CLOSED"
  ).length;

  return (
    <div>

      {/* ================= HEADER ================= */}
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
              My Jobs
            </h2>

            <p className="text-secondary mb-0">
              Manage your job postings and track your hiring activity.
            </p>

          </div>


          <Link
            to="/recruiter/jobs/create"
            className="btn text-white px-4 py-2 rounded-3 fw-semibold"
            style={{
              background:
                "linear-gradient(90deg, #7f1d3f, #9f3157)",
            }}
          >
            + Post a Job
          </Link>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        {/* TOTAL */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Total Jobs
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    {jobs.length}
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  ▤
                </div>

              </div>

              <small className="text-secondary">
                All job postings
              </small>

            </div>

          </div>

        </div>


        {/* ACTIVE */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Active Jobs
                  </small>

                  <h2
                    className="fw-bold mt-2 mb-0"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    {activeJobs}
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  ✓
                </div>

              </div>

              <small className="text-secondary">
                Currently accepting applications
              </small>

            </div>

          </div>

        </div>


        {/* DRAFT */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Drafts
                  </small>

                  <h2
                    className="fw-bold mt-2 mb-0"
                    style={{
                      color: "#8a681f",
                    }}
                  >
                    {draftJobs}
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#faf5e8",
                    color: "#8a681f",
                  }}
                >
                  ✎
                </div>

              </div>

              <small className="text-secondary">
                Jobs waiting to be published
              </small>

            </div>

          </div>

        </div>


        {/* CLOSED */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Closed
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    {closedJobs}
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#f4f4f5",
                    color: "#52525b",
                  }}
                >
                  ✓
                </div>

              </div>

              <small className="text-secondary">
                No longer accepting applications
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FILTER / SEARCH ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-3">

          <div className="row g-2">

            <div className="col-lg-5">

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  ⌕
                </span>

                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Search jobs by title or skills..."
                />

              </div>

            </div>


            <div className="col-lg-3">

              <select className="form-select bg-light border-0">

                <option>All Status</option>
                <option>ACTIVE</option>
                <option>DRAFT</option>
                <option>CLOSED</option>
                <option>EXPIRED</option>

              </select>

            </div>


            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>All Work Modes</option>
                <option>ONSITE</option>
                <option>REMOTE</option>
                <option>HYBRID</option>

              </select>

            </div>


            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>Newest First</option>
                <option>Oldest First</option>

              </select>

            </div>

          </div>

        </div>

      </div>


      {/* ================= JOB LIST HEADER ================= */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <div>

          <h5 className="fw-bold mb-1">
            Job Postings
          </h5>

          <p className="text-secondary small mb-0">
            Manage all jobs posted by your account.
          </p>

        </div>

        <span className="text-secondary small">
          {jobs.length} postings
        </span>

      </div>


      {/* ================= JOB CARDS ================= */}
      {jobs.map((job) => (

        <div
          className="card border-0 shadow-sm rounded-4 mb-3"
          key={job.job_id}
        >

          <div className="card-body p-4">

            <div className="row align-items-center g-3">

              {/* COMPANY ICON */}
              <div className="col-auto">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "58px",
                    height: "58px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                    fontSize: "22px",
                    fontWeight: "700",
                  }}
                >
                  {job.company.company_name.charAt(0)}
                </div>

              </div>


              {/* JOB DETAILS */}
              <div className="col">

                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">

                  <div>

                    <h5 className="fw-bold mb-1">
                      {job.title}
                    </h5>

                    <p className="text-secondary mb-2">
                      {job.company.company_name}
                    </p>

                  </div>


                  <div>

                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={getStatusStyle(job.status)}
                    >
                      {formatStatus(job.status)}
                    </span>

                  </div>

                </div>


                {/* JOB INFORMATION */}
                <div className="d-flex flex-wrap gap-2 mb-3">

                  <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                    📍 {job.location}
                  </span>

                  <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                    ◉ {job.work_mode}
                  </span>

                  <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                    💼 {formatEmploymentType(job.employment_type)}
                  </span>

                  <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                    ₹ {formatSalary(job)}
                  </span>

                </div>


                {/* BOTTOM INFO */}
                <div className="row g-2">

                  <div className="col-md-3">

                    <small className="text-secondary d-block">
                      Experience
                    </small>

                    <small className="fw-semibold">
                      {job.experience_min} -{" "}
                      {job.experience_max} Years
                    </small>

                  </div>


                  <div className="col-md-3">

                    <small className="text-secondary d-block">
                      Vacancies
                    </small>

                    <small className="fw-semibold">
                      {job.vacancies}
                    </small>

                  </div>


                  <div className="col-md-3">

                    <small className="text-secondary d-block">
                      Posted On
                    </small>

                    <small className="fw-semibold">
                      {new Date(
                        job.posted_on
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </small>

                  </div>


                  <div className="col-md-3">

                    <small className="text-secondary d-block">
                      Deadline
                    </small>

                    <small className="fw-semibold">
                      {job.application_deadline
                        ? new Date(
                            job.application_deadline
                          ).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "Not specified"}
                    </small>

                  </div>

                </div>


                <hr className="my-3" />


                {/* ACTIONS */}
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">

                  <div>

                    <small className="text-secondary">
                      Skills:{" "}
                    </small>

                    <small className="fw-semibold">
                      {job.skills}
                    </small>

                  </div>


                  <div className="d-flex gap-2">

                    <Link
                      to={`/recruiter/jobs/${job.job_id}`}
                      className="btn btn-sm px-3"
                      style={{
                        border: "1px solid #7f1d3f",
                        color: "#7f1d3f",
                      }}
                    >
                      View
                    </Link>

                    <Link
                      to={`/recruiter/jobs/${job.job_id}/edit`}
                      className="btn btn-sm btn-light px-3"
                    >
                      Edit
                    </Link>

                    {job.status === "ACTIVE" && (
                      <Link
                        to={`/recruiter/jobs/${job.job_id}/applications`}
                        className="btn btn-sm text-white px-3"
                        style={{
                          backgroundColor: "#7f1d3f",
                        }}
                      >
                        Applications
                      </Link>
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      ))}


      {/* ================= PAGINATION ================= */}
      <div className="d-flex justify-content-between align-items-center mt-4">

        <small className="text-secondary">
          Showing 1–5 of {jobs.length} jobs
        </small>

        <nav>

          <ul className="pagination mb-0">

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
                Next
              </button>
            </li>

          </ul>

        </nav>

      </div>

    </div>
  );
};

export default RecruiterJobs;