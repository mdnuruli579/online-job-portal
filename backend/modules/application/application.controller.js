import {
  applyService ,
  getAppliedJobService
} from './application.service.js';
export const applyController = async (req, resp) => {
  const { job_id } = req.body;
  const candidate_id = req.user?.id;
  const result = await applyService(job_id, candidate_id);
  return resp.json(result);
}
export const getAppliedJobController = async (req, resp) => {
  const candidate_id = req.user?.id;
  const result = await getAppliedJobService(candidate_id);
  return resp.json(result);
}