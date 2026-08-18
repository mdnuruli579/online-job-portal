import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token
api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    // Don't send token for login/register
    const publicRoutes = [
      "/user/login",
      "/user/register",
    ];

    const isPublicRoute = publicRoutes.includes(config.url);

    if (token && !isPublicRoute) {
      config.headers.authorisation = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// GLOBAL RESPONSE ERROR HANDLER
// api.interceptors.response.use(
//   (response) => {

//     const statusCode = response.data?.statusCode;

//     // Only 200 and 201 are considered successful
//     if (statusCode === 200 || statusCode === 201) {
//       return response;
//     }

//     // Any other custom status code
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     window.location.href = "/login";

//     return Promise.reject(response);
//   },

//   (error) => {
//     // Actual HTTP error such as 400, 401, 500, 502
//     console.error("HTTP Error:", error);

//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     window.location.href = "/login";

//     return Promise.reject(error);
//   }
// );
export default api;