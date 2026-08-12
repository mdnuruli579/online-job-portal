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

export default api;