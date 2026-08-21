import express from 'express';
import { upload } from '../../utils/common.js';
import {isAuthenticated} from '../../auth/isAuthenticated.js';
import { roleMiddleware } from '../../middleware/roleMiddleware.js';
import { addCompanyController, getCompanyByUserIdController } from './company.controller.js';
const companyRoute = express.Router();
companyRoute.post("/",isAuthenticated,roleMiddleware('ADMIN','RECRUITER'), upload.single("logo"),addCompanyController)
companyRoute.get(
  "/",
  isAuthenticated,
  roleMiddleware("ADMIN", "RECRUITER"),
  getCompanyByUserIdController
);
export default companyRoute;