import { lazy } from "react";
import Login from '../auth/Login';
import Register from '../auth/Register';
import Home from '../pages/Home'
import ProtectedRoute from './ProtectedRoute';
import Unauthorized from '../common/Unauthorized';
// Candidate
const CandidateLayout = lazy(
  () => import("../layout/CandidateLayout")
);

const CandidateDashboard = lazy(
  () => import("../pages/candidate/CandidateDashboard")
);

const CandidateJobs = lazy(
  () => import("../pages/candidate/CandidateJobs")
);

const Applications = lazy(
  () => import("../pages/candidate/Applications")
);

const Profile = lazy(
  () => import("../pages/candidate/Profile")
);

const JobDetails = lazy(
  () => import("../pages/candidate/JobDetails")
);


// Recruiter
const RecruiterLayout = lazy(
  () => import("../layout/RecruiterLayout")
);

const RecruiterDashboard = lazy(
  () => import("../pages/recruiter/RecruiterDashboard")
);

const RecruiterJobs = lazy(
  () => import("../pages/recruiter/RecruiterJobs")
);

const CreateJob = lazy(
  () => import("../pages/recruiter/CreateJob")
);

const RecruiterApplications = lazy(
  () => import("../pages/recruiter/RecruiterApplications")
);

const RecruiterCandidates = lazy(
  () => import("../pages/recruiter/RecruiterCandidates")
);

const CompanyProfile = lazy(
  () => import("../pages/recruiter/CompanyProfile")
);

const RecruiterSettings = lazy(
  () => import("../pages/recruiter/RecruiterSettings")
);


// Admin
const AdminLayout = lazy(
  () => import("../layout/AdminLayout")
);

const AdminDashboard = lazy(
  () => import("../pages/admin/AdminDashboard")
);

const AdminUsers = lazy(
  () => import("../pages/admin/AdminUsers")
);

export const routes = [
    { path: '/', element: <Home/>, children: [] },
    { path: '/register', element: <Register />, children: [] },
    { path: '/login', element: <Login />, children: [] },
    //Candidate
    {
        element: <ProtectedRoute allowedRoles={["CANDIDATE"]} />,
        children: [
            {
                path: '/candidate',
                element: <CandidateLayout />,
                children: [
                    { index: true, element: <CandidateDashboard /> },
                    { path: 'jobs', element: <CandidateJobs /> },
                    { path: 'jobs/:id', element: <JobDetails /> },
                    { path: 'applications', element: <Applications /> },
                    { path: 'profile', element: <Profile /> }
                ]
            }
        ]
    },
    //Recruiter
    {
        element: <ProtectedRoute allowedRoles={['RECRUITER']} />,
        children: [
            {
                path: '/recruiter',
                element: <RecruiterLayout />,
                children: [
                    { index: true, element: <RecruiterDashboard /> },
                    { path: 'jobs', element: <RecruiterJobs /> },
                    { path: 'jobs/create', element: <CreateJob /> },
                    { path: 'applications', element: <RecruiterApplications /> },
                    { path: 'candidates', element: <RecruiterCandidates /> },
                    { path: 'company', element: <CompanyProfile /> },
                    { path: 'settings', element: <RecruiterSettings /> }
                ]
            }
        ]
    },
    //Admin
    {
        element: <ProtectedRoute allowedRoles={['ADMIN']} />,
        children: [
            {
                path: '/admin',
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <AdminDashboard />,
                    },
                    {
                        path: "users",
                        element: <AdminUsers />,
                    },
                    /*{
                        path: "recruiters",
                        element: <AdminRecruiters />,
                    },
                    {
                        path: "companies",
                        element: <AdminCompanies />,
                    },
                    {
                        path: "jobs",
                        element: <AdminJobs />,
                    },
                    {
                        path: "jobs/pending",
                        element: <PendingJobs />,
                    },
                    {
                        path: "applications",
                        element: <AdminApplications />,
                    },
                    {
                        path: "categories",
                        element: <JobCategories />,
                    },
                    {
                        path: "settings",
                        element: <AdminSettings />,
                    }*/
                ]
            }
        ]
    },
    {
        path:'/unauthorized',element:<Unauthorized/>
    }
]