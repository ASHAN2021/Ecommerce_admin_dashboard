import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const UserModel = (sequelize) => {
  const User = sequelize.define('User', {
    name:     { type: DataTypes.STRING, allowNull: false },
    email:    { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role:     { type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user' },
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

  return User;
};

export default UserModel;