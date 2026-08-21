import api from "../api/axios";

export const getJobs = (limit,offset,filters,searchFilter) => {
  return api.get('/job',{
    params: {
    limit: limit,
    offset: offset,
    filters: JSON.stringify(filters),
    search:JSON.stringify(searchFilter)
    }
})
}
export const getJobDetails=(id)=>api.get(`job/${id}`);
export const getJobByRecruiter=()=>api.get('job/recruiter');