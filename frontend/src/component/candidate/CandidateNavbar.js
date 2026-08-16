import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
const CandidateNavbar = () => {
    const {user}=useAuth();
  return (
    <nav
        className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      >
        <div className="container-fluid px-4">

          <Link
            to="/candidate"
            className="navbar-brand fw-bold fs-3"
          >
            Job
            <span style={{ color: "#7f1d3f" }}>
              Portal
            </span>
          </Link>


          <div className="d-flex align-items-center gap-3">

            {/* Notification */}
            <button
              className="btn btn-light rounded-circle"
              style={{
                width: "42px",
                height: "42px",
              }}
            >
              🔔
            </button>


            {/* Profile */}
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
                  N
                </div>

                <div className="d-none d-md-block text-start">
                  <div className="fw-semibold">
                    {user?.name}
                  </div>

                  <small className="text-secondary">
                    {user?.role}
                  </small>
                </div>

              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                <li>
                  <Link
                    className="dropdown-item"
                    to="/candidate/profile"
                  >
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/candidate/settings"
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
      </nav>
  )
}

export default CandidateNavbar