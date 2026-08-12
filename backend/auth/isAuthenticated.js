import { SECREATE_KEY } from '../config/env.js';
import {response} from '../utils/response.js';
import jwt from 'jsonwebtoken';
export const isAuthenticated=(req,resp,next)=>{
    try {
        const token=req?.headers?.authorisation?.split(' ')[1] || null;
        if(token){
            const decode=jwt.verify(token,SECREATE_KEY);
            req.user=decode;
            next();
            return;
        }
        return resp.status(400).json(response("Token is missing",400));
    } catch (error) {
       return  resp.status(401).json(response("Invalid or Expire token",401));
    }
}