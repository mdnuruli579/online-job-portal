import React from 'react'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import CandidateJobs from './components/candidate/CandidateJobs';
import CreateJob from './components/recruiter/CreateJob';
import { BrowserRouter, useRoutes } from "react-router-dom";

function AppRoutes() {
  return useRoutes(routes);
}
function App() {
  return (
    <BrowserRouter>
      <CreateJob/>
    </BrowserRouter>
  );
}

// const App = () => {
//   return (
//     <div>
//       {/* <Signup/> */}
//       {/* <Login/> */}
//       <CandidateJobs/>
//     </div>
//   )
// }

export default App