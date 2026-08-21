import React from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

const CandidateSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Active link style
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;

    return {
      backgroundColor: isActive ? "#f8eef2" : "transparent",
      color: isActive ? "#7f1d3f" : "#6c757d",
    };
  };

  return (
    <aside className="col-lg-2 d-none d-lg-block bg-white border-end min-vh-100 p-3">

      <div className="mt-3">

        {/* ================= WORKSPACE ================= */}

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

          {/* Dashboard */}
          <Link
            to="/candidate"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/candidate")}
          >
            <span>▣</span>

            <span
              className={
                location.pathname === "/candidate"
                  ? "fw-semibold"
                  : ""
              }
            >
              Dashboard
            </span>
          </Link>


          {/* Find Jobs */}
          <Link
            to="/candidate/jobs"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/candidate/jobs")}
          >
            <span>⌕</span>

            <span
              className={
                location.pathname === "/candidate/jobs"
                  ? "fw-semibold"
                  : ""
              }
            >
              Find Jobs
            </span>
          </Link>


          {/* Applications */}
          <Link
            to="/candidate/applications"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/candidate/applications")}
          >
            <span>▤</span>

            <span
              className={
                location.pathname === "/candidate/applications"
                  ? "fw-semibold"
                  : ""
              }
            >
              Applications
            </span>
          </Link>


          {/* Saved Jobs */}
          <Link
            to="/candidate/saved-jobs"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/candidate/saved-jobs")}
          >
            <span>♡</span>

            <span
              className={
                location.pathname === "/candidate/saved-jobs"
                  ? "fw-semibold"
                  : ""
              }
            >
              Saved Jobs
            </span>
          </Link>


          {/* Profile */}
          <Link
            to="/candidate/profile"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/candidate/profile")}
          >
            <span>◎</span>

            <span
              className={
                location.pathname === "/candidate/profile"
                  ? "fw-semibold"
                  : ""
              }
            >
              My Profile
            </span>
          </Link>

        </div>


        <hr className="my-4" />


        {/* ================= ACCOUNT ================= */}

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

          {/* Settings */}
          <Link
            to="/candidate/settings"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3"
            style={getLinkStyle("/candidate/settings")}
          >
            <span>⚙</span>

            <span
              className={
                location.pathname === "/candidate/settings"
                  ? "fw-semibold"
                  : ""
              }
            >
              Settings
            </span>
          </Link>


          {/* Logout */}
          <button
            onClick={logout}
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
  );
};

export default CandidateSidebar;