import express from 'express';
import { addJobController, getAllJobController } from './job.controller.js';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { roleMiddleware } from '../../auth/roleMiddleware.js';
const jobRoute = express.Router();
jobRoute.post("/",isAuthenticated,roleMiddleware('ADMIN','RECRUITER'), addJobController);
jobRoute.get("/",isAuthenticated,roleMiddleware('ADMIN','RECRUITER','CANDIDATE'), getAllJobController);
export default jobRoute;