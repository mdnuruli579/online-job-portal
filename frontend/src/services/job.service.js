import api from "../api/axios";

export const getJobs = (limit,offset,filters) => {
  return api.get('/job',{
    params: {
    limit: limit,
    offset: offset,
    filters: JSON.stringify(filters)
    }
})
}