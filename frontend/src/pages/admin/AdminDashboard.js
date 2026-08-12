import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const stats = {
    total_users: 1248,
    candidates: 1082,
    recruiters: 166,
    companies: 94,
    active_jobs: 186,
    pending_jobs: 14,
    total_applications: 3246,
    shortlisted: 482,
  };

  const recentUsers = [
    {
      user_id: 101,
      full_name: "Aman Kumar",
      email: "aman@example.com",
      user_type: "CANDIDATE",
      status: "ACTIVE",
    },
    {
      user_id: 102,
      full_name: "Priya Singh",
      email: "priya@example.com",
      user_type: "CANDIDATE",
      status: "ACTIVE",
    },
    {
      user_id: 103,
      full_name: "Rahul Sharma",
      email: "rahul@technova.com",
      user_type: "RECRUITER",
      status: "ACTIVE",
    },
    {
      user_id: 104,
      full_name: "Neha Gupta",
      email: "neha@example.com",
      user_type: "CANDIDATE",
      status: "NOT ACTIVE",
    },
  ];

  const recentJobs = [
    {
      job_id: 1,
      title: "Senior React Developer",
      location: "Noida, India",
      work_mode: "HYBRID",
      employment_type: "FULL_TIME",
      company_name: "TechNova Solutions",
      status: "ACTIVE",
      applications: 28,
    },
    {
      job_id: 2,
      title: "Node.js Developer",
      location: "Delhi, India",
      work_mode: "ONSITE",
      employment_type: "FULL_TIME",
      company_name: "TechNova Solutions",
      status: "ACTIVE",
      applications: 20,
    },
    {
      job_id: 3,
      title: "Frontend Engineer",
      location: "Remote",
      work_mode: "REMOTE",
      employment_type: "FULL_TIME",
      company_name: "DigitalWorks",
      status: "PENDING",
      applications: 0,
    },
  ];

  const pendingJobs = [
    {
      job_id: 11,
      title: "Java Backend Developer",
      company_name: "CodeCraft Technologies",
      posted_on: "2026-08-11",
      recruiter_name: "Vikas Mehta",
    },
    {
      job_id: 12,
      title: "UI/UX Designer",
      company_name: "Pixel Studio",
      posted_on: "2026-08-10",
      recruiter_name: "Anjali Sharma",
    },
    {
      job_id: 13,
      title: "Python Developer",
      company_name: "CloudMatrix",
      posted_on: "2026-08-09",
      recruiter_name: "Mohit Kumar",
    },
  ];

  const formatStatus = (status) => {
    return status
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const getUserStatusStyle = (status) => {
    if (status === "ACTIVE") {
      return {
        backgroundColor: "#f8eef2",
        color: "#7f1d3f",
      };
    }

    return {
      backgroundColor: "#f4f4f5",
      color: "#52525b",
    };
  };

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
              ADMINISTRATION
            </p>

            <h2 className="fw-bold mb-1">
              Dashboard
            </h2>

            <p className="text-secondary mb-0">
              Monitor and manage your JobPortal platform.
            </p>

          </div>


          <div className="d-flex gap-2">

            <Link
              to="/admin/users"
              className="btn btn-light px-4 rounded-3"
            >
              Manage Users
            </Link>

            <Link
              to="/admin/jobs"
              className="btn text-white px-4 rounded-3 fw-semibold"
              style={{
                background:
                  "linear-gradient(90deg, #7f1d3f, #9f3157)",
              }}
            >
              Manage Jobs
            </Link>

          </div>

        </div>

      </div>


      {/* ================= MAIN STATISTICS ================= */}
      <div className="row g-3 mb-4">

        {/* USERS */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Total Users
                  </small>

                  <h2 className="fw-bold mt-2 mb-1">
                    {stats.total_users.toLocaleString()}
                  </h2>

                  <small
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    +8.4% this month
                  </small>

                </div>


                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                    fontSize: "21px",
                  }}
                >
                  ◎
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* COMPANIES */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Companies
                  </small>

                  <h2 className="fw-bold mt-2 mb-1">
                    {stats.companies}
                  </h2>

                  <small
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    +12 new companies
                  </small>

                </div>


                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                    fontSize: "21px",
                  }}
                >
                  ▣
                </div>

              </div>

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
                    className="fw-bold mt-2 mb-1"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    {stats.active_jobs}
                  </h2>

                  <small className="text-secondary">
                    {stats.pending_jobs} awaiting review
                  </small>

                </div>


                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#faf5e8",
                    color: "#8a681f",
                    fontSize: "21px",
                  }}
                >
                  ▤
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* APPLICATIONS */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Applications
                  </small>

                  <h2 className="fw-bold mt-2 mb-1">
                    {stats.total_applications.toLocaleString()}
                  </h2>

                  <small
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    {stats.shortlisted} shortlisted
                  </small>

                </div>


                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                    fontSize: "21px",
                  }}
                >
                  ▥
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SECONDARY STATISTICS ================= */}
      <div className="row g-3 mb-4">

        <div className="col-md-4">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <small className="text-secondary">
                    Candidates
                  </small>

                  <h3 className="fw-bold mt-2 mb-0">
                    {stats.candidates.toLocaleString()}
                  </h3>

                </div>

                <div
                  className="text-end"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  <div className="fw-bold">
                    {(
                      (stats.candidates / stats.total_users) *
                      100
                    ).toFixed(1)}
                    %
                  </div>

                  <small className="text-secondary">
                    of users
                  </small>
                </div>

              </div>

              <div
                className="progress mt-3"
                style={{
                  height: "7px",
                }}
              >

                <div
                  className="progress-bar"
                  style={{
                    width: `${(
                      (stats.candidates / stats.total_users) *
                      100
                    ).toFixed(1)}%`,
                    backgroundColor: "#7f1d3f",
                  }}
                />

              </div>

            </div>

          </div>

        </div>


        <div className="col-md-4">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <small className="text-secondary">
                    Recruiters
                  </small>

                  <h3 className="fw-bold mt-2 mb-0">
                    {stats.recruiters}
                  </h3>

                </div>

                <div
                  className="text-end"
                  style={{
                    color: "#8a681f",
                  }}
                >
                  <div className="fw-bold">
                    {(
                      (stats.recruiters / stats.total_users) *
                      100
                    ).toFixed(1)}
                    %
                  </div>

                  <small className="text-secondary">
                    of users
                  </small>
                </div>

              </div>

              <div
                className="progress mt-3"
                style={{
                  height: "7px",
                }}
              >

                <div
                  className="progress-bar"
                  style={{
                    width: `${(
                      (stats.recruiters / stats.total_users) *
                      100
                    ).toFixed(1)}%`,
                    backgroundColor: "#d6b36a",
                  }}
                />

              </div>

            </div>

          </div>

        </div>


        <div className="col-md-4">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <small className="text-secondary">
                    Pending Job Reviews
                  </small>

                  <h3
                    className="fw-bold mt-2 mb-0"
                    style={{
                      color: "#8a681f",
                    }}
                  >
                    {stats.pending_jobs}
                  </h3>

                </div>

                <Link
                  to="/admin/jobs/pending"
                  className="small text-decoration-none fw-semibold"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  Review →
                </Link>

              </div>

              <div
                className="mt-3 rounded-3 p-2"
                style={{
                  backgroundColor: "#faf5e8",
                }}
              >
                <small className="text-secondary">
                  Jobs waiting for administrator approval
                </small>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="row g-4">

        {/* ================= LEFT ================= */}
        <div className="col-xl-8">


          {/* RECENT USERS */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-0">

              <div className="d-flex justify-content-between align-items-center p-4 border-bottom">

                <div>

                  <h5 className="fw-bold mb-1">
                    Recent Users
                  </h5>

                  <p className="text-secondary small mb-0">
                    Recently registered accounts.
                  </p>

                </div>

                <Link
                  to="/admin/users"
                  className="text-decoration-none fw-semibold small"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  View All →
                </Link>

              </div>


              {recentUsers.map((user, index) => (

                <div
                  key={user.user_id}
                  className={`px-4 py-3 ${
                    index !== recentUsers.length - 1
                      ? "border-bottom"
                      : ""
                  }`}
                >

                  <div className="d-flex align-items-center">

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: "45px",
                        height: "45px",
                        background:
                          "linear-gradient(135deg, #171717, #7f1d3f)",
                        color: "#fff",
                        fontWeight: "700",
                      }}
                    >
                      {user.full_name.charAt(0)}
                    </div>


                    <div className="flex-grow-1">

                      <h6 className="fw-semibold mb-1">
                        {user.full_name}
                      </h6>

                      <small className="text-secondary">
                        {user.email}
                      </small>

                    </div>


                    <div className="d-none d-md-block me-4">

                      <span
                        className="badge rounded-pill"
                        style={{
                          backgroundColor:
                            user.user_type === "RECRUITER"
                              ? "#faf5e8"
                              : "#f8eef2",
                          color:
                            user.user_type === "RECRUITER"
                              ? "#8a681f"
                              : "#7f1d3f",
                        }}
                      >
                        {user.user_type}
                      </span>

                    </div>


                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={getUserStatusStyle(
                        user.status
                      )}
                    >
                      {formatStatus(user.status)}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* RECENT JOBS */}
          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-0">

              <div className="d-flex justify-content-between align-items-center p-4 border-bottom">

                <div>

                  <h5 className="fw-bold mb-1">
                    Recent Job Postings
                  </h5>

                  <p className="text-secondary small mb-0">
                    Latest jobs submitted by recruiters.
                  </p>

                </div>

                <Link
                  to="/admin/jobs"
                  className="text-decoration-none fw-semibold small"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  View All →
                </Link>

              </div>


              {recentJobs.map((job, index) => (

                <div
                  key={job.job_id}
                  className={`px-4 py-4 ${
                    index !== recentJobs.length - 1
                      ? "border-bottom"
                      : ""
                  }`}
                >

                  <div className="d-flex align-items-center">

                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                        fontWeight: "700",
                      }}
                    >
                      {job.company_name.charAt(0)}
                    </div>


                    <div className="flex-grow-1">

                      <Link
                        to={`/admin/jobs/${job.job_id}`}
                        className="text-decoration-none"
                      >
                        <h6
                          className="fw-bold mb-1"
                          style={{
                            color: "#292524",
                          }}
                        >
                          {job.title}
                        </h6>
                      </Link>

                      <small className="text-secondary">
                        {job.company_name} • {job.location}
                      </small>

                    </div>


                    <div className="d-none d-md-block text-end me-4">

                      <small className="text-secondary d-block">
                        Applications
                      </small>

                      <span className="fw-bold">
                        {job.applications}
                      </span>

                    </div>


                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={
                        job.status === "ACTIVE"
                          ? {
                              backgroundColor: "#f8eef2",
                              color: "#7f1d3f",
                            }
                          : {
                              backgroundColor: "#faf5e8",
                              color: "#8a681f",
                            }
                      }
                    >
                      {job.status}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="col-xl-4">


          {/* PENDING JOBS */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    Pending Reviews
                  </h5>

                  <small className="text-secondary">
                    Jobs requiring approval
                  </small>

                </div>

                <span
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: "#faf5e8",
                    color: "#8a681f",
                  }}
                >
                  {pendingJobs.length}
                </span>

              </div>


              {pendingJobs.map((job, index) => (

                <div
                  key={job.job_id}
                  className={`py-3 ${
                    index !== pendingJobs.length - 1
                      ? "border-bottom"
                      : ""
                  }`}
                >

                  <div className="d-flex">

                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: "#faf5e8",
                        color: "#8a681f",
                        fontWeight: "700",
                      }}
                    >
                      !
                    </div>

                    <div className="flex-grow-1">

                      <h6 className="fw-semibold mb-1">
                        {job.title}
                      </h6>

                      <small className="text-secondary d-block">
                        {job.company_name}
                      </small>

                      <small className="text-secondary">
                        By {job.recruiter_name}
                      </small>

                    </div>

                  </div>


                  <div className="d-flex justify-content-between align-items-center mt-3">

                    <small className="text-secondary">
                      {new Date(
                        job.posted_on
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </small>

                    <Link
                      to={`/admin/jobs/${job.job_id}`}
                      className="small fw-semibold text-decoration-none"
                      style={{
                        color: "#7f1d3f",
                      }}
                    >
                      Review →
                    </Link>

                  </div>

                </div>

              ))}


              <Link
                to="/admin/jobs/pending"
                className="btn w-100 mt-3"
                style={{
                  border: "1px solid #7f1d3f",
                  color: "#7f1d3f",
                }}
              >
                Review All Pending Jobs
              </Link>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">
                Quick Actions
              </h5>


              <Link
                to="/admin/users"
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
                  }}
                >
                  ◎
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Manage Users
                  </h6>

                  <small className="text-secondary">
                    View and manage platform users
                  </small>

                </div>

              </Link>


              <Link
                to="/admin/categories"
                className="d-flex align-items-center text-decoration-none p-3 rounded-3 mb-2"
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#faf5e8",
                    color: "#8a681f",
                  }}
                >
                  ▦
                </div>

                <div>

                  <h6 className="fw-bold mb-1 text-dark">
                    Manage Categories
                  </h6>

                  <small className="text-secondary">
                    Create and organize job categories
                  </small>

                </div>

              </Link>


              <Link
                to="/admin/companies"
                className="d-flex align-items-center text-decoration-none p-3 rounded-3"
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f4f4f5",
                    color: "#52525b",
                  }}
                >
                  ▣
                </div>

                <div>

                  <h6 className="fw-bold mb-1 text-dark">
                    Manage Companies
                  </h6>

                  <small className="text-secondary">
                    Review registered companies
                  </small>

                </div>

              </Link>

            </div>

          </div>


          {/* PLATFORM HEALTH */}
          <div
            className="card border-0 rounded-4"
            style={{
              backgroundColor: "#faf5e8",
            }}
          >

            <div className="card-body p-4">

              <div className="d-flex">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#d6b36a",
                    color: "#3f1d2e",
                    fontSize: "20px",
                  }}
                >
                  ✓
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Platform Status
                  </h6>

                  <p className="small text-secondary mb-2">
                    All major platform services are operating
                    normally.
                  </p>

                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#f8eef2",
                      color: "#7f1d3f",
                    }}
                  >
                    All Systems Operational
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;