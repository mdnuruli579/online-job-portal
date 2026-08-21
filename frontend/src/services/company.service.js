import api from "../api/axios";

export const getCompanyByRecruiter = () => {
  return api.get("/company");
};