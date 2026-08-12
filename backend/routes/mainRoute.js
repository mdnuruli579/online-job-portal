import express from 'express';
import userRoute from '../modules/user/user.route.js';
import companyRoute from '../modules/company/company.route.js'
import categoryRoute from '../modules/category/category.route.js';
import jobRoute from '../modules/job/job.route.js';
const router = express.Router();
router.use("/user", userRoute);
router.use("/company",companyRoute)
router.use("/category",categoryRoute)
router.use("/job",jobRoute)
export default router;