import { DataTypes } from 'sequelize';

const CategoryModel = (sequelize) => sequelize.define('Category', {
  name:        { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
});

export default CategoryModel;