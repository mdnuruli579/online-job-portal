import React from "react";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const users = [
    {
      user_id: 101,
      full_name: "Aman Kumar",
      email: "aman@example.com",
      password: "********",
      phone: 9876543211,
      user_type: "CANDIDATE",
      status: "ACTIVE",
    },
    {
      user_id: 102,
      full_name: "Priya Singh",
      email: "priya@example.com",
      password: "********",
      phone: 9876543212,
      user_type: "CANDIDATE",
      status: "ACTIVE",
    },
    {
      user_id: 103,
      full_name: "Rahul Sharma",
      email: "rahul@technova.com",
      password: "********",
      phone: 9876543213,
      user_type: "RECRUITER",
      status: "ACTIVE",
    },
    {
      user_id: 104,
      full_name: "Neha Gupta",
      email: "neha@example.com",
      password: "********",
      phone: 9876543214,
      user_type: "CANDIDATE",
      status: "NOT ACTIVE",
    },
    {
      user_id: 105,
      full_name: "Vikas Mehta",
      email: "vikas@codecraft.com",
      password: "********",
      phone: 9876543215,
      user_type: "RECRUITER",
      status: "ACTIVE",
    },
    {
      user_id: 106,
      full_name: "Anjali Sharma",
      email: "anjali@example.com",
      password: "********",
      phone: 9876543216,
      user_type: "CANDIDATE",
      status: "ACTIVE",
    },
    {
      user_id: 107,
      full_name: "Mohit Kumar",
      email: "mohit@example.com",
      password: "********",
      phone: 9876543217,
      user_type: "CANDIDATE",
      status: "NOT ACTIVE",
    },
    {
      user_id: 108,
      full_name: "Sneha Gupta",
      email: "sneha@digitalworks.com",
      password: "********",
      phone: 9876543218,
      user_type: "RECRUITER",
      status: "ACTIVE",
    },
  ];

  const totalUsers = users.length;

  const candidates = users.filter(
    (user) => user.user_type === "CANDIDATE"
  ).length;

  const recruiters = users.filter(
    (user) => user.user_type === "RECRUITER"
  ).length;

  const activeUsers = users.filter(
    (user) => user.status === "ACTIVE"
  ).length;

  const getTypeStyle = (type) => {
    if (type === "RECRUITER") {
      return {
        backgroundColor: "#faf5e8",
        color: "#8a681f",
      };
    }

    if (type === "ADMIN") {
      return {
        backgroundColor: "#f4f4f5",
        color: "#52525b",
      };
    }

    return {
      backgroundColor: "#f8eef2",
      color: "#7f1d3f",
    };
  };

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
              PLATFORM MANAGEMENT
            </p>

            <h2 className="fw-bold mb-1">
              Users
            </h2>

            <p className="text-secondary mb-0">
              Manage candidates, recruiters and user accounts.
            </p>

          </div>

          <button
            className="btn text-white px-4 rounded-3 fw-semibold"
            style={{
              background:
                "linear-gradient(90deg, #7f1d3f, #9f3157)",
            }}
          >
            + Add User
          </button>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}
      <div className="row g-3 mb-4">

        {/* TOTAL */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <div className="d-flex justify-content-between">

                <div>

                  <small className="text-secondary">
                    Total Users
                  </small>

                  <h2 className="fw-bold mt-2 mb-0">
                    {totalUsers}
                  </h2>

                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "46px",
                    height: "46px",
                    backgroundColor: "#f8eef2",
                    color: "#7f1d3f",
                  }}
                >
                  ◎
                </div>

              </div>

              <small className="text-secondary">
                Registered accounts
              </small>

            </div>

          </div>

        </div>


        {/* CANDIDATES */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Candidates
              </small>

              <h2
                className="fw-bold mt-2 mb-0"
                style={{
                  color: "#7f1d3f",
                }}
              >
                {candidates}
              </h2>

              <small className="text-secondary">
                Job seekers
              </small>

            </div>

          </div>

        </div>


        {/* RECRUITERS */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Recruiters
              </small>

              <h2
                className="fw-bold mt-2 mb-0"
                style={{
                  color: "#8a681f",
                }}
              >
                {recruiters}
              </h2>

              <small className="text-secondary">
                Hiring professionals
              </small>

            </div>

          </div>

        </div>


        {/* ACTIVE */}
        <div className="col-6 col-xl-3">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <small className="text-secondary">
                Active Users
              </small>

              <h2 className="fw-bold mt-2 mb-0">
                {activeUsers}
              </h2>

              <small className="text-secondary">
                Currently active
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FILTER ================= */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-3">

          <div className="row g-2">

            {/* SEARCH */}
            <div className="col-lg-5">

              <div className="input-group">

                <span className="input-group-text bg-light border-0">
                  ⌕
                </span>

                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Search by name, email or phone..."
                />

              </div>

            </div>


            {/* USER TYPE */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option value="">
                  All Types
                </option>

                <option value="CANDIDATE">
                  Candidate
                </option>

                <option value="RECRUITER">
                  Recruiter
                </option>

                <option value="ADMIN">
                  Admin
                </option>

              </select>

            </div>


            {/* STATUS */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option value="">
                  All Status
                </option>

                <option value="ACTIVE">
                  Active
                </option>

                <option value="NOT ACTIVE">
                  Not Active
                </option>

              </select>

            </div>


            {/* SORT */}
            <div className="col-lg-2">

              <select className="form-select bg-light border-0">

                <option>
                  Newest
                </option>

                <option>
                  Oldest
                </option>

                <option>
                  Name A-Z
                </option>

              </select>

            </div>


            {/* FILTER */}
            <div className="col-lg-1">

              <button
                className="btn w-100 text-white"
                style={{
                  backgroundColor: "#7f1d3f",
                }}
              >
                Filter
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ================= USERS TABLE ================= */}
      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-body p-0">

          {/* TABLE HEADER */}
          <div className="d-flex justify-content-between align-items-center p-4 border-bottom">

            <div>

              <h5 className="fw-bold mb-1">
                All Users
              </h5>

              <small className="text-secondary">
                Manage registered accounts
              </small>

            </div>

            <span className="text-secondary small">
              {totalUsers} users
            </span>

          </div>


          {/* TABLE */}
          <div className="table-responsive">

            <table className="table align-middle mb-0">

              <thead>

                <tr>

                  <th className="border-0 px-4 py-3">
                    User
                  </th>

                  <th className="border-0 py-3">
                    Phone
                  </th>

                  <th className="border-0 py-3">
                    Type
                  </th>

                  <th className="border-0 py-3">
                    Status
                  </th>

                  <th className="border-0 py-3 text-end px-4">
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {users.map((user) => (

                  <tr key={user.user_id}>

                    {/* USER */}
                    <td className="px-4">

                      <div className="d-flex align-items-center">

                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                          style={{
                            width: "45px",
                            height: "45px",
                            background:
                              "linear-gradient(135deg, #171717, #7f1d3f)",
                            color: "#fff",
                            fontWeight: "700",
                          }}
                        >
                          {user.full_name.charAt(0)}
                        </div>


                        <div>

                          <h6 className="fw-semibold mb-1">
                            {user.full_name}
                          </h6>

                          <small className="text-secondary">
                            {user.email}
                          </small>

                        </div>

                      </div>

                    </td>


                    {/* PHONE */}
                    <td>

                      <span className="text-secondary">
                        +91 {user.phone}
                      </span>

                    </td>


                    {/* TYPE */}
                    <td>

                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={getTypeStyle(
                          user.user_type
                        )}
                      >
                        {user.user_type}
                      </span>

                    </td>


                    {/* STATUS */}
                    <td>

                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={getStatusStyle(
                          user.status
                        )}
                      >
                        {user.status === "ACTIVE"
                          ? "Active"
                          : "Not Active"}
                      </span>

                    </td>


                    {/* ACTIONS */}
                    <td className="text-end px-4">

                      <div className="dropdown">

                        <button
                          className="btn btn-light btn-sm"
                          data-bs-toggle="dropdown"
                        >
                          •••
                        </button>


                        <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                          <li>

                            <Link
                              to={`/admin/users/${user.user_id}`}
                              className="dropdown-item"
                            >
                              View User
                            </Link>

                          </li>


                          <li>

                            <button className="dropdown-item">
                              Edit User
                            </button>

                          </li>


                          <li>

                            <button className="dropdown-item">
                              {user.status === "ACTIVE"
                                ? "Deactivate User"
                                : "Activate User"}
                            </button>

                          </li>


                          <li>

                            <hr className="dropdown-divider" />

                          </li>


                          <li>

                            <button className="dropdown-item text-danger">
                              Delete User
                            </button>

                          </li>

                        </ul>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* ================= PAGINATION ================= */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 p-4 border-top">

            <small className="text-secondary">
              Showing 1–8 of 1,248 users
            </small>


            <nav>

              <ul className="pagination mb-0">

                <li className="page-item disabled">

                  <button className="page-link">
                    Previous
                  </button>

                </li>


                <li className="page-item active">

                  <button
                    className="page-link"
                    style={{
                      backgroundColor: "#7f1d3f",
                      borderColor: "#7f1d3f",
                    }}
                  >
                    1
                  </button>

                </li>


                <li className="page-item">

                  <button className="page-link">
                    2
                  </button>

                </li>


                <li className="page-item">

                  <button className="page-link">
                    3
                  </button>

                </li>


                <li className="page-item">

                  <button className="page-link">
                    ...
                  </button>

                </li>


                <li className="page-item">

                  <button className="page-link">
                    157
                  </button>

                </li>


                <li className="page-item">

                  <button className="page-link">
                    Next
                  </button>

                </li>

              </ul>

            </nav>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminUsers;