import React from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

const RecruiterSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  // Active text class
  const getTextClass = (path) => {
    return location.pathname === path
      ? "fw-semibold"
      : "";
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

          {/* ================= DASHBOARD ================= */}

          <Link
            to="/recruiter"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/recruiter")}
          >
            <span>▣</span>

            <span className={getTextClass("/recruiter")}>
              Dashboard
            </span>
          </Link>


          {/* ================= MY JOBS ================= */}

          <Link
            to="/recruiter/jobs"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/recruiter/jobs")}
          >
            <span>▤</span>

            <span className={getTextClass("/recruiter/jobs")}>
              My Jobs
            </span>
          </Link>


          {/* ================= POST JOB ================= */}

          <Link
            to="/recruiter/jobs/create"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/recruiter/jobs/create")}
          >
            <span>＋</span>

            <span
              className={getTextClass(
                "/recruiter/jobs/create"
              )}
            >
              Post a Job
            </span>
          </Link>


          {/* ================= APPLICATIONS ================= */}

          <Link
            to="/recruiter/applications"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/recruiter/applications")}
          >
            <span>▥</span>

            <span
              className={getTextClass(
                "/recruiter/applications"
              )}
            >
              Applications
            </span>
          </Link>


          {/* ================= CANDIDATES ================= */}

          <Link
            to="/recruiter/candidates"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/recruiter/candidates")}
          >
            <span>◎</span>

            <span
              className={getTextClass(
                "/recruiter/candidates"
              )}
            >
              Candidates
            </span>
          </Link>

        </div>


        <hr className="my-4" />


        {/* ================= COMPANY ================= */}

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

          {/* ================= COMPANY PROFILE ================= */}

          <Link
            to="/recruiter/company"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3 mb-1"
            style={getLinkStyle("/recruiter/company")}
          >
            <span>▣</span>

            <span
              className={getTextClass(
                "/recruiter/company"
              )}
            >
              Company Profile
            </span>
          </Link>


          {/* ================= SETTINGS ================= */}

          <Link
            to="/recruiter/settings"
            className="d-flex align-items-center gap-3 text-decoration-none rounded-3 px-3 py-3"
            style={getLinkStyle("/recruiter/settings")}
          >
            <span>⚙</span>

            <span
              className={getTextClass(
                "/recruiter/settings"
              )}
            >
              Settings
            </span>
          </Link>

        </div>


        <hr className="my-4" />


        {/* ================= LOGOUT ================= */}

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

    </aside>
  );
};

export default RecruiterSidebar;