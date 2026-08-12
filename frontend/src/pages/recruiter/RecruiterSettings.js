import React from "react";

const RecruiterSettings = () => {
  return (
    <div>

      {/* ================= HEADER ================= */}
      <div className="mb-4">

        <p
          className="fw-semibold mb-1"
          style={{
            color: "#7f1d3f",
            letterSpacing: "1px",
          }}
        >
          ACCOUNT MANAGEMENT
        </p>

        <h2 className="fw-bold mb-1">
          Settings
        </h2>

        <p className="text-secondary mb-0">
          Manage your recruiter account, notifications and security.
        </p>

      </div>


      {/* ================= SETTINGS LAYOUT ================= */}
      <div className="row g-4">

        {/* ================= SETTINGS MENU ================= */}
        <div className="col-lg-3">

          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-3">

              <div
                className="d-flex align-items-center gap-3 rounded-3 px-3 py-3 mb-1"
                style={{
                  backgroundColor: "#f8eef2",
                  color: "#7f1d3f",
                }}
              >
                <span>◉</span>

                <span className="fw-semibold">
                  Account
                </span>
              </div>


              <button className="btn d-flex align-items-center gap-3 text-secondary rounded-3 px-3 py-3 w-100 text-start">
                <span>🔔</span>

                <span>
                  Notifications
                </span>
              </button>


              <button className="btn d-flex align-items-center gap-3 text-secondary rounded-3 px-3 py-3 w-100 text-start">
                <span>🔒</span>

                <span>
                  Security
                </span>
              </button>


              <button className="btn d-flex align-items-center gap-3 text-secondary rounded-3 px-3 py-3 w-100 text-start">
                <span>🌐</span>

                <span>
                  Preferences
                </span>
              </button>


              <hr className="my-3" />


              <button className="btn d-flex align-items-center gap-3 text-danger rounded-3 px-3 py-3 w-100 text-start">
                <span>↪</span>

                <span>
                  Logout
                </span>
              </button>

            </div>

          </div>

        </div>


        {/* ================= SETTINGS CONTENT ================= */}
        <div className="col-lg-9">


          {/* ================= ACCOUNT INFORMATION ================= */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4 p-lg-5">

              <div className="mb-4">

                <h5 className="fw-bold mb-1">
                  Account Information
                </h5>

                <p className="text-secondary small mb-0">
                  Update your recruiter account information.
                </p>

              </div>


              <div className="row g-4">

                {/* FULL NAME */}
                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Rahul Sharma"
                  />

                </div>


                {/* EMAIL */}
                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    defaultValue="rahul@technova.com"
                  />

                </div>


                {/* PHONE */}
                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    defaultValue="9876543210"
                  />

                </div>


                {/* ACCOUNT TYPE */}
                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Account Type
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value="RECRUITER"
                    disabled
                    readOnly
                  />

                </div>

              </div>


              <div className="d-flex justify-content-end mt-4">

                <button
                  className="btn text-white px-4 fw-semibold"
                  style={{
                    backgroundColor: "#7f1d3f",
                  }}
                >
                  Save Changes
                </button>

              </div>

            </div>

          </div>


          {/* ================= NOTIFICATIONS ================= */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4 p-lg-5">

              <div className="mb-4">

                <h5 className="fw-bold mb-1">
                  Notification Settings
                </h5>

                <p className="text-secondary small mb-0">
                  Choose which notifications you want to receive.
                </p>

              </div>


              {/* APPLICATION */}
              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div>

                  <h6 className="fw-semibold mb-1">
                    New Applications
                  </h6>

                  <small className="text-secondary">
                    Get notified when a candidate applies to your job.
                  </small>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                    style={{
                      width: "42px",
                      height: "22px",
                    }}
                  />

                </div>

              </div>


              {/* SHORTLIST */}
              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div>

                  <h6 className="fw-semibold mb-1">
                    Candidate Updates
                  </h6>

                  <small className="text-secondary">
                    Receive updates about candidate activity.
                  </small>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                    style={{
                      width: "42px",
                      height: "22px",
                    }}
                  />

                </div>

              </div>


              {/* JOB EXPIRATION */}
              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div>

                  <h6 className="fw-semibold mb-1">
                    Job Expiration Reminder
                  </h6>

                  <small className="text-secondary">
                    Get reminded before a job posting expires.
                  </small>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                    style={{
                      width: "42px",
                      height: "22px",
                    }}
                  />

                </div>

              </div>


              {/* MARKETING */}
              <div className="d-flex justify-content-between align-items-center py-3">

                <div>

                  <h6 className="fw-semibold mb-1">
                    Product Updates
                  </h6>

                  <small className="text-secondary">
                    Receive news and updates about JobPortal.
                  </small>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{
                      width: "42px",
                      height: "22px",
                    }}
                  />

                </div>

              </div>

            </div>

          </div>


          {/* ================= SECURITY ================= */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4 p-lg-5">

              <div className="mb-4">

                <h5 className="fw-bold mb-1">
                  Security
                </h5>

                <p className="text-secondary small mb-0">
                  Keep your recruiter account secure.
                </p>

              </div>


              {/* PASSWORD */}
              <div className="d-flex justify-content-between align-items-center py-3 border-bottom">

                <div>

                  <h6 className="fw-semibold mb-1">
                    Password
                  </h6>

                  <small className="text-secondary">
                    Last changed recently
                  </small>

                </div>

                <button
                  className="btn btn-light px-3"
                >
                  Change Password
                </button>

              </div>


              {/* TWO FACTOR */}
              <div className="d-flex justify-content-between align-items-center py-3">

                <div>

                  <h6 className="fw-semibold mb-1">
                    Two-Factor Authentication
                  </h6>

                  <small className="text-secondary">
                    Add an extra layer of security to your account.
                  </small>

                </div>

                <div className="form-check form-switch">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{
                      width: "42px",
                      height: "22px",
                    }}
                  />

                </div>

              </div>

            </div>

          </div>


          {/* ================= PREFERENCES ================= */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4 p-lg-5">

              <div className="mb-4">

                <h5 className="fw-bold mb-1">
                  Preferences
                </h5>

                <p className="text-secondary small mb-0">
                  Customize your JobPortal experience.
                </p>

              </div>


              <div className="row g-4">

                {/* LANGUAGE */}
                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Language
                  </label>

                  <select className="form-select">

                    <option>
                      English
                    </option>

                    <option>
                      Hindi
                    </option>

                  </select>

                </div>


                {/* TIMEZONE */}
                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Time Zone
                  </label>

                  <select className="form-select">

                    <option>
                      (GMT+05:30) India Standard Time
                    </option>

                    <option>
                      (GMT+00:00) UTC
                    </option>

                  </select>

                </div>

              </div>


              <div className="d-flex justify-content-end mt-4">

                <button
                  className="btn text-white px-4 fw-semibold"
                  style={{
                    backgroundColor: "#7f1d3f",
                  }}
                >
                  Save Preferences
                </button>

              </div>

            </div>

          </div>


          {/* ================= DANGER ZONE ================= */}
          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4 p-lg-5">

              <div className="mb-4">

                <h5
                  className="fw-bold mb-1"
                  style={{
                    color: "#991b1b",
                  }}
                >
                  Danger Zone
                </h5>

                <p className="text-secondary small mb-0">
                  These actions can affect your recruiter account.
                </p>

              </div>


              <div
                className="rounded-4 p-4"
                style={{
                  backgroundColor: "#fef2f2",
                }}
              >

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

                  <div>

                    <h6 className="fw-bold mb-1">
                      Deactivate Account
                    </h6>

                    <small className="text-secondary">
                      Temporarily disable your recruiter account and
                      job postings.
                    </small>

                  </div>

                  <button
                    className="btn btn-outline-danger px-4"
                  >
                    Deactivate
                  </button>

                </div>

              </div>


              <div className="mt-3">

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

                  <div>

                    <h6 className="fw-bold mb-1">
                      Delete Account
                    </h6>

                    <small className="text-secondary">
                      Permanently delete your account and associated
                      data.
                    </small>

                  </div>

                  <button className="btn btn-danger px-4">
                    Delete Account
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RecruiterSettings;