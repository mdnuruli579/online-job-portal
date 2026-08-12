import express from 'express';
import { registerUser, loginUser, verifyEmailUser } from './user.controller.js';
const userRoute = express.Router();
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/verify-email", verifyEmailUser);
export default userRoute;