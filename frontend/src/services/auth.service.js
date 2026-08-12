import api from "../api/axios";

export const registerUser = (userData) => {
  return api.post("/user/register", userData);
};

export const loginUser = (loginData) => {
  return api.post("/user/login", loginData);
};