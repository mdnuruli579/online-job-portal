import { response } from '../../utils/response.js';
import { Op } from "sequelize";
import { Application,Company,Job } from '../../models/index.js';

export const applyService = async (job_id, candidate_id) => {
  try {
    const application = await Application.findOne({
      where: {
        [Op.and]: [{ job_id: job_id, candidate_id: candidate_id }]
      }
    });
    if (application) {
      return response("you have already applied for this position", 400);
    }
    await Application.create({ job_id, candidate_id });
    return response("Applied successfully", 200);
  } catch (error) {
    return response(error.message, 500);
  }
}
export const getAppliedJobService = async (candidate_id) => {
  try {
    const result = await Application.findAll({
      where: {
        candidate_id:candidate_id
      },
      include: { model: Job,
        include:[{model:Company}]
       }
    })
    return response("Fetched job list", 200, result);
  } catch (error) {
    return response(error.message, 500);
  }
}