import React from "react";
import { Link } from "react-router-dom";

const Applications = () => {
  const applications = [
    {
      application_id: 1,
      applied_on: "2026-08-10",
      status: "SHORTLISTED",

      job: {
        job_id: 1,
        title: "Senior React Developer",
        location: "Noida, India",
        work_mode: "HYBRID",
        employment_type: "FULL_TIME",
        salary_min: 1000000,
        salary_max: 1500000,
        salary_currency: "INR",
      },

      company: {
        company_id: 1,
        company_name: "TechNova Solutions",
        industry: "Information Technology",
        company_size: 500,
        company_logo: "",
      },
    },

    {
      application_id: 2,
      applied_on: "2026-08-08",
      status: "UNDER_REVIEW",

      job: {
        job_id: 2,
        title: "Node.js Developer",
        location: "Delhi, India",
        work_mode: "ONSITE",
        employment_type: "FULL_TIME",
        salary_min: 700000,
        salary_max: 1200000,
        salary_currency: "INR",
      },

      company: {
        company_id: 2,
        company_name: "Vertex Technologies",
        industry: "Software Development",
        company_size: 300,
        company_logo: "",
      },
    },

    {
      application_id: 3,
      applied_on: "2026-08-05",
      status: "INTERVIEW",

      job: {
        job_id: 3,
        title: "Frontend Engineer",
        location: "Remote",
        work_mode: "REMOTE",
        employment_type: "FULL_TIME",
        salary_min: 800000,
        salary_max: 1400000,
        salary_currency: "INR",
      },

      company: {
        company_id: 3,
        company_name: "PixelCraft Labs",
        industry: "Information Technology",
        company_size: 150,
        company_logo: "",
      },
    },

    {
      application_id: 4,
      applied_on: "2026-07-28",
      status: "REJECTED",

      job: {
        job_id: 4,
        title: "Full Stack Developer",
        location: "Gurugram, India",
        work_mode: "HYBRID",
        employment_type: "FULL_TIME",
        salary_min: 1200000,
        salary_max: 1800000,
        salary_currency: "INR",
      },

      company: {
        company_id: 4,
        company_name: "CloudMatrix Technologies",
        industry: "Cloud Computing",
        company_size: 800,
        company_logo: "",
      },
    },

    {
      application_id: 5,
      applied_on: "2026-07-20",
      status: "APPLIED",

      job: {
        job_id: 5,
        title: "JavaScript Developer",
        location: "Bangalore, India",
        work_mode: "HYBRID",
        employment_type: "FULL_TIME",
        salary_min: 600000,
        salary_max: 1000000,
        salary_currency: "INR",
      },

      company: {
        company_id: 5,
        company_name: "DigitalWorks India",
        industry: "Information Technology",
        company_size: 250,
        company_logo: "",
      },
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "SHORTLISTED":
        return {
          backgroundColor: "#f8eef2",
          color: "#7f1d3f",
        };

      case "INTERVIEW":
        return {
          backgroundColor: "#faf5e8",
          color: "#8a681f",
        };

      case "UNDER_REVIEW":
        return {
          backgroundColor: "#f4f4f5",
          color: "#52525b",
        };

      case "REJECTED":
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

  return (
    <div>

      {/* ================= HEADER ================= */}
      <div className="mb-4">

        <p
          className="fw-semibold mb-1"
          style={{
            color: "#7f1d3f",
            letterSpacing: "1px",
          }}
        >
          APPLICATION TRACKER
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

          <div>
            <h2 className="fw-bold mb-1">
              My Applications
            </h2>

            <p className="text-secondary mb-0">
              Track the progress of your job applications.
            </p>
          </div>

          <Link
            to="/candidate/jobs"
            className="btn text-white px-4 py-2 rounded-3 fw-semibold"
            style={{
              background:
                "linear-gradient(90deg, #7f1d3f, #9f3157)",
            }}
          >
            Find More Jobs
          </Link>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Total Applications
              </small>

              <h2 className="fw-bold mt-2 mb-0">
                12
              </h2>

              <small className="text-secondary">
                All submitted applications
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Under Review
              </small>

              <h2 className="fw-bold mt-2 mb-0">
                4
              </h2>

              <small className="text-secondary">
                Awaiting recruiter response
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <small className="text-secondary">
              Shortlisted
            </small>

            <div className="card-body p-4 pt-2">

              <h2
                className="fw-bold mt-2 mb-0"
                style={{ color: "#7f1d3f" }}
              >
                3
              </h2>

              <small className="text-secondary">
                Applications shortlisted
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Interviews
              </small>

              <h2
                className="fw-bold mt-2 mb-0"
                style={{ color: "#8a681f" }}
              >
                2
              </h2>

              <small className="text-secondary">
                Interview opportunities
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FILTER BAR ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-3">

          <div className="row g-2 align-items-center">

            <div className="col-lg-6">

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  ⌕
                </span>

                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Search applications..."
                />

              </div>

            </div>


            <div className="col-lg-3">

              <select className="form-select bg-light border-0">

                <option>All Applications</option>
                <option>APPLIED</option>
                <option>UNDER_REVIEW</option>
                <option>SHORTLISTED</option>
                <option>INTERVIEW</option>
                <option>REJECTED</option>

              </select>

            </div>


            <div className="col-lg-3">

              <select className="form-select bg-light border-0">

                <option>Newest First</option>
                <option>Oldest First</option>

              </select>

            </div>

          </div>

        </div>

      </div>


      {/* ================= APPLICATION LIST ================= */}
      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-body p-0">

          {/* TABLE HEADER */}
          <div className="d-none d-lg-block border-bottom px-4 py-3">

            <div className="row">

              <div className="col-lg-4">
                <small className="text-secondary fw-semibold">
                  JOB
                </small>
              </div>

              <div className="col-lg-2">
                <small className="text-secondary fw-semibold">
                  LOCATION
                </small>
              </div>

              <div className="col-lg-2">
                <small className="text-secondary fw-semibold">
                  APPLIED ON
                </small>
              </div>

              <div className="col-lg-2">
                <small className="text-secondary fw-semibold">
                  STATUS
                </small>
              </div>

              <div className="col-lg-2 text-end">
                <small className="text-secondary fw-semibold">
                  ACTION
                </small>
              </div>

            </div>

          </div>


          {/* APPLICATION ITEMS */}
          {applications.map((application) => (

            <div
              key={application.application_id}
              className="border-bottom px-4 py-4"
            >

              <div className="row align-items-center g-3">

                {/* JOB */}
                <div className="col-12 col-lg-4">

                  <div className="d-flex align-items-center">

                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      {application.company.company_name.charAt(0)}
                    </div>

                    <div>

                      <Link
                        to={`/candidate/jobs/${application.job.job_id}`}
                        className="text-decoration-none"
                      >
                        <h6
                          className="fw-bold mb-1"
                          style={{ color: "#292524" }}
                        >
                          {application.job.title}
                        </h6>
                      </Link>

                      <small className="text-secondary">
                        {application.company.company_name}
                      </small>

                    </div>

                  </div>

                </div>


                {/* LOCATION */}
                <div className="col-6 col-lg-2">

                  <small className="text-secondary d-lg-none">
                    Location
                  </small>

                  <div className="text-dark small mt-1 mt-lg-0">
                    📍 {application.job.location}
                  </div>

                  <small className="text-secondary">
                    {application.job.work_mode}
                  </small>

                </div>


                {/* APPLIED DATE */}
                <div className="col-6 col-lg-2">

                  <small className="text-secondary d-lg-none">
                    Applied On
                  </small>

                  <div className="text-dark small mt-1 mt-lg-0">
                    {new Date(
                      application.applied_on
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>

                </div>


                {/* STATUS */}
                <div className="col-6 col-lg-2">

                  <small className="text-secondary d-lg-none">
                    Status
                  </small>

                  <div className="mt-1 mt-lg-0">

                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={getStatusStyle(
                        application.status
                      )}
                    >
                      {formatStatus(
                        application.status
                      )}
                    </span>

                  </div>

                </div>


                {/* ACTION */}
                <div className="col-6 col-lg-2 text-lg-end">

                  <Link
                    to={`/candidate/jobs/${application.job.job_id}`}
                    className="btn btn-sm px-3"
                    style={{
                      border: "1px solid #7f1d3f",
                      color: "#7f1d3f",
                    }}
                  >
                    View Job
                  </Link>

                </div>

              </div>


              {/* ADDITIONAL INFORMATION */}
              <div className="row mt-3">

                <div className="col-lg-4 offset-lg-1">

                  <small className="text-secondary">
                    {formatEmploymentType(
                      application.job.employment_type
                    )}
                  </small>

                  <span className="mx-2 text-secondary">
                    •
                  </span>

                  <small className="text-secondary">
                    {formatSalary(application.job)}
                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= PAGINATION ================= */}
      <div className="d-flex justify-content-between align-items-center mt-4">

        <small className="text-secondary">
          Showing 1–5 of 12 applications
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
  );
};

export default Applications;