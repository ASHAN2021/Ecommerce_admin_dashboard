import { DataTypes } from 'sequelize';

const SettingModel = (sequelize) => sequelize.define('Setting', {
  key:   { type: DataTypes.STRING, allowNull: false, unique: true },
  value: { type: DataTypes.TEXT },
  description: { type: DataTypes.STRING },
});

export default SettingModel;