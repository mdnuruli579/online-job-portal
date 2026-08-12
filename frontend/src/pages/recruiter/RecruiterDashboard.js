import React from "react";
import { Link } from "react-router-dom";

const RecruiterDashboard = () => {
  const recruiter = {
    user_id: 5,
    full_name: "Rahul Sharma",
    email: "rahul@technova.com",
    phone: 9876543210,
    user_type: "RECRUITER",
    status: "ACTIVE",
  };

  const company = {
    company_id: 1,
    company_name: "TechNova Solutions",
    industry: "Information Technology",
    company_size: 500,
    company_logo: "",
    company_website: "https://technova.example.com",
    about_company:
      "Technology company building modern software solutions.",
  };

  const jobs = [
    {
      job_id: 1,
      title: "Senior React Developer",
      job_description:
        "Develop and maintain modern web applications using React.",
      requirements:
        "3+ years of frontend development experience.",
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
    },
    {
      job_id: 2,
      title: "Node.js Developer",
      job_description:
        "Build scalable backend services and REST APIs.",
      requirements:
        "2+ years of Node.js and Express development.",
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
    },
    {
      job_id: 3,
      title: "Frontend Engineer",
      job_description:
        "Create responsive user interfaces for web applications.",
      requirements:
        "Strong JavaScript and frontend framework experience.",
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
    },
  ];

  const applications = [
    {
      application_id: 101,
      applied_on: "2026-08-11",
      status: "SHORTLISTED",

      job: {
        job_id: 1,
        title: "Senior React Developer",
      },

      candidate: {
        user_id: 21,
        full_name: "Aman Kumar",
        email: "aman@example.com",
        phone: 9876543211,
        user_type: "CANDIDATE",
        status: "ACTIVE",
      },
    },
    {
      application_id: 102,
      applied_on: "2026-08-10",
      status: "UNDER_REVIEW",

      job: {
        job_id: 2,
        title: "Node.js Developer",
      },

      candidate: {
        user_id: 22,
        full_name: "Priya Singh",
        email: "priya@example.com",
        phone: 9876543212,
        user_type: "CANDIDATE",
        status: "ACTIVE",
      },
    },
    {
      application_id: 103,
      applied_on: "2026-08-09",
      status: "INTERVIEW",

      job: {
        job_id: 1,
        title: "Senior React Developer",
      },

      candidate: {
        user_id: 23,
        full_name: "Arjun Verma",
        email: "arjun@example.com",
        phone: 9876543213,
        user_type: "CANDIDATE",
        status: "ACTIVE",
      },
    },
  ];

  const activeJobs = jobs.filter(
    (job) => job.status === "ACTIVE"
  ).length;

  const draftJobs = jobs.filter(
    (job) => job.status === "DRAFT"
  ).length;

  const shortlisted = applications.filter(
    (application) => application.status === "SHORTLISTED"
  ).length;

  const interviews = applications.filter(
    (application) => application.status === "INTERVIEW"
  ).length;

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

  return (
    <div>

      {/* ================= WELCOME ================= */}
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
              RECRUITER DASHBOARD
            </p>

            <h2 className="fw-bold mb-1">
              Welcome back, {recruiter.full_name.split(" ")[0]} 👋
            </h2>

            <p className="text-secondary mb-0">
              Manage your hiring process and find the right talent.
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


      {/* ================= COMPANY BANNER ================= */}
      <div
        className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(110deg, #171717 0%, #4a1d2f 100%)",
        }}
      >

        <div className="card-body p-4">

          <div className="d-flex flex-column flex-md-row align-items-md-center">

            <div
              className="rounded-4 d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
              style={{
                width: "70px",
                height: "70px",
                background:
                  "linear-gradient(135deg, #7f1d3f, #9f3157)",
                fontSize: "28px",
              }}
            >
              {company.company_name.charAt(0)}
            </div>

            <div className="ms-md-4 mt-3 mt-md-0 text-white flex-grow-1">

              <h4 className="fw-bold mb-1">
                {company.company_name}
              </h4>

              <p className="text-white-50 mb-2">
                {company.industry} • {company.company_size}+ employees
              </p>

              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: "rgba(214,179,106,0.15)",
                  color: "#d6b36a",
                }}
              >
                Recruiter Account
              </span>

            </div>

            <Link
              to="/recruiter/company"
              className="btn btn-sm bg-white fw-semibold mt-3 mt-md-0"
              style={{
                color: "#7f1d3f",
              }}
            >
              Company Profile
            </Link>

          </div>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        {/* TOTAL APPLICATIONS */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Applications
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    48
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
                Across all your jobs
              </small>

            </div>

          </div>

        </div>


        {/* ACTIVE JOBS */}
        <div className="col-6 col-xl-3">

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
                Currently hiring
              </small>

            </div>

          </div>

        </div>


        {/* SHORTLISTED */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Shortlisted
                  </small>

                  <h2
                    className="fw-bold mt-2 mb-0"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    {shortlisted}
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
                  ★
                </div>

              </div>

              <small className="text-secondary">
                Candidates shortlisted
              </small>

            </div>

          </div>

        </div>


        {/* INTERVIEWS */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Interviews
                  </small>

                  <h2
                    className="fw-bold mt-2 mb-0"
                    style={{
                      color: "#8a681f",
                    }}
                  >
                    {interviews}
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
                  ◷
                </div>

              </div>

              <small className="text-secondary">
                Candidates in interview stage
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN GRID ================= */}
      <div className="row g-4">

        {/* ================= LEFT ================= */}
        <div className="col-xl-8">


          {/* ACTIVE JOBS */}
          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h5 className="fw-bold mb-1">
                Active Job Postings
              </h5>

              <p className="text-secondary small mb-0">
                Monitor your currently active positions.
              </p>

            </div>

            <Link
              to="/recruiter/jobs"
              className="text-decoration-none fw-semibold small"
              style={{
                color: "#7f1d3f",
              }}
            >
              View all →
            </Link>

          </div>


          {jobs
            .filter((job) => job.status === "ACTIVE")
            .map((job) => (

              <div
                className="card border-0 shadow-sm rounded-4 mb-3"
                key={job.job_id}
              >

                <div className="card-body p-4">

                  <div className="d-flex">

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
                      {company.company_name.charAt(0)}
                    </div>


                    <div className="flex-grow-1">

                      <div className="d-flex justify-content-between gap-3">

                        <div>

                          <h6 className="fw-bold mb-1">
                            {job.title}
                          </h6>

                          <small className="text-secondary">
                            {job.location} • {job.work_mode}
                          </small>

                        </div>

                        <span
                          className="badge rounded-pill align-self-start"
                          style={{
                            backgroundColor: "#f8eef2",
                            color: "#7f1d3f",
                          }}
                        >
                          ACTIVE
                        </span>

                      </div>


                      <div className="d-flex flex-wrap gap-3 mt-3">

                        <small className="text-secondary">
                          <strong className="text-dark">
                            {job.vacancies}
                          </strong>{" "}
                          vacancies
                        </small>

                        <small className="text-secondary">
                          Deadline:{" "}
                          <strong className="text-dark">
                            {new Date(
                              job.application_deadline
                            ).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                            })}
                          </strong>
                        </small>

                        <small className="text-secondary">
                          Applications:{" "}
                          <strong className="text-dark">
                            {job.job_id === 1 ? 28 : 20}
                          </strong>
                        </small>

                      </div>


                      <div className="d-flex justify-content-end gap-2 mt-3">

                        <Link
                          to={`/recruiter/jobs/${job.job_id}`}
                          className="btn btn-sm"
                          style={{
                            border: "1px solid #7f1d3f",
                            color: "#7f1d3f",
                          }}
                        >
                          View Job
                        </Link>

                        <Link
                          to={`/recruiter/jobs/${job.job_id}/applications`}
                          className="btn btn-sm text-white"
                          style={{
                            backgroundColor: "#7f1d3f",
                          }}
                        >
                          View Applications
                        </Link>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}


          {/* ================= RECENT APPLICATIONS ================= */}
          <div className="d-flex justify-content-between align-items-center mt-5 mb-3">

            <div>

              <h5 className="fw-bold mb-1">
                Recent Applications
              </h5>

              <p className="text-secondary small mb-0">
                Latest candidates who applied to your jobs.
              </p>

            </div>

            <Link
              to="/recruiter/applications"
              className="text-decoration-none fw-semibold small"
              style={{
                color: "#7f1d3f",
              }}
            >
              View all →
            </Link>

          </div>


          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-0">

              {applications.map((application, index) => (

                <div
                  key={application.application_id}
                  className={`p-4 ${
                    index !== applications.length - 1
                      ? "border-bottom"
                      : ""
                  }`}
                >

                  <div className="d-flex align-items-center">

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                        fontWeight: "700",
                      }}
                    >
                      {application.candidate.full_name.charAt(0)}
                    </div>


                    <div className="flex-grow-1">

                      <h6 className="fw-bold mb-1">
                        {application.candidate.full_name}
                      </h6>

                      <small className="text-secondary">
                        Applied for{" "}
                        <strong className="text-dark">
                          {application.job.title}
                        </strong>
                      </small>

                    </div>


                    <div className="text-end">

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

                      <div className="mt-2">

                        <small className="text-secondary">
                          {new Date(
                            application.applied_on
                          ).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </small>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="col-xl-4">


          {/* QUICK ACTIONS */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">
                Quick Actions
              </h5>


              <Link
                to="/recruiter/jobs/create"
                className="d-flex align-items-center text-decoration-none p-3 rounded-3 mb-2"
                style={{
                  backgroundColor: "#f8eef2",
                  color: "#7f1d3f",
                }}
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#7f1d3f",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  +
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Post a Job
                  </h6>

                  <small className="text-secondary">
                    Create a new job opportunity
                  </small>

                </div>

              </Link>


              <Link
                to="/recruiter/applications"
                className="d-flex align-items-center text-decoration-none p-3 rounded-3 mb-2"
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#faf5e8",
                    color: "#8a681f",
                    fontSize: "20px",
                  }}
                >
                  ▤
                </div>

                <div>

                  <h6 className="fw-bold mb-1 text-dark">
                    Review Applications
                  </h6>

                  <small className="text-secondary">
                    Review and manage candidates
                  </small>

                </div>

              </Link>


              <Link
                to="/recruiter/candidates"
                className="d-flex align-items-center text-decoration-none p-3 rounded-3"
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f4f4f5",
                    color: "#52525b",
                    fontSize: "20px",
                  }}
                >
                  ◎
                </div>

                <div>

                  <h6 className="fw-bold mb-1 text-dark">
                    Find Candidates
                  </h6>

                  <small className="text-secondary">
                    Discover potential candidates
                  </small>

                </div>

              </Link>

            </div>

          </div>


          {/* HIRING OVERVIEW */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">
                Hiring Overview
              </h5>


              <div className="d-flex justify-content-between mb-2">

                <small className="text-secondary">
                  Applications
                </small>

                <small className="fw-bold">
                  48
                </small>

              </div>

              <div
                className="progress mb-3"
                style={{ height: "7px" }}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: "75%",
                    backgroundColor: "#7f1d3f",
                  }}
                />
              </div>


              <div className="d-flex justify-content-between mb-2">

                <small className="text-secondary">
                  Shortlisted
                </small>

                <small className="fw-bold">
                  8
                </small>

              </div>

              <div
                className="progress mb-3"
                style={{ height: "7px" }}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: "45%",
                    backgroundColor: "#9f3157",
                  }}
                />
              </div>


              <div className="d-flex justify-content-between mb-2">

                <small className="text-secondary">
                  Interviews
                </small>

                <small className="fw-bold">
                  4
                </small>

              </div>

              <div
                className="progress"
                style={{ height: "7px" }}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: "25%",
                    backgroundColor: "#d6b36a",
                  }}
                />
              </div>

            </div>

          </div>


          {/* COMPANY PROFILE */}
          <div
            className="card border-0 rounded-4"
            style={{
              backgroundColor: "#faf5e8",
            }}
          >

            <div className="card-body p-4">

              <div className="d-flex">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#d6b36a",
                    color: "#3f1d2e",
                    fontSize: "20px",
                  }}
                >
                  ✦
                </div>

                <div>

                  <h6 className="fw-bold">
                    Complete your company profile
                  </h6>

                  <p className="small text-secondary mb-3">
                    A complete company profile helps candidates
                    learn more about your organization.
                  </p>

                  <Link
                    to="/recruiter/company"
                    className="small fw-bold text-decoration-none"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    Update company profile →
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RecruiterDashboard;