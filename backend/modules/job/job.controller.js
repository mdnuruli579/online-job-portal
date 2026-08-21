import {
  createJobService,
  getAllJobService,
  getJobByRectruiterService,
  getjobByIdService,
  updateJobService,
  deleteJobService
} from './job.service.js';

export const createJobController = async (req, resp) => {
  const { user_id } = req.user;
  const data = req.body;
  const result = await createJobService(user_id, data);
  return resp.json(result);
}
export const getAllJobController = async (req, resp) => {
  const { limit=5, offset=0,filters,search } = req.query;
  const parsedFilters = filters
      ? JSON.parse(filters)
      : [];
  const id=req?.user?.id;
  const parsedSearch=search ? JSON.parse(search):[];
  const result = await getAllJobService(limit, offset,parsedFilters,id,parsedSearch);
  return resp.json(result);
}
export const getJobByRectruiterController = async (req, resp) => {
  const { limit = 5, offset = 0 } = req.query;
  const recruiter_id = req?.user?.id;
  const result = await getJobByRectruiterService(recruiter_id,limit, offset);
  return resp.json(result);
}
export const getjobByIdController = async (req, resp) => {
  const { job_id } = req.params;
  const result = await getjobByIdService(job_id);
  return resp.json(result);
}
export const updateJobController = async (req, resp) => {
  const { job_id } = req.params;
  const data = req.body;
  const result = await updateJobService(job_id,data);
  return resp.json(result);
}
export const deleteJobController = async (req, resp) => {
  const { job_id } = req.params;
  const result = await deleteJobService(job_id);
  return resp.json(result);
}