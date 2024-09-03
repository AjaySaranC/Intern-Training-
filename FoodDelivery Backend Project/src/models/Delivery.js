const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Delivery = sequelize.define('Delivery', {
  totalprice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
    defaultValue: 'pending'
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  useraddress: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  userphone: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  restaurantname: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  restaurantaddress: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  foodname:{
    type: DataTypes.STRING,
    allowNull: false 
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'delivery',
  timestamps: true 
});


Delivery.associate = (models) => {
  Delivery.belongsTo(models.User, { foreignKey: 'UserId', onDelete: 'SET NULL' });
  Delivery.belongsTo(models.Restaurant, { foreignKey: 'RestaurantId', onDelete: 'SET NULL' });
  Delivery.belongsTo(models.Food, { foreignKey: 'FoodId', onDelete: 'SET NULL' });
};

module.exports = Delivery;
