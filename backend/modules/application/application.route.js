import express from 'express';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { roleMiddleware } from '../../middleware/roleMiddleware.js';
import {
  applyController,
  getAppliedJobController
} from './application.controller.js';
const applyRoute = express.Router();
applyRoute.post("/", isAuthenticated, roleMiddleware('CANDIDATE'), applyController);
applyRoute.get('/user', isAuthenticated, roleMiddleware('CANDIDATE'), getAppliedJobController);
export default applyRoute;