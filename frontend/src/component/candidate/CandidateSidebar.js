import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const CandidateSidebar = () => {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/login")
  }
  return (
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
                  onClick={logout}
                  className="btn 
                  d-flex align-items-center gap-3 
                  text-danger rounded-3 px-3 py-3 
                  w-100 text-start"
                >
                  <span>↪</span>
                  <span>
                    Logout
                  </span>
                </button>

              </div>

            </div>

          </aside>
  )
}

export default CandidateSidebar