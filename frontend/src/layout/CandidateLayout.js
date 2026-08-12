import React from "react";
import { Outlet, Link } from "react-router-dom";

const CandidateLayout = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f7f5f3",
      }}
    >

      {/* ================= NAVBAR ================= */}
      <nav
        className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      >
        <div className="container-fluid px-4">

          <Link
            to="/candidate/dashboard"
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
                    Nurul Islam
                  </div>

                  <small className="text-secondary">
                    Candidate
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


      {/* ================= MAIN ================= */}
      <div className="container-fluid">

        <div className="row">

          {/* ================= SIDEBAR ================= */}
          <aside className="col-lg-2 d-none d-lg-block bg-white border-end min-vh-100 p-3">

            <div className="mt-3">

              <small
                className="text-uppercase fw-bold px-3"
                style={{
                  color: "#a8a29e",
                  letterSpacing: "1px",
                }}
              >
                Workspace
              </small>
              <div className="mt-3">

                <Link
                  to="/candidate"
                  className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
                  style={{
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  <span>▣</span>
                  <span className="fw-semibold">
                    Dashboard
                  </span>
                </Link>


                <Link
                  to="/candidate/jobs"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>⌕</span>
                  <span>
                    Find Jobs
                  </span>
                </Link>


                <Link
                  to="/candidate/applications"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▤</span>
                  <span>
                    Applications
                  </span>
                </Link>


                <Link
                  to="/candidate/saved-jobs"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>♡</span>
                  <span>
                    Saved Jobs
                  </span>
                </Link>


                <Link
                  to="/candidate/profile"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>◎</span>
                  <span>
                    My Profile
                  </span>
                </Link>

              </div>


              <hr className="my-4" />


              <small
                className="text-uppercase fw-bold px-3"
                style={{
                  color: "#a8a29e",
                  letterSpacing: "1px",
                }}
              >
                Account
              </small>


              <div className="mt-3">

                <Link
                  to="/candidate/settings"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3"
                >
                  <span>⚙</span>
                  <span>
                    Settings
                  </span>
                </Link>


                <button
                  className="btn d-flex align-items-center gap-3 text-danger rounded-3 px-3 py-3 w-100 text-start"
                >
                  <span>↪</span>
                  <span>
                    Logout
                  </span>
                </button>

              </div>

            </div>

          </aside>


          {/* ================= CONTENT ================= */}
          <main className="col-lg-10 px-4 px-lg-5 py-4">

            <Outlet />

          </main>

        </div>

      </div>

    </div>
  );
};

export default CandidateLayout;