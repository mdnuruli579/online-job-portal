import React from "react";

const Profile = () => {
  const user = {
    user_id: 1,
    full_name: "Nurul Islam",
    email: "nurul@example.com",
    phone: 9876543210,
    user_type: "CANDIDATE",
    status: "ACTIVE",
  };

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MySQL",
    "Sequelize",
    "REST API",
  ];

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
          MY PROFILE
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

          <div>
            <h2 className="fw-bold mb-1">
              Profile
            </h2>

            <p className="text-secondary mb-0">
              Manage your professional information and profile.
            </p>
          </div>

          <button
            className="btn text-white px-4 py-2 rounded-3 fw-semibold"
            style={{
              background:
                "linear-gradient(90deg, #7f1d3f, #9f3157)",
            }}
          >
            Edit Profile
          </button>

        </div>

      </div>


      {/* ================= PROFILE HEADER ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">

        {/* COVER */}
        <div
          style={{
            height: "150px",
            background:
              "linear-gradient(120deg, #171717 0%, #4a1d2f 100%)",
          }}
        />

        <div className="card-body px-4 pb-4">

          <div className="d-flex flex-column flex-md-row align-items-md-end">

            {/* PROFILE IMAGE */}
            <div
              className="rounded-circle border border-4 border-white d-flex align-items-center justify-content-center text-white fw-bold"
              style={{
                width: "110px",
                height: "110px",
                marginTop: "-55px",
                background:
                  "linear-gradient(135deg, #7f1d3f, #9f3157)",
                fontSize: "38px",
              }}
            >
              N
            </div>


            <div className="ms-md-4 mt-3 mt-md-0 flex-grow-1">

              <h3 className="fw-bold mb-1">
                {user.full_name}
              </h3>

              <p className="text-secondary mb-2">
                Software Developer
              </p>

              <div className="d-flex flex-wrap gap-2">

                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  {user.user_type}
                </span>

                <span className="text-secondary small align-self-center">
                  📍 India
                </span>

              </div>

            </div>


            <div className="mt-3 mt-md-0">

              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  backgroundColor: "#faf5e8",
                  color: "#8a681f",
                }}
              >
                Profile 75% Complete
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="row g-4">

        {/* ================= LEFT ================= */}
        <div className="col-lg-8">

          {/* PERSONAL INFORMATION */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    Personal Information
                  </h5>

                  <p className="text-secondary small mb-0">
                    Your basic account information
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

                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Full Name
                  </small>

                  <span className="fw-semibold">
                    {user.full_name}
                  </span>

                </div>


                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Email Address
                  </small>

                  <span className="fw-semibold">
                    {user.email}
                  </span>

                </div>


                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Phone Number
                  </small>

                  <span className="fw-semibold">
                    +91 {user.phone}
                  </span>

                </div>


                <div className="col-md-6">

                  <small className="text-secondary d-block mb-1">
                    Account Type
                  </small>

                  <span className="fw-semibold">
                    {user.user_type}
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* ABOUT */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h5 className="fw-bold mb-0">
                  About Me
                </h5>

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
                Passionate software developer with experience in
                building modern web applications. Interested in
                frontend and backend development and looking for
                opportunities to work on challenging products and
                grow professionally.
              </p>

            </div>

          </div>


          {/* SKILLS */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    Skills
                  </h5>

                  <p className="text-secondary small mb-0">
                    Skills recruiters can use to discover you
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


              <div className="d-flex flex-wrap gap-2">

                {skills.map((skill) => (

                  <span
                    key={skill}
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      backgroundColor: "#f8eef2",
                      color: "#7f1d3f",
                      fontWeight: "500",
                    }}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>


          {/* EXPERIENCE */}
          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h5 className="fw-bold mb-1">
                    Experience
                  </h5>

                  <p className="text-secondary small mb-0">
                    Your professional experience
                  </p>

                </div>

                <button
                  className="btn btn-sm"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  + Add
                </button>

              </div>


              <div className="d-flex">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                    fontWeight: "bold",
                  }}
                >
                  T
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Software Developer
                  </h6>

                  <p
                    className="mb-1 fw-semibold"
                    style={{
                      color: "#7f1d3f",
                    }}
                  >
                    Tech Solutions
                  </p>

                  <small className="text-secondary">
                    2023 - Present
                  </small>

                  <p className="text-secondary mt-2 mb-0">
                    Working on web applications using React,
                    Node.js and MySQL.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="col-lg-4">

          {/* PROFILE COMPLETION */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-3">
                Profile Completion
              </h5>

              <div className="d-flex justify-content-between mb-2">

                <small className="text-secondary">
                  Your profile
                </small>

                <small
                  className="fw-bold"
                  style={{
                    color: "#7f1d3f",
                  }}
                >
                  75%
                </small>

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
                    width: "75%",
                    background:
                      "linear-gradient(90deg, #7f1d3f, #9f3157)",
                  }}
                />
              </div>


              <p className="small text-secondary">
                Complete your profile to increase your visibility
                to recruiters.
              </p>


              <div className="mt-3">

                <div className="d-flex align-items-center mb-3">
                  <span
                    className="me-2"
                    style={{ color: "#7f1d3f" }}
                  >
                    ✓
                  </span>

                  <small>
                    Personal information
                  </small>
                </div>


                <div className="d-flex align-items-center mb-3">
                  <span
                    className="me-2"
                    style={{ color: "#7f1d3f" }}
                  >
                    ✓
                  </span>

                  <small>
                    Skills
                  </small>
                </div>


                <div className="d-flex align-items-center mb-3">
                  <span
                    className="me-2"
                    style={{ color: "#7f1d3f" }}
                  >
                    ✓
                  </span>

                  <small>
                    Experience
                  </small>
                </div>


                <div className="d-flex align-items-center text-secondary">
                  <span className="me-2">
                    ○
                  </span>

                  <small>
                    Resume
                  </small>
                </div>

              </div>

            </div>

          </div>


          {/* CONTACT INFORMATION */}
          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">
                Contact Information
              </h5>


              <div className="d-flex align-items-center mb-4">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  ✉
                </div>

                <div>

                  <small className="text-secondary d-block">
                    Email
                  </small>

                  <small className="fw-semibold">
                    {user.email}
                  </small>

                </div>

              </div>


              <div className="d-flex align-items-center">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  ☎
                </div>

                <div>

                  <small className="text-secondary d-block">
                    Phone
                  </small>

                  <small className="fw-semibold">
                    +91 {user.phone}
                  </small>

                </div>

              </div>

            </div>

          </div>


          {/* RESUME */}
          <div
            className="card border-0 rounded-4"
            style={{
              backgroundColor: "#faf5e8",
            }}
          >

            <div className="card-body p-4">

              <div className="d-flex">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#d6b36a",
                    color: "#3f1d2e",
                    fontSize: "20px",
                  }}
                >
                  📄
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Add your resume
                  </h6>

                  <p className="small text-secondary mb-3">
                    Upload your latest resume to improve your
                    chances of getting noticed.
                  </p>

                  <button
                    className="btn btn-sm fw-semibold"
                    style={{
                      backgroundColor: "#7f1d3f",
                      color: "#fff",
                    }}
                  >
                    Upload Resume
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

export default Profile;