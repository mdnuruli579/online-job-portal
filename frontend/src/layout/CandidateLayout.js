import React from "react";
import { Outlet, Link } from "react-router-dom";
import CandidateNavbar from "../component/candidate/CandidateNavbar";
import CandidateSidebar from "../component/candidate/CandidateSidebar";

const CandidateLayout = () => {
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f7f5f3",
      }}
    >

      {/* ================= NAVBAR ================= */}
      <CandidateNavbar/>


      {/* ================= MAIN ================= */}
      <div className="container-fluid">

        <div className="row">

          {/* ================= SIDEBAR ================= */}
          <CandidateSidebar/>


          {/* ================= CONTENT ================= */}
          <main className="col-lg-10 px-4 px-lg-5 py-4">

            <Outlet />

          </main>

        </div>

      </div>

    </div>
  );
};

export default CandidateLayout;