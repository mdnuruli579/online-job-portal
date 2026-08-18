import { DataTypes } from 'sequelize';
const applicationModel = (sequelize) => {
  return sequelize.define(
    'Application',
    {
      application_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      applied_on: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('APPLIED','UNDER_REVIEW','SHORTLISTED','SELECTED','NOT_SELECTED'),
        allowNull: false,
        defaultValue: "APPLIED"
      }
    }
  );
}
export default applicationModel;