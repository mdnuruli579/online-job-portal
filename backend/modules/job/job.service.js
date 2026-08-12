import {response} from '../../utils/response.js';
import {Company, Job} from '../../models/index.js';
//add job by recruiter
export const addJobService=async(user_id,data)=>{
    try {
        const {company_id}=data;
        if(!company_id){
            return response("company is missing",400);
        }
        data.recruiter_id=user_id;
        await Job.create(data);
        return response("Job is published",200);
    } catch (error) {
        return response(error.message,400);
    }
}

//list all job
export const getAllJobService=async()=>{
    try {
        const data=await Job.findAll({
            include:{
                model:Company
            }

        });
        return data;
    } catch (error) {
        return response(error.message,400);
    }
}

//list job by recruiter_id

//list job by job_id