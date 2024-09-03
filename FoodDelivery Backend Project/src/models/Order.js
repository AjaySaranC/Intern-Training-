// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Restaurant = require('./Restaurant');

const Order = sequelize.define('Order', {

  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
    defaultValue: 'pending'
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    references: {
      model: Restaurant,
      key: 'id'
    },
    
  }
}, {
  tableName: 'orders',
  timestamps: true
});

Order.belongsTo(User);
Order.belongsTo(Restaurant);

module.exports = Order;