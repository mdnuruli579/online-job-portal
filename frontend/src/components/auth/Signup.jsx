import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CANDIDATE",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-10">
            <div className="signup-card row g-0">

              {/* Left Section */}
              <div className="col-lg-5 signup-left">
                <div className="left-content">
                  <div className="logo">
                    Job<span>Portal</span>
                  </div>

                  <h1>
                    Find your next
                    <br />
                    <span>opportunity.</span>
                  </h1>

                  <p>
                    Create your account and discover thousands of
                    opportunities from top companies.
                  </p>

                  <div className="features">
                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Find jobs matching your skills
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Apply with one click
                    </div>

                    <div>
                      <i className="bi bi-check-circle-fill"></i>
                      Track your applications
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-lg-7 signup-right">

                <div className="signup-form">

                  <div className="text-center mb-4">
                    <h2>Create Account</h2>
                    <p>
                      Already have an account?
                      <a href="/login"> Login</a>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label">
                        Full Name
                      </label>

                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your full name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label">
                        Email Address
                      </label>

                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="you@example.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Role */}
                    <div className="mb-3">
                      <label className="form-label">
                        Register As
                      </label>

                      <div className="row g-2">

                        <div className="col-6">
                          <input
                            type="radio"
                            className="btn-check"
                            name="role"
                            id="candidate"
                            value="CANDIDATE"
                            checked={formData.role === "CANDIDATE"}
                            onChange={handleChange}
                          />

                          <label
                            className="role-option"
                            htmlFor="candidate"
                          >
                            <i className="bi bi-person-workspace"></i>
                            <span>Candidate</span>
                          </label>
                        </div>

                        <div className="col-6">
                          <input
                            type="radio"
                            className="btn-check"
                            name="role"
                            id="recruiter"
                            value="RECRUITER"
                            checked={formData.role === "RECRUITER"}
                            onChange={handleChange}
                          />

                          <label
                            className="role-option"
                            htmlFor="recruiter"
                          >
                            <i className="bi bi-building"></i>
                            <span>Recruiter</span>
                          </label>
                        </div>

                      </div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label className="form-label">
                        Password
                      </label>

                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <i className="bi bi-lock"></i>
                        </span>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Create a password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                      <label className="form-label">
                        Confirm Password
                      </label>

                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <i className="bi bi-shield-lock"></i>
                        </span>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm your password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        required
                      />

                      <label
                        className="form-check-label"
                        htmlFor="terms"
                      >
                        I agree to the{" "}
                        <a href="#">Terms & Conditions</a>
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn signup-btn w-100"
                    >
                      Create Account
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </form>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;