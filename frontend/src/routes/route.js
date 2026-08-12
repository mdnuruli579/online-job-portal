export const routes = [
  {
    element: <ProtectedRoute allowedRoles={["CANDIDATE"]} />,
    children: [
      {
        path: "/candidate",
        element: <CandidateLayout />,
        children: [
          {
            path: "dashboard",
            element: <CandidateDashboard />
          },
          {
            path: "jobs",
            element: <CandidateJobs />
          },
          {
            path: "applications",
            element: <Applications />
          }
        ]
      }
    ]
  },

  {
    element: <ProtectedRoute allowedRoles={["RECRUITER"]} />,
    children: [
      {
        path: "/recruiter",
        element: <RecruiterLayout />,
        children: [
          {
            path: "dashboard",
            element: <RecruiterDashboard />
          },
          {
            path: "jobs",
            element: <RecruiterJobs />
          }
        ]
      }
    ]
  },

  {
    element: <ProtectedRoute allowedRoles={["ADMIN"]} />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />
          },
          {
            path: "users",
            element: <ManageUsers />
          }
        ]
      }
    ]
  }
];