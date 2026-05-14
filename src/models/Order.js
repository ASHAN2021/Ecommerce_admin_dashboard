import { DataTypes } from 'sequelize';

const OrderModel = (sequelize) => sequelize.define('Order', {
  userId:      { type: DataTypes.INTEGER },
  totalAmount: { type: DataTypes.DECIMAL(10, 2) },
  status:      { type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'), defaultValue: 'pending' },
});

export default OrderModel;