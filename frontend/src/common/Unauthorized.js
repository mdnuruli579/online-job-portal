import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <div className="mb-4">
          <i
            className="bi bi-shield-lock-fill text-danger"
            style={{ fontSize: "80px" }}
          ></i>
        </div>

        <h1 className="display-4 fw-bold text-danger">403</h1>

        <h2 className="mb-3">Access Denied</h2>

        <p className="text-muted mb-4">
          You do not have permission to access this page.
          <br />
          Please contact the administrator if you think this is a mistake.
        </p>

        <Link to="/" className="btn btn-primary me-2">
          Go to Home
        </Link>

        <button
          className="btn btn-outline-secondary"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;