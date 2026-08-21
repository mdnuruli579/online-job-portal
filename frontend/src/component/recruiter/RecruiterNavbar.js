import React from 'react'
import { Link } from 'react-router-dom'

const RecruiterNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">

        <div className="container-fluid px-4">

          {/* LOGO */}
          <Link
            to="/recruiter"
            className="navbar-brand fw-bold fs-3"
          >
            Job
            <span style={{ color: "#7f1d3f" }}>
              Portal
            </span>
          </Link>


          {/* MOBILE TOGGLE */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#recruiterNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div
            className="collapse navbar-collapse"
            id="recruiterNavbar"
          >

            {/* CENTER LINKS */}
            <div className="navbar-nav mx-auto">

              <Link
                to="/recruiter/jobs"
                className="nav-link px-3"
              >
                My Jobs
              </Link>

              <Link
                to="/recruiter/applications"
                className="nav-link px-3"
              >
                Applications
              </Link>

              <Link
                to="/recruiter/candidates"
                className="nav-link px-3"
              >
                Candidates
              </Link>

            </div>


            {/* RIGHT */}
            <div className="d-flex align-items-center gap-3">

              {/* NOTIFICATION */}
              <button
                className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "42px",
                  height: "42px",
                }}
              >
                🔔
              </button>


              {/* PROFILE */}
              <div className="dropdown">

                <button
                  className="btn d-flex align-items-center gap-2"
                  data-bs-toggle="dropdown"
                >

                  <div
                    className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background:
                        "linear-gradient(135deg, #7f1d3f, #9f3157)",
                    }}
                  >
                    R
                  </div>


                  <div className="d-none d-md-block text-start">

                    <div className="fw-semibold">
                      Recruiter
                    </div>

                    <small className="text-secondary">
                      Recruiter Account
                    </small>

                  </div>

                </button>


                <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/recruiter/company"
                    >
                      Company Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/recruiter/settings"
                    >
                      Settings
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <button className="dropdown-item text-danger">
                      Logout
                    </button>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </nav>
  )
}

export default RecruiterNavbar