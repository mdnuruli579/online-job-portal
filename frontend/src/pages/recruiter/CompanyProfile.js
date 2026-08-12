import React from "react";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  const company = {
    company_id: 1,
    company_name: "TechNova Solutions",
    industry: "Information Technology",
    company_size: 500,
    company_logo: "",
    company_website: "https://technova.example.com",
    about_company:
      "TechNova Solutions is a technology company focused on building modern software products and scalable digital solutions. We work with talented engineers and technology professionals to create products that solve real-world problems.",
  };

  const companyJobs = [
    {
      job_id: 1,
      title: "Senior React Developer",
      location: "Noida, India",
      work_mode: "HYBRID",
      employment_type: "FULL_TIME",
      vacancies: 2,
      status: "ACTIVE",
    },
    {
      job_id: 2,
      title: "Node.js Developer",
      location: "Delhi, India",
      work_mode: "ONSITE",
      employment_type: "FULL_TIME",
      vacancies: 3,
      status: "ACTIVE",
    },
    {
      job_id: 3,
      title: "Frontend Engineer",
      location: "Remote",
      work_mode: "REMOTE",
      employment_type: "FULL_TIME",
      vacancies: 2,
      status: "CLOSED",
    },
  ];

  const activeJobs = companyJobs.filter(
    (job) => job.status === "ACTIVE"
  ).length;

  const getStatusStyle = (status) => {
    if (status === "ACTIVE") {
      return {
        backgroundColor: "#f8eef2",
        color: "#7f1d3f",
      };
    }

    return {
      backgroundColor: "#f4f4f5",
      color: "#52525b",
    };
  };

  const formatEmploymentType = (type) => {
    return type
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>

      {/* ================= HEADER ================= */}
      <div className="mb-4">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

          <div>

            <p
              className="fw-semibold mb-1"
              style={{
                color: "#7f1d3f",
                letterSpacing: "1px",
              }}
            >
              COMPANY MANAGEMENT
            </p>

            <h2 className="fw-bold mb-1">
              Company Profile
            </h2>

            <p className="text-secondary mb-0">
              Manage your company's public information and hiring
              presence.
            </p>

          </div>

          <button
            className="btn text-white px-4 py-2 rounded-3 fw-semibold"
            style={{
              background:
                "linear-gradient(90deg, #7f1d3f, #9f3157)",
            }}
          >
            Edit Company
          </button>

        </div>

      </div>


      {/* ================= COMPANY COVER ================= */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">

        <div
          style={{
            height: "170px",
            background:
              "linear-gradient(110deg, #171717 0%, #4a1d2f 100%)",
          }}
        />

        <div className="card-body px-4 px-lg-5 pb-4">

          <div className="d-flex flex-column flex-md-row align-items-md-end">

            {/* LOGO */}
            <div
              className="rounded-4 border border-4 border-white d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
              style={{
                width: "110px",
                height: "110px",
                marginTop: "-55px",
                background:
                  "linear-gradient(135deg, #7f1d3f, #9f3157)",
                fontSize: "40px",
              }}
            >
              {company.company_name.charAt(0)}
            </div>


            {/* COMPANY NAME */}
            <div className="ms-md-4 mt-3 mt-md-0 flex-grow-1">

              <h2 className="fw-bold mb-1">
                {company.company_name}
              </h2>

              <p className="text-secondary mb-2">
                {company.industry}
              </p>

              <div className="d-flex flex-wrap gap-3">

                <small className="text-secondary">
                  👥 {company.company_size}+ employees
                </small>

                <small className="text-secondary">
                  🌐 Technology
                </small>

              </div>

            </div>


            {/* WEBSITE */}
            <div className="mt-3 mt-md-0">

              <a
                href={company.company_website}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light px-4"
              >
                Visit Website ↗
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <small className="text-secondary">
                Company Size
              </small>

              <h3 className="fw-bold mt-2 mb-0">
                {company.company_size}+
              </h3>

              <small className="text-secondary">
                Employees
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <small className="text-secondary">
                Active Jobs
              </small>

              <h3
                className="fw-bold mt-2 mb-0"
                style={{
                  color: "#7f1d3f",
                }}
              >
                {activeJobs}
              </h3>

              <small className="text-secondary">
                Currently hiring
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <small className="text-secondary">
                Total Jobs
              </small>

              <h3 className="fw-bold mt-2 mb-0">
                {companyJobs.length}
              </h3>

              <small className="text-secondary">
                Job postings
              </small>

            </div>

          </div>

        </div>


        <div className="col-6 col-lg-3">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <small className="text-secondary">
                Industry
              </small>

              <h6 className="fw-bold mt-3 mb-0">
                {company.industry}
              </h6>

              <small className="text-secondary">
                Primary industry
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="row g-4">

        {/* ================= LEFT ================= */}
        <div className="col-lg-8">


          {/* ABOUT COMPANY */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4 p-lg-5">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    About Company
                  </h5>

                  <p className="text-secondary small mb-0">
                    Information candidates can see about your
                    organization.
                  </p>

                </div>

                <button
                  className="btn btn-sm"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  Edit
                </button>

              </div>

              <p className="text-secondary lh-lg mb-0">
                {company.about_company}
              </p>

            </div>

          </div>


          {/* COMPANY INFORMATION */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4 p-lg-5">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    Company Information
                  </h5>

                  <p className="text-secondary small mb-0">
                    Basic information about your company.
                  </p>

                </div>

                <button
                  className="btn btn-sm"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  Edit
                </button>

              </div>


              <div className="row g-4">

                {/* COMPANY NAME */}
                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Company Name
                  </small>

                  <span className="fw-semibold">
                    {company.company_name}
                  </span>

                </div>


                {/* INDUSTRY */}
                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Industry
                  </small>

                  <span className="fw-semibold">
                    {company.industry}
                  </span>

                </div>


                {/* SIZE */}
                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Company Size
                  </small>

                  <span className="fw-semibold">
                    {company.company_size}+ Employees
                  </span>

                </div>


                {/* WEBSITE */}
                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Website
                  </small>

                  <a
                    href={company.company_website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none fw-semibold"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    {company.company_website}
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ACTIVE JOBS */}
          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4 p-lg-5">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    Company Jobs
                  </h5>

                  <p className="text-secondary small mb-0">
                    Job opportunities currently associated with
                    your company.
                  </p>

                </div>

                <Link
                  to="/recruiter/jobs"
                  className="text-decoration-none fw-semibold small"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  View All →
                </Link>

              </div>


              {companyJobs.map((job, index) => (

                <div
                  key={job.job_id}
                  className={`d-flex align-items-center ${
                    index !== companyJobs.length - 1
                      ? "border-bottom pb-3 mb-3"
                      : ""
                  }`}
                >

                  {/* ICON */}
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#f8eef2",
                      color: "#7f1d3f",
                      fontWeight: "700",
                    }}
                  >
                    {job.title.charAt(0)}
                  </div>


                  <div className="flex-grow-1">

                    <Link
                      to={`/recruiter/jobs/${job.job_id}`}
                      className="text-decoration-none"
                    >
                      <h6
                        className="fw-bold mb-1"
                        style={{
                          color: "#292524",
                        }}
                      >
                        {job.title}
                      </h6>
                    </Link>

                    <small className="text-secondary">
                      📍 {job.location} • {job.work_mode} •{" "}
                      {formatEmploymentType(
                        job.employment_type
                      )}
                    </small>

                  </div>


                  <div className="text-end">

                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={getStatusStyle(job.status)}
                    >
                      {job.status}
                    </span>

                    <small className="text-secondary d-block mt-2">
                      {job.vacancies} vacancies
                    </small>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="col-lg-4">


          {/* PROFILE COMPLETION */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h5 className="fw-bold mb-0">
                  Profile Completion
                </h5>

                <span
                  className="fw-bold"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  85%
                </span>

              </div>


              <div
                className="progress mb-4"
                style={{
                  height: "8px",
                }}
              >

                <div
                  className="progress-bar"
                  style={{
                    width: "85%",
                    background:
                      "linear-gradient(90deg, #7f1d3f, #9f3157)",
                  }}
                />

              </div>


              <div className="d-flex align-items-center mb-3">

                <span
                  className="me-2"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  ✓
                </span>

                <small>
                  Company name
                </small>

              </div>


              <div className="d-flex align-items-center mb-3">

                <span
                  className="me-2"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  ✓
                </span>

                <small>
                  Industry
                </small>

              </div>


              <div className="d-flex align-items-center mb-3">

                <span
                  className="me-2"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  ✓
                </span>

                <small>
                  Company description
                </small>

              </div>


              <div className="d-flex align-items-center">

                <span className="text-secondary me-2">
                  ○
                </span>

                <small className="text-secondary">
                  Company logo
                </small>

              </div>

            </div>

          </div>


          {/* COMPANY WEBSITE */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">
                Online Presence
              </h5>

              <div className="d-flex align-items-center">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  🌐
                </div>

                <div>

                  <small className="text-secondary d-block">
                    Company Website
                  </small>

                  <a
                    href={company.company_website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none fw-semibold"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    Visit Website ↗
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* RECRUITER TIP */}
          <div
            className="card border-0 rounded-4"
            style={{
              backgroundColor: "#faf5e8",
            }}
          >

            <div className="card-body p-4">

              <div className="d-flex">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#d6b36a",
                    color: "#3f1d2e",
                    fontSize: "20px",
                  }}
                >
                  ✦
                </div>

                <div>

                  <h6 className="fw-bold mb-2">
                    Build candidate trust
                  </h6>

                  <p className="small text-secondary mb-0">
                    A detailed company profile helps candidates
                    understand your organization before applying.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CompanyProfile;