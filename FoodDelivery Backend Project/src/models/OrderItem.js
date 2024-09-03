// models/OrderItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');
const Food = require('./Food');

const OrderItem = sequelize.define('OrderItem', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id'
    },
  },
  foodId: {
    type: DataTypes.INTEGER,
    references: {
      model: Food,
      key: 'id'
    },
  }
}, {
  tableName: 'order_items',
  timestamps: false
});

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Food);


module.exports = OrderItem;