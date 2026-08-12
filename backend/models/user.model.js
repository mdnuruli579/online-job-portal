import { DataTypes } from 'sequelize';
const userModel = (sequelize) => {
  return sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail:true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull:false
      },
      user_type: {
        type: DataTypes.ENUM('CANDIDATE', 'ADMIN', 'RECRUITER'),
        defaultValue:'CANDIDATE'
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"NOT ACTIVE"
      }
    }
  );
}
export default userModel;