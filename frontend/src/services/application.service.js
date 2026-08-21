import api from "../api/axios";
export const applyjob=(job_id)=>api.post("/apply",{job_id});
export const getApplication=()=>api.get("/apply/user");