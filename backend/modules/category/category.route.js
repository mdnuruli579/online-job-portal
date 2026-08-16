import express from 'express';
import { addCategoryController, getAllCategoryController } from './category.controller.js';
import {isAuthenticated} from '../../auth/isAuthenticated.js';
import { roleMiddleware } from '../../middleware/roleMiddleware.js';
const categoryRoute = express.Router();
categoryRoute.post("/",isAuthenticated,roleMiddleware('ADMIN'),addCategoryController);
categoryRoute.get("/",isAuthenticated, getAllCategoryController);
export default categoryRoute;