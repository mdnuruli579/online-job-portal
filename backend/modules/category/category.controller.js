import { addCategoryService, getAllCategoryService } from "./category.service.js"

export const addCategoryController=async(req,resp)=>{
    const result=await addCategoryService(req.body);
    return resp.json(result);
}
export const getAllCategoryController=async(req,resp)=>{
    const result=await getAllCategoryService();
    return resp.json(result);
}