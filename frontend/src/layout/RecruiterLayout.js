import React from "react";
import { Link, Outlet } from "react-router-dom";
import RecruiterNavbar from "../component/recruiter/RecruiterNavbar";
import RecruiterSidebar from "../component/recruiter/RecruiterSidebar";

const RecruiterLayout = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f7f5f3",
      }}
    >

      {/* ================= NAVBAR ================= */}
      <RecruiterNavbar/>
      {/* ================= MAIN ================= */}
      <div className="container-fluid">

        <div className="row">


          {/* ================= SIDEBAR ================= */}
          <RecruiterSidebar/>

          {/* ================= CONTENT ================= */}
          <main className="col-lg-10 px-4 px-lg-5 py-4">

            <Outlet />

          </main>

        </div>

      </div>

    </div>
  );
};

export default RecruiterLayout;