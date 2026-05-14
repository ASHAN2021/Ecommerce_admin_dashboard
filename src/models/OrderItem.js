import { DataTypes } from 'sequelize';

const OrderItemModel = (sequelize) => sequelize.define('OrderItem', {
  orderId:   { type: DataTypes.INTEGER },
  productId: { type: DataTypes.INTEGER },
  quantity:  { type: DataTypes.INTEGER, allowNull: false },
  price:     { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

export default OrderItemModel;