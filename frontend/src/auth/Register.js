import React, { useState } from "react";
import { registerUser } from "../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData,setFormData]=useState({
    full_name:"",
    email:"",
    phone:"",
    user_type:"CANDIDATE",
    password:"",
    cnfPassword:""
  })
  const [error,setError]=useState({
    nameError:"",
    emailError:"",
    phoneError:"",
    passwordError:"",
    cnfPassError:""
  })
  const navigate=useNavigate();
  const validateform=()=>{
    setError({
      nameError:"",
      emailerror:"",
      phoneError:"",
      passwordError:"",
      cnfPassError:""
    })
    const formError={};
    if(!formData.full_name.trim()){
      formError.nameError="Name is required";
    }
    else if(formData.full_name.trim().length <3){
      formError.nameError="Name cannot be less than three character";
    }
    const mailPattern=/^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if(!formData.email.trim()){
      formError.emailError="Email is required";
    }
    else if(!mailPattern.test(formData.email.trim())){
      formError.emailError="Please enter valid email";
    }
    const phonePattern=/^[0-9]{10}$/;
    if(!formData.phone.trim()){
      formError.phoneError="Phone is required";
    }
    else if(!phonePattern.test(formData.phone.trim())){
      formError.phoneError="Please enter valid phone number";
    }
    if(!formData.password.trim()){
      formError.passwordError="Password is required";
    }
    if(formData.cnfPassword.trim()!==formData.password.trim()){
      formError.cnfPassError="Password does not matched";
    }
    setError(formError);
    return Object.keys(formError).length===0;

  }
  const handleOnChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData((prev)=>(
      {
        ...formData,
        [name]:value
      }
    ))
  }
  const resetForm=()=>{
    setFormData({
    full_name:"",
    email:"",
    phone:"",
    user_type:"CANDIDATE",
    password:"",
    cnfPassword:""
  })
  }
  const hadnleOnSubmit=async(e)=>{
    try {
      if(!validateform())return;
      const resp=await registerUser(formData);
      if(resp.data.statusCode===200){
        toast.success(resp.data.msg);
        navigate("/login")
      }else{
        toast.error(resp.data.msg);
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        background:
          "linear-gradient(135deg, #171717 0%, #292524 55%, #3f1d2e 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-lg-10 col-xl-9">

            <div className="card border-0 shadow-lg overflow-hidden rounded-4">
              <div className="row g-0">

                {/* ================= LEFT SECTION ================= */}
                <div
                  className="col-lg-5 text-white p-5 d-flex flex-column justify-content-between"
                  style={{
                    background:
                      "linear-gradient(160deg, #171717 0%, #4a1d2f 100%)",
                  }}
                >

                  <div>

                    {/* BRAND */}
                    <div className="mb-5">

                      <h3 className="fw-bold mb-1">
                        Job
                        <span style={{ color: "#d6b36a" }}>
                          Portal
                        </span>
                      </h3>

                      <small className="text-white-50">
                        Your career starts here
                      </small>

                    </div>


                    {/* HEADING */}
                    <h1 className="display-6 fw-bold mb-4">
                      Build your future.
                      <br />
                      Find your opportunity.
                    </h1>


                    <p className="text-white-50 fs-6 lh-lg">
                      Create your professional profile and discover
                      opportunities from companies looking for talented
                      people like you.
                    </p>


                    {/* BENEFITS */}
                    <div className="mt-5">

                      {/* BENEFIT 1 */}
                      <div className="d-flex align-items-center mb-4">

                        <div
                          className="rounded-3 d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "45px",
                            height: "45px",
                            background: "rgba(255,255,255,0.08)",
                            color: "#d6b36a",
                            fontSize: "20px",
                          }}
                        >
                          ✓
                        </div>

                        <div>

                          <h6 className="mb-1 fw-semibold">
                            Thousands of opportunities
                          </h6>

                          <small className="text-white-50">
                            Find jobs matching your skills
                          </small>

                        </div>

                      </div>


                      {/* BENEFIT 2 */}
                      <div className="d-flex align-items-center mb-4">

                        <div
                          className="rounded-3 d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "45px",
                            height: "45px",
                            background: "rgba(255,255,255,0.08)",
                            color: "#d6b36a",
                            fontSize: "20px",
                          }}
                        >
                          ✓
                        </div>

                        <div>

                          <h6 className="mb-1 fw-semibold">
                            Connect with top companies
                          </h6>

                          <small className="text-white-50">
                            Get noticed by recruiters
                          </small>

                        </div>

                      </div>


                      {/* BENEFIT 3 */}
                      <div className="d-flex align-items-center">

                        <div
                          className="rounded-3 d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "45px",
                            height: "45px",
                            background: "rgba(255,255,255,0.08)",
                            color: "#d6b36a",
                            fontSize: "20px",
                          }}
                        >
                          ✓
                        </div>

                        <div>

                          <h6 className="mb-1 fw-semibold">
                            Grow your career
                          </h6>

                          <small className="text-white-50">
                            Take the next step confidently
                          </small>

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* FOOTER TEXT */}
                  <div className="mt-5 pt-4">

                    <small className="text-white-50">
                      Trusted by candidates and recruiters
                    </small>

                  </div>

                </div>


                {/* ================= RIGHT SECTION ================= */}
                <div className="col-lg-7 bg-white p-4 p-md-5">

                  {/* HEADER */}
                  <div className="mb-4">

                    <span
                      className="badge rounded-pill px-3 py-2 mb-3"
                      style={{
                        backgroundColor: "#f8eef2",
                        color: "#7f1d3f",
                      }}
                    >
                      CREATE ACCOUNT
                    </span>

                    <h2 className="fw-bold text-dark mb-2">
                      Create your account
                    </h2>

                    <p className="text-secondary mb-0">
                      Join thousands of professionals finding their
                      dream careers.
                    </p>

                  </div>


                  {/* FORM */}
                  <div className="row g-3">
                    {/* Full NAME */}
                    <div className="col-md-12">

                      <label className="form-label fw-semibold text-dark">
                        Full Name <span className="text-danger">*</span>
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="Jhone Doe"
                        value={formData.full_name}
                        name="full_name"
                        onChange={handleOnChange}

                      />
                      {
                        error.nameError &&
                        <small className="text-danger">{error.nameError}</small>
                      }
                      

                    </div>


                    {/* EMAIL */}
                    <div className="col-12">

                      <label className="form-label fw-semibold text-dark">
                        Email Address<span className="text-danger">*</span>
                      </label>

                      <input
                        type="email"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="john@example.com"
                        value={formData.email}
                        name="email"
                        onChange={handleOnChange}
                      />
                      {
                        error.emailError &&
                        <small className="text-danger">{error.emailError}</small>
                      }

                    </div>


                    {/* PHONE */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold text-dark">
                        Phone Number<span className="text-danger">*</span>
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        name="phone"
                        onChange={handleOnChange}
                      />
                      {
                        error.phoneError &&
                        <small className="text-danger">{error.phoneError}</small>
                      }
                    </div>


                    {/* ACCOUNT TYPE */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold text-dark">
                        Account Type
                      </label>

                      <select className="form-select form-select-lg bg-light border-0"
                        value={formData.user_type}
                        name="user_type"
                        onChange={handleOnChange}
                      >
                        <option>Select account type</option>
                        <option value="CANDIDATE">Candidate</option>
                        <option value="RECRUITER">Recruiter</option>
                      </select>

                    </div>


                    {/* PASSWORD */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold text-dark">
                        Password<span className="text-danger">*</span>
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="••••••••"
                        value={formData.password}
                        name="password"
                        onChange={handleOnChange}
                      />
                      {
                        error.passwordError &&
                        <small className="text-danger">{error.passwordError}</small>
                      }
                    </div>


                    {/* CONFIRM PASSWORD */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold text-dark">
                        Confirm Password<span className="text-danger">*</span>
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg bg-light border-0"
                        placeholder="••••••••"
                        value={formData.cnfPassword}
                        name="cnfPassword"
                        onChange={handleOnChange}
                      />
                      {
                        error.cnfPassError &&
                        <small className="text-danger">{error.cnfPassError}</small>
                      }
                    </div>


                    {/* TERMS */}
                    <div className="col-12 mt-4">

                      <div className="form-check">

                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="terms"
                        />

                        <label
                          className="form-check-label text-secondary"
                          htmlFor="terms"
                        >
                          I agree to the{" "}

                          <span
                            className="fw-semibold"
                            style={{ color: "#7f1d3f" }}
                          >
                            Terms & Conditions
                          </span>

                          {" "}and{" "}

                          <span
                            className="fw-semibold"
                            style={{ color: "#7f1d3f" }}
                          >
                            Privacy Policy
                          </span>

                        </label>

                      </div>

                    </div>


                    {/* CREATE ACCOUNT */}
                    <div className="col-12 mt-3">

                      <button
                        type="button"
                        className="btn btn-lg w-100 text-white fw-semibold rounded-3 py-3"
                        onClick={hadnleOnSubmit}
                        style={{
                          background:
                            "linear-gradient(90deg, #7f1d3f, #9f3157)",
                          border: "none",
                        }}
                      >
                        Create Account
                      </button>

                    </div>

                  </div>


                  {/* LOGIN */}
                  <div className="text-center mt-4">

                    <span className="text-secondary">
                      Already have an account?{" "}
                    </span>

                    <a
                      href="/login"
                      className="text-decoration-none fw-bold"
                      style={{ color: "#7f1d3f" }}
                    >
                      Sign in
                    </a>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;