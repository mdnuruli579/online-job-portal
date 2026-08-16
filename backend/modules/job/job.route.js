import express from 'express';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { roleMiddleware } from '../../middleware/roleMiddleware.js';
import {
  createJobController,
  getAllJobController,
  getJobByRectruiterController,
  getjobByIdController,
  updateJobController,
  deleteJobController
} from './job.controller.js';
const jobRoute = express.Router();
jobRoute.post("/", isAuthenticated,
  roleMiddleware('RECRUITER'),
  createJobController);
jobRoute.get('/',
  isAuthenticated,
  roleMiddleware('ADMIN', 'RECRUITER', 'CANDIDATE'),
  getAllJobController);
jobRoute.get('/recruiter', isAuthenticated, roleMiddleware('RECRUITER'), getJobByRectruiterController);
jobRoute.get('/:job_id', isAuthenticated, roleMiddleware('ADMIN', 'RECRUITER', 'CANDIDATE'), getjobByIdController);
jobRoute.patch('/:job_id', isAuthenticated, roleMiddleware('ADMIN', 'RECRUITER'), updateJobController);
jobRoute.delete('/:job_id', isAuthenticated, roleMiddleware('ADMIN', 'RECRUITER'), deleteJobController);

export default jobRoute;