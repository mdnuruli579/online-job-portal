import {response} from '../../utils/response.js';
import {JobCategory} from '../../models/index.js';
export const addCategoryService=async(data)=>{
    try {
        await JobCategory.create(data);
        return response("Category Added",200);
    } catch (error) {
        return response(error.message,400);
    }
}
export const getAllCategoryService=async()=>{
    try {
       const data=await JobCategory.findAll();
       return response("category fetched",200,data); 
    } catch (error) {
       return response(error.message,400); 
    }
}