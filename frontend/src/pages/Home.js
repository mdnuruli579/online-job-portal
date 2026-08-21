import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Redirect logged-in users to their dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) return;

    try {
      const userData = JSON.parse(user);

      if (userData.user_type === "Candidate") {
        navigate("/candidate", { replace: true });
      } else if (userData.user_type === "Recruiter") {
        navigate("/recruiter", { replace: true });
      } else if (userData.user_type === "Admin") {
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [navigate]);

  return (
    <div
      className="min-vh-100"
      style={{
        background: "#f8f6f4",
      }}
    >

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background:
            "linear-gradient(135deg, #171717 0%, #292524 60%, #3f1d2e 100%)",
        }}
      >
        <div className="container py-2">

          <a
            href="/"
            className="navbar-brand fw-bold fs-3"
          >
            Job
            <span style={{ color: "#d6b36a" }}>
              Portal
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active px-3"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#jobs"
                  className="nav-link px-3"
                >
                  Find Jobs
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#companies"
                  className="nav-link px-3"
                >
                  Companies
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#categories"
                  className="nav-link px-3"
                >
                  Categories
                </a>
              </li>

            </ul>

            <div className="d-flex gap-2">

              <button
                className="btn btn-outline-light px-4 rounded-3"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <button
                className="btn px-4 rounded-3 fw-semibold"
                style={{
                  background: "#d6b36a",
                  color: "#171717",
                  border: "none",
                }}
                onClick={() => navigate("/register")}
              >
                Register
              </button>

            </div>

          </div>

        </div>
      </nav>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="text-white"
        style={{
          background:
            "linear-gradient(135deg, #171717 0%, #292524 55%, #3f1d2e 100%)",
        }}
      >

        <div className="container py-5">

          <div className="row align-items-center py-5">

            {/* LEFT */}

            <div className="col-lg-7">

              <span
                className="badge rounded-pill px-3 py-2 mb-4"
                style={{
                  background: "rgba(214,179,106,0.12)",
                  color: "#d6b36a",
                  border:
                    "1px solid rgba(214,179,106,0.25)",
                }}
              >
                YOUR CAREER, YOUR NEXT CHAPTER
              </span>

              <h1 className="display-3 fw-bold lh-sm mb-4">

                Find work that
                <br />

                <span style={{ color: "#d6b36a" }}>
                  moves you forward.
                </span>

              </h1>

              <p
                className="lead mb-4"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "620px",
                }}
              >
                Discover meaningful opportunities from
                leading companies and take the next step
                in your professional journey.
              </p>


              {/* SEARCH */}

              <div
                className="p-2 rounded-4 shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >

                <div className="row g-2">

                  <div className="col-md-5">

                    <div className="input-group">

                      <span
                        className="input-group-text border-0"
                        style={{
                          background: "#fff",
                        }}
                      >
                        🔍
                      </span>

                      <input
                        type="text"
                        className="form-control form-control-lg border-0"
                        placeholder="Job title or skills"
                      />

                    </div>

                  </div>


                  <div className="col-md-4">

                    <div className="input-group">

                      <span
                        className="input-group-text border-0"
                        style={{
                          background: "#fff",
                        }}
                      >
                        📍
                      </span>

                      <input
                        type="text"
                        className="form-control form-control-lg border-0"
                        placeholder="Location"
                      />

                    </div>

                  </div>


                  <div className="col-md-3">

                    <button
                      className="btn btn-lg w-100 h-100 fw-semibold"
                      style={{
                        background:
                          "linear-gradient(90deg, #7f1d3f, #9f3157)",
                        color: "#fff",
                        border: "none",
                      }}
                      onClick={() => navigate("/jobs")}
                    >
                      Search Jobs
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="col-lg-5 mt-5 mt-lg-0">

              <div
                className="rounded-4 p-4 shadow-lg"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(15px)",
                }}
              >

                <div className="d-flex align-items-center mb-4">

                  <div
                    className="rounded-4 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "65px",
                      height: "65px",
                      background:
                        "rgba(214,179,106,0.12)",
                      fontSize: "30px",
                    }}
                  >
                    💼
                  </div>

                  <div>

                    <h5 className="fw-bold mb-1">
                      Career Opportunities
                    </h5>

                    <small
                      style={{
                        color:
                          "rgba(255,255,255,0.55)",
                      }}
                    >
                      Built for ambitious professionals
                    </small>

                  </div>

                </div>


                <div className="row g-3">

                  <div className="col-6">

                    <div
                      className="rounded-4 p-3"
                      style={{
                        background:
                          "rgba(255,255,255,0.06)",
                      }}
                    >

                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: "#d6b36a",
                        }}
                      >
                        10K+
                      </h3>

                      <small className="text-white-50">
                        Active Jobs
                      </small>

                    </div>

                  </div>


                  <div className="col-6">

                    <div
                      className="rounded-4 p-3"
                      style={{
                        background:
                          "rgba(255,255,255,0.06)",
                      }}
                    >

                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: "#d6b36a",
                        }}
                      >
                        5K+
                      </h3>

                      <small className="text-white-50">
                        Companies
                      </small>

                    </div>

                  </div>


                  <div className="col-6">

                    <div
                      className="rounded-4 p-3"
                      style={{
                        background:
                          "rgba(255,255,255,0.06)",
                      }}
                    >

                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: "#d6b36a",
                        }}
                      >
                        20K+
                      </h3>

                      <small className="text-white-50">
                        Candidates
                      </small>

                    </div>

                  </div>


                  <div className="col-6">

                    <div
                      className="rounded-4 p-3"
                      style={{
                        background:
                          "rgba(255,255,255,0.06)",
                      }}
                    >

                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: "#d6b36a",
                        }}
                      >
                        95%
                      </h3>

                      <small className="text-white-50">
                        Success Rate
                      </small>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section
        id="categories"
        className="py-5"
      >

        <div className="container py-4">

          <div className="text-center mb-5">

            <span
              className="fw-semibold small"
              style={{
                color: "#7f1d3f",
                letterSpacing: "2px",
              }}
            >
              EXPLORE OPPORTUNITIES
            </span>

            <h2 className="fw-bold mt-2">
              Popular Job Categories
            </h2>

            <p className="text-secondary">
              Explore opportunities across leading industries
            </p>

          </div>


          <div className="row g-4">

            {[
              {
                icon: "💻",
                title: "IT & Software",
                jobs: "2,450 Jobs",
              },
              {
                icon: "📊",
                title: "Finance",
                jobs: "1,280 Jobs",
              },
              {
                icon: "📢",
                title: "Marketing",
                jobs: "980 Jobs",
              },
              {
                icon: "🏥",
                title: "Healthcare",
                jobs: "760 Jobs",
              },
            ].map((category) => (

              <div
                className="col-md-6 col-lg-3"
                key={category.title}
              >

                <div
                  className="card border-0 h-100 shadow-sm"
                  style={{
                    borderRadius: "18px",
                  }}
                >

                  <div className="card-body p-4">

                    <div
                      className="rounded-4 d-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "#f8eef2",
                        fontSize: "28px",
                      }}
                    >
                      {category.icon}
                    </div>

                    <h5 className="fw-bold">
                      {category.title}
                    </h5>

                    <p className="text-secondary small mb-4">
                      {category.jobs}
                    </p>

                    <button
                      className="btn btn-sm px-0 fw-semibold"
                      style={{
                        color: "#7f1d3f",
                      }}
                      onClick={() => navigate("/jobs")}
                    >
                      Explore Jobs →
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY JOB PORTAL
      ====================================================== */}

      <section
        id="about"
        className="py-5 bg-white"
      >

        <div className="container py-4">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span
                className="fw-semibold small"
                style={{
                  color: "#7f1d3f",
                  letterSpacing: "2px",
                }}
              >
                WHY JOBPORTAL
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-4">
                Everything you need to build your career.
              </h2>

              <p className="text-secondary mb-5">
                Whether you're looking for your next opportunity
                or searching for exceptional talent, JobPortal
                brings everything together in one place.
              </p>


              {[
                {
                  icon: "✓",
                  title: "Personalized Opportunities",
                  text: "Discover jobs based on your skills, experience and career goals.",
                },
                {
                  icon: "✓",
                  title: "Easy Application Tracking",
                  text: "Keep track of every application from submission to final decision.",
                },
                {
                  icon: "✓",
                  title: "Trusted Companies",
                  text: "Explore opportunities from companies across multiple industries.",
                },
              ].map((item) => (

                <div
                  className="d-flex mb-4"
                  key={item.title}
                >

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                    style={{
                      width: "42px",
                      height: "42px",
                      background: "#f8eef2",
                      color: "#7f1d3f",
                      fontWeight: "bold",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h5 className="fw-bold mb-1">
                      {item.title}
                    </h5>

                    <p className="text-secondary mb-0">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">

              <div
                className="rounded-4 p-5 text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(160deg, #171717 0%, #4a1d2f 100%)",
                }}
              >

                <div
                  className="rounded-4 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    background:
                      "rgba(255,255,255,0.08)",
                    fontSize: "32px",
                  }}
                >
                  🏢
                </div>

                <h3 className="fw-bold mb-3">
                  Are you hiring?
                </h3>

                <p className="text-white-50 lh-lg mb-4">
                  Find talented professionals and build your
                  dream team. Post your job and connect with
                  qualified candidates.
                </p>

                <button
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    background: "#d6b36a",
                    color: "#171717",
                    border: "none",
                  }}
                  onClick={() => navigate("/register")}
                >
                  Start Hiring
                  <span className="ms-2">
                    →
                  </span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="py-5">

        <div className="container">

          <div
            className="rounded-4 p-5 text-center text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #171717 0%, #292524 55%, #4a1d2f 100%)",
            }}
          >

            <span
              style={{
                color: "#d6b36a",
              }}
            >
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h2 className="display-6 fw-bold mt-3">
              Ready to find your next opportunity?
            </h2>

            <p className="text-white-50 mb-4">
              Create your account and start exploring
              opportunities today.
            </p>

            <button
              className="btn btn-lg px-5 fw-semibold"
              style={{
                background: "#d6b36a",
                color: "#171717",
                border: "none",
              }}
              onClick={() => navigate("/register")}
            >
              Get Started →
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="text-white py-4"
        style={{
          background: "#171717",
        }}
      >

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h5 className="fw-bold mb-1">
                Job
                <span style={{ color: "#d6b36a" }}>
                  Portal
                </span>
              </h5>

              <small className="text-white-50">
                Your career, your next chapter.
              </small>

            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">

              <small className="text-white-50">
                © 2026 JobPortal. All rights reserved.
              </small>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;