import { sequelize } from '../config/db.js';
import companyModel from './company.js';
import recruiterModel from './recruiter.js';
import userModel from './user.model.js'; 
import jobCategoryModel from './category.model.js';
import jobModel from './job.model.js';
import appliationModel from './application.model.js';

const User = userModel(sequelize);
const Company=companyModel(sequelize);
const Recruiter=recruiterModel(sequelize);
//recruiter and user 1:1
Recruiter.belongsTo(User,{ foreignKey: 'recruiter_id' });
User.hasOne(Recruiter,{ foreignKey: 'recruiter_id' });
//company and recruiter 1:M
Company.hasMany(Recruiter, { foreignKey: 'company_id' });
Recruiter.belongsTo(Company, { foreignKey: 'company_id' });
const JobCategory=jobCategoryModel(sequelize);
const Job=jobModel(sequelize);
const Application=appliationModel(sequelize);

//1:M
Job.hasMany(Application, { foreignKey: 'job_id' });
Application.belongsTo(Job, { foreignKey: 'job_id' });
//1:M
User.hasMany(Application, { foreignKey: 'candidate_id' });
Application.belongsTo(User, { foreignKey: 'candidate_id' });

JobCategory.hasMany(Job, {
  foreignKey: "category_id",
});

Company.hasMany(Job, {
  foreignKey: "company_id",
});

User.hasMany(Job, {
  foreignKey: "recruiter_id",
});

Job.belongsTo(JobCategory, {
  foreignKey: "category_id",
});

Job.belongsTo(Company, {
  foreignKey: "company_id",
});

Job.belongsTo(User, {
  foreignKey: "recruiter_id",
});

export 
{ 
    User,
    Company,
    Recruiter,
    JobCategory,
    Job,Application
 };