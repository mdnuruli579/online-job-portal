import React from "react";
import { Link } from "react-router-dom";

const RecruiterApplications = () => {
  const applications = [
    {
      application_id: 101,
      applied_on: "2026-08-11",
      status: "SHORTLISTED",

      job: {
        job_id: 1,
        title: "Senior React Developer",
        location: "Noida, India",
        work_mode: "HYBRID",
        employment_type: "FULL_TIME",
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
        location: "Delhi, India",
        work_mode: "ONSITE",
        employment_type: "FULL_TIME",
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
        location: "Noida, India",
        work_mode: "HYBRID",
        employment_type: "FULL_TIME",
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

    {
      application_id: 104,
      applied_on: "2026-08-08",
      status: "APPLIED",

      job: {
        job_id: 2,
        title: "Node.js Developer",
        location: "Delhi, India",
        work_mode: "ONSITE",
        employment_type: "FULL_TIME",
      },

      candidate: {
        user_id: 24,
        full_name: "Neha Sharma",
        email: "neha@example.com",
        phone: 9876543214,
        user_type: "CANDIDATE",
        status: "ACTIVE",
      },
    },

    {
      application_id: 105,
      applied_on: "2026-08-07",
      status: "REJECTED",

      job: {
        job_id: 3,
        title: "Frontend Engineer",
        location: "Remote",
        work_mode: "REMOTE",
        employment_type: "FULL_TIME",
      },

      candidate: {
        user_id: 25,
        full_name: "Rohit Mehta",
        email: "rohit@example.com",
        phone: 9876543215,
        user_type: "CANDIDATE",
        status: "ACTIVE",
      },
    },

    {
      application_id: 106,
      applied_on: "2026-08-06",
      status: "SHORTLISTED",

      job: {
        job_id: 3,
        title: "Frontend Engineer",
        location: "Remote",
        work_mode: "REMOTE",
        employment_type: "FULL_TIME",
      },

      candidate: {
        user_id: 26,
        full_name: "Sneha Gupta",
        email: "sneha@example.com",
        phone: 9876543216,
        user_type: "CANDIDATE",
        status: "ACTIVE",
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

  const totalApplications = applications.length;

  const shortlisted = applications.filter(
    (application) => application.status === "SHORTLISTED"
  ).length;

  const interviews = applications.filter(
    (application) => application.status === "INTERVIEW"
  ).length;

  const underReview = applications.filter(
    (application) => application.status === "UNDER_REVIEW"
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
              Applications
            </h2>

            <p className="text-secondary mb-0">
              Review and manage candidates who applied to your jobs.
            </p>

          </div>

          <Link
            to="/recruiter/jobs"
            className="btn btn-light px-4 py-2 rounded-3"
          >
            View My Jobs
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
                    Total Applications
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    {totalApplications}
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
                All received applications
              </small>

            </div>

          </div>

        </div>


        {/* UNDER REVIEW */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Under Review
              </small>

              <h2 className="fw-bold mt-2 mb-0">
                {underReview}
              </h2>

              <small className="text-secondary">
                Need recruiter attention
              </small>

            </div>

          </div>

        </div>


        {/* SHORTLISTED */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

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

              <small className="text-secondary">
                Candidates shortlisted
              </small>

            </div>

          </div>

        </div>


        {/* INTERVIEW */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

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

              <small className="text-secondary">
                Candidates in interview
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FILTER ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-3">

          <div className="row g-2">

            {/* SEARCH */}
            <div className="col-lg-4">

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  ⌕
                </span>

                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Search candidate..."
                />

              </div>

            </div>


            {/* JOB */}
            <div className="col-lg-3">

              <select className="form-select bg-light border-0">

                <option>All Jobs</option>

                <option>
                  Senior React Developer
                </option>

                <option>
                  Node.js Developer
                </option>

                <option>
                  Frontend Engineer
                </option>

              </select>

            </div>


            {/* STATUS */}
            <div className="col-lg-3">

              <select className="form-select bg-light border-0">

                <option>All Status</option>
                <option>APPLIED</option>
                <option>UNDER_REVIEW</option>
                <option>SHORTLISTED</option>
                <option>INTERVIEW</option>
                <option>REJECTED</option>

              </select>

            </div>


            {/* SORT */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>Newest</option>
                <option>Oldest</option>

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

            <div className="row align-items-center">

              <div className="col-lg-3">

                <small className="text-secondary fw-semibold">
                  CANDIDATE
                </small>

              </div>

              <div className="col-lg-3">

                <small className="text-secondary fw-semibold">
                  APPLIED FOR
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


          {/* APPLICATION ROWS */}
          {applications.map((application) => (

            <div
              key={application.application_id}
              className="border-bottom px-4 py-4"
            >

              <div className="row align-items-center g-3">

                {/* CANDIDATE */}
                <div className="col-12 col-lg-3">

                  <div className="d-flex align-items-center">

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                    >
                      {application.candidate.full_name.charAt(0)}
                    </div>

                    <div>

                      <Link
                        to={`/recruiter/candidates/${application.candidate.user_id}`}
                        className="text-decoration-none"
                      >
                        <h6
                          className="fw-bold mb-1"
                          style={{
                            color: "#292524",
                          }}
                        >
                          {application.candidate.full_name}
                        </h6>
                      </Link>

                      <small className="text-secondary">
                        {application.candidate.email}
                      </small>

                    </div>

                  </div>

                </div>


                {/* JOB */}
                <div className="col-12 col-lg-3">

                  <small className="text-secondary d-lg-none">
                    Applied For
                  </small>

                  <Link
                    to={`/recruiter/jobs/${application.job.job_id}`}
                    className="text-decoration-none"
                  >
                    <div
                      className="fw-semibold mt-1 mt-lg-0"
                      style={{
                        color: "#7f1d3f",
                      }}
                    >
                      {application.job.title}
                    </div>
                  </Link>

                  <small className="text-secondary">
                    {application.job.location}
                  </small>

                </div>


                {/* DATE */}
                <div className="col-6 col-lg-2">

                  <small className="text-secondary d-lg-none">
                    Applied On
                  </small>

                  <div className="small mt-1 mt-lg-0">

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
                <div className="col-12 col-lg-2">

                  <div className="d-flex justify-content-lg-end gap-2">

                    <Link
                      to={`/recruiter/candidates/${application.candidate.user_id}`}
                      className="btn btn-sm"
                      style={{
                        border: "1px solid #7f1d3f",
                        color: "#7f1d3f",
                      }}
                    >
                      View
                    </Link>

                    <div className="dropdown">

                      <button
                        className="btn btn-sm btn-light"
                        data-bs-toggle="dropdown"
                      >
                        •••
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                        <li>
                          <button className="dropdown-item">
                            Move to Review
                          </button>
                        </li>

                        <li>
                          <button className="dropdown-item">
                            Shortlist
                          </button>
                        </li>

                        <li>
                          <button className="dropdown-item">
                            Schedule Interview
                          </button>
                        </li>

                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <button className="dropdown-item text-danger">
                            Reject
                          </button>
                        </li>

                      </ul>

                    </div>

                  </div>

                </div>

              </div>


              {/* CANDIDATE CONTACT */}
              <div className="row mt-3">

                <div className="col-lg-3 offset-lg-1">

                  <small className="text-secondary">
                    📧 {application.candidate.email}
                  </small>

                </div>

                <div className="col-lg-3">

                  <small className="text-secondary">
                    ☎ +91 {application.candidate.phone}
                  </small>

                </div>

                <div className="col-lg-3">

                  <small className="text-secondary">
                    {formatEmploymentType(
                      application.job.employment_type
                    )}
                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= PAGINATION ================= */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mt-4">

        <small className="text-secondary">
          Showing 1–6 of 48 applications
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

export default RecruiterApplications;