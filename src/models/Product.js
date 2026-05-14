import { DataTypes } from 'sequelize';

const ProductModel = (sequelize) => sequelize.define('Product', {
  name:       { type: DataTypes.STRING, allowNull: false },
  price:      { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  stock:      { type: DataTypes.INTEGER, defaultValue: 0 },
  categoryId: { type: DataTypes.INTEGER },
});

export default ProductModel;