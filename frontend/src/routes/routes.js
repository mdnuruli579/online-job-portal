import Login from '../auth/Login';
import Register from '../auth/Register';
//candidate
import CandidateLayout from '../layout/CandidateLayout';
import CandidateDashboard from '../pages/candidate/CandidateDashboard';
import CandidateJobs from '../pages/candidate/CandidateJobs';
import Applications from '../pages/candidate/Applications';
import Profile from '../pages/candidate/Profile';
//recruiter
import RecruiterLayout from '../layout/RecruiterLayout';
import RecruiterDashboard from '../pages/recruiter/RecruiterDashboard';
import RecruiterJobs from '../pages/recruiter/RecruiterJobs';
import CreateJob from '../pages/recruiter/CreateJob';
import RecruiterApplications from '../pages/recruiter/RecruiterApplications';
import RecruiterCandidates from '../pages/recruiter/RecruiterCandidates';
import CompanyProfile from '../pages/recruiter/CompanyProfile';
import RecruiterSettings from '../pages/recruiter/RecruiterSettings';
//Admin
import AdminLayout from '../layout/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminUsers from '../pages/admin/AdminUsers';
import ProtectedRoute from './ProtectedRoute';
import Unauthorized from '../common/Unauthorized';
import JobDetails from '../pages/candidate/JobDetails';
export const routes = [
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