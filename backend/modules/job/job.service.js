import { response } from '../../utils/response.js';
import { Job,Company, JobCategory} from '../../models/index.js';
import { getWereFilter } from '../../utils/common.js';
import { sequelize } from '../../config/db.js';
export const createJobService = async (user_id, data) => {
  try {
    const { company_id } = data;
    if (!company_id) {
      return response("Company is missing", 400);
    }
    data.recruiter_id = user_id;
    await Job.create(data);
    return response("Job is created", 200);
  } catch (error) {
    return response(error.message, 400);
  }
}
export const getAllJobService = async (limit,offset,filters) => {
  try {
    const where=getWereFilter(filters);
    const { count, rows } = await Job.findAndCountAll({
      where,
      include: [{ model: Company, required: true }, { model: JobCategory, required: true }],
      offset: Number(offset),
      limit: Number(limit),
    });
    return response("fetched job list", 200, { total:count,jobs:rows});
  } catch (error) {
    return response(error.message, 400);
  }
}

export const getJobByRectruiterService = async (id,limit,offset) => {
  try {
    const { count, rows } = await Job.findAndCountAll({
      where: {
        recruiter_id:Number(id)
      },
      include: [{ model: Company, required: true }, { model: JobCategory, required: true }],
      offset: Number(offset),
      limit: Number(limit),
    });
    return response("fetched job list", 200, { total: count, jobs: rows });
  } catch (error) {
    return response(error.message, 400);
  }
}
export const getjobByIdService = async (id) => {
  try {
    const job = await Job.findOne({
      where: {
        job_id: Number(id)
      },
      include: [{ model: Company, required: true }, { model: JobCategory, required: true }],
    });
    return response("fetched job list", 200, job);
  } catch (error) {
    return response(error.message, 400);
  }
}
export const updateJobService = async (id, data) => {
  try {
    const job = await Job.findOne({
      where: {
        job_id: Number(id)
      }
    });
    if (!job) {
      return response("Job not found", 400);
    }
    await Job.update(data, { where: { job_id: Number(id) } })
    return response("job updated", 200);
  } catch (error) {
    return response(error.message, 400);
  }
}
export const deleteJobService = async (id) => {
  try {
    const job = await Job.findOne({
      where: {
        job_id: id
      }
    });
    if (!job) {
      return response("Job not found", 400);
    }
    await job.destroy()
    return response("job deleted", 200);
  } catch (error) {
    return response(error.message, 400);
  }
}