import React from "react";
import { Link } from "react-router-dom";

const RecruiterCandidates = () => {
  const candidates = [
    {
      user_id: 21,
      full_name: "Aman Kumar",
      email: "aman@example.com",
      phone: 9876543211,
      user_type: "CANDIDATE",
      status: "ACTIVE",

      experience: 4,
      location: "Noida, India",
      skills: "React, JavaScript, Node.js, MySQL",
      applied_jobs: 2,
      shortlisted: true,
    },

    {
      user_id: 22,
      full_name: "Priya Singh",
      email: "priya@example.com",
      phone: 9876543212,
      user_type: "CANDIDATE",
      status: "ACTIVE",

      experience: 3,
      location: "Delhi, India",
      skills: "Node.js, Express, MongoDB, REST API",
      applied_jobs: 1,
      shortlisted: false,
    },

    {
      user_id: 23,
      full_name: "Arjun Verma",
      email: "arjun@example.com",
      phone: 9876543213,
      user_type: "CANDIDATE",
      status: "ACTIVE",

      experience: 5,
      location: "Gurugram, India",
      skills: "React, TypeScript, Redux, Next.js",
      applied_jobs: 3,
      shortlisted: true,
    },

    {
      user_id: 24,
      full_name: "Neha Sharma",
      email: "neha@example.com",
      phone: 9876543214,
      user_type: "CANDIDATE",
      status: "ACTIVE",

      experience: 2,
      location: "Bangalore, India",
      skills: "JavaScript, React, HTML, CSS",
      applied_jobs: 1,
      shortlisted: false,
    },

    {
      user_id: 25,
      full_name: "Rohit Mehta",
      email: "rohit@example.com",
      phone: 9876543215,
      user_type: "CANDIDATE",
      status: "ACTIVE",

      experience: 6,
      location: "Pune, India",
      skills: "Node.js, PostgreSQL, Docker, AWS",
      applied_jobs: 4,
      shortlisted: false,
    },

    {
      user_id: 26,
      full_name: "Sneha Gupta",
      email: "sneha@example.com",
      phone: 9876543216,
      user_type: "CANDIDATE",
      status: "ACTIVE",

      experience: 3,
      location: "Mumbai, India",
      skills: "React, JavaScript, Tailwind, Git",
      applied_jobs: 2,
      shortlisted: true,
    },
  ];

  const activeCandidates = candidates.filter(
    (candidate) => candidate.status === "ACTIVE"
  ).length;

  const shortlistedCandidates = candidates.filter(
    (candidate) => candidate.shortlisted
  ).length;

  const experiencedCandidates = candidates.filter(
    (candidate) => candidate.experience >= 3
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
              Candidates
            </h2>

            <p className="text-secondary mb-0">
              Discover, review and manage candidates for your job
              openings.
            </p>

          </div>

          <Link
            to="/recruiter/applications"
            className="btn btn-light px-4 py-2 rounded-3"
          >
            View Applications
          </Link>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        {/* TOTAL */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Total Candidates
              </small>

              <h2 className="fw-bold mt-2 mb-0">
                {candidates.length}
              </h2>

              <small className="text-secondary">
                Candidates in talent pool
              </small>

            </div>

          </div>

        </div>


        {/* ACTIVE */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Active Candidates
              </small>

              <h2
                className="fw-bold mt-2 mb-0"
                style={{
                  color: "#7f1d3f",
                }}
              >
                {activeCandidates}
              </h2>

              <small className="text-secondary">
                Available candidates
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
                {shortlistedCandidates}
              </h2>

              <small className="text-secondary">
                Potential candidates
              </small>

            </div>

          </div>

        </div>


        {/* EXPERIENCE */}
        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                3+ Years Experience
              </small>

              <h2
                className="fw-bold mt-2 mb-0"
                style={{
                  color: "#8a681f",
                }}
              >
                {experiencedCandidates}
              </h2>

              <small className="text-secondary">
                Experienced candidates
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SEARCH / FILTER ================= */}
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
                  placeholder="Search candidate by name or skill..."
                />

              </div>

            </div>


            {/* EXPERIENCE */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>Experience</option>
                <option>0 - 2 Years</option>
                <option>3 - 5 Years</option>
                <option>5+ Years</option>

              </select>

            </div>


            {/* LOCATION */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>Location</option>
                <option>Noida</option>
                <option>Delhi</option>
                <option>Gurugram</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Pune</option>

              </select>

            </div>


            {/* STATUS */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>Status</option>
                <option>ACTIVE</option>
                <option>NOT ACTIVE</option>

              </select>

            </div>


            {/* SORT */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>Newest</option>
                <option>Name A-Z</option>
                <option>Experience</option>

              </select>

            </div>

          </div>

        </div>

      </div>


      {/* ================= CANDIDATE HEADER ================= */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <div>

          <h5 className="fw-bold mb-1">
            Candidate Pool
          </h5>

          <p className="text-secondary small mb-0">
            Browse candidates who may be a good fit for your jobs.
          </p>

        </div>

        <span className="text-secondary small">
          {candidates.length} candidates
        </span>

      </div>


      {/* ================= CANDIDATE CARDS ================= */}
      <div className="row g-4">

        {candidates.map((candidate) => (

          <div
            className="col-md-6 col-xl-4"
            key={candidate.user_id}
          >

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                {/* PROFILE HEADER */}
                <div className="d-flex align-items-start">

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "58px",
                      height: "58px",
                      background:
                        "linear-gradient(135deg, #7f1d3f, #9f3157)",
                      color: "#fff",
                      fontSize: "21px",
                      fontWeight: "700",
                    }}
                  >
                    {candidate.full_name.charAt(0)}
                  </div>


                  <div className="ms-3 flex-grow-1">

                    <Link
                      to={`/recruiter/candidates/${candidate.user_id}`}
                      className="text-decoration-none"
                    >
                      <h6
                        className="fw-bold mb-1"
                        style={{
                          color: "#292524",
                        }}
                      >
                        {candidate.full_name}
                      </h6>
                    </Link>

                    <small className="text-secondary">
                      {candidate.email}
                    </small>

                  </div>


                  {candidate.shortlisted && (

                    <span
                      title="Shortlisted"
                      style={{
                        color: "#d6b36a",
                        fontSize: "18px",
                      }}
                    >
                      ★
                    </span>

                  )}

                </div>


                {/* INFORMATION */}
                <div className="d-flex flex-wrap gap-2 mt-4">

                  <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                    {candidate.experience} Years
                  </span>

                  <span className="badge bg-light text-secondary fw-normal px-3 py-2">
                    📍 {candidate.location}
                  </span>

                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      backgroundColor: "#f8eef2",
                      color: "#7f1d3f",
                    }}
                  >
                    {candidate.status}
                  </span>

                </div>


                {/* SKILLS */}
                <div className="mt-4">

                  <small className="text-secondary d-block mb-2">
                    Skills
                  </small>

                  <div className="d-flex flex-wrap gap-2">

                    {candidate.skills
                      .split(", ")
                      .map((skill) => (

                        <span
                          key={skill}
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            backgroundColor: "#f5f5f4",
                            color: "#44403c",
                            fontWeight: "500",
                          }}
                        >
                          {skill}
                        </span>

                      ))}

                  </div>

                </div>


                <hr className="my-4" />


                {/* APPLICATION INFO */}
                <div className="d-flex justify-content-between">

                  <div>

                    <small className="text-secondary d-block">
                      Applications
                    </small>

                    <span className="fw-semibold">
                      {candidate.applied_jobs}
                    </span>

                  </div>


                  <div className="text-end">

                    <small className="text-secondary d-block">
                      Phone
                    </small>

                    <span className="fw-semibold">
                      +91 {candidate.phone}
                    </span>

                  </div>

                </div>


                {/* ACTIONS */}
                <div className="d-flex gap-2 mt-4">

                  <Link
                    to={`/recruiter/candidates/${candidate.user_id}`}
                    className="btn flex-grow-1"
                    style={{
                      border: "1px solid #7f1d3f",
                      color: "#7f1d3f",
                    }}
                  >
                    View Profile
                  </Link>


                  <div className="dropdown">

                    <button
                      className="btn btn-light"
                      data-bs-toggle="dropdown"
                    >
                      •••
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                      <li>
                        <button className="dropdown-item">
                          Shortlist
                        </button>
                      </li>

                      <li>
                        <button className="dropdown-item">
                          Contact Candidate
                        </button>
                      </li>

                      <li>
                        <button className="dropdown-item">
                          View Applications
                        </button>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <button className="dropdown-item text-danger">
                          Remove
                        </button>
                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* ================= PAGINATION ================= */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mt-4">

        <small className="text-secondary">
          Showing 1–6 of 48 candidates
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

export default RecruiterCandidates;