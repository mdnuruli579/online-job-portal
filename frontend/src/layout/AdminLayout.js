import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
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
            to="/admin"
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
            data-bs-target="#adminNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div
            className="collapse navbar-collapse"
            id="adminNavbar"
          >

            {/* CENTER NAVIGATION */}
            <div className="navbar-nav mx-auto">

              <Link
                to="/admin/users"
                className="nav-link px-3"
              >
                Users
              </Link>

              <Link
                to="/admin/recruiters"
                className="nav-link px-3"
              >
                Recruiters
              </Link>

              <Link
                to="/admin/companies"
                className="nav-link px-3"
              >
                Companies
              </Link>

              <Link
                to="/admin/jobs"
                className="nav-link px-3"
              >
                Jobs
              </Link>

            </div>


            {/* RIGHT SIDE */}
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


              {/* ADMIN PROFILE */}
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
                        "linear-gradient(135deg, #171717, #7f1d3f)",
                    }}
                  >
                    A
                  </div>


                  <div className="d-none d-md-block text-start">

                    <div className="fw-semibold">
                      Administrator
                    </div>

                    <small className="text-secondary">
                      Admin Account
                    </small>

                  </div>

                </button>


                <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/admin/settings"
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


      {/* ================= MAIN AREA ================= */}
      <div className="container-fluid">

        <div className="row">


          {/* ================= SIDEBAR ================= */}
          <aside className="col-lg-2 d-none d-lg-block bg-white border-end min-vh-100 p-3">

            <div className="mt-3">


              {/* PLATFORM */}
              <small
                className="text-uppercase fw-bold px-3"
                style={{
                  color: "#a8a29e",
                  letterSpacing: "1px",
                }}
              >
                Platform
              </small>


              <div className="mt-3">

                {/* DASHBOARD */}
                <Link
                  to="/admin"
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


                {/* USERS */}
                <Link
                  to="/admin/users"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>◎</span>

                  <span>
                    Users
                  </span>

                </Link>


                {/* RECRUITERS */}
                <Link
                  to="/admin/recruiters"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>♙</span>

                  <span>
                    Recruiters
                  </span>

                </Link>


                {/* COMPANIES */}
                <Link
                  to="/admin/companies"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▣</span>

                  <span>
                    Companies
                  </span>

                </Link>


                {/* JOBS */}
                <Link
                  to="/admin/jobs"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▤</span>

                  <span>
                    Jobs
                  </span>

                </Link>


                {/* APPLICATIONS */}
                <Link
                  to="/admin/applications"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▥</span>

                  <span>
                    Applications
                  </span>

                </Link>

              </div>


              <hr className="my-4" />


              {/* JOB MANAGEMENT */}
              <small
                className="text-uppercase fw-bold px-3"
                style={{
                  color: "#a8a29e",
                  letterSpacing: "1px",
                }}
              >
                Job Management
              </small>


              <div className="mt-3">

                {/* CATEGORIES */}
                <Link
                  to="/admin/categories"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
                >
                  <span>▦</span>

                  <span>
                    Job Categories
                  </span>

                </Link>


                {/* PENDING JOBS */}
                <Link
                  to="/admin/jobs/pending"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3"
                >
                  <span>◷</span>

                  <span>
                    Pending Jobs
                  </span>

                </Link>

              </div>


              <hr className="my-4" />


              {/* SYSTEM */}
              <small
                className="text-uppercase fw-bold px-3"
                style={{
                  color: "#a8a29e",
                  letterSpacing: "1px",
                }}
              >
                System
              </small>


              <div className="mt-3">

                {/* SETTINGS */}
                <Link
                  to="/admin/settings"
                  className="d-flex align-items-center gap-3 text-decoration-none text-secondary rounded-3 px-3 py-3 mb-1"
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

export default AdminLayout;