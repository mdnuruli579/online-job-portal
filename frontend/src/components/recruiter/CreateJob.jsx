import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateJob.css";

const CreateJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    employmentType: "",
    location: "",
    workMode: "",
    experienceMin: "",
    experienceMax: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    skills: "",
    vacancies: 1,
    applicationDeadline: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Job Data:", formData);

    // API call
    // POST /api/jobs

    alert("Job posted successfully!");
  };

  return (
    <div className="create-job-page">

      {/* TOP HEADER */}

      <div className="create-job-header">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">

            <div>
              <div className="breadcrumb-text">
                Recruiter Dashboard
                <i className="bi bi-chevron-right"></i>
                Post a Job
              </div>

              <h1>Post a New Job</h1>

              <p>
                Find the right candidate for your organization.
              </p>
            </div>

            <button
              className="back-btn"
              onClick={() => navigate("/recruiter/jobs")}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Jobs
            </button>

          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="container py-4">

        <div className="row g-4">

          {/* FORM */}

          <div className="col-lg-8">

            <form onSubmit={handleSubmit}>

              {/* JOB INFORMATION */}

              <div className="form-card">

                <div className="section-title">

                  <div className="section-icon">
                    <i className="bi bi-briefcase"></i>
                  </div>

                  <div>
                    <h4>Job Information</h4>
                    <p>Tell candidates about the position.</p>
                  </div>

                </div>

                <hr />

                {/* TITLE */}

                <div className="mb-4">

                  <label className="form-label">
                    Job Title <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="title"
                    className="form-control custom-control"
                    placeholder="e.g. Senior React Developer"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="row g-3">

                  {/* CATEGORY */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Job Category <span>*</span>
                    </label>

                    <select
                      name="category"
                      className="form-select custom-control"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select category
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Data Science">
                        Data Science
                      </option>
                      <option value="Design">
                        Design
                      </option>
                      <option value="Marketing">
                        Marketing
                      </option>
                      <option value="Sales">
                        Sales
                      </option>
                    </select>

                  </div>

                  {/* EMPLOYMENT TYPE */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Employment Type <span>*</span>
                    </label>

                    <select
                      name="employmentType"
                      className="form-select custom-control"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select employment type
                      </option>
                      <option value="FULL_TIME">
                        Full Time
                      </option>
                      <option value="PART_TIME">
                        Part Time
                      </option>
                      <option value="CONTRACT">
                        Contract
                      </option>
                      <option value="INTERNSHIP">
                        Internship
                      </option>
                    </select>

                  </div>

                </div>

                {/* LOCATION */}

                <div className="row g-3 mt-1">

                  <div className="col-md-6">

                    <label className="form-label">
                      Location <span>*</span>
                    </label>

                    <div className="input-group custom-input">

                      <span className="input-group-text">
                        <i className="bi bi-geo-alt"></i>
                      </span>

                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="e.g. Noida, India"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* WORK MODE */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Work Mode <span>*</span>
                    </label>

                    <select
                      name="workMode"
                      className="form-select custom-control"
                      value={formData.workMode}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select work mode
                      </option>
                      <option value="ONSITE">
                        On-site
                      </option>
                      <option value="REMOTE">
                        Remote
                      </option>
                      <option value="HYBRID">
                        Hybrid
                      </option>
                    </select>

                  </div>

                </div>

              </div>

              {/* EXPERIENCE */}

              <div className="form-card">

                <div className="section-title">

                  <div className="section-icon">
                    <i className="bi bi-person-badge"></i>
                  </div>

                  <div>
                    <h4>Experience & Compensation</h4>
                    <p>
                      Define the ideal candidate profile.
                    </p>
                  </div>

                </div>

                <hr />

                <label className="form-label">
                  Experience Required
                </label>

                <div className="row g-3 mb-4">

                  <div className="col-md-6">

                    <div className="input-group custom-input">

                      <input
                        type="number"
                        name="experienceMin"
                        className="form-control"
                        placeholder="Minimum"
                        min="0"
                        value={formData.experienceMin}
                        onChange={handleChange}
                      />

                      <span className="input-group-text">
                        Years
                      </span>

                    </div>

                  </div>

                  <div className="col-md-6">

                    <div className="input-group custom-input">

                      <input
                        type="number"
                        name="experienceMax"
                        className="form-control"
                        placeholder="Maximum"
                        min="0"
                        value={formData.experienceMax}
                        onChange={handleChange}
                      />

                      <span className="input-group-text">
                        Years
                      </span>

                    </div>

                  </div>

                </div>

                <label className="form-label">
                  Salary Range
                </label>

                <div className="row g-3">

                  <div className="col-md-6">

                    <div className="input-group custom-input">

                      <span className="input-group-text">
                        ₹
                      </span>

                      <input
                        type="number"
                        name="salaryMin"
                        className="form-control"
                        placeholder="Minimum salary"
                        value={formData.salaryMin}
                        onChange={handleChange}
                      />

                      <span className="input-group-text">
                        LPA
                      </span>

                    </div>

                  </div>

                  <div className="col-md-6">

                    <div className="input-group custom-input">

                      <span className="input-group-text">
                        ₹
                      </span>

                      <input
                        type="number"
                        name="salaryMax"
                        className="form-control"
                        placeholder="Maximum salary"
                        value={formData.salaryMax}
                        onChange={handleChange}
                      />

                      <span className="input-group-text">
                        LPA
                      </span>

                    </div>

                  </div>

                </div>

                <div className="row g-3 mt-2">

                  <div className="col-md-6">

                    <label className="form-label">
                      Number of Vacancies
                    </label>

                    <input
                      type="number"
                      name="vacancies"
                      className="form-control custom-control"
                      min="1"
                      value={formData.vacancies}
                      onChange={handleChange}
                    />

                  </div>

                </div>

              </div>

              {/* DESCRIPTION */}

              <div className="form-card">

                <div className="section-title">

                  <div className="section-icon">
                    <i className="bi bi-file-text"></i>
                  </div>

                  <div>
                    <h4>Job Description</h4>
                    <p>
                      Explain the role and responsibilities.
                    </p>
                  </div>

                </div>

                <hr />

                <div className="mb-4">

                  <label className="form-label">
                    Description <span>*</span>
                  </label>

                  <textarea
                    name="description"
                    rows="7"
                    className="form-control custom-control"
                    placeholder="Describe the role, responsibilities, day-to-day activities..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label className="form-label">
                    Requirements <span>*</span>
                  </label>

                  <textarea
                    name="requirements"
                    rows="6"
                    className="form-control custom-control"
                    placeholder="List the qualifications and requirements..."
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div>

                  <label className="form-label">
                    Required Skills
                  </label>

                  <input
                    type="text"
                    name="skills"
                    className="form-control custom-control"
                    placeholder="React, Node.js, MySQL, JavaScript"
                    value={formData.skills}
                    onChange={handleChange}
                  />

                  <small className="form-help">
                    Separate skills using commas.
                  </small>

                </div>

              </div>

              {/* APPLICATION */}

              <div className="form-card">

                <div className="section-title">

                  <div className="section-icon">
                    <i className="bi bi-send"></i>
                  </div>

                  <div>
                    <h4>Application Settings</h4>
                    <p>
                      Configure how candidates can apply.
                    </p>
                  </div>

                </div>

                <hr />

                <div className="row g-3">

                  <div className="col-md-6">

                    <label className="form-label">
                      Application Deadline
                    </label>

                    <input
                      type="date"
                      name="applicationDeadline"
                      className="form-control custom-control"
                      value={formData.applicationDeadline}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="col-md-6">

                    <label className="form-label">
                      Contact Email
                    </label>

                    <input
                      type="email"
                      name="contactEmail"
                      className="form-control custom-control"
                      placeholder="hr@company.com"
                      value={formData.contactEmail}
                      onChange={handleChange}
                    />

                  </div>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    navigate("/recruiter/jobs")
                  }
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="preview-btn"
                >
                  <i className="bi bi-eye me-2"></i>
                  Preview
                </button>

                <button
                  type="submit"
                  className="post-job-btn"
                >
                  <i className="bi bi-send me-2"></i>
                  Post Job
                </button>

              </div>

            </form>

          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-4">

            <div className="tips-card">

              <div className="tips-icon">
                <i className="bi bi-lightbulb"></i>
              </div>

              <h5>Tips for a great job post</h5>

              <ul>
                <li>
                  Use a clear and specific job title.
                </li>

                <li>
                  Clearly describe responsibilities.
                </li>

                <li>
                  Mention required technical skills.
                </li>

                <li>
                  Provide an accurate salary range.
                </li>

                <li>
                  Keep your requirements realistic.
                </li>
              </ul>

            </div>

            {/* JOB PREVIEW */}

            <div className="preview-card">

              <div className="preview-header">
                <span>LIVE PREVIEW</span>
              </div>

              <div className="preview-logo">
                <i className="bi bi-building"></i>
              </div>

              <h5>
                {formData.title ||
                  "Your Job Title"}
              </h5>

              <p className="preview-company">
                Your Company
              </p>

              <div className="preview-info">

                <span>
                  <i className="bi bi-geo-alt"></i>
                  {formData.location ||
                    "Location"}
                </span>

                <span>
                  <i className="bi bi-briefcase"></i>
                  {formData.employmentType ||
                    "Employment Type"}
                </span>

                <span>
                  <i className="bi bi-currency-rupee"></i>
                  {formData.salaryMin &&
                  formData.salaryMax
                    ? `₹${formData.salaryMin} - ₹${formData.salaryMax} LPA`
                    : "Salary"}
                </span>

              </div>

              <div className="preview-divider"></div>

              <p className="preview-description">
                {formData.description ||
                  "Your job description will appear here..."}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateJob;