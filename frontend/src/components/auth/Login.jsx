import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API call here
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-10">
            <div className="login-card row g-0">

              {/* LEFT SIDE */}
              <div className="col-lg-5 login-left">

                <div className="login-left-content">

                  <div className="logo">
                    Job<span>Portal</span>
                  </div>

                  <h1>
                    Welcome
                    <br />
                    <span>back!</span>
                  </h1>

                  <p>
                    Login to continue your journey and discover
                    new career opportunities.
                  </p>

                  <div className="login-features">

                    <div>
                      <i className="bi bi-briefcase-fill"></i>
                      <span>Discover exciting jobs</span>
                    </div>

                    <div>
                      <i className="bi bi-send-fill"></i>
                      <span>Apply to your dream job</span>
                    </div>

                    <div>
                      <i className="bi bi-graph-up-arrow"></i>
                      <span>Track your applications</span>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-7 login-right">

                <div className="login-form">

                  <div className="text-center mb-4">

                    <div className="login-icon">
                      <i className="bi bi-person-fill"></i>
                    </div>

                    <h2>Welcome Back</h2>

                    <p>
                      Login to your JobPortal account
                    </p>

                  </div>

                  <form onSubmit={handleSubmit}>

                    {/* EMAIL */}

                    <div className="mb-3">

                      <label className="form-label">
                        Email Address
                      </label>

                      <div className="input-group login-input">

                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>

                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    </div>

                    {/* PASSWORD */}

                    <div className="mb-3">

                      <div className="d-flex justify-content-between">

                        <label className="form-label">
                          Password
                        </label>

                        <a
                          href="/forgot-password"
                          className="forgot-link"
                        >
                          Forgot Password?
                        </a>

                      </div>

                      <div className="input-group login-input">

                        <span className="input-group-text">
                          <i className="bi bi-lock"></i>
                        </span>

                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    </div>

                    {/* REMEMBER ME */}

                    <div className="form-check mb-4">

                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />

                      <label
                        className="form-check-label"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>

                    </div>

                    {/* LOGIN BUTTON */}

                    <button
                      type="submit"
                      className="btn login-btn w-100"
                    >
                      Login
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </form>

                  {/* DIVIDER */}

                  <div className="divider">
                    <span>OR</span>
                  </div>

                  {/* SOCIAL LOGIN */}

                  <button className="google-btn w-100">
                    <i className="bi bi-google"></i>
                    Continue with Google
                  </button>

                  {/* SIGNUP */}

                  <p className="signup-text text-center mt-4">
                    Don't have an account?
                    <a href="/signup"> Create Account</a>
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

export default Login;