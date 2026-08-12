import { Outlet } from "react-router-dom";

function CandidateLayout() {
  return (
    <div>
      <CandidateNavbar />

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}