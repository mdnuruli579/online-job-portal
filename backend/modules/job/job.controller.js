import { addJobService, getAllJobService } from "./job.service.js";

export const addJobController=async(req,resp)=>{
    const user_id=req?.user?.id;
    const data=req.body;
    const res=await addJobService(user_id,data);
    return resp.json(res);
}
export const getAllJobController=async(req,resp)=>{
    const data=await getAllJobService();
    return resp.json(data);
}