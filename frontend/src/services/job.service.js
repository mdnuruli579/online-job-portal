import api from "../api/axios";

export const getJobs = () => {
  return api.get("/job");
};