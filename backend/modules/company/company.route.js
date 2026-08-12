import express from 'express';
import { upload } from '../../utils/common.js';
import {isAuthenticated} from '../../auth/isAuthenticated.js';
import {roleMiddleware} from '../../auth/roleMiddleware.js';
import { addCompanyController } from './company.controller.js';
const companyRoute = express.Router();
companyRoute.post("/",isAuthenticated,roleMiddleware('ADMIN','RECRUITER'), upload.single("logo"),addCompanyController)
export default companyRoute;