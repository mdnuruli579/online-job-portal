import api from "../api/axios";
export const applyjob=(job_id)=>api.post("/apply",{job_id});