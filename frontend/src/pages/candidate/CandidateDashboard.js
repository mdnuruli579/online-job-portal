import React from "react";
import { Link } from "react-router-dom";

const CandidateDashboard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechNova Solutions",
      location: "Noida, India",
      type: "Full Time",
      salary: "₹10 - ₹15 LPA",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Node.js Developer",
      company: "Vertex Technologies",
      location: "Delhi, India",
      type: "Full Time",
      salary: "₹7 - ₹12 LPA",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Frontend Engineer",
      company: "PixelCraft Labs",
      location: "Remote",
      type: "Remote",
      salary: "₹8 - ₹14 LPA",
      posted: "5 days ago",
    },
  ];

  return (
    <div>

      {/* ================= WELCOME ================= */}
      <div className="mb-4">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

          <div>
            <p
              className="mb-1 fw-semibold"
              style={{ color: "#7f1d3f" }}
            >
              CANDIDATE DASHBOARD
            </p>

            <h2 className="fw-bold mb-1">
              Good morning, Nurul 👋
            </h2>

            <p className="text-secondary mb-0">
              Discover opportunities that match your skills and
              career goals.
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
            + Find Jobs
          </Link>

        </div>

      </div>


      {/* ================= PROFILE COMPLETION ================= */}
      <div
        className="card border-0 shadow-sm rounded-4 mb-4"
        style={{
          background:
            "linear-gradient(100deg, #3f1d2e, #5a263c)",
        }}
      >

        <div className="card-body p-4">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <div className="d-flex align-items-center">

                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center me-3 fw-bold"
                  style={{
                    width: "58px",
                    height: "58px",
                    color: "#7f1d3f",
                    fontSize: "20px",
                  }}
                >
                  N
                </div>

                <div className="text-white">

                  <h5 className="fw-bold mb-1">
                    Complete your profile
                  </h5>

                  <p className="text-white-50 mb-0">
                    A complete profile increases your chances
                    of getting noticed by recruiters.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-lg-4 mt-4 mt-lg-0">

              <div className="d-flex justify-content-between text-white mb-2">

                <small>
                  Profile completion
                </small>

                <small className="fw-bold">
                  75%
                </small>

              </div>

              <div
                className="progress"
                style={{ height: "7px" }}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: "75%",
                    backgroundColor: "#d6b36a",
                  }}
                ></div>
              </div>

              <Link
                to="/candidate/profile"
                className="btn btn-sm mt-3 bg-white fw-semibold"
                style={{ color: "#7f1d3f" }}
              >
                Complete Profile
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Applications
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    12
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                    fontSize: "20px",
                  }}
                >
                  ↗
                </div>

              </div>

              <small className="text-success">
                +3 this month
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Shortlisted
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    4
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#faf5e8",
                    color: "#a07825",
                    fontSize: "20px",
                  }}
                >
                  ★
                </div>

              </div>

              <small className="text-secondary">
                2 awaiting response
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Interviews
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    2
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#f5f0f2",
                    color: "#6b263f",
                    fontSize: "20px",
                  }}
                >
                  ◷
                </div>

              </div>

              <small className="text-secondary">
                Upcoming interviews
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Saved Jobs
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    8
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#faf5e8",
                    color: "#a07825",
                    fontSize: "20px",
                  }}
                >
                  ♡
                </div>

              </div>

              <Link
                to="/candidate/saved-jobs"
                className="small text-decoration-none"
                style={{ color: "#7f1d3f" }}
              >
                View saved jobs
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SEARCH ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4">

          <h5 className="fw-bold mb-3">
            Find your next opportunity
          </h5>

          <div className="row g-2">

            <div className="col-lg-5">

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


            <div className="col-lg-4">

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  📍
                </span>

                <input
                  type="text"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="Location"
                />

              </div>

            </div>


            <div className="col-lg-3">

              <Link
                to="/candidate/jobs"
                className="btn btn-lg w-100 text-white fw-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #7f1d3f, #9f3157)",
                }}
              >
                Search Jobs
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* ================= JOBS + APPLICATIONS ================= */}
      <div className="row g-4">

        {/* ================= RECOMMENDED JOBS ================= */}
        <div className="col-xl-8">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h5 className="fw-bold mb-1">
                Recommended Jobs
              </h5>

              <p className="text-secondary small mb-0">
                Jobs matching your profile and preferences
              </p>

            </div>

            <Link
              to="/candidate/jobs"
              className="text-decoration-none fw-semibold small"
              style={{ color: "#7f1d3f" }}
            >
              View all →
            </Link>

          </div>


          {jobs.map((job) => (

            <div
              className="card border-0 shadow-sm rounded-4 mb-3"
              key={job.id}
            >

              <div className="card-body p-4">

                <div className="d-flex">

                  {/* COMPANY ICON */}
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#f8eef2",
                      color: "#7f1d3f",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {job.company.charAt(0)}
                  </div>


                  {/* JOB DETAILS */}
                  <div className="flex-grow-1">

                    <div className="d-flex justify-content-between">

                      <div>

                        <h6 className="fw-bold mb-1">
                          {job.title}
                        </h6>

                        <p className="text-secondary small mb-2">
                          {job.company}
                        </p>

                      </div>

                      <button
                        className="btn btn-sm border-0"
                        style={{
                          color: "#7f1d3f",
                          fontSize: "22px",
                        }}
                      >
                        ♡
                      </button>

                    </div>


                    <div className="d-flex flex-wrap gap-2">

                      <span className="badge bg-light text-secondary fw-normal">
                        📍 {job.location}
                      </span>

                      <span className="badge bg-light text-secondary fw-normal">
                        💼 {job.type}
                      </span>

                      <span className="badge bg-light text-secondary fw-normal">
                        ₹ {job.salary}
                      </span>

                    </div>


                    <div className="d-flex justify-content-between align-items-center mt-3">

                      <small className="text-secondary">
                        Posted {job.posted}
                      </small>

                      <Link
                        to={`/candidate/jobs/${job.id}`}
                        className="btn btn-sm text-white px-3"
                        style={{
                          backgroundColor: "#7f1d3f",
                        }}
                      >
                        View Job
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= APPLICATION OVERVIEW ================= */}
        <div className="col-xl-4">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h5 className="fw-bold mb-0">
              Recent Applications
            </h5>

            <Link
              to="/candidate/applications"
              className="small text-decoration-none fw-semibold"
              style={{ color: "#7f1d3f" }}
            >
              View all
            </Link>

          </div>


          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              {/* APPLICATION 1 */}
              <div className="d-flex mb-4">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  T
                </div>

                <div className="flex-grow-1">

                  <h6 className="fw-semibold mb-1">
                    React Developer
                  </h6>

                  <small className="text-secondary">
                    TechNova Solutions
                  </small>

                  <div className="mt-2">

                    <span
                      className="badge rounded-pill"
                      style={{
                        backgroundColor: "#fff7df",
                        color: "#8a681f",
                      }}
                    >
                      Under Review
                    </span>

                  </div>

                </div>

              </div>


              {/* APPLICATION 2 */}
              <div className="d-flex mb-4">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  V
                </div>

                <div className="flex-grow-1">

                  <h6 className="fw-semibold mb-1">
                    Node.js Developer
                  </h6>

                  <small className="text-secondary">
                    Vertex Technologies
                  </small>

                  <div className="mt-2">

                    <span
                      className="badge rounded-pill"
                      style={{
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                      }}
                    >
                      Shortlisted
                    </span>

                  </div>

                </div>

              </div>


              {/* APPLICATION 3 */}
              <div className="d-flex">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  P
                </div>

                <div className="flex-grow-1">

                  <h6 className="fw-semibold mb-1">
                    Frontend Engineer
                  </h6>

                  <small className="text-secondary">
                    PixelCraft Labs
                  </small>

                  <div className="mt-2">

                    <span
                      className="badge rounded-pill"
                      style={{
                        backgroundColor: "#f4f4f5",
                        color: "#52525b",
                      }}
                    >
                      Application Sent
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= PROFILE TIP ================= */}
          <div
            className="card border-0 rounded-4 mt-4"
            style={{
              backgroundColor: "#faf5e8",
            }}
          >

            <div className="card-body p-4">

              <div className="d-flex">

                <div
                  className="me-3 rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#d6b36a",
                    color: "#3f1d2e",
                  }}
                >
                  ✦
                </div>

                <div>

                  <h6 className="fw-bold">
                    Improve your profile
                  </h6>

                  <p className="small text-secondary mb-3">
                    Add your skills and experience to get
                    better job recommendations.
                  </p>

                  <Link
                    to="/candidate/profile"
                    className="small fw-bold text-decoration-none"
                    style={{ color: "#7f1d3f" }}
                  >
                    Update profile →
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

export default CandidateDashboard;