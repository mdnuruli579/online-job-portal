import { register, login, verifyEmail } from './user.service.js';
export const registerUser = async(req, res) => {
  const reqdata = req.body;
  const data = await register(reqdata);
  return res.json(data);
}
export const loginUser = async (req, res) => {
  const reqdata = req.body;
  const data = await login(reqdata);
  return res.json(data);
}
export const verifyEmailUser=async(req,res)=>{
  const {token}=req.query;
  const data=await verifyEmail(token);
  return res.send(data.msg);
}
