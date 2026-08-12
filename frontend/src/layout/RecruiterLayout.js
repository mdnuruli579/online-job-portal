import React from "react";
import { Link, Outlet } from "react-router-dom";

const RecruiterLayout = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f7f5f3",
      }}
    >

      {/* ================= NAVBAR ================= */}
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


      {/* ================= MAIN ================= */}
      <div className="container-fluid">

        <div className="row">


          {/* ================= SIDEBAR ================= */}
          <aside className="col-lg-2 d-none d-lg-block bg-white border-end min-vh-100 p-3">

            <div className="mt-3">


              {/* WORKSPACE */}
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

                {/* DASHBOARD */}
                <Link
                  to="/recruiter"
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


                {/* MY JOBS */}
                <Link
                  to="/recruiter/jobs"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▤</span>

                  <span>
                    My Jobs
                  </span>
                </Link>


                {/* POST JOB */}
                <Link
                  to="/recruiter/jobs/create"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>＋</span>

                  <span>
                    Post a Job
                  </span>
                </Link>


                {/* APPLICATIONS */}
                <Link
                  to="/recruiter/applications"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▥</span>

                  <span>
                    Applications
                  </span>
                </Link>


                {/* CANDIDATES */}
                <Link
                  to="/recruiter/candidates"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>◎</span>

                  <span>
                    Candidates
                  </span>
                </Link>

              </div>


              <hr className="my-4" />


              {/* COMPANY */}
              <small
                className="text-uppercase fw-bold px-3"
                style={{
                  color: "#a8a29e",
                  letterSpacing: "1px",
                }}
              >
                Company
              </small>


              <div className="mt-3">

                <Link
                  to="/recruiter/company"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▣</span>

                  <span>
                    Company Profile
                  </span>
                </Link>


                <Link
                  to="/recruiter/settings"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3"
                >
                  <span>⚙</span>

                  <span>
                    Settings
                  </span>
                </Link>

              </div>


              <hr className="my-4" />


              {/* LOGOUT */}
              <button
                className="btn d-flex align-items-center gap-3 text-danger rounded-3 px-3 py-3 w-100 text-start"
              >
                <span>↪</span>

                <span>
                  Logout
                </span>
              </button>

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

export default RecruiterLayout;