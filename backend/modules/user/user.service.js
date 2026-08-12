import { response } from '../../utils/response.js';
import { User } from '../../models/index.js';
import bcrypt from 'bcrypt';
import { EMAIL_USER } from '../../config/env.js';
import { generateToken, sendUserMail, transporter, verifyToken } from '../../utils/common.js';
import { responseVerifiedCode } from '../../utils/constant.js';
//register method
export const register = async(data) => {
  const { full_name, email, password, phone, user_type } = data;
  if (!full_name || !email || !password || !phone) {
    return response("Feild can not be empty", 400);
  }
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return response("user already exsist", 400);
    }
    const hashPass = await bcrypt.hash(password, 10);
    const res = await User.create({
      full_name,email,password:hashPass,phone,user_type
    });
    if (res?.user_type?.toUpperCase() === "CANDIDATE" || res?.user_type?.toUpperCase()==="RECRUITER") {
      // send verification mail to user
      const token=await generateToken({id:res.user_id,email:res.email,role:res.user_type})
      await sendUserMail(email,token);
      return response("Email has been sent for verification", 200);
    }
    else if(res?.user_type?.toUpperCase()==="ADMIN"){
      res.status="ACTIVE";
      res.save();
      return response("User register successfully", 200,res);
    }
    await res.destory();
    return response("Invalid request", 400);
  } catch (error) {
    return response(error.message, 500);
  }

}
//Login Method
export const login = async (data) => {
  const { email, password } = data;
  if (!email || !password) {
    return response("Feild can not be empty", 400);
  }
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return response("User not registered", 400);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return response("Invalid Credential", 400);
  }
  if (user?.status?.toUpperCase() === "BLOCKED") {
    return response("user is blocked", 400);
  }
  if (user?.status?.toUpperCase() === "NOT ACTIVE") {
    return response("Please verify your account", 400);
  }
  // User.findOne(where: {
  //   {email:email},
  //   attributes: { exclude: ['password'] },
  // });
  const token=await generateToken({id:user.user_id,email:user.email,role:user.user_type})
  return response("Login success", 200,
    {
      id:user.user_id,
      full_name: user.full_name,
      email: user.email,
      user_type: user.user_type,
      phone:user.phone,
      status:user.stauts,
      token
    });
}

export const verifyEmail=async(token)=>{
  try {
    const decode=await verifyToken(token);
    if(!decode){
      return response("Invalid Token",401);
    }
    await User.update(
      {status:"ACTIVE"},
      {
        where:{
          user_id:decode.id
        }
      }
    )
    return response(responseVerifiedCode,200);
  } catch (error) {
    return response(error.message,400);
  }
}
