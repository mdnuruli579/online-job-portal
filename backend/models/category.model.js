import { DataTypes } from "sequelize";

const jobCategoryModel = (sequelize) => {
  return sequelize.define(
    "JobCategory",
    {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      category_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "JobCategories",
          key: "category_id",
        },
      },
    },
  );
};

export default jobCategoryModel;