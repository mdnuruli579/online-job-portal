import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CandidateJobs.css";

const CandidateJobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");

  const jobs = [
    {
      id: 1,
      title: "React Developer",
      company: "TechNova Solutions",
      location: "Noida, India",
      type: "Full Time",
      experience: "2-4 Years",
      salary: "₹6 - ₹10 LPA",
      posted: "2 days ago",
      logo: "TN",
      skills: ["React", "JavaScript", "Redux", "Bootstrap"],
    },
    {
      id: 2,
      title: "Node.js Developer",
      company: "CodeCraft Technologies",
      location: "Delhi, India",
      type: "Full Time",
      experience: "1-3 Years",
      salary: "₹5 - ₹8 LPA",
      posted: "1 day ago",
      logo: "CC",
      skills: ["Node.js", "Express", "MongoDB", "REST API"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "InnovateLabs",
      location: "Gurgaon, India",
      type: "Full Time",
      experience: "3-5 Years",
      salary: "₹8 - ₹14 LPA",
      posted: "3 days ago",
      logo: "IL",
      skills: ["React", "Node.js", "MySQL", "AWS"],
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "PixelSoft",
      location: "Remote",
      type: "Remote",
      experience: "2-4 Years",
      salary: "₹7 - ₹12 LPA",
      posted: "5 days ago",
      logo: "PS",
      skills: ["React", "TypeScript", "CSS", "Tailwind"],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesLocation =
      !location || job.location === location;

    const matchesType =
      !jobType || job.type === jobType;

    const matchesExperience =
      !experience || job.experience.includes(experience);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesExperience
    );
  });

  return (
    <div className="candidate-jobs-page">

      {/* HEADER */}

      <div className="jobs-header">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
              <h1>Find Your Dream Job</h1>
              <p>
                Discover opportunities that match your skills
                and career goals.
              </p>
            </div>

            <Link
              to="/candidate/applications"
              className="my-applications-btn"
            >
              <i className="bi bi-file-earmark-text me-2"></i>
              My Applications
            </Link>

          </div>

          {/* SEARCH */}

          <div className="search-box row g-2">

            <div className="col-lg-5">

              <div className="search-input">

                <i className="bi bi-search"></i>

                <input
                  type="text"
                  placeholder="Job title, skills or company"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>

            </div>

            <div className="col-lg-4">

              <div className="search-input">

                <i className="bi bi-geo-alt"></i>

                <select
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                >
                  <option value="">All Locations</option>
                  <option value="Noida, India">
                    Noida
                  </option>
                  <option value="Delhi, India">
                    Delhi
                  </option>
                  <option value="Gurgaon, India">
                    Gurgaon
                  </option>
                  <option value="Remote">
                    Remote
                  </option>
                </select>

              </div>

            </div>

            <div className="col-lg-3">

              <button
                className="search-btn"
                onClick={() => {}}
              >
                <i className="bi bi-search me-2"></i>
                Search Jobs
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* MAIN */}

      <div className="container py-4">

        <div className="row g-4">

          {/* FILTER */}

          <div className="col-lg-3">

            <div className="filter-card">

              <div className="filter-header">
                <h5>Filters</h5>

                <button
                  onClick={() => {
                    setLocation("");
                    setJobType("");
                    setExperience("");
                  }}
                >
                  Clear All
                </button>
              </div>

              <hr />

              {/* JOB TYPE */}

              <div className="filter-section">

                <h6>Job Type</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jobType"
                    id="fulltime"
                    value="Full Time"
                    checked={jobType === "Full Time"}
                    onChange={(e) =>
                      setJobType(e.target.value)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="fulltime"
                  >
                    Full Time
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="jobType"
                    id="remote"
                    value="Remote"
                    checked={jobType === "Remote"}
                    onChange={(e) =>
                      setJobType(e.target.value)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="remote"
                  >
                    Remote
                  </label>
                </div>

              </div>

              {/* EXPERIENCE */}

              <div className="filter-section">

                <h6>Experience</h6>

                {["1-3", "2-4", "3-5"].map((exp) => (
                  <div
                    className="form-check"
                    key={exp}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="experience"
                      id={exp}
                      value={exp}
                      checked={experience === exp}
                      onChange={(e) =>
                        setExperience(e.target.value)
                      }
                    />

                    <label
                      className="form-check-label"
                      htmlFor={exp}
                    >
                      {exp} Years
                    </label>
                  </div>
                ))}

              </div>

              {/* LOCATION */}

              <div className="filter-section">

                <h6>Location</h6>

                {[
                  "Noida, India",
                  "Delhi, India",
                  "Gurgaon, India",
                  "Remote",
                ].map((loc) => (
                  <div
                    className="form-check"
                    key={loc}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="location"
                      id={loc}
                      value={loc}
                      checked={location === loc}
                      onChange={(e) =>
                        setLocation(e.target.value)
                      }
                    />

                    <label
                      className="form-check-label"
                      htmlFor={loc}
                    >
                      {loc}
                    </label>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* JOB LIST */}

          <div className="col-lg-9">

            <div className="jobs-topbar">

              <div>
                <strong>
                  {filteredJobs.length}
                </strong>{" "}
                jobs found
              </div>

              <select className="sort-select">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
              </select>

            </div>

            {filteredJobs.length === 0 ? (
              <div className="no-jobs">
                <i className="bi bi-search"></i>
                <h4>No jobs found</h4>
                <p>
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  className="job-card"
                  key={job.id}
                >

                  <div className="job-card-top">

                    <div className="company-logo">
                      {job.logo}
                    </div>

                    <div className="job-info">

                      <Link
                        to={`/candidate/jobs/${job.id}`}
                        className="job-title"
                      >
                        {job.title}
                      </Link>

                      <div className="company-name">
                        <i className="bi bi-building me-1"></i>
                        {job.company}
                      </div>

                    </div>

                    <button className="save-btn">
                      <i className="bi bi-bookmark"></i>
                    </button>

                  </div>

                  <div className="job-details">

                    <span>
                      <i className="bi bi-geo-alt"></i>
                      {job.location}
                    </span>

                    <span>
                      <i className="bi bi-briefcase"></i>
                      {job.experience}
                    </span>

                    <span>
                      <i className="bi bi-currency-rupee"></i>
                      {job.salary}
                    </span>

                    <span>
                      <i className="bi bi-clock"></i>
                      {job.type}
                    </span>

                  </div>

                  <div className="job-skills">

                    {job.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}

                  </div>

                  <div className="job-footer">

                    <small>
                      Posted {job.posted}
                    </small>

                    <Link
                      to={`/candidate/jobs/${job.id}`}
                      className="view-job-btn"
                    >
                      View Details
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                  </div>

                </div>
              ))
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default CandidateJobs;