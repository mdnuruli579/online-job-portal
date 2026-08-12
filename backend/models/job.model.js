import { DataTypes } from "sequelize";

const jobModel = (sequelize) => {
  return sequelize.define(
    "job",
    {
      job_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      // =========================
      // JOB BASIC INFORMATION
      // =========================

      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      job_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      requirements: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      skills: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      // =========================
      // JOB CLASSIFICATION
      // =========================

      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      // =========================
      // COMPANY / RECRUITER
      // =========================

      company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      recruiter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      // =========================
      // LOCATION
      // =========================

      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      work_mode: {
        type: DataTypes.ENUM(
          "ONSITE",
          "REMOTE",
          "HYBRID"
        ),
        allowNull: false,
      },

      // =========================
      // EMPLOYMENT
      // =========================

      employment_type: {
        type: DataTypes.ENUM(
          "FULL_TIME",
          "PART_TIME",
          "CONTRACT",
          "INTERNSHIP"
        ),
        allowNull: false,
      },

      // =========================
      // EXPERIENCE
      // =========================

      experience_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      experience_max: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      // =========================
      // SALARY
      // =========================

      salary_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      salary_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      salary_currency: {
        type: DataTypes.STRING(10),
        defaultValue: "INR",
        allowNull: false,
      },

      // =========================
      // VACANCY
      // =========================

      vacancies: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },

      // =========================
      // DATES
      // =========================

      posted_on: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },

      application_deadline: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },

      // =========================
      // JOB STATUS
      // =========================

      status: {
        type: DataTypes.ENUM(
          "DRAFT",
          "ACTIVE",
          "CLOSED",
          "EXPIRED"
        ),
        defaultValue: "DRAFT",
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

export default jobModel;