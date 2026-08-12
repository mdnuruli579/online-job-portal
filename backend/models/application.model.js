import { DataTypes } from 'sequelize';
const appliationModel = (sequelize) => {
  return sequelize.define(
    'application',
    {
      application_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      applied_on: {
        type: DataTypes.DATE,
        default:DataTypes.NOW,
        allowNull:false
      },
      status: {
        type: DataTypes.STRING,
        allowNull:false
      }
    }
  );
}
export default appliationModel;