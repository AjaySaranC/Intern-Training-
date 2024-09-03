// models/Food.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Restaurant = require('./Restaurant'); // Import the Restaurant model

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    references: {
      model: Restaurant,
      key: 'id'
    },
    allowNull: false
  }
}, {
  tableName: 'foods',
  timestamps: false
});

module.exports = Food;
