import { response } from "../utils/response.js";

export const roleMiddleware=(...roles)=>{
    return (req,resp,next)=>{
        const role=req.user?.role;
        if(!roles.includes(role)){
            return resp.status(403).json(response("Access Denied",403));
        }
        next();
    }
}